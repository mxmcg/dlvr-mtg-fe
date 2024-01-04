"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

const LOGIN_MUTATION = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password)
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();

  const handleLogin = () => {
    login({ variables: { username, password } })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("token", response.data.logIn);
        router.push("/");
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <Box p="4">
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </FormControl>

      <FormControl id="password" mt="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormControl>

      <Button mt="6" onClick={handleLogin} isLoading={loading}>
        Log In
      </Button>

      {error && (
        <Alert status="error" mt="4">
          <AlertIcon />
          Error logging in: {error.message}
        </Alert>
      )}

      {data && (
        <Alert status="success" mt="4">
          <AlertIcon />
          Logged in successfully
        </Alert>
      )}
    </Box>
  );
};

export default Login;
