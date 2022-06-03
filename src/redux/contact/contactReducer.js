const INITIAL_STATE = {
    contact: [],
  };
  
  export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADDCONTACT":
        const newArr = [...state.contact];
        newArr.unshift(action.payload)
        console.log(action.payload);
        
        return {
          ...state,
          contact: newArr,
        };
    }
  
    return state;
  }