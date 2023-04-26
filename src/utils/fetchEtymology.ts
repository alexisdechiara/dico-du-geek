export async function fetchEtymology(slug: string) {
    const response = await fetch("http://localhost:8055/graphql", {
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
                                    etymologie
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