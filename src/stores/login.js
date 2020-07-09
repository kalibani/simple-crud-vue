import { postLogin } from '@/api';
import { setCookies } from '@/helpers';
import router from '../router';

const activity = {
  namespaced: true,
  state: {
    isLoading: false,
    errorMessage: '',
  },
  getters: {
    isLoading: state => state.isLoading,
    errorMessage: state => state.errorMessage,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setErrorMessage(state, value) {
      state.errorMessage = value;
    },
  },
  actions: {
    async doLogin({ commit }, payload) {
      try {
        commit('setIsLoading', true);
        commit('setErrorMessage', '');
        const { data, status } = await postLogin(payload);
        if (status === 200 && data.message) {
          commit('setErrorMessage', data.message);
        } else if (status === 200 && data.token) {
          setCookies('token', data.token);
          router.push('/home');
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
