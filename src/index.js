import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";
import "@fontsource/paytone-one/400.css";

const fonts = {
  body: "Montserrat Variable",
  heading: "Paytone One"
}

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  purple: {
    100: "#EDE4F3",
    200: "#A985A9",
    300: "#866986",
    400: "#493849"
  },
  gray: {
    100: "DBDADB",
    200: "BCBBBC",
    300: "838283",
    400: "4B4B4B"
  }
}

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "720px",
  lg: "1080px",
  xl: "1440px",
  "2xl": "2160px",
};

const theme = extendTheme({ fonts, colors, breakpoints });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
