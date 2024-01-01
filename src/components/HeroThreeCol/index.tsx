import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const HeroSection = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.colors.mutedGreen,
  padding: "20px",
  color: "white",
  minHeight: "500px",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    padding: "40px",
  },
}));

const Column = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "20px 0",
  padding: "20px",
  backgroundColor: theme.colors.softOrange,
  borderRadius: "10px",
  "@media (min-width: 768px)": {
    flex: "1",
    margin: "0 20px",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));

const Heading = styled.h2(({ theme }) => ({
  color: theme.colors.mutedGreen,
  textAlign: "center",
  "@media (min-width: 768px)": {
    textAlign: "left",
  },
}));

const Paragraph = styled.p({
  color: "white",
  textAlign: "center",
  "@media (min-width: 768px)": {
    textAlign: "left",
  },
});

const NextImageContainer = styled.div({
  width: "100%",
  position: "relative",
  height: "200px",
  marginTop: "1rem",
});

const Button = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.darkBlue,
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors.darkBlue,
  },
  marginTop: "auto",
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
        <NextImageContainer>
          <Image
            src="/whiteboard.jpg"
            alt="Descriptive Text"
            layout="fill"
            objectFit="cover"
          />
        </NextImageContainer>
      </Column>

      <Column>
        <Heading>APIs / Microservices / Node Backends</Heading>
        <Paragraph>A list or brief overview of your skills.</Paragraph>
        <NextImageContainer>
          <Image
            src="/guyCoding.jpg"
            alt="Descriptive Text"
            layout="fill"
            objectFit="cover"
          />
        </NextImageContainer>
      </Column>

      <Column>
        <Heading>Project Management / Delivery</Heading>
        <Paragraph>Your contact information or a call-to-action.</Paragraph>
        <Button>Contact Me</Button>
        <NextImageContainer>
          <Image
            src="/software.jpg"
            alt="Descriptive Text"
            layout="fill"
            objectFit="cover"
          />
        </NextImageContainer>
      </Column>
    </HeroSection>
  );
};

export default Hero;
