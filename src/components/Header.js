import { Link } from "react-router-dom";
import { Divider, HStack, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import Logo from "../images/cathychoy_logo.svg";
import MenuIcon from "../images/menu_icon.svg";
import { useState } from "react";

export default function Header(props) {

    const navListWithClass = props.navItems.map(navItem => {
        return (
            <Link to={navItem.path} className="Nav-Items">
                {navItem.name}
            </Link>
        )
    });

    const navListWithoutClass = props.navItems.map(navItem => {
        return (
            <>
                <ListItem key={navItem.path} padding="5px">
                    <Link to={navItem.path}>{navItem.name}</Link>
                </ListItem>
                <Divider color="purple.100"/>
            </>
        )
    });

    const [showMenu, setShowMenu] = useState("hidden");

    const toggleMenu = () => {
        showMenu === "hidden"? setShowMenu("visible") : setShowMenu("hidden")
    }

    return (
        <>
            <HStack
                bgColor="purple.300"
                color="white"
                height="max(40px, 5vh)"
                alignItems="center"
                justifyContent="center"
                gap="30px">
                    <Link to="/">
                        <Image
                        src={Logo}
                        alt="Logo"
                        height="5vh"
                        position="relative"
                        top="-0.3vh"/>
                    </Link>
                    {navListWithClass}
            </HStack>
            <Image
                src={MenuIcon}
                alt="Menu Icon"
                position="absolute"
                top="1vh"
                right="1vh"
                height="3.5vh"
                width="3.5vh"
                display={{ base: "initial", md: "none" }}
                onClick={toggleMenu}/>
            <UnorderedList
                position="absolute"
                right="0px"
                width="150px"
                margin="1px"
                spacing="5px"
                styleType="none"
                textAlign="center"
                fontSize="max(10px, 3vw)"
                bgColor="purple.300"
                color="purple.100"
                display={{ base: "initial", md: "none" }}
                visibility={showMenu}>
                    {navListWithoutClass}
            </UnorderedList>
        </>
    )
}