const { createContext, useContext, useState, useEffect } = require("react");

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentExtentions, setCurrentExtentions] = useState([]);
  const [walletAccounts, setWalletAccounts] = useState([]);

  const updateWalletAccount = (account) => {
    localStorage.setItem("localCurrentAccount", JSON.stringify(account));
    setCurrentAccount(account);
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
