import React from "react";
import * as ListAPIUtil from "../util/list_api_util";

export const FETCH_ALL_LISTS = "FETCH_ALL_LISTS";
export const CREATE_NEW_LIST = "CREATE_NEW_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const FETCH_A_LIST = "FETCH_A_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";

export const GetAllLists = lists => {
    return {
        type: FETCH_ALL_LISTS,
        lists
    };
};

export const createList = list => {
    return {
        type: CREATE_NEW_LIST,
        list
    };
};

export const updateAList = list => {
    return {
        type: UPDATE_LIST,
        list
    };
};

const fetchAList = ({ list, tasks }) => {
    return {
        type: FETCH_A_LIST,
        list,
        tasks
    };
};

const clearErrors = () => {
    return {
        type: CLEAR_LIST_ERRORS
    };
};

const removelist = ({ listId, taskIds }) => {
    return {
        type: DELETE_LIST,
        listId,
        taskIds
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_LIST_ERRORS,
        errors
    };
};

export const fetchAllLists = () => {
    return dispatch => {
        return ListAPIUtil.fetchAllLists().then(lists => {
            return dispatch(GetAllLists(lists));
        });
    };
};

export const createNewList = list => {
    return dispatch => {
        return ListAPIUtil.createList(list).then(
            list => {
                return dispatch(createList(list));
            },
            errors => {
                return dispatch(receiveErrors(errors.responseJSON));
            }
        );
    };
};

export const updateList = list => {
    return dispatch => {
        return ListAPIUtil.updateList(list).then(
            list => {
                return dispatch(updateAList(list));
            },
            errors => {
                return dispatch(receiveErrors(errors.responseJSON));
            }
        );
    };
};

export const deleteList = id => {
    return dispatch => {
        return ListAPIUtil.deleteList(id).then(({ task_ids: taskIds }) => {
            return dispatch(removelist({ taskIds, listId: id }));
        });
    };
};

export const fetchList = id => {
    return dispatch => {
        return ListAPIUtil.fetchListsTask(id).then(list => {
            return dispatch(fetchAList(list));
        });
    };
};

export const clearListErrors = () => {
    return dispatch => {
        return dispatch(clearErrors());
    };
};