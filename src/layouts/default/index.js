import { Layout, Space } from "antd";
import FooterLandingPage from "components/footer/FooterLandingPage";
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#000",
  //   backgroundColor: "#7dbcea",
};
const { Header, Footer, Sider, Content } = Layout;

const Default = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer style={{ padding: 0 }}>
        <FooterLandingPage />
      </Footer>
    </Layout>
  );
};

export default Default;
