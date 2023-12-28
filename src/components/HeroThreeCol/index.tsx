import React from "react";
import styled from "@emotion/styled";

const HeroSection = styled.section(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "stretch", // Changed to stretch to make children (columns) of equal height
  backgroundColor: theme.colors.mutedGreen,
  padding: "40px",
  color: "white",
  minHeight: "500px",
}));

const Column = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // Align content to the top
  flex: "1", // Flex grow to fill the space
  margin: "0 20px",
  padding: "20px",
  backgroundColor: theme.colors.softOrange,
  borderRadius: "10px",
}));

const Heading = styled.h2(({ theme }) => ({
  color: theme.colors.mutedGreen,
}));

const Paragraph = styled.p({
  color: "white",
});

const Button = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.mutedGreen,
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors.mutedGreen,
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Column>
        <Heading>Front End</Heading>
        <Paragraph>React & React Native</Paragraph>
        <Paragraph>Emotion</Paragraph>
        <Paragraph>Your brief introduction or bio goes here.</Paragraph>
        <Paragraph>Your brief introduction or bio goes here.</Paragraph>
      </Column>

      <Column>
        <Heading>APIs / Microservices / Node Backends</Heading>
        <Paragraph>A list or brief overview of your skills.</Paragraph>
      </Column>

      <Column>
        <Heading>Project Management / Delivery</Heading>
        <Paragraph>Your contact information or a call-to-action.</Paragraph>
        <Button>Contact Me</Button>
      </Column>
    </HeroSection>
  );
};

export default Hero;
