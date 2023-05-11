export async function fetchRelation(slug: string) {
    const response = await fetch("http://localhost:8055/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getRelation($slug: String){
                    page(filter: { articles: { slug: { _eq: $slug } } }) {
                        titre
                        articles(filter: { status: { _eq: "published" } }) {
                            entree
                            relations {
                                type
                                article {
                                    entree
                                    slug
                                    sens {
                                        sens_id (filter: {status: {_eq: "published"}}) {
                                            definition
                                        }
                                    }
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