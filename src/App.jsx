import { useState } from "react";
import "./App.css";
import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { bscTestnet } from "@reown/appkit/networks";
import ConnectButton from "./WalletConnect";
import Mint from "./components/Mint";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// 1. Get projectId
const projectId = "f0d9b306ac28acd20cc961675943e830";

// 2. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [bscTestnet],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});
function App() {
  return (
    <>
      <ConnectButton />
      <Mint />
      <ToastContainer />
    </>
  );
}

export default App;
