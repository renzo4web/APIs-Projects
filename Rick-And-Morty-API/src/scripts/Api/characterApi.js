export let currCharacters = [];

export const callAPI = async ({ next = "" } = {}) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character${
        next > 1 ? `?page=${next}` : ""
      }`
    );

    const { results, info } = await res.json();

    currCharacters = [...currCharacters, ...results];
    return results;
  } catch (e) {
    console.warn(e);
  }
};
