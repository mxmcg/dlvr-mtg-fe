import React, { useRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import styled from "@emotion/styled";
import Sidebar from "../Sidebar";
import VinylRecord from "../VinylRecord";

const Header = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.darkBlue,
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
  // position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  height: "60px",

  "@media (min-width: 768px)": {
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    padding: "40px",
  },
}));

const colors = ["#daa6b1", "#6a8d73", "#FFAB76", "white"];

const colorChange = keyframes`
  0% {
    background-color: ${colors[0]};
  }
  25% {
    background-color: ${colors[1]};
  }
  50% {
    background-color: ${colors[2]};
  }
  75% {
    background-color: ${colors[3]};
  }
  100% {
    background-color: ${colors[0]};
  }
`;

const CustomMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  div {
    width: 50px;
    height: 5px;
    background-color: #daa6b1;
    animation: ${colorChange} 8s linear infinite;
  }

  div:nth-of-type(1) {
    animation-delay: 0s;
  }

  div:nth-of-type(2) {
    animation-delay: 2s;
  }

  div:nth-of-type(3) {
    animation-delay: 4s;
  }
`;

const TopSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMenuClick = () => {
    onOpen();
  };

  return (
    <>
      <Header>
        <IconButton
          ref={btnRef}
          onClick={handleMenuClick}
          position="fixed"
          zIndex="20"
          icon={
            <CustomMenuIcon>
              <div></div>
              <div></div>
              <div></div>
            </CustomMenuIcon>
          }
          aria-label="Open Menu"
          variant="ghost"
          _hover={{
            bg: "transparent",
            color: "white",
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
      </Header>
    </>
  );
};

export default TopSection;
