export async function fetchAll(letter: string) {
    const response = await fetch("http://localhost:8055/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                query getAll($letter: String){
                    article (search: $letter, sort: ["entree", "abreviation"], filter: {status: {_eq: "published"}}) {
                        entree
                        abreviation
                        slug
                    }
                }
            `,
            variables: {
                letter: letter
            },
        }),
    });

    const json = await response.json();
    const data = json.data;
    return data.article;
}