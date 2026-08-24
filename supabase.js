const SUPABASE_URL =
"https://fviycyrnixbodpsilxuo.supabase.co";

const SUPABASE_KEY =
"sb_publishable_MNkJhCDo4ToSb98V2rBPNA_Ubphvhw1";

if (!window.supabase) {

    console.error("Supabase JS não foi carregado.");

    window.supabaseClient = null;

} else {

    window.supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

    console.log("✅ Supabase conectado.");
}
