import { empty } from "svelte/internal";

export async function fetchRelation(slug: string) {
    const response = await fetch(import.meta.env.DIRECTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getRelation($slug: String){
                    page(filter: { articles: { slug: { _eq: $slug } } }) {
                        titre
                        articles(filter: { status: { _eq: "published" } }) {
                            entree
                            abreviation
                            relations {
                                type
                                article {
                                    entree
                                    abreviation
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

    interface Page {
        title: string;
        articles: Array<Article>;
    }
    interface Relation {
        type: string;
        article: Article;
    }

    interface Article {
        entry: string;
        abbreviation: string;
        slug?: string;
        definitions?: Array<String>;
        relations?: Array<Relation>;
    }

    const json = await response.json();
    const data = json.data;
    let res: Page = { title: data.page[0].titre, articles: Array<Article>() }
    data.page[0].articles.forEach(article => {
        let a: Article = {
            entry: article.entree,
            abbreviation: article.abreviation,
            relations: Array<Relation>()
        };
        article.relations.forEach(relation => {
            if (relation.type && relation.article) {
                let relatedArticle: Article = {
                    entry: relation.article.entree,
                    slug: relation.article.slug,
                    abbreviation: relation.article.abreviation,
                    definitions: Array<String>()
                }

                relation.article.sens.forEach(sens => {
                    if (sens.sens_id != null) {
                        relatedArticle.definitions.push(sens.sens_id.definition);
                    }
                })

                let related: Relation = {
                    type: relation.type,
                    article: relatedArticle
                }

                a.relations.push(related);
            }
        });
        res.articles.push(a);
    });

    return res;

}