const SUPABASE_URL = "https://fviycyrnixbodpsilxuo.supabase.co";

const SUPABASE_KEY = "sb_publishable_MNkJhCDo4ToSb98V2rBPNA_Ubphvhw1";

let supabaseClient = null;

if (window.supabase && typeof window.supabase.createClient === "function") {

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("✅ Supabase carregado com sucesso!");

} else {

    console.error("❌ Supabase não foi carregado!");

    alert("❌ Supabase não foi carregado. Verifique a conexão com a internet.");
}
