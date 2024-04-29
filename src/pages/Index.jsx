import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaTrophy, FaNewspaper, FaImage } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">Venus Williams</Heading>
        <Text fontSize="xl" textAlign="center">
          American professional tennis player, former world No. 1, and a five-time Wimbledon champion.
        </Text>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/venus-williams.jpg"
          alt="Venus Williams"
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box as="section">
            <Heading as="h2" size="lg"><FaTrophy /> Career Highlights</Heading>
            <Text mt={4}>
              Venus has won seven Grand Slam singles titles, including five at Wimbledon. She has also won fourteen Grand Slam doubles titles, all with her sister Serena.
            </Text>
          </Box>
          <Box as="section">
            <Heading as="h2" size="lg"><FaNewspaper /> Recent News</Heading>
            <Text mt={4}>
              Recently, Venus Williams made a stunning comeback at the US Open, reaching the semifinals and proving her enduring talent and determination.
            </Text>
          </Box>
          <Box as="section">
            <Heading as="h2" size="lg"><FaImage /> Gallery</Heading>
            <Text mt={4}>
              Explore a collection of dynamic photos capturing Venus in action on the tennis court.
            </Text>
          </Box>
          <Box as="section">
            <Heading as="h2" size="lg">Biography</Heading>
            <Text mt={4}>
              Born in Lynwood, California, Venus Williams has been a professional player since 1994 and has been ranked World No. 1 by the Women's Tennis Association on three occasions.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;