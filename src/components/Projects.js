import {
	Center,
	Grid,
	Text,
	VStack,
} from "@chakra-ui/react";
import ProjectCards from "./ProjectCards";
import { projectUrls } from "../data/ProjectsData";
import { useEffect, useState } from "react";

export default function Projects() {
	const [ projectData, setProjectData ] = useState([]);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		const fetchData = () => {
			const data = [];
				projectUrls.map(async(url) => {
					try {
						// fetch website html
						const web = await fetch(url);
						const html = await web.text();
						const parser = new DOMParser();
						const parsedHtml = parser.parseFromString(html, "text/html");
						const title = parsedHtml.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
						const description = parsedHtml.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
						const image = parsedHtml.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
						// fetch data.json
						const webData = await fetch(`${url}/data.json`);
						const webDataJson = await webData.json();
						const repoUrl = webDataJson.repoUrl;
						const techTags = webDataJson.techTags;
						// set fetched data
						data.push({
							url,
							title,
							description,
							image,
							repoUrl,
							techTags
						});
						setProjectData(data);
					} catch (err) {
						setError(err);
					}
				});
		}

		fetchData();
	},[]);

	const ErrorMessage = () => {
		return (
				<Text
					textAlign="center" fontWeight="600"
					color="white" bgColor="purple.200"
					padding="10px" marginTop="200px" borderRadius="10px">
						[Error: Failed to fetch projects. { error }]
				</Text>
		)
	}
	return (
		<VStack
            bg="linear-gradient(
                to bottom right,
                #FFE5E5,
                #E0AED0,
                #AC87C5,
                #756AB6)"
            minHeight="95vh"
            padding="3vh"
            gap="3vh">
                <Center
                    bg="linear-gradient(to bottom right, #A985A9, #5B445B)" shadow="inset 1px 1px 3px white, 5px 5px 5px #866986"
                    width="clamp(100px, 70%, 800px)" height="5vh"
                    borderRadius={{ base: "10px", md: "15px" }}
                    fontFamily="heading" fontSize="clamp(18px, 2.5vw, 28px)" color="white"
                    >
                        Projects
                </Center>
				{
					projectData.length > 0
						? <Grid
							templateColumns={{ base: "repeat(2, minmax(30px,20vh))", md: "repeat(4, minmax(30px,20vh))" }}
							gap="30px"
							alignItems="center" justifyItems="center">
								<ProjectCards projectData={ projectData }/>
						  </Grid>
						: <ErrorMessage/>
				}
        </VStack>
	)
}