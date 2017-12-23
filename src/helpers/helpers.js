/*
Functions to construct valid api calls
*/

/*
Factory functions to extract neccessary information from the results from api calls
*/
export const cocktailThumbnailFactory = cocktailResult =>
  cocktailResult.map(cocktail => getCocktailInfo(cocktail));

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
  hasVideo: 'videos' in cocktail,
  video: `http://assets.absolutdrinks.com/videos/${cocktail.id}.mp4`,
  videoId: cocktail.videos[0].video,
  isAlcoholic: cocktail.isAlcoholic,
  isCarbonated: cocktail.isCarbonated,
  isHot: cocktail.isHot,
  servedIn: cocktail.servedIn,
  ingredients: cocktail.ingredients,
  tools: cocktail.tools,
  description: cocktail.description,
  descriptionPlain: cocktail.descriptionPlain,
  tastes: cocktail.tastes,
  img: `http://assets.absolutdrinks.com/drinks/transparent-background-white/${
    cocktail.id
  }.png`,
});
