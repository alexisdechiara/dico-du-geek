export async function FetchAll(letter: string) {
    const response = await fetch(import.meta.env.DIRECTUS_API, {
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