"use client";

import React, { useRef, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/client";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// Adds messages only in a dev environment
loadDevMessages();
loadErrorMessages();

import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  Text,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { useQuery, gql } from "@apollo/client";

import TopSection from "@/components/TopSection";

import Footer from "@/components/Footer";
import Hero from "@/components/HeroThreeCol";
import TemplateSection from "@/components/HeroSection";
import HalfSection from "@/components/HalfSection";
import HeroWithBackground from "@/components/HeroWithBackground";
import MortgageCalculator from "@/components/MortgageCalculator";
import LoginPage from "@/components/LoginPage";
import AddPropertyComponent from "@/components/AddProperty";
import UserPropertiesList from "@/components/UserPropertiesList";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      darkBlue: string;
      softOrange: string;
      mutedGreen: string;
      softPink: string;
    };
  }
}

const chakraTheme = extendTheme({
  colors: {
    darkBlue: "#2A3D66",
    softOrange: "#FFAB76",
    mutedGreen: "#6A8D73",
    softPink: "#DAA6B1",
  },
});

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={chakraTheme}>
        <Flex direction="column" h="100vh">
          <Box as="main" flex="1" overflowY="auto">
            {/* Main content above the tabs */}
            {isLoggedIn ? (
              <Text p="4" color="green.500">
                You are logged in!
              </Text>
            ) : (
              <Text p="4" color="red.500">
                You are not logged in.
              </Text>
            )}

            <Tabs
              isFitted
              variant="soft-rounded"
              position="fixed"
              bottom="0"
              width="100%"
              zIndex="sticky"
            >
              <TabPanels
                height="calc(100vh - 76px)" /* Adjust 76px to the height of your TabList */
              >
                <TabPanel display="flex" flexDirection="column" height="100%">
                  <UserPropertiesList userId="65973c1090d46239cf7c6acb" />
                </TabPanel>
                <TabPanel display="flex" flexDirection="column" height="100%">
                  <AddPropertyComponent />
                </TabPanel>
                <TabPanel display="flex" flexDirection="column" height="100%">
                  <MortgageCalculator />
                </TabPanel>
              </TabPanels>

              <TabList bg="white" borderTop="1px solid" borderColor="gray.200">
                <Tab _selected={{ color: "green.400", bg: "gray.100" }}>
                  Properties
                </Tab>
                <Tab _selected={{ color: "green.400", bg: "gray.100" }}>
                  Add Property
                </Tab>
                <Tab _selected={{ color: "green.400", bg: "gray.100" }}>
                  Mortgage Calculator
                </Tab>
              </TabList>
            </Tabs>
          </Box>
        </Flex>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default Home;
