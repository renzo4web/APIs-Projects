export const callAPI = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const {results} = await res.json();
        console.log(results);
        return results;
    } catch (e) {
        console.warn(e);
    }
};