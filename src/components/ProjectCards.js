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
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightColors } from "../function/LightColorList";
import FallbackImg from "../images/fallback_image.png";
import { projectData } from "../data/ProjectsData";

export default function ProjectCards() {
  const techColorMap = new Map();
  let colorIndex = 0;
  if (projectData) {
    for (let i = 0; i < projectData.length; i++) {
      const techTags = projectData[i].techTags;
      if (techTags) {
        for (let j = 0; j < techTags.length; j++) {
          if (!techColorMap.get(techTags[j].toUpperCase())) {
            techColorMap.set(
              techTags[j].toUpperCase(),
              lightColors[colorIndex]
            );
            colorIndex = colorIndex + 1;
          }
        }
      }
    }
  }

  const cards = projectData.map((data) => {
    return (
      <Link href={data.url} _hover={{ textDecoration: "none" }}>
        <Card
          key={data.title}
          borderRadius="10px"
          boxShadow="2px 2px 5px #838283"
          width="350px"
          height="clamp(450px, 50vh, 570px)"
          _hover={{
            transform: "translate(0,-10px)",
            boxShadow: "5px 5px 5px #838283",
          }}
        >
          <Image
            src={data.image}
            fallbackSrc={FallbackImg}
            alt={data.title}
            fit="cover"
            width="100%"
            height="clamp(150px, 14vh, 300px)"
            borderTopRadius="10px"
          />
          <CardBody>
            <VStack height="100%" justifyContent="space-between">
              <VStack justifyContent="start" alignItems="start">
                <Heading
                  fontWeight="700"
                  fontSize="clamp(15px, 2vw, 20px)"
                  marginBottom="20px"
                >
                  {data.title}
                </Heading>
                <Wrap>
                  {data.techTags.map((tag) => {
                    return (
                      <Badge
                        key={tag}
                        bgColor={techColorMap.get(tag.toUpperCase())}
                        fontSize="clamp(10px, 1vw, 13px)"
                        borderRadius="full"
                        paddingX="8px"
                        paddingY="1px"
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </Wrap>
                <Text fontSize="clamp(12px, 1.5vw, 16px)" marginY="20px">
                  {data.description}
                </Text>
              </VStack>
              <HStack alignSelf="end" justifyContent="end">
                <Link
                  href={data.url}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    borderRadius="full"
                    paddingX="10px"
                    size="sm"
                    bgColor="purple.100"
                    color="purple.400"
                    fontSize="clamp(12px, 1.5vw, 16px)"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                </Link>
                <Link
                  href={data.repoUrl}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    borderRadius="full"
                    paddingX="10px"
                    size="sm"
                    bgColor="purple.100"
                    color="purple.400"
                    fontSize="clamp(15px, 2vw, 20px)"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Link>
    );
  });
  return cards;
}
