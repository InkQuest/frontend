import { Modal } from "antd";
import { useWallet } from "contexts/useWallet";
import { createContext, useContext, useState } from "react";
import { BiWallet } from "react-icons/bi";
import { addressShortener } from "utils";

const WalletContext = createContext();

export const WalletModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const showWalletAddressModal = () => setVisible(true);
  const { walletAccounts, updateWalletAccount } = useWallet();
  return (
    <WalletContext.Provider
      value={{
        walletModalVisible: visible,
        showWalletAddressModal,
      }}
    >
      {children}
      <Modal
        title="Choose account"
        centered
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {walletAccounts?.map((e) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "space-between",
            }}
            onClick={() => {
              updateWalletAccount(e);
              setVisible(false);
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <BiWallet size="32px" />
              <div style={{ marginLeft: "8px", fontWeight: "bold" }}>
                {e?.meta?.name}
              </div>
            </div>
            {addressShortener(e?.address)}
          </div>
        ))}
      </Modal>
    </WalletContext.Provider>
  );
};

export const useWalletModal = () => useContext(WalletContext);
