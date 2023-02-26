import AKCBtokenABI from "../AKCB_tokens.js"

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const navMenu = document.getElementById('ham-menu')
const close = document.getElementById('close')
const myLinks = document.getElementById('myLinks')

navMenu.addEventListener("click", function() {
   myLinks.style.display = 'block'
})

close.addEventListener("click", function() {
    myLinks.style.display = 'none'
})






