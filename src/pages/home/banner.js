import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <Typography.Title level={1}>
          SubQuest - Web3 Collaboration Platform
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: "20px" }}>
          TaskOn is a platform that boosts the completion for various Web3 tasks
          in a decentralized way. It helps task initiators and implementers to
          collaborate efficiently and better align mutual interests. Make full
          use of TaskOn and start earning now!
        </Typography.Paragraph>
        <Space>
          <Button size="large" type="primary">
            Get Started
          </Button>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate("/campaigns/create")}
          >
            Create
          </Button>
        </Space>
      </div>
      <div style={{ display: "flex", flex: 1, background: "#D9D9D9" }}></div>
    </div>
  );
};
export default Banner;
