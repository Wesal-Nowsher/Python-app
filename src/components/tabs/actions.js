

export const closetabs = (tabs) => async (dispatch) => {

    console.log("wesal is called")
    dispatch({
        type: "tabs",
        payload:tabs
    })
};