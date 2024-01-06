import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    Fade,
    Grid,
    HStack,
    Image,
    ListItem,
    Stack,
    UnorderedList,
    useDisclosure } from "@chakra-ui/react";
import Logo from "../images/cathychoy_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
    const { isOpen, onToggle } = useDisclosure();

    const navListWithClass = props.navItems.map(navItem => {
        return (
            <Link to={ navItem.path } className="Nav-Items">
                { navItem.name }
            </Link>
        );
    });

    const navListWithoutClass = props.navItems.map(navItem => {
        return (
            <ListItem key={ navItem.path } paddingY="0.8vh" borderBottom="1px solid #EDE4F3" _last={{ border: "none"}}>
                <Link to={ navItem.path } onClick={ onToggle }>{ navItem.name }</Link>
            </ListItem>
        );
    });

    return (
        <Grid
            templateColumns="100vw"
            templateAreas={ `"box"` }
            alignItems="center"
            bgColor="purple.300"
            height="max(40px, 5vh)"
            >
            <HStack
                gridArea={ "box" }
                color="white"
                alignItems="center"
                justifyContent="center"
                gap="30px">
                    <Link to="/">
                        <Image
                        src={ Logo }
                        alt="Logo"
                        minHeight="35px"
                        height="5vh"
                        position="relative"
                        top="-0.3vh"/>
                    </Link>
                    { navListWithClass }
            </HStack>
            <Button
                gridArea={ "box" }
                justifySelf="flex-end"
                marginX="max(15px, 2vw)"
                display={{ md: "none" }}
                onClick={ onToggle }>
                    <FontAwesomeIcon
                        icon={ faBars }
                        style={{ color: "white", width: "100%", }}
                        size="2xl"
                        alt="Menu Icon"
                        />
            </Button>
            <Fade in={ isOpen }>
                <Stack
                    bg="purple.200"
                    display={{ md: "none" }}
                    >
                <UnorderedList
                    styleType="none"
                    textAlign="center"
                    fontSize="max(10px, 3vw)"
                    color="purple.100"
                    marginX="20px"
                    padding="8px"
                    >
                        { navListWithoutClass }
                </UnorderedList>
                </Stack>
            </Fade>
        </Grid>
    );
};