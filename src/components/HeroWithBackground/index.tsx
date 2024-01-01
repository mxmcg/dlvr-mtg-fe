import React from "react";
import styled from "@emotion/styled";
import { Heading } from "../HeroSection";

const BackgroundSection = styled.section(
  ({ backgroundImage }: { backgroundImage: string }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    width: "100%",
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
    color: "white",
    textAlign: "center",
  })
);

const Subtitle = styled.p({
  fontSize: "1.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "white",
  "@media (min-width: 768px)": {
    fontSize: "2rem",
  },
});

const HeroWithBackground = ({
  backgroundImage,
  headingText,
  subtitleText,
}: {
  backgroundImage: string;
  headingText: string;
  subtitleText: string;
}) => {
  return (
    <BackgroundSection backgroundImage={backgroundImage}>
      <Heading>{headingText}</Heading>
      <Subtitle>{subtitleText}</Subtitle>
    </BackgroundSection>
  );
};

export default HeroWithBackground;
