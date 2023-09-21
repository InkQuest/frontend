import { web3FromSource } from "@polkadot/extension-dapp";
import { stringToHex } from "@polkadot/util";
import toast from "react-hot-toast";
import { APICall } from "utils/api/client";

const { createContext, useContext, useState, useEffect } = require("react");

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentExtentions, setCurrentExtentions] = useState([]);
  const [walletAccounts, setWalletAccounts] = useState([]);

  const updateWalletAccount = async (account) => {
    const { signer } = await web3FromSource(account?.meta?.source);
    try {
      const { signature } = await signer.signRaw({
        address: account?.address,
        data: stringToHex("Hello"),
        type: "bytes",
      });
      const accountAuthenticate = await APICall.signLogin(
        account?.address,
        signature
      );
      if (accountAuthenticate) {
        toast.success("Account connected");
        const accountInfor = {
          ...accountAuthenticate,
          ...account,
        };
        setCurrentAccount(accountInfor);
        localStorage.setItem(
          "localCurrentAccount",
          JSON.stringify(accountInfor)
        );
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const logoutAccountHandler = () => {
    setCurrentAccount(null);
    localStorage.clear();
  };

  const initWallet = () => {
    const accountData = localStorage.getItem("localCurrentAccount");
    if (accountData) {
      toast.success("Account connected");
      setCurrentAccount(JSON.parse(accountData));
    }
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
