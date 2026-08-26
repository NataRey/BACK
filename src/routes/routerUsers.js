import {Router} from 'express';
import ControllerUsers from '../controllers/controllerUsers.js';

const routerUsers = Router();

routerUsers.post('/', ControllerUsers.createUser);
routerUsers.get('/', ControllerUsers.readUsers);

export default routerUsers;