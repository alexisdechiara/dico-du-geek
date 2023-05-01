export async function fetchAll(value: string) {
    const response = await fetch("http://localhost:8055/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getAll($value: String){
                    article (search: $value, sort: "entree", filter: {status: {_eq: "published"}}) {
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

    const json = await response.json();
    const data = json.data;
    return data.article;
}