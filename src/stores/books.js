import { getBooks, getBook } from '@/api';
// import router from '../router';

const activity = {
  namespaced: true,
  state: {
    isLoading: false,
    isLoadingId: false,
    books: [],
    book: {},
    errorMessage: '',
    meta: {},
  },
  getters: {
    isLoading: state => state.isLoading,
    errorMessage: state => state.errorMessage,
    books: state => state.books,
    meta: state => state.meta,
    isLoadingId: state => state.isLoadingId,
    book: state => state.book,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setErrorMessage(state, value) {
      state.errorMessage = value;
    },
    setBooks(state, value) {
      state.books = value;
    },
    setMeta(state, value) {
      state.meta = value;
    },
    setIsLoadingId(state, value) {
      state.isLoadingId = value;
    },
    setBook(state, value) {
      state.book = value;
    },
  },
  actions: {
    async fetchBooks({ commit }, params) {
      try {
        commit('setIsLoading', true);
        commit('setErrorMessage', '');
        const { data, status } = await getBooks(params);
        if (status === 200) {
          commit('setBooks', data.dataBook);
          commit('setMeta', data.meta);
        } else {
          commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        }
        commit('setIsLoading', false);
      } catch (e) {
        throw e;
      }
    },

    async fetchBook({ commit }, id) {
      try {
        commit('setIsLoadingId', true);
        commit('setErrorMessage', '');
        const { data, status } = await getBook(id);
        if (status === 200) {
          commit('setBook', data.dataBook);
        } else {
          commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        }
        commit('setIsLoadingId', false);
      } catch (e) {
        throw e;
      }
    },
  },
};

export default activity;
