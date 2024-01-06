import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useLazyQuery, gql, useMutation } from "@apollo/client";

const generateRandomAddress = () => {
  const streetNames = ["Maple", "Oak", "Pine", "Cedar", "Elm"];
  const streetType = ["St", "Ave", "Blvd", "Rd", "Ln"];
  return `${Math.floor(Math.random() * 1000)} ${
    streetNames[Math.floor(Math.random() * streetNames.length)]
  } ${streetType[Math.floor(Math.random() * streetType.length)]}`;
};

const ADD_REAL_ESTATE_PROPERTY_MUTATION = gql`
  mutation AddRealEstateProperty(
    $userId: String!
    $propertyAddress: String!
    $purchasePrice: Float!
    $purchaseDate: String!
    $originalLoanAmount: Float!
    $currentLoanAmount: Float!
    $interestRate: Float!
    $homeType: String!
  ) {
    addRealEstateProperty(
      userId: $userId
      propertyAddress: $propertyAddress
      purchasePrice: $purchasePrice
      purchaseDate: $purchaseDate
      originalLoanAmount: $originalLoanAmount
      currentLoanAmount: $currentLoanAmount
      interestRate: $interestRate
      homeType: $homeType
    ) {
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

const formatCurrency = (value) => {
  const number = value.replace(/[^0-9.]/g, "");
  return number
    ? `$${parseFloat(number)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
    : "";
};

const formatPercentage = (value) => {
  const number = value.replace(/[^0-9.]/g, "");
  return number ? `${parseFloat(number).toFixed(2)}%` : "";
};

const AddPropertyComponent = () => {
  const [propertyAddress, setPropertyAddress] = useState("");

  const [purchaseDate, setPurchaseDate] = useState("");
  const [homeType, setHomeType] = useState("");
  const [purchasePrice, setPurchasePrice] = useState({
    raw: "",
    formatted: "",
  });
  const [originalLoanAmount, setOriginalLoanAmount] = useState({
    raw: "",
    formatted: "",
  });
  const [currentLoanAmount, setCurrentLoanAmount] = useState({
    raw: "",
    formatted: "",
  });
  const [interestRate, setInterestRate] = useState({ raw: "", formatted: "" });

  const handlePurchasePriceChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    setPurchasePrice({ raw: rawValue, formatted: formatCurrency(rawValue) });
  };

  const handleOriginalLoanAmountChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    setOriginalLoanAmount({
      raw: rawValue,
      formatted: formatCurrency(rawValue),
    });
  };

  const handleCurrentLoanAmountChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    setCurrentLoanAmount({
      raw: rawValue,
      formatted: formatCurrency(rawValue),
    });
  };

  const handleInterestRateChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    setInterestRate({ raw: rawValue, formatted: formatPercentage(rawValue) });
  };

  const [addRealEstateProperty, { data, loading, error }] = useMutation(
    ADD_REAL_ESTATE_PROPERTY_MUTATION
  );

  const handleSubmit = async () => {
    try {
      const result = await addRealEstateProperty({
        variables: {
          userId: "65973c1090d46239cf7c6acb", // Replace with actual user ID
          propertyAddress,
          purchasePrice: parseFloat(purchasePrice.raw),
          purchaseDate,
          originalLoanAmount: parseFloat(originalLoanAmount.raw),
          currentLoanAmount: parseFloat(currentLoanAmount.raw),
          interestRate: parseFloat(interestRate.raw),
          homeType,
        },
      });
      // ... rest of your submit logic
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // Generate random defaults
    setPropertyAddress(generateRandomAddress());
    const randomPurchasePrice = (Math.random() * 1000000 + 100000).toFixed(2);
    setPurchasePrice({
      raw: randomPurchasePrice,
      formatted: formatCurrency(randomPurchasePrice),
    });

    // Random date in the past up to 50 years
    const yearsAgo = 30;
    const currentDate = new Date();
    const pastDate = new Date(
      currentDate.getFullYear() - yearsAgo,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const randomTime =
      pastDate.getTime() +
      Math.random() * (currentDate.getTime() - pastDate.getTime());
    const randomDate = new Date(randomTime);
    setPurchaseDate(randomDate.toISOString().split("T")[0]);

    const randomOriginalLoanAmount = (Math.random() * 500000 + 100000).toFixed(
      2
    );
    setOriginalLoanAmount({
      raw: randomOriginalLoanAmount,
      formatted: formatCurrency(randomOriginalLoanAmount),
    });

    const randomCurrentLoanAmount = (Math.random() * 500000 + 100000).toFixed(
      2
    );
    setCurrentLoanAmount({
      raw: randomCurrentLoanAmount,
      formatted: formatCurrency(randomCurrentLoanAmount),
    });

    const randomInterestRate = (Math.random() * 5 + 2).toFixed(2);
    setInterestRate({
      raw: randomInterestRate,
      formatted: formatPercentage(randomInterestRate),
    });

    setHomeType(
      ["Single Family", "Condo", "Multifamily"][Math.floor(Math.random() * 3)]
    );
  }, []);

  {
    loading && <p>Saving property...</p>;
  }
  {
    error && <p>Error saving property: {error.message}</p>;
  }

  return (
    <Box p="4">
      <FormControl id="property-address" mt="4">
        <FormLabel>Property Address</FormLabel>
        <Input
          placeholder="Enter property address"
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
        />
      </FormControl>

      <FormControl id="purchase-date" mt="4">
        <FormLabel>Date of Purchase</FormLabel>
        <Input
          placeholder="Enter date of purchase"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          type="date"
        />
      </FormControl>

      <FormControl id="purchase-price" mt="4">
        <FormLabel>Original Purchase Price</FormLabel>
        <Input
          placeholder="Enter original purchase price"
          value={purchasePrice.formatted}
          onChange={handlePurchasePriceChange}
          type="text"
        />
      </FormControl>

      <FormControl id="original-loan-amount" mt="4">
        <FormLabel>Original Loan Amount</FormLabel>
        <Input
          placeholder="Enter original loan amount"
          value={originalLoanAmount.formatted}
          onChange={handleOriginalLoanAmountChange}
          type="text"
        />
      </FormControl>

      <FormControl id="current-loan-amount" mt="4">
        <FormLabel>Current Loan Amount</FormLabel>
        <Input
          placeholder="Enter current loan amount"
          value={currentLoanAmount.formatted}
          onChange={handleCurrentLoanAmountChange}
          type="text"
        />
      </FormControl>

      <FormControl id="interest-rate" mt="4">
        <FormLabel>Interest Rate</FormLabel>
        <Input
          placeholder="Enter interest rate"
          value={interestRate.formatted}
          onChange={handleInterestRateChange}
          type="text"
        />
      </FormControl>

      <FormControl id="home-type" mt="4">
        <FormLabel>Home Type</FormLabel>
        <Select
          placeholder="Select home type"
          value={homeType}
          onChange={(e) => setHomeType(e.target.value)}
        >
          <option value="Single Family">Single Family</option>
          <option value="Condo">Condo</option>
          <option value="Multifamily">Multifamily</option>
        </Select>
      </FormControl>

      <Button mt="6" onClick={handleSubmit}>
        Add Property
      </Button>
    </Box>
  );
};

export default AddPropertyComponent;
