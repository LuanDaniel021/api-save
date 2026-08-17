
import { repository } from "./repository.js";

class Service {
    
    async query_teste( data ) {
        return await repository.query_teste();
    }

}

export const service = new Service();

