import {
    technologies,
    employmentHistory,
    education,
    certificates
} from "../data/ResumeData";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    Grid,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
    const technologiesItems = technologies.map(technology => {
        return (
            <ListItem key={ technology.name } fontSize="clamp(12px, 1.5vw, 20px)">
                <HStack>
                    <Center width="clamp(15px, 0.1vw, 20px)" height="clamp(15px, 0.1vw, 20px)" paddingRight="10px">
                        <Image src={ technology.logo } maxWidth="20px" maxHeight="20px"/>
                    </Center>
                    <Text>{ technology.name }</Text>
                </HStack>
            </ListItem>
        )
    });

    const employmentItems = employmentHistory.map(employment => {
        return (
            <ListItem key={ `${employment.company} - ${employment.position}`}>
                <Grid
                    templateColumns="auto 2fr auto"
                    templateAreas={`
                        "logo company period"
                        "logo position ."
                        "logo location ."
                    `}
                    justifyItems="flex-start"
                    columnGap="clamp(10px, 1.5vw, 20px)">
                        <Image
                            gridArea={"logo"}
                            alignSelf="flex-start"
                            src={ employment.logo }
                            maxWidth="30px"
                            borderRadius="full"/>
                        <Text
                            gridArea={"company"}
                            fontWeight={600}
                            fontSize="clamp(13px, 1.6vw, 20px)">
                                { employment.company }
                        </Text>
                        <Text
                            justifySelf="flex-end"
                            gridArea={"period"}
                            fontSize="clamp(11px, 1.3vw, 18px)">
                                { employment.from } - { employment.to }
                        </Text>
                        <Text
                            gridArea={"position"}
                            fontSize="clamp(13px, 1.6vw, 20px)"
                            paddingY="10px">
                                { employment.position }
                        </Text>
                        <Text
                            gridArea={"location"}
                            fontSize="clamp(11px, 1.3vw, 18px)"
                            fontStyle="italic">
                                <FontAwesomeIcon icon={ faLocationDot } style={{ "padding-right": "5px"}}/>
                                { employment.location }
                        </Text>
                </Grid>
            </ListItem>
        )
    })

    const certItems = certificates.map(cert => {
        return (
            <ListItem key={ cert.certificate } fontSize="clamp(12px, 1.5vw, 20px)">
                <Text fontWeight={600}>{ cert.certificate }</Text>
                <Text fontStyle="italic">{ cert.issuedBy }</Text>
                <Button
                    as="a" href={ cert.credential } target="_blank" rel="noopener noreferrer"
                    colorScheme="blackAlpha"
                    borderRadius="full" height="100%" paddingX="7px"
                    fontSize="80%">
                    See Credential<FontAwesomeIcon icon={ faArrowUpRightFromSquare } style={{ "padding-left": "5px"}}/>
                </Button>
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
            minHeight="95vh" height="100%">
            <Grid
                templateColumns={{ md: "1fr 2fr" }}
                templateRows={{ md: "auto auto 1fr" }}
                templateAreas={{
                    base:`
                        "header"
                        "technologies"
                        "employment-education"
                        "certificates"
                    `,
                    md:`
                        "header header"
                        "technologies employment-education"
                        "certificates employment-education"
                    `}}
                alignItems="flex-start"
                justifyContent="center"
                padding="3vh" maxWidth="1500px"
                gap="3vh">
                    <Center
                        gridArea={"header"} justifySelf="center"
                        bg="linear-gradient(to bottom right, #A985A9, #5B445B)" shadow="inset 1px 1px 3px white, 5px 5px 5px #866986"
                        width="clamp(100px, 70%, 800px)" height="5vh" borderRadius={{ base: "10px", md: "15px" }}
                        fontFamily="heading" fontSize="clamp(18px, 2.5vw, 28px)" color="white">
                            Resume
                    </Center>
                    <Card gridArea={"technologies"} alignSelf="flex-start" bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986">
                        <CardHeader>
                            <Heading fontSize="clamp(15px, 2vw, 23px)">Technologies</Heading>
                        </CardHeader>
                        <CardBody>
                            <List
                                display= "grid"
                                gridTemplateColumns={{ base: "1fr 1fr", md: "1fr" }}
                                alignItems="center"
                                rowGap="8px">
                                    { technologiesItems }
                            </List>
                        </CardBody>
                    </Card>
                    <VStack gridArea={"employment-education"} gap="3vh">
                        <Card alignSelf="flex-start" bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986" width="100%">
                            <CardHeader>
                                <Heading fontSize="clamp(15px, 2vw, 23px)">Employment History</Heading>
                            </CardHeader>
                            <CardBody>
                                <List spacing="50px">
                                    { employmentItems }
                                </List>
                            </CardBody>
                        </Card>
                        <Card alignSelf="flex-start" bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986" width="100%">
                            <CardHeader>
                                <Heading fontSize="clamp(15px, 2vw, 23px)">Education</Heading>
                            </CardHeader>
                            <CardBody >
                                <Text
                                    fontSize="clamp(12px, 1.5vw, 20px)"
                                    fontWeight={600}>
                                        { education.subject }
                                </Text>
                                <Text
                                    fontSize="clamp(12px, 1.5vw, 20px)"
                                    fontStyle="italic"
                                    marginY="10px">
                                        { education.school }
                                </Text>
                                <Text
                                    fontSize="clamp(12px, 1.5vw, 20px)"
                                    whiteSpace="break-spaces">
                                        { education.remarks }
                                </Text>
                            </CardBody>
                        </Card>
                    </VStack>
                    <Card gridArea={"certificates"} alignSelf="flex-start" bgColor="purple.100" shadow="inset 1px 1px 5px white, 5px 5px 5px #866986">
                        <CardHeader>
                            <Heading fontSize="clamp(15px, 2vw, 23px)">Certificates</Heading>
                        </CardHeader>
                        <CardBody>
                            <List spacing="2vh">
                                { certItems }
                            </List>
                        </CardBody>
                    </Card>
            </Grid>
        </VStack>
    )
}