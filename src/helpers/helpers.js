/* 
Functions to construct valid api calls
*/

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
