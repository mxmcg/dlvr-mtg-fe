import React from "react";
import { VStack, Link, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack spacing={4} align="stretch" mt={10}>
      <Link href="#top-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          Top Section
        </Text>
      </Link>
      <Link href="#template-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          Template Section
        </Text>
      </Link>
      <Link href="#about-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          About Section
        </Text>
      </Link>
      <Link href="#portfolio-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          Portfolio Section
        </Text>
      </Link>
      <Link href="#contact-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          Contact
        </Text>
      </Link>
      {/* Add more links as needed */}
    </VStack>
  );
};

export default Sidebar;
