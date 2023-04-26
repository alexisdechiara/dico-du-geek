export async function fetchDefinition(slug: string) {
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
                            classe_gramaticale
                            sens {
                                sens_id (filter: {status: {_eq: "published"}}) {
                                    definition
                                    exemple
                                    synonymes {
                                        article_id(filter: {slug: { _neq: $slug }, status: {_eq: "published"}}) {
                                            entree
                                            abreviation
                                            slug
                                        }
                                    }
                                    antonymes {
                                        article_id(filter: {slug: { _neq: $slug }, status: {_eq: "published"}}) {
                                            entree
                                            abreviation
                                            slug
                                        }
                                    }
                                    associes {
                                        article_id(filter: {slug: { _neq: $slug }, status: {_eq: "published"}}) {
                                            entree
                                            abreviation
                                            slug
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