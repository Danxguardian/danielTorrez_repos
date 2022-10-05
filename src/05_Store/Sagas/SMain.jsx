import { call, put, takeLatest } from "@redux-saga/core/effects";

import { getService } from "../../07_Services/getServices";
import {
	getPokeSuccess,
	getPokeError,
	getPokeDetailSuccess,
	getPokeDetailError,
} from "../Actions/AMain";
import * as actionTypes from "../Actions/actionTypes";
import { hideLoader, showLoader } from "../Actions/ALoader";
import { ENDPOINTS } from "../../04_Constans/endpoints";

export function* getPokeRequest({ payload }) {
	const { url } = payload || null;
	yield put(showLoader());
	try {
		const infoData = yield call(
			getService,
			url ? url : ENDPOINTS["pokemon"]
		);

		yield put(getPokeSuccess(infoData.data));
		yield put(hideLoader());
	} catch (error) {
		yield put(hideLoader());
		yield put(getPokeError(error));
	}
}

export function* getPokeDetailRequest({ payload }) {
	const { id } = payload;

	yield put(showLoader());
	try {
		const detailData = yield call(
			getService,
			ENDPOINTS["pokemonDetail"].replace("{id}", id)
		);

		yield put(getPokeDetailSuccess(detailData.data));
		yield put(hideLoader());
	} catch (error) {
		yield put(hideLoader());
		yield put(getPokeDetailError(error));
	}
}

export default function* mainSagas() {
	yield takeLatest(actionTypes.GET_POKE_REQUEST, getPokeRequest);
	yield takeLatest(actionTypes.GET_POKE_DETAIL_REQUEST, getPokeDetailRequest);
}
