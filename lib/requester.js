export var requester = {
    urlApi: "http://localhost/api-horta/",
    get: async (route,data,callback) => {
        await axios.get(requester.urlApi+route,{
            data
        }).then(function (response) {
            callback(response)
          })
          .catch(function (error) {
            console.error(error);
          })
    },
    post:  async (route,data,callback) => {
      await axios.post(requester.urlApi+route,data).then(function (response) {
          callback(response)
        })
        .catch(function (error) {
          console.error(error);
        })
  }
} 