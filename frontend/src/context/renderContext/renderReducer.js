const renderReducer = (state, action) => {
    switch (action.type) {
        case 'LOADED':
            return {
                isLoading: true,
            };
        case 'STOPPED':
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};

export default renderReducer;
