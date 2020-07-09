import { getBooks } from '@/api';
// import { setCookies } from '@/helpers';
// import router from '../router';

const activity = {
  namespaced: true,
  state: {
    isLoading: false,
    books: [],
    errorMessage: '',
  },
  getters: {
    isLoading: state => state.isLoading,
    errorMessage: state => state.errorMessage,
    books: state => state.books,
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
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        commit('setIsLoading', true);
        commit('setErrorMessage', '');
        const params = {
          page: 1,
          limit: 10,
        };
        const { data, status } = await getBooks(params);
        console.warn(data, status);
        // if (status === 200 && data.message) {
        //   commit('setErrorMessage', data.message);
        // } else if (status === 200 && data.books) {
        //   setCookies('token', data.token);
        //   router.push('/home');
        // } else {
        //   commit('setErrorMessage', 'Oops, something happen please refresh and try again!');
        // }
        commit('setIsLoading', false);
      } catch (e) {
        throw e;
      }
    },
  },
};

export default activity;
