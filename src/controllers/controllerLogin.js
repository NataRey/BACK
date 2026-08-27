import modelUser from "../models/modelUser.js";
import {generarToken, verificarToken} from "../ayudas/funciones.js";
import bcrypt from "bcryptjs";

const controllerLogin = {
    iniciarSesion: async(sol, res)=>{
        try {
            const{username, password}=sol.body;
            const userFound = await modelUser.findOne({
                email: username,
            });

            const contraseniaValidada = await bcrypt.compare(password, userFound.password);
            
        } catch (error) {
            
        }
    }
}

export default controllerLogin;
