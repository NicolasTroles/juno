// Types
import {
    GET_CHARACTERS,
    GET_CHARACTER,
} from './types';

const INITIAL_STATE = {
    characters: {
        data: [],
        isLoading: false,
    },
    character: {
        data: {},
        isLoading: false,
    },
}

const marvelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CHARACTERS.REQUEST:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isLoading: true,
                },
            }

        case GET_CHARACTERS.SUCCESS:
            return {
                ...state,
                characters: {
                    data: action.data,
                    isLoading: false,
                },
            }

        case GET_CHARACTER.REQUEST:
            return {
                ...state,
                character: {
                    ...state.character,
                    isLoading: true,
                },
            }

        case GET_CHARACTER.SUCCESS:
            return {
                ...state,
                character: {
                    data: action.data,
                    isLoading: false,
                },
            }

        default:
            return state

    }
}

export default marvelReducer;

