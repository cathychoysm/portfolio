import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, Stack } from "@chakra-ui/react";

export default function SocialMedia() {
    return (
        <Stack
            style={{ zIndex: 1000}}
            direction={{base: "row", md: "column"}}
            alignItems="center"
            position="fixed"
            bottom="clamp(10px, 5vh, 50px)"
            right="clamp(15px, 10vw, 50px)"
            gap="15px">
            <Link href="https://linkedin.com/in/cathy-choy" isExternal _hover={{ transform: "translateY(-20px)" }}>
                <FontAwesomeIcon
                    icon={ faLinkedin }
                    style={{
                        color: "#2C202C",
                        fontSize: "clamp(22px, 5vw, 45px)"
                        }}/>
            </Link>
            <Link href="https://github.com/cathychoysm" isExternal _hover={{ transform: "translateY(-20px)" }}>
                <FontAwesomeIcon
                    icon={ faGithub }
                    style={{
                        color: "#2C202C",
                        fontSize: "clamp(22px, 5vw, 45px)"
                        }}/>
            </Link>
            <Link href="mailto:cathychoy0614@gmail.com" _hover={{ transform: "translateY(-20px)" }}>
                <FontAwesomeIcon
                    icon={ faEnvelope }
                    style={{
                        color: "#2C202C",
                        fontSize: "clamp(22px, 5vw, 45px)"
                        }}/>
            </Link>
        </Stack>
    );
};