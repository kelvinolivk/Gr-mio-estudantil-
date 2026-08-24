const SUPABASE_URL = "https://fviycyrnixbodpsilxuo.supabase.co";

const SUPABASE_KEY = "sb_publishable_MNkJhCDo4ToSb98V2rBPNA_Ubphvhw1";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("✅ Supabase conectado!");
