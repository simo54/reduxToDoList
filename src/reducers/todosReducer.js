// Todo Reducer set up.
const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * Math.floor(1000)), // Assign random id to todo
          name: payload.name, // Assign name
        },
      ];
    case "DELETE_TODO":
      // Copy of the initial state due process security
      const copyOfInitialState = [...state];
      // Find object to remove
      const i = copyOfInitialState.findIndex((x) => x.id === payload.id);
      // Remove the todo that needs to be deleted
      copyOfInitialState.splice(i, 1);
      return [...copyOfInitialState];
    default:
      return state;
  }
  return state;
};

export default todoReducer;
