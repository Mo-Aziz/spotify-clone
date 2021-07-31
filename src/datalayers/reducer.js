export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:" BQDofsHqUiyHs5-dzENO0axGQP_Huma5QpzSBw_DCoWSgwYnOb3rik_aEGHCPgy0KWKCoWO2-778rdmRcyGmytlpCPydfwo2B5yg9oAs_QVNNJbFwIKytTlEVC4lMu2wsGzFTuecm5M5UifjciCBn0DG7-kL48oD1Q"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_PLAYLISTS":
        return{
          ...state,
          playlists: action.playlists
        }
    default:
      return state;
  }
};

export default reducer;
