import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider as AntDesignProvider } from "antd";
import { WalletProvider } from "contexts/useWallet";
import { BrowserRouter } from "react-router-dom";
import './assets/scss/style.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AntDesignProvider>
        <WalletProvider>
          <App />
        </WalletProvider>
      </AntDesignProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
