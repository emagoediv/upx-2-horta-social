export var requester = {
    urlApi: "http://localhost/api-horta/",
    sessionToken: localStorage.getItem("sessionToken"),
    requestToken: localStorage.getItem("requestToken"),
    get: async (route,callback) => {
        await axios.get(requester.urlApi+route,{}, {
          headers: {
            Authorization: `Bearer ${requester.sessionToken}`,
            RequestAuth: `Bearer ${requester.requestToken}` 
          }
        }).then(function (response) {
            callback(response)
          })
          .catch(function (error) {
            console.error(error);
          })
    },
    post:  async (route,data,callback) => {
      await axios.post(requester.urlApi+route, data, {
        headers: {
          Authorization: `Bearer ${requester.sessionToken}`,
          RequestAuth: `Bearer ${requester.requestToken}` 
        }
      }).then(function (response) {
          callback(response)
        })
        .catch(function (error) {
          console.error(error);
        })
  }
} 