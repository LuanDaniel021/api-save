
import sbkc from "@supabase/supabase-js";

import { env } from "./env.js";

export const supabase = sbkc.createClient(
    env.supabase_url, env.supabase_secret_key
);

