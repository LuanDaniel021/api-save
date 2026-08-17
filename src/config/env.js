
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT | 3000;

const supabase_url = process.env.SUPABASE_URL;

const supabase_secret_key = process.env.SUPABASE_SECRET_KEY;

export const env = {
    port, supabase_url, supabase_secret_key,
}

