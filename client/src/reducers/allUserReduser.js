import { SET_ALL_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    users: null,
    limit: null,
    currPage: null,
    allPages: null,
    totalUsers: null,
    loading: true
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ALL_USER:
            return {
                ...state,
                users: payload.docs,
                limit: payload.limit,
                currPage: payload.page,
                allPages: payload.pages,
                totalUsers: payload.total,
                loading: false
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
