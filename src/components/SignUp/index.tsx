"use client";

import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  Input,
  Box,
  Button,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const SIGNUP_MUTATION = gql`
  mutation SignUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password)
  }
`;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSignUp = () => {
    console.log("sign up", username, password);
    signUp({ variables: { username, password } });
  };

  return (
    <Box p="4">
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </FormControl>

      <FormControl id="password" mt="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormControl>

      <Button mt="6" onClick={handleSignUp} isLoading={loading}>
        Sign Up
      </Button>

      {error && (
        <Alert status="error" mt="4">
          <AlertIcon />
          Error during sign up: {error.message}
        </Alert>
      )}

      {data && (
        <Alert status="success" mt="4">
          <AlertIcon />
          Signed up successfully. Please log in.
        </Alert>
      )}
    </Box>
  );
};

export default SignUp;
