import { requester } from "../../../lib/requester.js"

const form = document.getElementById("formLogin")

var config = {
    login: form.addEventListener("submit", async e => {
        e.preventDefault()
        let datas = new FormData(form)
        await requester.post("login", datas, response => {
            if (response.data.success) {
                Swal.fire({
                    title: "Login Realizado",
                    text: "redirecionando...",
                    icon: "success"
                  });
                let itv = setInterval(() => {
                    window.location.href = "./../login"
                },4000)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "usuário ou senha incorreto",
                });
            }
        })
    })
}