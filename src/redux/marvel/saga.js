/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

/* Service */
import { AuthenticationService, BusinessService } from 'services';

/* Types */
import {
    FETCH_DOMAIN,
} from './types';

import { SHOW_TOAST } from '../toast/types';

/* Utils */
import { setBusinessID, removeVerificationToken } from 'utils/auth';

function* fetchCharacters(action) {
    try {
        const response = yield call(AuthenticationService.checkSubDomain, action.version, action.subDomain);

        if (response.status === 200) {
            yield put({ type: FETCH_DOMAIN.SUCCESS, response: response.data, status: response.status });
            setBusinessID(response.data.id);
        }
    } catch (e) {
        yield put({ type: FETCH_DOMAIN.FAILURE, status: e.response.status });
    }
}

export const authenticationSaga = [
    takeEvery(FETCH_DOMAIN.REQUEST, fetchCharacters),
];
