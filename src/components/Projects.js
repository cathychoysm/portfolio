import { Center, HStack, VStack } from "@chakra-ui/react";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <VStack
      id="projects"
      bg="linear-gradient(
                to bottom right,
                #FFE5E5,
                #E0AED0,
                #AC87C5,
                #756AB6)"
      minHeight="95vh"
      padding="3vh"
      gap="3vh"
    >
      <Center
        bg="linear-gradient(to bottom right, #A985A9, #5B445B)"
        shadow="inset 1px 1px 3px white, 5px 5px 5px #866986"
        width="clamp(100px, 70%, 800px)"
        height="5vh"
        borderRadius={{ base: "10px", md: "15px" }}
        fontFamily="heading"
        fontSize="clamp(18px, 2.5vw, 28px)"
        color="white"
      >
        Projects
      </Center>
      <HStack gap="30px" wrap="wrap" alignItems="center" justifyContent="start">
        <ProjectCards />
      </HStack>
    </VStack>
  );
}
