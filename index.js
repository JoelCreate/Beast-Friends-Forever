import AKCBtokenABI from "../AKCB_tokens.js"

/*const getWeb3 =  async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)

        try {
            await window.ethereum.request({ method:"eth_requestAccounts" }) 
            resolve(web3)
        } catch (error) {
            reject(error)
        }
    })
}*/


document.addEventListener("DOMContentLoaded", () => {
    const web3 = new Web3(window.ethereum)    
    const connectWallet = document.getElementById('connect_wallet')

    connectWallet.addEventListener("click", async () => {
        const contract = new web3.eth.Contract(AKCBtokenABI, "0x77372a4cc66063575b05b44481F059BE356964A4")
        const walletAddress = document.getElementById('wallet_address').value
        contract.defaultAccount = walletAddress
        const AKCBbalance = await contract.methods.balanceOf(walletAddress).call()

        for (let i = 0; i < AKCBbalance; i++) {
            const tokenId = await contract.methods.tokenOfOwnerByIndex(walletAddress, i).call()
  
            let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()

            if(tokenMetadataURI.startsWith("ipfs://")) {
                tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.slpit("ipfs://")[1]}`
            }

          
            const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())
            console.log(tokenMetadata["image"])
        }
    })    
})




/*document.addEventListener("DOMContentLoaded", () => {
    const connectWallet = document.getElementById('connect-wallet')

    connectWallet.addEventListener("click", async () => {
        const web3 = await getWeb3()
        const walletAddress = await web3.eth.requestAccounts()

        connectWallet.style.display = "none"

        document.getElementById('wallet-address').innerText = walletAddress

        /*const contract = new web3.eth.Contract(AKCBtokenABI, "0x77372a4cc66063575b05b44481F059BE356964A4")
        const walletAddress = document.getElementById("wallet_address").value
        contract.defaultAccount = walletAddress
        const AKCBbalance = await contract.methods.balanceOf(walletAddress).call()*/
    /*})    
})*/

const navMenu = document.getElementById('ham-menu')
const close = document.getElementById('close')
const myLinks = document.getElementById('myLinks')



navMenu.addEventListener("click", function() {
   myLinks.style.display = 'block'
})

close.addEventListener("click", function() {
    myLinks.style.display = 'none'
})



