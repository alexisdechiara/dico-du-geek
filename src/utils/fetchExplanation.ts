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

    interface Page {
        title: string;
        articles: Array<Article>;
    }

    interface Article {
        entry: string;
        abbreviation: string;
        explanations: Array<String>;
    }

    const json = await response.json();
    const data = json.data;
    let res: Page = { title: data.page[0].titre, articles: Array<Article>() }
    data.page[0].articles.forEach(article => {
        let a: Article = {
            entry: article.entree,
            abbreviation: article.abreviation,
            explanations: Array<String>()
        };
        article.sens.forEach(sens => {
            if (sens.sens_id != null) {
                a.explanations.push(sens.sens_id.explication ? sens.sens_id.explication : '	');
            }
        });
        res.articles.push(a);
    });

    return res;
}