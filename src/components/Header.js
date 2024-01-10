import { Link } from "react-router-dom";
import {
    Grid,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react";
import Logo from "../images/logo_cathychoy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Header(props) {
    const [ scrollTop, setScrollTop ] = useState(0);
    const translateHeader = useRef("translateY(0)");

    useEffect(
        () => {
            const handleScroll = (e) => {
                if (e.target.documentElement.scrollTop > scrollTop) {
                    translateHeader.current = "translateY(-5vh)";
                } else {
                    translateHeader.current = "translateY(0)";
                }
                setScrollTop(e.target.documentElement.scrollTop);
            }

            window.addEventListener("scroll", handleScroll);
            return(() => {
                window.removeEventListener("scroll", handleScroll);
            });
        },
    );

    const navListWithClass = props.navItems.map(navItem => {
        return (
            <Link to={ navItem.path } className="Nav-Items">
                { navItem.name }
            </Link>
        );
    });

    const navListWithoutClass = props.navItems.map(navItem => {
        return (
            <MenuItem
                as={ Link }
                to={ navItem.path }
                key={ navItem.path }
                paddingY="0.8vh"
                borderBottom="1px solid #EDE4F3"
                _last={{ border: "none"}}
                _hover={{ color: "purple.100", bg: "purple.200", fontWeight: "600" }}>
                    { navItem.name }
            </MenuItem>
        );
    });

    return (
        <Grid
            templateColumns="100vw"
            templateAreas={ `"box"` }
            alignItems="center"
            bgColor="purple.300"
            height="max(40px, 5vh)"
            position="sticky"
            top="0px"
            transform={translateHeader.current}
            transitionProperty="transform"
            transitionDuration="0.2s"
            transitionTimingFunction="ease-in-out"
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
            <Menu autoSelect={false}>
                <MenuButton
                    as={ IconButton }
                    aria-label="Menu"
                    gridArea={ "box" }
                    justifySelf="flex-end"
                    marginX="max(15px, 2vw)"
                    display={{ md: "none" }}
                    bg="transparent"
                    _hover={{ bg: "transparent"}}
                    _active={{ bg: "transparent"}}
                    icon={ <FontAwesomeIcon
                        icon={ faBars }
                        style={{ color: "white", width: "100%" }}
                        size="2xl"
                        alt="Menu Icon"
                        marginx="max(15px, 2vw)"
                        display={{ md: "none" }}
                        /> }
                    />
                <MenuList
                    bg="purple.200"
                    color="purple.300"
                    fontSize="max(10px, 2.5vw)"
                    padding="5px"
                    display={{ md: "none" }}
                    >
                        { navListWithoutClass }
                </MenuList>
            </Menu>
        </Grid>
    );
};