import React from "react";
import { useQuery } from "@apollo/client";
import { Box, Text, VStack, Divider } from "@chakra-ui/react";

import { gql } from "@apollo/client";

const GET_USER_PROPERTIES_QUERY = gql`
  query GetUserProperties($userId: String!) {
    getUserProperties(userId: $userId) {
      propertyAddress
      purchasePrice
      purchaseDate
      originalLoanAmount
      currentLoanAmount
      interestRate
      homeType
    }
  }
`;

const formatNumberWithCommas = (number) => {
  return number ? number.toLocaleString() : number;
};

const formatDate = (timestamp) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const UserPropertiesComponent = ({ userId }) => {
  const { data, loading, error } = useQuery(GET_USER_PROPERTIES_QUERY, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box p="4">
      <VStack divider={<Divider />} spacing={4} align="stretch">
        {data.getUserProperties.map((property, index) => (
          <Box key={index} p="5" shadow="md" borderWidth="1px">
            <Text fontSize="xl">{property.propertyAddress}</Text>
            <Text>
              Purchase Price: ${formatNumberWithCommas(property.purchasePrice)}
            </Text>
            <Text>
              Purchase Date: {formatDate(Number(property.purchaseDate))}
            </Text>

            <Text>
              Original Loan Amount: $
              {formatNumberWithCommas(property.originalLoanAmount)}
            </Text>
            <Text>
              Current Loan Amount: $
              {formatNumberWithCommas(property.currentLoanAmount)}
            </Text>
            <Text>
              Interest Rate: {formatNumberWithCommas(property.interestRate)}%
            </Text>
            <Text>Home Type: {property.homeType}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default UserPropertiesComponent;
