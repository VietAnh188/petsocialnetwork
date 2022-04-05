const logoutReducer = (state, action) => {
    switch (action.type) {
        case 'LOADED':
            return {
                isMount: true,
            };
        case 'STOPPED':
            return {
                isMount: false,
            };
        default:
            return state;
    }
};

export default logoutReducer;
