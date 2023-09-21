import { Button, Dropdown, Image, Menu } from "antd";
import { useWallet } from "contexts/useWallet";
import SubWalletLogo from "assets/img/wallet/SubWalletLogo.png";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { WalletModalProvider, useWalletModal } from "./WalletModal";
import { BiWallet } from "react-icons/bi";
import { addressShortener } from "utils";

const WalletNotConnected = () => {
  const { currentExtentions, updateWalletAccounts } = useWallet();
  const { showWalletAddressModal } = useWalletModal();
  const connectWalletHandler = async (walletKey) => {
    const walletSelected = currentExtentions.find((e) => e?.name == walletKey);
    if (walletSelected && currentExtentions?.length > 0) {
      const accounts = await web3Accounts();
      const currentWalletAccounts = accounts?.filter(
        (e) => e?.meta.source == walletKey
      );
      updateWalletAccounts(currentWalletAccounts);
      showWalletAddressModal();
    }
  };

  const items = [
    {
      key: "logout",
      label: (
        <a style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{
              width: "32px",
              height: "32px",
            }}
            src={SubWalletLogo}
            alt="subwallet-logo"
          />
          <div style={{ fontWeight: "bold" }}>SubWallet</div>
        </a>
      ),
      onClick: () => {
        connectWalletHandler("subwallet-js");
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button
        type="primary"
        style={{
          display: "flex",
          height: "40px",
          marginTop: "8px",
          alignItems: "center",
        }}
      >
        <BiWallet size="32px" />
        <div style={{ marginLeft: "8px", fontWeight: "bold" }}>Connect</div>
      </Button>
    </Dropdown>
  );
};

const WalletConnected = () => {
  const { currentAccount, logoutAccountHandler } = useWallet();

  const items = [
    {
      key: "logout",
      label: <div style={{ fontWeight: "bold", color: "red" }}>Log Out</div>,
      onClick: () => {
        logoutAccountHandler();
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button
        style={{
          display: "flex",
          height: "40px",
          marginTop: "8px",
          alignItems: "center",
        }}
      >
        <BiWallet size="32px" />
        <a style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {addressShortener(currentAccount?.address)}
        </a>
      </Button>
    </Dropdown>
  );
};

export const WalletButton = () => {
  const { currentAccount } = useWallet();
  return (
    <div>
      <WalletModalProvider>
        {currentAccount ? <WalletConnected /> : <WalletNotConnected />}
      </WalletModalProvider>
    </div>
  );
};
