//const URL = "http://localhost:8080/carbon2count";
const URL = "https://mavle.dk/tomcat/carbon2count";


function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

function apiFacade() {
 /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

const login = (user, password) => {
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(URL + "/api/login", options)
  .then(handleHttpErrors)
  .then(res => {setToken(res.token)})
}

const fetchData = (ressource) => {
    const options = makeOptions("GET",true); //True add's the token
 return fetch(URL + ressource, options).then(handleHttpErrors);
 }

const makeOptions= (method,addToken,body) =>{
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
}

const getToken = () => {
  return localStorage.getItem('jwtToken')
}

const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}

const logout = () => {
  localStorage.removeItem("jwtToken");
}

function readJwtToken (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}

const getAllGroceries = (setGroceries) => {
  fetch(URL + "/api/produce")
    .then(res => res.json())
    .then((data) => {
      setGroceries(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
};

  return {
      makeOptions,
      setToken,
      getToken,
      loggedIn,
      login,
      logout,
      fetchData,
      readJwtToken,
      getAllGroceries,
  }
 }

 const facade = apiFacade();





 export default facade;
 
 