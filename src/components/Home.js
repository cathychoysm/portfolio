import {
  Box,
  Card,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import CartoonGirl from "../images/cartoon_girl.png";
import { useState } from "react";

export default function Home(props) {
  // Background Animation
  const movingColour = keyframes`
        0% { background-position: 0% 2%; }
        50% { background-position: 100% 99%; }
        100% { background-position: 0% 2%; }
    `;
  const bgAnimation = `${movingColour} infinite 7s ease`;

  // Toggle Menu Animation
  const menu = keyframes`
        0% { transform: translateY(50px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0); }
    `;
  const menuOut = `${menu} 1 0.5s ease`;

  const [showMenu, setShowMenu] = useState("hidden");
  const [showClickMe, setShowClickMe] = useState("visible");
  const [showMenuAnimation, setShowMenuAnimation] = useState(undefined);

  const clickCard = () => {
    showMenu === "hidden" ? setShowMenu("visible") : setShowMenu("hidden");
    showMenuAnimation === undefined
      ? setShowMenuAnimation(menuOut)
      : setShowMenuAnimation(undefined);
    showClickMe === "hidden"
      ? setShowClickMe("visible")
      : setShowClickMe("hidden");
  };

  const navList = props.navItems.map((navItem) => {
    return (
      <a href={`/#${navItem.id}`} key={navItem.name}>
        <Box
          bg="radial-gradient(
                        circle at 25% 25%,
                        #FFFFFF 3%,
                        #EAF5FC 8%,
                        #C2D8FE 60%,
                        #EAF5FC 100%
                    )"
          boxShadow="
                        inset 0 0 20px #FFF,
                        2px 2px 20px #FFF;
                        "
          borderRadius="full"
          width="clamp(50px, 9vw, 100px)"
          height="clamp(50px, 9vw, 100px)"
          display="flex"
          alignItems="center"
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Text
            width="100%"
            fontSize="clamp(10px, 1.5vw, 16px)"
            textAlign="center"
            color="purple.400"
          >
            {navItem.name}
          </Text>
        </Box>
      </a>
    );
  });

  return (
    <Grid
      id="home"
      templateAreas={`
                "popup"
                "card"
            `}
      alignItems="center"
      alignContent="center"
      justifyItems="center"
      gap="20px"
      bg="linear-gradient(
                to bottom right,
                #FFE5E5,
                #E0AED0,
                #AC87C5,
                #756AB6)"
      bgSize="150% 150%"
      minHeight="95vh"
      animation={bgAnimation}
    >
      <HStack
        gridArea={"popup"}
        width="clamp(320px, 70%, 800px)"
        justifyContent="space-between"
        visibility={showMenu}
        animation={showMenuAnimation}
      >
        {navList}
      </HStack>
      <Text
        gridArea={"popup"}
        alignSelf="flex-end"
        color="purple.400"
        fontSize="clamp(10px, 1.5vw, 25px)"
        textShadow="2px 2px 3px #A985A9"
        visibility={showClickMe}
      >
        Click me to start exploring!
      </Text>
      <Card
        gridArea={"card"}
        direction="row"
        alignItems="center"
        gap="5%"
        width="clamp(320px, 70%, 800px)"
        borderRadius="30px"
        padding="4%"
        boxShadow="10px 10px #866986"
        _active={{
          transform: "translate(10px, 10px)",
          transition: "0.1s",
          "box-shadow": "3px 3px #866986",
        }}
        onClick={clickCard}
      >
        <Image
          src={CartoonGirl}
          alt="Profile Pic"
          borderRadius="full"
          objectFit="cover"
          boxSize="40%"
        />
        <VStack paddingLeft="5%" gap="1.5vw" alignItems="flex-start">
          <Heading
            fontFamily="heading"
            fontWeight="700"
            fontSize="clamp(21px, 4vw, 40px)"
            color="purple.400"
            textShadow="2px 2px #EDE4F3"
          >
            Hi! I'm Cathy.
          </Heading>
          <Text
            paddingTop="calc(4vh - 30px)"
            fontSize="clamp(12px, 2vw, 20px)"
            color="purple.400"
          >
            Front-End Developer
          </Text>
        </VStack>
      </Card>
    </Grid>
  );
}
