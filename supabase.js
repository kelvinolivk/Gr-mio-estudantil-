const SUPABASE_URL = "https://fviycyrnixbodpsilxuo.supabase.co";

const SUPABASE_KEY = "sb_publishable_MNkJhCDo4ToSb98V2rBPNA_Ubphvhw1";

window.supabaseClient = null;

function iniciarSupabase() {

    if (
        !window.supabase ||
        typeof window.supabase.createClient !== "function"
    ) {
        console.error("❌ Biblioteca do Supabase não carregada.");
        return false;
    }

    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("✅ Supabase conectado!");

    return true;
}

window.supabasePronto = iniciarSupabase();
