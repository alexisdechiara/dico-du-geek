export async function fetchAllforLexical(slug: string) {
    const query = `
                query getAll($slug: String){
                    article (search: $slug, sort: "entree", filter: {status: {_eq: "published"}, slug: {_nnull:true}}) {
                        entree
                        abreviation
                        slug
                    }
                }
            `;
    return await fetchAll(slug, import.meta.env.API_URL, query);
}

export async function fetchAllForSearchbar(slug: string, url: string) {
    const query = `
                query getAll($slug: String){
                    article (search: $slug, sort: "entree", filter: {status: {_eq: "published"}, slug: {_nnull:true}}, limit: 5) {
                        entree
                        abreviation
                        slug
                    }
                }
            `;
    return await fetchAll(slug, url, query);
}

export async function fetchAll(slug: string, url: string, query: string) {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: query,
            variables: {
                slug: slug,
            },
        }),
    });

    interface Article {
        entry: string;
        abbreviation: string;
        slug: string;
    }

    const json = await response.json();
    const data = json.data;
    let res: Array<Article> = Array<Article>();
    data.article.forEach(article => {
        let a: Article = {
            entry: article.entree,
            abbreviation: article.abreviation,
            slug: article.slug
        };
        res.push(a);
    });

    return res;
}