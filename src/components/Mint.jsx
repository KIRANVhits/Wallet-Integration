import React from "react";
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { Contract, ethers } from "ethers";
import abi from "../IntergrationHelpers/abi.json";
const TokenAddress = "0x45567Edb0d60dfb814486C9eB72e67014b3E2b6c";
const Mint = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const [amount, setAmount] = React.useState(0);
  async function mint() {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const signer = await ethersProvider.getSigner();
    // The Contract object
    const TokenContract = new Contract(TokenAddress, abi, signer);
    const tx = await TokenContract.mint(amount);
    await tx.wait();
  }
  return (
    <div>
      <h1>Mint</h1>
      <div>
        <input
          style={{ marginRight: "10px" }}
          placeholder="Amount"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={mint}>Mint</button>
      </div>

    </div>
  );
};

export default Mint;
