import React from "react";
import { VStack, Link, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack spacing={4} align="stretch" mt={10}>
      <Link href="#about-section" style={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          Blog
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
