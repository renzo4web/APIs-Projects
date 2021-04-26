export const getCategoriesAPI = async (count = 4) => {
  try {
    const res = await fetch(
      `https://jservice.io/api/categories?count=${count}`
    );
    const results = await res.json();
    console.log(results);
    return results;
  } catch (e) {
    console.warn(e);
  }
};

export const getQuestions = async (categoryIds) => {
  try {
    const promises = categoryIds.map(({ id }) =>
      fetch(`https://jservice.io/api/clues?category=${id}`)
    );
    const allPromises = await Promise.all(promises);
    const responses = await Promise.all(
      allPromises.map((clue) => clue.json())
    );
    return responses;
  } catch (e) {
    console.warn(e);
  }
};
