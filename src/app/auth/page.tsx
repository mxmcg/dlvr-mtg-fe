// components/LoginPage.tsx
"use client";

import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../lib/client";
import { ChakraProvider, Box, Button, Center } from "@chakra-ui/react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Center style={{ padding: "20px", height: "100vh" }}>
          <Box width="full" maxW="400px">
            {isLoginView ? <Login /> : <SignUp />}
            <Button mt="4" onClick={toggleView}>
              {isLoginView
                ? "Need an account? Sign Up"
                : "Have an account? Log In"}
            </Button>
          </Box>
        </Center>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default LoginPage;
