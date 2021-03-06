// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new Promise((resolve, reject) => {
  if (typeof window === 'undefined') return resolve()
  // if (!process.env.BROWSER) resolve();
  window.addEventListener('load', resolve)
  // resolve in any case if we missed the load event and the document is already loaded
  if (document.readyState === `complete`) resolve()
})

class Drizzle {
  constructor(options, store) {
    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store
    this.web3 = {}

    this.loadingContract = {}

    this.addContract = this.addContract.bind(this);
    // Wait for window load event in case of injected web3.
    windowPromise.then(() => {
      // Begin Drizzle initialization.
      store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
    })
  }

  addContract (contractConfig, options) {
    options.name ? contractConfig.contractName = options.name : null;
    this.store.dispatch({type: 'ADD_CONTRACT', drizzle: this, contractConfig, events: options.events, web3: this.web3, fallback: this.fallback, address: options.address})
  }

  _addContract (drizzleContract) {
    if (this.contracts[drizzleContract.contractName]) { throw `Contract already exists: ${drizzleContract.contractName}` }
    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)
    return drizzleContract;
  }

  findContractByAddress (address) {
    return this.contractList.find((contract) => {
      return contract.address.toLowerCase() === address.toLowerCase()
    })
  }
}

export default Drizzle
