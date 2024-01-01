import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.darkBlue,
  color: "white",
  padding: "20px",
  textAlign: "center",
}));

const FooterText = styled.p({
  margin: "0",
  padding: "0",
  fontSize: "14px",
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Your Name or Brand. All Rights Reserved.
      </FooterText>
      <FooterText>Contact: email@example.com</FooterText>
    </FooterContainer>
  );
};

export default Footer;
