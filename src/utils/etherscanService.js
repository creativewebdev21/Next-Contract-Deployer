const getAddressLink = (chainId, address) => {
  switch (chainId) {
    case "0x4":
      return `https://rinkeby.etherscan.io/address/${address}`;
    case "0x13881":
      return `https://mumbai.polygonscan.com/address/${address}`;
    case "0x89":
      return `https://polygonscan.com/address/${address}`;
    case "0x1":
      return `https://etherscan.io/address/${address}`;
  }
};

const etherscanService = { getAddressLink };

export default etherscanService;
