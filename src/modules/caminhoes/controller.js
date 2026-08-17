
import {service} from "./service.js";

class Controller {
    
    async cadastro( req, res ) {

        const { data, error } = await service.query_teste();

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        return res.json(data);

    }

}

export const controller = new Controller();

