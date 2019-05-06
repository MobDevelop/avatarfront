export const createActionTypes = (base, actions = []) =>
  actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;

    return acc;
  }, {});

const userType = createActionTypes("userType", ["SET_USER"]);
export default userType;
