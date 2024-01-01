import { theme } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const FlexContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: "4rem",
});

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 0,
  background: `linear-gradient(-45deg, #ff69b4, #daa6b1, #6a8d73, #2a3d66, #ffab76, white, #ff69b4)`,
  backgroundSize: "800% 800%",
  animation: `${gradientAnimation} 30s ease infinite`,
  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
}));

const BackgroundLeft = styled("div")({
  flex: 1,
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "50%",
    width: "100%",
    height: "50%",
    transform: "translate(-50%, 0%)",
    backgroundImage: "url('surfer-3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    "@media (min-width: 768px)": {
      width: "60%",
      height: "70%",
      top: "50%",
      left: "50%",
      transform: "translate(-70%, -50%)",
    },
  },
});

const BackgroundRight = styled("div")({
  flex: 1,
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "50%",
    width: "100%",
    height: "50%",
    transform: "translate(50%, -100%)",
    backgroundImage: "url('guysCoding.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    "@media (min-width: 768px)": {
      width: "60%",
      height: "45%",
      top: "50%",
      right: "50%",
      transform: "translate(70%, -50%)",
    },
  },
});

const Content = styled("div")({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
});

const ButtonBlock = styled("div")({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  zIndex: 1,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 0",
});

const Button = styled("a")(({ theme }) => ({
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "10px",
  backgroundColor: theme.colors.mutedGreen,
  textDecoration: "none",
  color: "white",
}));

export const Heading = styled("h1")({
  fontSize: "4.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "white",
  "@media (min-width: 768px)": {
    fontSize: "6.5rem",
  },
});

const TemplateSection = () => {
  return (
    <FlexContainer>
      <BackgroundContainer>
        <BackgroundLeft />
        <BackgroundRight />
      </BackgroundContainer>
      <Content>
        <Heading>DLVR Solutions</Heading>
        <Heading>Engineering Consultants</Heading>
        <ButtonBlock>
          <Button href="/course-introduction">LET’S GET TO WORK</Button>
        </ButtonBlock>
      </Content>
    </FlexContainer>
  );
};

export default TemplateSection;
