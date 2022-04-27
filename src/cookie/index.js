import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name,data)  => {
  console.log('setCookie');
  const option = {
    path: '/',
    //httpOnly: true,
    //expires: Math.floor(Date.now() / 1000) + (60 * 60)
  }
  cookies.set(name,data,option); 
}

export const getCookie = (name)  => {
  return cookies.get(name)
}

export const removeCookie = (name)  => {
  cookies.remove(name)
}

export const checkCookie = (name) => {
  if(cookies.get(name))
    return true
  return false
}