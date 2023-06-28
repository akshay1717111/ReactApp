import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, Akshay ";
const bio1 = "A fullstack java developer";
const bio2 = "Specialization in Angular, React, Java, Python, MYSQL";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src={require('../AkshayChemuriphoto.jpg')} size="2xl" name="Pete" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h3" size="2xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h3" size="2xl" noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
