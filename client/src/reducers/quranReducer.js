import {
  QURAN_AYAT_FAIL,
  QURAN_AYAT_REQUEST,
  QURAN_AYAT_SUCCESS,
  QURAN_INDEX_FAIL,
  QURAN_INDEX_REQUEST,
  QURAN_INDEX_SUCCESS,
} from '../constants/Quran_Constants';

export const quranIndexReducer = (state = { suraList: [] }, action) => {
  switch (action.type) {
    case QURAN_INDEX_REQUEST:
      return { loading: true, suraList: [] };
    case QURAN_INDEX_SUCCESS:
      return {
        loading: false,
        suraList: action.payload.suraList,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    case QURAN_INDEX_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const quranAyahReducer = (
  state = { AR: [], BN: [], EN: [], audio: [] },
  action
) => {
  switch (action.type) {
    case QURAN_AYAT_REQUEST:
      return { loading: true, AR: [], BN: [], EN: [], audio: [] };
    case QURAN_AYAT_SUCCESS:
      return {
        loading: false,
        AR: action.payload.AR,
        BN: action.payload.BN,
        EN: action.payload.EN,
        audio: action.payload.audio,
        page: action.payload.page,
        pages: action.payload.pages,
        details: action.payload.details,
        fullAudio: action.payload.fullAudio,
      };
    case QURAN_AYAT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
