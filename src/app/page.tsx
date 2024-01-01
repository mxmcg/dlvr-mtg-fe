"use client";

import React, { useRef } from "react";

import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import TopSection from "@/components/TopSection";

import Footer from "@/components/Footer";
import Hero from "@/components/HeroThreeCol";
import TemplateSection from "@/components/HeroSection";
import HalfSection from "@/components/HalfSection";
import HeroWithBackground from "@/components/HeroWithBackground";

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
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <ChakraProvider theme={chakraTheme}>
      <Flex>
        <Box as="main" flex="1" overflowY="auto" minW={0}>
          <TopSection />
          <Box>
            <TemplateSection />
          </Box>
          <Box>
            <HalfSection
              imageSrc={"croppedDev.jpeg"}
              paragraphText={
                "Since 2015, Max McGee has been building software for clients across the globe. Primarily focused on Full Stack Web Engineering, Max has also built mobile applications for iOS and Android using React Native."
              }
              headingText={"About us"}
            />
          </Box>
          <Box id="about-section">
            <Hero />
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
  );
};

export default Home;
