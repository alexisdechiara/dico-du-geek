export async function fetchEtymology(slug: string) {
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


    interface Page {
        title: string;
        articles: Array<Article>;
    }

    interface Article {
        entry: string;
        abbreviation: string;
        etymologies: Array<String>;
    }

    const json = await response.json();
    const data = json.data;
    let res: Page = { title: data.page[0].titre, articles: Array<Article>() }
    data.page[0].articles.forEach(article => {
        let a: Article = {
            entry: article.entree,
            abbreviation: article.abreviation,
            etymologies: Array<String>()
        };
        article.sens.forEach(sens => {
            if (sens.sens_id != null) {
                a.etymologies.push(sens.sens_id.etymologie ? sens.sens_id.etymologie : ' ');
            }
        });
        res.articles.push(a);
    });

    return res;
}