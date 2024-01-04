"use client";

import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useLazyQuery, gql } from "@apollo/client";

const MORTGAGE_CALCULATION_QUERY = gql`
  query CalculateMortgage(
    $loanAmount: Float!
    $interestRate: Float!
    $term: Int!
    $propertyValue: Float!
  ) {
    calculateMortgage(
      loanAmount: $loanAmount
      interestRate: $interestRate
      term: $term
      propertyValue: $propertyValue
    ) {
      monthlyPayment
      propertyValue
    }
  }
`;

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [term, setTerm] = useState("");
  const [propertyValue, setPropertyValue] = useState("");

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [calculateMortgage, { data, loading, error }] = useLazyQuery(
    MORTGAGE_CALCULATION_QUERY
  );

  const handleCalculateClick = () => {
    calculateMortgage({
      variables: {
        propertyValue: parseFloat(propertyValue.replace(/[^0-9.]/g, "")),
        loanAmount: parseFloat(loanAmount.replace(/[^0-9.]/g, "")),
        interestRate: parseFloat(interestRate.replace(/[^0-9.]/g, "")),
        term: parseInt(term.replace(/[^0-9]/g, ""), 10),
      },
    });
  };

  // Function to format input for display
  const formatForDisplay = (value, type) => {
    if (!value) return "";
    const number = value.replace(/[^0-9]/g, "");
    const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return type === "currency" ? `$${formattedNumber}` : `${formattedNumber}%`;
  };

  return (
    <Box p="4">
      <FormControl id="property-value" mt="4">
        <FormLabel>Property Value</FormLabel>
        <Input
          placeholder="Enter property value"
          value={formatForDisplay(propertyValue, "currency")}
          onChange={(e) => setPropertyValue(e.target.value)}
          type="text"
        />
      </FormControl>

      <FormControl id="loan-amount">
        <FormLabel>Loan Amount</FormLabel>
        <Input
          placeholder="Enter loan amount"
          value={formatForDisplay(loanAmount, "currency")}
          onChange={(e) => setLoanAmount(e.target.value)}
          type="text"
        />
      </FormControl>

      <FormControl id="interest-rate" mt="4">
        <FormLabel>Interest Rate</FormLabel>
        <Input
          placeholder="Enter interest rate"
          value={formatForDisplay(interestRate, "percent")}
          onChange={(e) => setInterestRate(e.target.value)}
          type="text"
        />
      </FormControl>

      <FormControl id="term" mt="4">
        <FormLabel>Term (years)</FormLabel>
        <Input
          placeholder="Enter term in years"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
      </FormControl>

      <Button mt="6" onClick={handleCalculateClick}>
        Calculate
      </Button>

      {loading && <p>Saving calculation...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <Text mt="4" fontSize="lg">
            Monthly Payment: $
            {numberWithCommas(data.calculateMortgage.monthlyPayment.toFixed(2))}
          </Text>
          <Text mt="2" color="green.500">
            Calculation saved successfully.
          </Text>
        </>
      )}
    </Box>
  );
};

export default MortgageCalculator;
