function searchBookListReducer ( state = [], action) {
    switch (action.type) {    
        case 'ADD_SEARCH_BOOK_LIST':
            return action.books.items;

        default:
            return state;
    };
};

export default searchBookListReducer;