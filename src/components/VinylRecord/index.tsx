import React from "react";
import styled from "@emotion/styled";

const VinylRecordDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  right: 40px;
  background: radial-gradient(
    circle,
    #000 0%,
    #000 85%,
    #ffc0cb 85%,
    #ffc0cb 100%
  );
  position: absolute;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    background-color: pink;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &:after {
    content: "";
    position: absolute;
    top: 10%;
    left: 50%;
    width: 2px;
    height: 80%;
    background-color: #fff;
    transform: translateX(-50%);
  }
`;

const VinylRecord = () => <VinylRecordDiv />;

export default VinylRecord;
