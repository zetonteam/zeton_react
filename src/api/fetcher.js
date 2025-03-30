const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}

const getAuthToken = () => {
  const storage = localStorage.getItem("token");
  if (!storage) {
    return null;
  }

  return {
    "Authorization": `Bearer ${storage}`
  };
}

const get = (url) => fetch(url, {
  headers: {
    ...defaultHeaders,
    ...getAuthToken()
  }
}).then(res => res.json());

const post = async (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      ...defaultHeaders,
      ...getAuthToken()
    },
    body: JSON.stringify(Object.fromEntries(data.entries()))
  }).then(res => res.json());
}

export default Object.freeze({
  get,
  post
})