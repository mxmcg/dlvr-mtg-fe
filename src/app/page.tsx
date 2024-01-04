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
        <Flex>
          <Box as="main" flex="1" overflowY="auto" minW={0}>
            <TopSection />
            {isLoggedIn ? (
              <Text p="4" color="green.500">
                You are logged in!
              </Text>
            ) : (
              <Text p="4" color="red.500">
                You are not logged in.
              </Text>
            )}
            <Box mt="4" px="4">
              <MortgageCalculator />
            </Box>

            <Box>
              <HeroWithBackground
                backgroundImage="beachscape.jpg"
                headingText="Inquire Below"
                subtitleText="maxmcgeedev@gmail.com"
              />
            </Box>
            <Footer />
          </Box>
        </Flex>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default Home;
