import styled from "@emotion/styled";
import React from "react";

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

const TextBlock = styled.div({
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const Heading = styled.h1({
  fontSize: "2rem",
  color: "#333",
  marginBottom: "2rem",
});

const Paragraph = styled.p({
  fontSize: "1rem",
  width: "400px",
  color: "#666",
});

const ImageBlock = styled.div({
  position: "relative",
  padding: 0,
  "@media (min-width: 768px)": {
    padding: "5rem",
  },
});

const StyledImage = styled.img({
  width: "100%",
  height: "auto",
});

const HalfSection = ({
  imageSrc,
  headingText,
  paragraphText,
}: {
  imageSrc: string;
  headingText: string;
  paragraphText: string;
}) => {
  return (
    <Container>
      <TextBlock>
        <Heading>{headingText}</Heading>
        <Paragraph>{paragraphText}</Paragraph>
      </TextBlock>
      <ImageBlock>
        <StyledImage src={imageSrc} alt="Descriptive Alt Text" />
      </ImageBlock>
    </Container>
  );
};

export default HalfSection;
