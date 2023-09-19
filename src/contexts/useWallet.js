import { web3FromSource } from "@polkadot/extension-dapp";
import { stringToHex } from "@polkadot/util";
import { APICall } from "utils/api/client";

const { createContext, useContext, useState, useEffect } = require("react");

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentExtentions, setCurrentExtentions] = useState([]);
  const [walletAccounts, setWalletAccounts] = useState([]);

  const updateWalletAccount = async (account) => {
    localStorage.setItem("localCurrentAccount", JSON.stringify(account));
    setCurrentAccount(account);
    const { signer } = await web3FromSource(account?.meta?.source);
    const { signature } = await signer.signRaw({
      address: account?.address,
      data: stringToHex("Sign message to authenticate"),
      type: "bytes",
    });
    console.log(await APICall.signLogin(account?.address, signature));
  };
  const logoutAccountHandler = () => {
    setCurrentAccount(null);
    localStorage.clear();
  };

  const initWallet = () => {
    const accountData = localStorage.getItem("localCurrentAccount");
    setCurrentAccount(JSON.parse(accountData));
  };

  useEffect(() => {
    initWallet();
  }, []);
  return (
    <WalletContext.Provider
      value={{
        currentAccount,
        updateWalletAccount,
        logoutAccountHandler,
        updateExtentions: setCurrentExtentions,
        currentExtentions,
        updateWalletAccounts: setWalletAccounts,
        walletAccounts,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
