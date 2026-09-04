import {uploadSingleImage} from '../middleware/upload.js'
//import fs from fs;
import modelProducts from '../models/modelProducts.js';

const controllerProducts = {
    createPorduct: async (sol,res)=>{
        try {
            uploadSingleImage(sol, res, async(error)=>{
                if(error){
                    res.json({
                    result: 'mistake',
                    message: 'An error occurred while upload the image',
                    data: error,
                    });
                }

                const newProduct = new modelProducts({
                    modelo: sol.body.modelo,
                    descripcion: sol.body.descripcion,
                    precio: sol.body.precio,
                    color: sol.body.color,
                    imagen: sol.file.filename
                });

                const savedProduct = await newProduct.save();

                    res.json({
                    result: 'fine',
                    message: 'Product created',
                    data: savedProduct,
                    });
            });
        } catch (error) {
                    res.json({
                    result: 'mistake',
                    message: 'An error occurred creating the product',
                    data: error,
                    });
        }
    },
}

export default controllerProducts;