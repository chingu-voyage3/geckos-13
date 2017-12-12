/*
Functions to construct valid api calls
*/

// tokens = ["drinks", "with", "and"]
// params = ["apples", bananas]
export const queryFactory = (
  baseUrl,
  apiKey,
  tokens = undefined,
  params = undefined
) => {
  // array to gather the query into
  let queryArr = [];

  // http://addb.absolutdrinks.com/
  queryArr.push(baseUrl);

  // http://addb.absolutdrinks.com/drinks
  queryArr.push(tokens.shift());

  params && queryArr.push(queryParams(params, tokens));
  queryArr.push('?appId=15777');

  return queryArr.join('');
};

const queryParams = (params, tokens) => {
  let ret = `/${tokens.shift()}`;
  return params.reduce((res, curr, i, arr) => {
    return i < arr.length - 1
      ? `${res}/${curr}/${tokens[0]}`
      : `${res}/${curr}`;
  }, ret);
};

/*
Factory functions to extract neccessary information from the results from api calls
*/
export const cocktailThumbnailFactory = cocktailResult =>
  cocktailResult.map(cocktail => getCocktailThumbnailInfo(cocktail));

const getCocktailThumbnailInfo = cocktail => ({
  id: cocktail.id,
  name: cocktail.name,
  skill: cocktail.skill,
  hasVideo: 'videos' in cocktail,
  tastes: cocktail.tastes,
  img: `img/${cocktail.id}.png`,
});

export const cocktailFactory = cocktailResult =>
  cocktailResult.map(cocktail => getCocktailInfo(cocktail));

const getCocktailInfo = cocktail => ({
  id: cocktail.id,
  name: cocktail.name,
  skill: cocktail.skill,
  video: cocktail.video,
  isAlcoholic: cocktail.isAlcoholic,
  isCarbonated: cocktail.isCarbonated,
  isHot: cocktail.isHot,
  servedIn: cocktail.servedIn,
  ingredient: cocktail.ingredients,
  tools: cocktail.tools,
  description: cocktail.description,
  descriptionPlain: cocktail.descriptionPlain,
  tastes: cocktail.tastes,
  img: `img/${cocktail.id}.png`,
});
