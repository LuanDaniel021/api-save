
import {supabase} from "../../config/database.js";

class Repository {
    
    async query_teste() {
        return await supabase.rpc('query_teste');
    }

}

export const repository = new Repository();


