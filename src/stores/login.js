import { postLogin } from '@/api';

const activity = {
  namespaced: true,
  state: {
    isLoading: false,
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async doLogin({ commit }, data) {
      try {
        commit('setIsLoading', true);
        const response = await postLogin(data);
        console.warn(response);
        // if (response.data.error === 0) {data.data.notifications);
        // }
        commit('setIsLoading', false);
      } catch (e) {
        throw e;
      }
    },
  },
};

export default activity;
