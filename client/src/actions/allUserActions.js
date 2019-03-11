import axios from "axios";

import {GET_ERRORS, SET_ALL_USER, USER_LOADING} from "./types";

export const getAllUsers = () => dispatch => {
    dispatch({
        type: USER_LOADING
    });

    axios
        .get("/api/users/all-users")
        .then(res => {
            dispatch({
                type: SET_ALL_USER,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};


