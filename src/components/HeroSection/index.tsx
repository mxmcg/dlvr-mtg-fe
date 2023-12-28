/** @jsxImportSource @emotion/react */
import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

// Since we don't have access to the CSS variables like --grid-gutter, set some assumed values:
const gridGutter = "1fr"; // Example, replace with actual value
const cellMaxWidth = "1fr"; // Example, replace with actual value

const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  padding: "4rem 0",
  gridTemplateRows: "auto auto auto 1fr", // Adjust this to fit your content needs
  gridTemplateColumns: `
      minmax(${gridGutter}, 1fr)
      repeat(8, minmax(0, ${cellMaxWidth}))
      minmax(${gridGutter}, 1fr)
    `,
  rowGap: "11px",
  columnGap: "11px",
  background: theme.colors.darkBlue,
  position: "relative",
  "@media (min-width: 768px)": {
    // Responsive styles as needed
  },
}));

const Heading = styled("h1")(({ theme }) => ({
  position: "absolute",
  width: "100%", // Ensures the heading uses the full width available
  textAlign: "center", // Centers the text inside the heading element

  margin: 0,
  fontSize: "4.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  //   color: theme.colors.softOrange,
  color: "white",
  zIndex: 5,
  left: "50%", // Combined with transform, centers the heading horizontally
  top: "50%", // Adjust this value to center vertically as needed
  transform: "translate(-50%, -50%)", // Adjusts the positioning to be truly centered
  "@media (min-width: 768px)": {
    fontSize: "6rem",
  },
}));

const ImageBlockLeft = styled("div")({
  gridArea: "7 / 2 / 13 / 10",
  zIndex: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 768px)": {
    gridArea: "2 / 2 / 16 / 8",
  },
});

const ImageBlockRight = styled("div")({
  gridArea: "19 / 2 / 25 / 10",
  zIndex: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 768px)": {
    gridArea: "10 / 20 / 16 / 26",
  },
});

const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  // Add more styles as needed
});

const ButtonBlock = styled("div")({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  gridArea: "29 / 3 / 31 / 9",
  zIndex: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 768px)": {
    gridArea: "16 / 11 / 18 / 17",
  },
});

const Button = styled("a")(({ theme }) => ({
  padding: "1rem 2rem",
  border: "none",
  borderRadius: "10px",
  backgroundColor: theme.colors.mutedGreen,
}));

// React component
const TemplateSection = () => {
  return (
    <GridContainer>
      <Heading
        style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        DLVR Solutions
      </Heading>
      <Heading
        style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        Engineering & Delivery
      </Heading>

      <ImageBlockLeft>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/647e51bff0c8677752f37610/65c18c26-a720-49aa-82ff-821681385a73/Forma+02" // Replace with your left image path
          alt="Left Image Description"
        />
      </ImageBlockLeft>
      <ImageBlockRight>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/647e51bff0c8677752f37610/65c18c26-a720-49aa-82ff-821681385a73/Forma+02" // Replace with your left image path
          alt="Right Image Description"
        />
      </ImageBlockRight>
      <ButtonBlock>
        <Button href="/course-introduction">LET’S GET TO WORK ➺</Button>
      </ButtonBlock>
      {/* Define other blocks as needed */}
    </GridContainer>
  );
};

export default TemplateSection;
