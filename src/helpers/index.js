import Cookie from 'js-cookie';

export const getCookies = key => Cookie.get(key);
export const setCookies = (key, value) => {
  Cookie.set(key, value);
};
export const removeCookies = key => Cookie.remove(key);

export const requireAuth = (to, from, next) => {
  const token = getCookies('token');
  if (!token) {
    next({
      path: '/',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};
