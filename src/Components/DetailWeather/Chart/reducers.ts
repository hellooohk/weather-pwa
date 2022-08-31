export const chartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SAVE_TEMP": {
      return {
        ...state,
        temperature: action.temperature,
      };
    }
    case "SAVE_DATE": {
      return {
        ...state,
        date: action.date,
      };
    }
    case "RECEIVED": {
      return {
        ...state,
        isReceived: action.isReceived,
      };
    }
    default:
      return state;
  }
};
