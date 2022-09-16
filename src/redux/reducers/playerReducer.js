import {
    PLAY_STATE, SHUFFLE_STATE,
    REPEAT_STATE
} from "../actions";

const initialState = {
    play: false,
    shuffle: false,
    repeat: true
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_STATE:
            return {
                ...state,
                play: !state.play
            };
        case SHUFFLE_STATE:
            return {
                ...state,
                shuffle: !state.shuffle
            };
        case REPEAT_STATE:
            return {
                ...state,
                repeat: !state.repeat
            };
        default:
            return state;
    }
};

export default playerReducer;
