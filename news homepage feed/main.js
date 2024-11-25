document.getElementById("menu").addEventListener("click", function (params) {
    const content = document.querySelector(".mobileview")
             content.style.display = "block"
})

document.getElementById("close").addEventListener("click", function (params) {
      const content = document.querySelector(".mobileview")
             content.style.display = "none"
})
