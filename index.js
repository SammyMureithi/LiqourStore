const header = document.querySelector( ".header" );
const bgImages = ["url('images/bg2.jpg')", "url('images/bg3.jpg')", "url('images/bg4.jpg')", "url('images/bg1.jpg')"];
const navigations = document.querySelectorAll( "a" );
const nav = document.querySelector( "nav" );
const menu = document.querySelector( "#menu" );
var x = window.matchMedia("(min-width: 780px)")

/**Background Images */
for (let i = 0; i < 4; i++) {
    setTimeout( function timer() {
        header.style.backgroundImage = bgImages[i];
    }, i * 3000);
}
/**Top navigations */
if ( x.matches ) {
    navigations.forEach( navigation => {
        navigation.addEventListener( "mousemove", () => {
            console.log( "Hello" )
            navigation.style.color = "greenyellow";
            navigation.style.backgroundColor = "white";
            navigation.style.transform = "scale(1.2)";
        } );
        navigation.addEventListener( "mouseleave", () => {
            navigation.style.background = "none";
            navigation.style.color = "white";
            navigation.style.transform = "scale(1)";
        })
    } )
}

let click = 0;
menu.addEventListener( "click", () => {
    if ( click == 0 ) {
        menu.setAttribute( "src", "images/close.png" );
        click = click + 1;
        console.log( click );
       
        nav.classList.add("navigation")
    }
    else {
        menu.setAttribute( "src", "images/Menu.png" );
        click = click - 1;
        console.log( click );
        nav.classList.remove("navigation")
    }
   
})