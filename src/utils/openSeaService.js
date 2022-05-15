const getTokenLink = (chainId, contractAddress, tokenId) => {
  switch (chainId) {
    case "0x4":
      return `https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`;
    case "0x13881":
      return `https://testnets.opensea.io/assets/mumbai/${contractAddress}/${tokenId}`;
    case "0x89":
      return `https://opensea.io/assets/matic/${contractAddress}/${tokenId}`;
    case "0x1":
      return `https://opensea.io/assets/${contractAddress}/${tokenId}`;
  }
};

const openSeaService = {
  getTokenLink,
};

export default openSeaService;
