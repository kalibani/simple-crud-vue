import { getBooks, getBook, postBook, putBook, deleteBook } from '@/api';
import router from '../router';

const activity = {
  namespaced: true,
  state: {
    isLoading: false,
    isLoadingId: false,
    books: [],
    book: {},
    errorMessage: '',
    meta: {},
    successMessage: '',
  },
  getters: {
    isLoading: state => state.isLoading,
    errorMessage: state => state.errorMessage,
    books: state => state.books,
    meta: state => state.meta,
    isLoadingId: state => state.isLoadingId,
    book: state => state.book,
    successMessage: state => state.successMessage,
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
    setSuccessMessage(state, value) {
      state.book = value;
    },
  },
  actions: {
    async fetchBooks({ commit }, params) {
      try {
        commit('setIsLoading', true);
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
        return data;
      } catch (e) {
        throw e;
      }
    },

    async addBook({ commit }, payload) {
      try {
        commit('setIsLoadingId', true);
        commit('setErrorMessage', '');
        commit('setSuccessMessage', '');

        const year = {
          publisher_year: payload.publisher_year.slice(0, 4),
        };

        const newPayload = {
          ...payload, ...year,
        };

        const { status } = await postBook(newPayload);
        if (status === 200) {
          commit('setSuccessMessage', 'You have been successfully add a book');
        } else {
          commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        }
        commit('setIsLoadingId', false);
      } catch (e) {
        throw e;
      }
    },

    async updateBook({ commit }, data) {
      try {
        commit('setIsLoadingId', true);
        commit('setErrorMessage', '');

        const {
          createdAt,
          updatedAt,
          ...filteredPayload
        }
          = data.form;

        const year = {
          publisher_year: String(data.form.publisher_year).slice(0, 4),
        };

        const newPayload = {
          ...filteredPayload, ...year,
        };
        const { status } = await putBook(data.id, newPayload);
        if (status === 200) {
          commit('setSuccessMessage', 'You have been successfully update a book');
          router.push('/book');
        } else {
          commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        }
        commit('setIsLoadingId', false);
      } catch (e) {
        throw e;
      }
    },

    async removeBook({ commit }, id) {
      try {
        commit('setIsLoading', true);
        commit('setErrorMessage', '');

        const { status } = await deleteBook(id);
        if (status === 200) {
          commit('setSuccessMessage', 'You have been successfully remove a book');
        } else {
          commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        }
        commit('setIsLoading', false);
      } catch (e) {
        throw e;
      }
    },
  },
};

export default activity;
