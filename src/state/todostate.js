export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {};

const initialState = 0;

//counter reducer
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state - 1;
  }
};
