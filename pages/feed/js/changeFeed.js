document.querySelectorAll(".btn-feed").forEach(btn => {
    btn.addEventListener("click", e => {
        if (!btn.classList.contains("selected")) {
            document.querySelector(".btn-feed.selected").classList.toggle("selected")
            btn.classList.toggle("selected")
        }
    })
})