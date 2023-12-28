"use client";
import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = styled.header(({ theme }) => ({
  backgroundColor: theme.colors.darkBlue,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  "@media (min-width: 768px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
}));

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center", // Centers links within the nav

  "@media (min-width: 768px)": {
    marginTop: 0,
    flex: 2, // Gives nav more space, so it's centered
  },
});

const NavLink = styled.a(({ theme }) => ({
  textDecoration: "none",
  padding: "0 1rem",
  color: "white", // Using green for text
  fontWeight: "bold",
  letterSpacing: "0.05em",
  fontSize: "1.2rem",
  textTransform: "uppercase",
  "&:hover": {
    color: "white", // Using orange for hover state
  },
}));

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.darkBlue, // Using blue for the title
  margin: 0,
}));

const TopSection = () => {
  return (
    <Header>
      <Nav>
        <Link href="/portfolio" passHref>
          <NavLink>Articles</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </Nav>
    </Header>
  );
};

export default TopSection;
