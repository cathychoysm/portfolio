import {
	Badge,
	Button,
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Link,
	Text,
	Wrap
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightColors } from "../function/LightColorList";
import FallbackImg from "../images/fallback_image.png";

export default function ProjectCards(props) {
	const techColorMap = new Map();
	let colorIndex = 0;
	if (props.projectData) {
		for (let i = 0; i < props.projectData.length; i++) {
			const techTags = props.projectData[i].techTags;
			if (techTags) {
				for (let j = 0; j < techTags.length; j++) {
					if (!techColorMap.get(techTags[j].toUpperCase())) {
						techColorMap.set(techTags[j].toUpperCase(), lightColors[colorIndex]);
						colorIndex= colorIndex + 1;
					}
				}
			}
		}
	}

	const cards = props.projectData.map(data => {
		return (
			<Card
				key={ data.title }
				borderRadius="10px" boxShadow="2px 2px 5px #838283"
				height="100%"
				_hover={{ transform: "translate(0,-10px)", boxShadow: "5px 5px 5px #838283"}}>
					<Image
						src={ data.image } fallbackSrc={ FallbackImg } alt={ data.title }
						fit="cover"
						width="100%" height="clamp(100px, 12vh, 300px)" borderTopRadius="10px"/>
					<CardBody>
						<Heading fontWeight="700" fontSize="clamp(15px, 2vw, 20px)" marginBottom="20px">{ data.title }</Heading>
						<Wrap>
							{data.techTags.map(tag => {
								return (
									<Badge
										key={ tag }
										bgColor={techColorMap.get(tag.toUpperCase())}
										fontSize="clamp(10px, 1vw, 13px)"
										borderRadius="full" paddingX="8px" paddingY="1px">
											{ tag }
									</Badge>
								);
							})}
						</Wrap>
						<Text fontSize="clamp(12px, 1.5vw, 16px)" marginY="20px">{ data.description }</Text>
						<HStack justifyContent="end">
							<Button
								borderRadius="full" paddingX="10px" size="sm"
								bgColor="purple.100" color="purple.400">
									<Link href={ data.url } isExternal _hover={{ textDecoration: "none" }} fontSize="clamp(12px, 1.5vw, 16px)">
										<FontAwesomeIcon icon={ faArrowUpRightFromSquare }/>
									</Link>
							</Button>
							<Button
								borderRadius="full" paddingX="10px" size="sm"
								bgColor="purple.100" color="purple.400">
									<Link href={ data.repoUrl } isExternal _hover={{ textDecoration: "none" }} fontSize="clamp(15px, 2vw, 20px)">
										<FontAwesomeIcon icon={ faGithub }/>
									</Link>
							</Button>
						</HStack>
					</CardBody>
			</Card>
		);
	});
	return cards;
}