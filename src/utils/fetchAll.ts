export async function fetchAll(value: string) {
    const response = await fetch("http://localhost:8055/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getAll($value: String){
                    article (search: $value, sort: "entree", filter: {status: {_eq: "published"}, slug: {_nnull:true}}) {
                        entree
                        abreviation
                        slug
                    }
                }
            `,
            variables: {
                value: value
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