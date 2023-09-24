import { Menu } from "antd";
import SubQuestLogo from "assets/img/subquest-text-logo.png";
import { WalletButton } from "components/wallet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [current, setCurrent] = useState("campaigns");
  const navigate = useNavigate();

  const items = [
    {
      label: "Campaign",
      key: "campaigns",
    },
    {
      label: "Space",
      key: "spaces",
    },
    {
      label: "Create",
      key: "create",
      children: [
        {
          label: "Space",
          key: "/spaces/create",
        },
        {
          label: "Campaign",
          key: "/campaigns/create",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginLeft: "10px",
      }}
    >
      <Menu
        onClick={(e) => {
          navigate(e?.key);
          setCurrent(e?.key);
        }}
        style={{ fontWeight: "700" }}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

const SQNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "16px",
          }}
        >
          <img
            style={{
              height: "40px",
            }}
            src={SubQuestLogo}
            alt="subquest-logo"
          />
        </div>
        <HeaderMenu />
      </div>
      <WalletButton />
    </div>
  );
};
export default SQNavbar;
