import { Button } from "@mui/material";
import { Box } from "@mui/system";

const ShareMintedNFT = ({ tokenId, contractAddress }) => (
  <Box>
    <Button
      variant="contained"
      target="__blank"
      href={`https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`}
    >
      View on OpenSea
    </Button>
  </Box>
);

export default ShareMintedNFT;
