

var typed = new Typed(".fullstack-text",{
  strings: ["Software Engineer" , "Web Developer", "ERP Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true

})

let burgerBttn = document.querySelector(".bur-open");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBttn.onclick = function(){
  if (!isBurgerOpen){
    burgerMenu.style.display = "block";
    burgerBttn.style.backgroundPosition = "center left 50px, center";
    isBurgerOpen = true;
  }
  else if (isBurgerOpen){
    burgerMenu.style.display = "none";
    burgerBttn.style.backgroundPosition = "center, center left 50px";
    isBurgerOpen = false;
  }
}

/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */
