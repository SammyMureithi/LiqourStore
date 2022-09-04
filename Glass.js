const header = document.querySelector( ".header" );
const bgImages = ["url('images/bg2.jpg')", "url('images/bg3.jpg')", "url('images/bg4.jpg')", "url('images/bg1.jpg')"];
const navigations = document.querySelectorAll( "a" );
const nav = document.querySelector( "nav" );
const menu = document.querySelector( "#menu" );
var x = window.matchMedia( "(min-width: 780px)" );
const drinks = document.querySelector( ".drinks" );
const ChampagneFlute = document.querySelector( ".ChampagneFlute" );
const CocktailGlass = document.querySelector( ".CocktailGlass" );
const categoryDrinks = document.querySelector( ".categoryDrinks" );


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
   
} )
//Let's fetch all the alcoholic
CocktailGlass.addEventListener( "click", () => {
    console.log( "clicked" );
    fetch( "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass" )
        .then( res => {
            if ( res.ok ) {
                console.log( "Fetching ... (Cocktail_glass)" );
            }
            else {
                console.log( "Fetch Usuccessful ...(Cocktail_glass)" );
            }
            return res
        } )
        .then( data => data.json() )
        .then( data => {
            const Ordinadry = data.drinks.map( element => {
                const CDrink = document.createElement( "div" );
                CDrink.className = "CDrink";
                const CaregoryImg = document.createElement( 'img' );
                CaregoryImg.src = element.strDrinkThumb;
                const CategoryName = document.createElement( "h1" );
                CategoryName.innerHTML = element.strDrink;
                CDrink.appendChild( CaregoryImg );
                CDrink.appendChild( CategoryName );
               
                return categoryDrinks.prepend( CDrink )
            } )
            
        } )
        .catch( error => console.log( error ) )
} );

ChampagneFlute.addEventListener( "click", () => {
    fetch( "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute" )
        .then( res => {
            if ( res.ok ) {
                console.log( "Fetching ... (Champagne_flute)" );
            }
            else {
                console.log( "Fetch Usuccessful ...(Champagne_flute)" );
            }
            return res
        } )
        .then( data => data.json() )
        .then( data => {
            const Ordinadry = data.drinks.map( element => {
                const CDrink = document.createElement( "div" );
                CDrink.className = "CDrink";
                const CaregoryImg = document.createElement( 'img' );
                CaregoryImg.src = element.strDrinkThumb;
                const CategoryName = document.createElement( "h1" );
                CategoryName.innerHTML = element.strDrink;
                CDrink.appendChild( CaregoryImg );
                CDrink.appendChild( CategoryName );
                return categoryDrinks.prepend( CDrink )
            } )
        } )
        .catch( error => console.log( error ) )
} );