import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider as AntDesignProvider, ConfigProvider } from "antd";
import { WalletProvider } from "contexts/useWallet";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";
import { Toaster } from "react-hot-toast";
import customTheme from "theme";
import { QueryClient, QueryClientProvider } from "react-query";
import "rc-steps/assets/index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AntDesignProvider>
          <WalletProvider>
            <Toaster
              position="bottom-right"
              reverseOrder={true}
              toastOptions={{
                style: {
                  padding: "8px",
                  fontSize: "16px",
                  color: "#57527E",
                  borderRadius: "5px",
                  background: "#E8FDFF",
                },
              }}
            />
            <ConfigProvider theme={customTheme}>
              <App />
            </ConfigProvider>
          </WalletProvider>
        </AntDesignProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
