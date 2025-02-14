function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img= document.querySelector("#profile img")

    //subistituir a imagem
    if(html.classList.contains('light')) {
      //se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "/assets/robson-light.jpg")
    } else {
      //se tiver light mode, manter a imagem normal
      img.setAttribute("src", "/assets/robson-dark.jpg")  
    }
}
  