
export const users = [{ username: 'zeton', userPassword: 'zeton' }]

export const isBrowser = () => typeof window !== "undefined";

const alertText = 'Błędny login lub hasło!';

export const checkLog = (logValue, item) => {
  let log = false;
  if (item === 'user') { users.map(item => { item.username === logValue && (log = true) }) }
  if (item === 'password') { users.map(item => { item.userPassword === logValue && (log = true) }) }
  console.log(logValue, item);
  return log;
}

export const authorise = (user, password) => {
  if (isBrowser() && (checkLog(user, 'user') === true && checkLog(password, 'password') === true)) { setToken(user); return true } else { return window.alert(alertText) }
}

const setToken = (user) => {  
  if (isBrowser()) {return window.localStorage.setItem("token", user)};
}

export const getUser = () => {  
  if (isBrowser()) {return window.localStorage.getItem("token")};
}

export const removeUser = () => {  
  if (isBrowser()) {return window.localStorage.removeItem("token")};
}
