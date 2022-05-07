import "../styles/globals.css";
import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b",
    },
    {
      id: "0x3",
      token: "tROP",
      label: "Ethereum Ropsten Testnet",
      rpcUrl: "https://ropsten.infura.io/v3/ababf9851fd845d0a167825f97eeb12b",
    },
    {
      id: "0x4",
      token: "rETH",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: "https://rinkeby.infura.io/v3/ababf9851fd845d0a167825f97eeb12b",
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
  ],
  appMetadata: {
    name: "Blocknative",
    icon: "<svg><svg/>",
    description: "Demo app for Onboard V2",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
