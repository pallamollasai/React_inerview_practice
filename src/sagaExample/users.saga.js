// import {all, call, put, takeLatest} from "redux-saga/effects";

// function* getUsers() {
//     try {
//         const users = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
//         yield put({type: "GET_USERS_SUCCESS", payload: users.data});
//     } catch(err) {

//     }
// }

// export default function* watchUser() {
//     yield all([
//         takeLatest("GET_USERS", getUsers);
//     ])
// }
