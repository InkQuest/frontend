import { web3Enable } from "@polkadot/extension-dapp";
import { useWallet } from "contexts/useWallet";
import Campaigns from "pages/campains";
import CreateCampaign from "pages/campains/create";
import HomePage from "pages/home";
import CreateSpace from "pages/spaces/create";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Spaces from "./pages/spaces";

const providerUrl = process.env.REACT_APP_PROVIDER_URL;

const App = () => {
  const { updateExtentions } = useWallet();
  useEffect(() => {
    const setupProvider = async () => {
      toast(`Connecting to ${providerUrl}...`);
      // const provider = new WsProvider(providerUrl);

      const currentExtensions = await web3Enable(process.env.REACT_APP_NAME);
      updateExtentions(currentExtensions);
      // dispatch(
      //   updateExtensions(currentExtensions.map((e) => ({ name: e?.name })))
      // );
      // if (!(allAccounts?.length > 0) && currentAccount) {
      //   const accounts = await web3Accounts();
      //   dispatch(updateAccountsList(accounts));
      // }
    };

    setupProvider().catch((error) => {
      toast.error("An error occurred");
      console.error("@_@ setupProvider error", error);
    });
  }, []);
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/campaigns/create" element={<CreateCampaign />} />
        <Route path="/spaces/create" element={<CreateSpace />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
