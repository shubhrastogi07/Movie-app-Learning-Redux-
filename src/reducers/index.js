import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";
const intialMovieState = {
  list: [],
  favourites: [],
};
export default function movies(state = intialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    default:
      return state;
  }
}
