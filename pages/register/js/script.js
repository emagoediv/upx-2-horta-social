import { requester } from "../../../lib/requester.js"

const form = document.getElementById("firstForm") 
const selectUf = document.getElementById("ufs")
const selectCity = document.getElementById("citys")
document.addEventListener("DOMContentLoaded", () => {
    //config.loadCitys()
    config.loadUfs()
})

var config = {
    loadCitys: selectUf.addEventListener("change", async e => {
        let ufCodigo = e.target.value
        await requester.get("citys/"+ufCodigo, response => {
            selectCity.innerHTML = ""
            let options = "<option value=''>Selecione uma Cidade</option>"
            console.log("response")
            console.log(response)

            for (let [i,city] of Object.entries(response.data)) {
                options += `
                    <option value='${city.id_cidade}'>${city.cidade}</option>
                `
            }
            selectCity.innerHTML = options
        })
    }),
    loadUfs: async () => {
        await requester.get("uf", response => {
            selectUf.innerHTML = ""
            let options = "<option value=''>Selecione uma UF</option>"
            console.log("response")
            console.log(response)

            for (let [i,uf] of Object.entries(response.data)) {
                options += `
                    <option value='${uf.id_estado}'>${uf.uf}</option>
                `
            }
            selectUf.innerHTML = options
        })
    },
    submitRegister: form.addEventListener("submit", async e => {
        e.preventDefault()
        let datas = new FormData(form)
        await requester.post("register", datas, response => {
            if (response.data.success) {
                Swal.fire({
                    title: "Cadastro Realizado",
                    text: "Realize seu login",
                    icon: "success"
                  });
                let itv = setInterval(() => {
                    window.location.href = "./../login"
                },4000)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.data.error,
                    footer: '<a href="">Clique para recarregar</a>'
                  });
            }
        })
    })
}