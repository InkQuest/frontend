import { Routes, Route } from "react-router-dom";
import Spaces from "./pages/spaces";
import DefaultLayout from "./layouts/default";
import { QueryClient } from "react-query";
import toast from "react-hot-toast";
import { WsProvider } from "@polkadot/api";
import { web3Enable } from "@polkadot/extension-dapp";
import { useEffect } from "react";
import { useWallet } from "contexts/useWallet";
import Campaigns from "pages/campains";
import CreateCampaign from "pages/campains/create";
import CreateSpace from "pages/spaces/create";

const providerUrl = process.env.REACT_APP_PROVIDER_URL;
const queryClient = new QueryClient();

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
        <Route path="/" element={<Spaces />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/campaigns/create" element={<CreateCampaign />} />
        <Route path="/spaces/create" element={<CreateSpace />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
