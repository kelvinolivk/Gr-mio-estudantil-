(function () {

    const SUPABASE_URL = "https://fviycyrnixbodpsilxuo.supabase.co";

    const SUPABASE_KEY = "sb_publishable_MNkJhCDo4ToSb98V2rBPNA_Ubphvhw1";

    if (!window.supabase) {
        console.error("Biblioteca Supabase não foi carregada.");
        window.supabasePronto = false;
        return;
    }

    try {

        window.supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
            );

        window.supabasePronto = true;

        console.log("✅ Supabase conectado com sucesso!");

    } catch (erro) {

        console.error(
            "❌ Erro ao criar conexão com Supabase:",
            erro
        );

        window.supabasePronto = false;

    }

})();
