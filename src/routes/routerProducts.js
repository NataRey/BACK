import { Router } from "express";
import controllerProducts from "../controllers/controllerProducts.js";

const routerProducts = Router();
routerProducts.post('/', controllerProducts.createPorduct);

export default routerProducts;