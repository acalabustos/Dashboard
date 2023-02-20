import {productService} from "./services/productsService.js"
import { printers } from "../dom/printers.js";
import { productsHandler } from "../handlers/productsHandler.js";  

let  button = document.querySelector("button");
let mainEl = document.querySelector("main");

button.addEventListener("click", async () => {
   let products = await productService.getProducts();
   let templateHTML = printers.printProducts(products);
      mainEl.innerHTML = templateHTML;
  
   return templateHTML;
});
