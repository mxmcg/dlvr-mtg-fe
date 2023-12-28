import React from "react";
import styled from "@emotion/styled";

// Define the color palette
const colors = {
  darkBlue: "#2A3D66", // A more subdued blue for professionalism and depth
  softOrange: "#FFAB76", // A softer orange for warmth and vibrancy without being overwhelming
  mutedGreen: "#6A8D73", // A muted green for accents and to signify growth/stability
  softPink: "#DAA6B1", // A soft pink for creative accents and to add a touch of energy
};

// Styled components
const SectionContainer = styled.section({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  backgroundColor: "#f2f2f2", // A light background for contrast
  padding: "40px",
});

const StyledColumn = styled.div({
  flex: "1",
  margin: "0 15px",
  minHeight: "500px",
  padding: "20px",
  backgroundColor: "white", // White background for each column
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
});

const ColumnHeader = styled.h3({
  color: colors.softOrange, // Orange for column headers
  borderBottom: `2px solid ${colors.softPink}`, // Underline effect
  paddingBottom: "10px",
});

const ColumnContent = styled.div({
  padding: "10px 0",
  // Additional content styles
});

const ColumnFooter = styled.div({
  marginTop: "auto",
  paddingTop: "20px",
  borderTop: `1px solid ${colors.darkBlue}`, // Top border for footer
  color: colors.mutedGreen, // Green text for footer
});

// Component
const ThreeColumnSection = () => {
  return (
    <SectionContainer>
      <StyledColumn>
        <ColumnHeader>Project 1</ColumnHeader>
        <ColumnContent>Description or summary of the project.</ColumnContent>
        <ColumnFooter>More Details</ColumnFooter>
      </StyledColumn>

      <StyledColumn>
        <ColumnHeader>Project 2</ColumnHeader>
        <ColumnContent>Description or summary of the project.</ColumnContent>
        <ColumnFooter>More Details</ColumnFooter>
      </StyledColumn>

      <StyledColumn>
        <ColumnHeader>Project 3</ColumnHeader>
        <ColumnContent>Description or summary of the project.</ColumnContent>
        <ColumnFooter>More Details</ColumnFooter>
      </StyledColumn>
    </SectionContainer>
  );
};

export default ThreeColumnSection;
