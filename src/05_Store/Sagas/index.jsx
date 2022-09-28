/* FILE TO MERGE ALL SAGAS ON ONE ROOT */
import { fork } from "redux-saga/effects";
import mainSagas from "./SMain";

export default function* rootSaga() {
	yield fork(mainSagas);
}
