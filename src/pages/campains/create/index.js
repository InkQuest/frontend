import { Breadcrumb } from "antd";
import { SectionContainer } from "components/container";
import { useNavigate } from "react-router-dom";
import Steps from "rc-steps";
import styles from "./style.module.css";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const stepItems = [
    {
      title: "General Information",
      description: "Overview of your project",
    },
    {
      title: "Reward",
      description: "Reward to user",
    },
    {
      title: "Tasks",
      description: "Tasks for user",
    },
  ];
  return (
    <SectionContainer
      title="Create new Campaign"
      right={
        <Breadcrumb
          style={{ fontWeight: "620" }}
          items={[
            {
              title: <a href="">Home</a>,
              onClick: () => navigate("/"),
            },
            {
              title: <a href="">Campaign</a>,
              onClick: () => navigate("/campaigns"),
            },
            {
              title: "Create",
            },
          ]}
        />
      }
    >
      <Steps
        direction="vertical"
        className={styles.step_create}
        current={current}
        items={stepItems.map((e, index) => ({
          ...e,
          icon:
            current > index ? (
              <BsCheckLg
                size="40px"
                bg="#93F0F5"
                border={"4px solid #93F0F5"}
                color="#151515"
              />
            ) : null,
        }))}
      ></Steps>
    </SectionContainer>
  );
};

export default CreateCampaign;
