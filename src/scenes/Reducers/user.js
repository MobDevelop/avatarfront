import userType from "../Actions";
const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  emailaddress: "",
  mobilephone: "",
  password: ""
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case userType.SET_USER: {
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        username: action.username,
        emailaddress: action.emailaddress,
        mobilephone: action.mobilephone,
        password: action.password
      };
    }
    default: {
      return state;
    }
  }
}
export default userReducer;
