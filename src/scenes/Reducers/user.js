import userType from "../Actions";
const initialState = {
  userData: []
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case userType.SET_USER: {
      return {
        ...state,
        userData: JSON.parse(JSON.stringify(action.userData))
      };
    }
    default: {
      return state;
    }
  }
}
export default userReducer;
