import styled, { keyframes } from "styled-components";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: aquamarine;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const Error = styled.p`
  color: red;
  font-size: 16px;
`;

const WeatherInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const WeatherTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const WeatherDetails = styled.p`
  font-size: 18px;
  color: #333;
`;

const pulse = keyframes`
    0% {
        background-color: #e0e0e0;
    }
    50% {
        background-color: #f7f7f7;
    }
    100% {
        background-color: #e0e0e0;
    }
`;

const Skeleton = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonTitle = styled(Skeleton)`
  width: 150px;
  height: 24px;
  margin: 10px 0;
`;

const SkeletonDetails = styled(Skeleton)`
  width: 100px;
  height: 18px;
  margin: 8px 0;
`;

export {
  WeatherContainer,
  Title,
  Input,
  Button,
  WeatherInfo,
  WeatherTitle,
  WeatherDetails,
  Error,
  SkeletonTitle,
  SkeletonDetails,
};
