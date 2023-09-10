import { Routes, Route } from "react-router-dom";
import Spaces from "./pages/spaces";
import DefaultLayout from "./layouts/default";

const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Spaces />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
