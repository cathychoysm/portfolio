import ProfilePic from "../../images/profile_pic.jpg"
import { aboutParagraph } from "../../data/AboutParagraph.js";
import { Center, Image, Text, VStack } from "@chakra-ui/react";

export default function AboutMe() {

    return (
        <VStack
            bg="linear-gradient(
                to bottom right,
                #FFE5E5,
                #E0AED0,
                #AC87C5,
                #756AB6)"
            minHeight="95vh"
            height="100%"
            padding="3vh"
            gap="3vh">
                <Center
                    bg="linear-gradient(to bottom right, #A985A9, #493849)" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986"
                    width="clamp(100px, 70%, 800px)" height="5vh"
                    borderRadius="15px"
                    fontFamily="heading" fontSize="clamp(18px, 2.5vw, 28px)" color="white"
                    >
                        About Me
                </Center>
                <Image src={ProfilePic} width="clamp(15px, 35%, 450px)" borderRadius="full" border="8px dotted #EDE4F3" shadow="5px 5px 5px #866986"/>
                <Text
                    bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986"
                    width="clamp(100px, 80%, 900px)"
                    padding="50px" borderRadius="15px"
                    whiteSpace="break-spaces"
                    fontSize="clamp(13px, 2vw, 20px)">{ aboutParagraph }</Text>
        </VStack>
    )
}