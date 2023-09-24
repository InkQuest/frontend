import { SectionContainer } from "components/container";
import Banner from "./banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <SectionContainer title="Trending Campaigns"></SectionContainer>
    </div>
  );
};

export default HomePage;
