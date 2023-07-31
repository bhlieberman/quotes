import './style.css'
import { getRandomQuote } from './getQuote'

const displayQuote = () => {
  getRandomQuote().then(resp => {
  let [author, content] = resp;
  document.querySelector("#text").textContent = content;
  document.querySelector("#author").textContent = author;
})
}

document.addEventListener("DOMContentLoaded", (event) => {
  displayQuote();
})

document.querySelector("#new-quote").addEventListener("click", (event) => {
  displayQuote();
})