import Cookie from 'js-cookie';

export const getCookies = key => Cookie.get(key);
export const setCookies = (key, value) => {
  Cookie.set(key, value);
};
export const removeCookies = key => Cookie.remove(key);
