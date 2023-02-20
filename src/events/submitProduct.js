
import { domRequest } from "../dom/domRequest.js";
import { productsHandler } from "../handlers/productsHandler.js";

let submitButtonEl = document.querySelector('button');

submitButtonEl.addEventListener("click", async () => {
    let inputValue = domRequest.getInputValue();
    console.log(inputValue);
    productsHandler.addProduct(inputValue);
})