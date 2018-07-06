export default function getAbi(contractEntry) {
  if (contractEntry.web3Contract) {
    return contractEntry.web3Contract.options.jsonInterface
    return contractEntry.web3Contract.abi
  } else {
    return contractEntry.abi
  }
}
