import ProfilePic from "../images/profile_pic.jpg"
import { aboutParagraph, languages } from "../data/AboutMeData.js";
import {
    Card,
    CardBody,
    CardHeader,
    Center,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    VStack
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default function AboutMe() {
    const languageItems = languages.map(language => {
        return (
            <ListItem key={ language }>
                <ListIcon><FontAwesomeIcon icon={ faComment }/></ListIcon>
                { language }
            </ListItem>
        )
    })

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
                        About Me
                </Center>
                <Image src={ProfilePic} width="clamp(15px, 35%, 450px)" borderRadius="full" border="8px dotted #EDE4F3" shadow="5px 5px 5px #866986"/>
                <Card
                    bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986"
                    width="clamp(100px, 80%, 900px)" padding="1vw" borderRadius="15px">
                        <CardHeader>
                            <Heading fontSize="clamp(15px, 2vw, 23px)">More about me...</Heading>
                        </CardHeader>
                        <CardBody fontSize="clamp(13px, 1.8vw, 20px)" whiteSpace="break-spaces">
                            { aboutParagraph }
                        </CardBody>
                </Card>
                <Card
                    bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986"
                    width="clamp(100px, 80%, 900px)" padding="1vw" borderRadius="15px">
                        <CardHeader>
                            <Heading fontSize="clamp(15px, 2vw, 23px)">Languages I speak...</Heading>
                        </CardHeader>
                        <CardBody fontSize="clamp(13px, 1.8vw, 20px)">
                            <List
                                display="grid"
                                gridTemplateColumns="repeat(2, 1fr)"
                                gap="clamp(10px, 1vw, 30px)"
                                justifyContent="space-between">
                                    { languageItems }
                            </List>
                        </CardBody>
                </Card>
        </VStack>
    )
}