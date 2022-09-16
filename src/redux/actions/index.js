export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_TO_CATALOGUE = 'ADD_TO_CATALOGUE';
export const ADD_QUERY = 'ADD_QUERY';
export const LOADED_CATALOGUE = 'LOADED_CATALOGUE';
export const GET_CATALOGUE_ERROR = 'GET_CATALOGUE_ERROR';
export const LOADED_FAVOURITES = 'LOADED_FAVOURITES';
export const GET_FAVOURITES_ERROR = 'GET_FAVOURITES_ERROR';
export const PLAY_STATE = 'PLAY_STATE';
export const SHUFFLE_STATE = 'SHUFFLE_STATE';
export const REPEAT_STATE = 'REPEAT_STATE';


//action creator
export const addQueryAction = (query) => ({
    type: ADD_QUERY,
    payload: query
});

let headers = new Headers({
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
});

export const addToCatalogueAction = (query) => {
    return (dispatch, getState) => {
        fetch(process.env.REACT_APP_ENDPOINT_API + 'search?q=' + query, {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_TO_CATALOGUE,
                    payload: data.data
                });
                setTimeout(() => {
                    dispatch({
                        type: LOADED_CATALOGUE,
                    });
                }, 200);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: LOADED_CATALOGUE,
                });
                dispatch({
                    type: GET_CATALOGUE_ERROR,
                });
            });
    };
};

export const playPauseAction = () => ({
    type: PLAY_STATE,
});
export const shuffleAction = () => ({
    type: SHUFFLE_STATE,
});
export const repeatAction = () => ({
    type: REPEAT_STATE,
});

export const addToFavouriteAction = (company) => ({
    type: ADD_TO_FAVOURITE,
    payload: company
});



// export const addRemoveToFavouriteAction = (company) => {
//     return (dispatch, getState) => {
//         const actualStateFavourites = getState().favourite.list;
//         console.log(actualStateFavourites);
//         // if(actualStateFavourites.includes())
//         if (actualStateFavourites.filter(companyState => companyState._id !== company._id).length === 0) {
//             dispatch({
//                 type: REMOVE_FROM_FAVOURITE,
//                 payload: company
//             });
//         } else {
//             dispatch({
//                 type: ADD_TO_FAVOURITE,
//                 payload: company
//             });
//         }
//     };
// };

export const removeFromFavouriteAction = (company) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: company
});



// export const setLoadedAction = () => ({
//     type: LOADED,
// });

// export const getCatalogueErrorAction = () => ({
//     type: GET_CATALOGUE_ERROR,
// });
