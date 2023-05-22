export function addPreviousSearch(title: string, slug: string) {
    let searches = getPreviousSearch() || [];
    const jsonStorage = { title: title, slug: slug };
    const contained = searches.some(function (element) {
        return element.title === jsonStorage.title
    });

    if (!contained) {
        searches.unshift(jsonStorage);
        searches = searches.slice(0, 10);
        localStorage.setItem('previousSearch', JSON.stringify(searches));
    }
}


export function getPreviousSearch() {
    return localStorage.getItem('previousSearch') ? JSON.parse(localStorage.getItem('previousSearch')) : [];
}