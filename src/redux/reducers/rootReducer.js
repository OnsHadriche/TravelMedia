import { combineReducers } from "redux";
// import { allCollectionsReducer } from "./allCollectionsReducer";
import { eventReducer } from "./eventReducer";
import feedbackReducer from "./feedbackReducer";
import { hotelReducer } from "./hotelReducer";
import { pageReducer } from "./pageReducer";
import { packageReducer } from "./packageReducer";

// import {ratingByUserReducer} from "./reviewRatingReducer"

import { userReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";
import { allCollectionsReducer } from "./allCollectionReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  feedback: feedbackReducer,
  packs: packageReducer,
  hotels: hotelReducer,
  events: eventReducer,
  pages: pageReducer,
  category: categoryReducer,
  collections: allCollectionsReducer,
  // reviews : ratingByUserReducer
});
