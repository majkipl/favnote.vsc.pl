import {
  ADD_ITEM,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
} from "actions";

const initialState = {
  userID: "5f8d705289bcaf56a4f166bd",
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
