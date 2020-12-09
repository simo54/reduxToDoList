// Todo Reducer set up.
const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * Math.floor(1000)),
          name: payload.name,
        },
      ];
    case "DELETE_TODO":
      const copyState = [...state];
      // Find if of object to remove
      const i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }

  return state;
};

export default todoReducer;
