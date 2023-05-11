export async function fetchExplanation(slug: string) {
    const response = await fetch(import.meta.env.DIRECTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getDefinitionPage($slug: String){
                    page (filter: {articles: {slug: { _eq: $slug }}}) {
                        titre
                        articles (filter: {status: {_eq: "published"}}) {
                            entree
                            abreviation
                            phonetique
                            sens {
                                sens_id (filter: {status: {_eq: "published"}}) {
                                    explication
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                slug: slug,
            },
        }),
    });

    const json = await response.json();
    return json.data;
}