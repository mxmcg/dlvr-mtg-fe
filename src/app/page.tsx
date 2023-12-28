"use client";

import React, { useState } from "react";
import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

import TopSection from "@/components/TopSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroThreeCol";
import ThreeColumnSection from "@/components/HeroThreeCol-2";
import TemplateSection from "@/components/HeroSection";

const chakraTheme = extendTheme({
  colors: {
    darkBlue: "#2A3D66",
    softOrange: "#FFAB76",
    mutedGreen: "#6A8D73",
    softPink: "#DAA6B1",
  },
});

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider theme={chakraTheme}>
      <Flex>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          position="fixed"
          p={"2rem"}
          zIndex="20"
          icon={<IoMdMenu size="48px" />} // Adjust the size as needed
          aria-label="Open Menu"
          variant="ghost" // Removes border and background
          color="white" // Sets the icon color to white
          _hover={{
            bg: "transparent", // Maintain transparent background on hover
            color: "white", // Maintain white color on hover
          }}
        />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box as="main" flex="1" overflowY="auto" minW={0}>
          <TopSection />
          <Box>
            <TemplateSection />
          </Box>
          <Box id="about-section">
            <Hero />
          </Box>
          <Box id="portfolio-section">
            <ThreeColumnSection />
          </Box>
          <Box id="about-section">
            <Hero />
          </Box>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
