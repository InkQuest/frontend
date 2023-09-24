import { Layout } from "antd";
import FooterLandingPage from "components/footer/FooterLandingPage";
import SQNavbar from "components/navbar";

const Default = ({ children }) => {
  return (
    <Layout
      style={{
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#FFF",
      }}
    >
      <SQNavbar />
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "92px",
        }}
      >
        {children}
      </div>
      <FooterLandingPage />
    </Layout>
  );
};

export default Default;
