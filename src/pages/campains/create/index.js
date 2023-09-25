import { Breadcrumb, DatePicker, Input, Modal, Typography, Upload } from "antd";
import { SectionContainer } from "components/container";
import { useNavigate } from "react-router-dom";
import Steps from "rc-steps";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { StepContainer } from "components/step";
import toast from "react-hot-toast";
import { BiUpload } from "react-icons/bi";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const GeneralInfo = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const uploadProps = {
    name: "cover-image",
    // multiple: true,
    // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    action: () => {},
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        toast.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <>
      <Typography.Title level={3}>Campaign Name*</Typography.Title>
      <Input size="large" placeholder="Enter a campaign name" />
      <Typography.Title level={3}>Campaign Period*</Typography.Title>
      <DatePicker.RangePicker
        style={{ fontWeight: "bold" }}
        size="large"
        showTime={{
          format: "HH:mm",
        }}
        format="YYYY-MM-DD HH:mm"
        // onChange={onChange}
        // onOk={onOk}
      />
      <Typography.Title level={3}>Campaign Cover Image*</Typography.Title>
      <Upload.Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <BiUpload />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Upload.Dragger>
      {/* <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-circle"
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload> */}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const stepItems = [
    {
      title: "General Information",
      description: "Overview of your project",
      content: <GeneralInfo />,
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
      <StepContainer
        direction="vertical"
        current={current}
        items={stepItems.map((e, index) => ({
          ...e,
          icon: current > index && (
            <BsCheckLg
              size="40px"
              bg="#93F0F5"
              border={"4px solid #93F0F5"}
              color="#151515"
            />
          ),
        }))}
      />
    </SectionContainer>
  );
};

export default CreateCampaign;
