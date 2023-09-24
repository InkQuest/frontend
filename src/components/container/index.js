import { Typography } from "antd";

export const SectionContainer = ({ title, right, children }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "100px",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontWeight: "620", fontSize: "40px" }}>{title}</div>
        {right}
      </div>
      {children}
    </div>
  );
};
