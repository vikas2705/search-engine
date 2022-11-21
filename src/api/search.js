const GOOGLE_DEV_KEY = process.env.REACT_APP_SEARCH_DEV_KEY;
const SEARCH_CX_KEY = process.env.REACT_APP_SEARCH_CX_KEY;

export const searchForQuery = searchQuery => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_DEV_KEY}&cx=${SEARCH_CX_KEY}&q=${searchQuery}`;

    return fetch(url)
        .then(response => response.json())
        .then(result => {
            return result;
        });
};
