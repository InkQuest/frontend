import { useMemo } from "react";

const ItemStep = ({ title, index, current }) => {
  const isActive = useMemo(() => index == current, [current]);

  return (
    <div
      style={{
        display: "flex",
        width: "180px",
        flexDirection: "column",
        marginLeft: index > 0 ? "4px" : 0,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: isActive ? "#333333" : "#BDBDBD",
          cursor: "default",
        }}
      >
        {title}
      </div>
      <div
        style={{
          height: "10px",
          background: isActive ? "#EC6F66" : "#D9D9D9",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};
export const StepContainer = (props) => {
  const { items, current } = props;
  return (
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {items?.map((e, index) => {
          return <ItemStep {...props} {...e} index={index} />;
        })}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        {items[current]?.content}
      </div>
    </div>
  );
};
