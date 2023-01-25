import { combineReducers } from "redux";
// import { allCollectionsReducer } from "./allCollectionsReducer";
// import { eventReducer } from "./eventReducer";
import feedbackReducer from "./feedbackReducer";
// import { hotelReducer } from "./hotelReducer";
// import { packageReducer } from "./packageReducer";
// import { pageReducer } from "./pageReducer";
// import {ratingByUserReducer} from "./reviewRatingReducer"

import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  feedback: feedbackReducer,
  // packs: packageReducer,
  // hotels :hotelReducer,
  // events: eventReducer,
  // pages: pageReducer,
  // collections: allCollectionsReducer,
  // reviews : ratingByUserReducer
});
