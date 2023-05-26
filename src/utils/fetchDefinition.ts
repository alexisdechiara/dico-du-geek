export async function fetchDefinition(slug: string) {
    const response = await fetch(import.meta.env.API_URL, {
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

    interface Page {
        title: string;
        articles: Array<Article>;
    }

    interface Article {
        entry: string;
        phonetic: string;
        abbreviation: string;
        grammatical_class: Array<String>;
        definitions: Array<String>;
        examples: Array<String>;
    }

    const json = await response.json();
    const data = json.data;
    let res: Page = { title: data.page[0].titre, articles: Array<Article>() };
    data.page[0].articles.forEach((article) => {
        let a: Article = {
            entry: article.entree,
            phonetic: article.phonetique,
            abbreviation: article.abreviation,
            grammatical_class: article.classe_gramaticale,
            definitions: Array<String>(),
            examples: Array<String>(),
        };
        article.sens.forEach((sens) => {
            if (sens.sens_id != null) {
                a.definitions.push(sens.sens_id.definition);
                a.examples.push(sens.sens_id.exemple ? sens.sens_id.exemple : "	");
            }
        });
        res.articles.push(a);
    });

    return res;
}
