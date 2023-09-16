import { WalletButton } from "components/wallet";

const SQNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>logo</div>
      <WalletButton />
    </div>
  );
};
export default SQNavbar;
