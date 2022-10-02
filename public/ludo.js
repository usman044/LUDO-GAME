//    dice 1

function rundice1() {
    var runnumber1 = Math.floor(Math.random() * 6) + 1
    var runimage1 = 'assets/dice' + runnumber1 + '.jpg'
    document.querySelector('.dice1').setAttribute('src', runimage1)

    var parentreddice = document.querySelector(".whitered")
    var childreddice = document.querySelector(".redgoti")
    var parentredwhitebox = document.querySelector(".redbox")
    var childredgotino2= document.querySelector(".redbox2")
    if (runnumber1 == 6){
        childredgotino2.appendChild(childreddice)
    }
}


// red white home 
function redhome() {
    var parentredbox = document.querySelector(".main-12")
    var childredbox = document.createElement("div")
    var childredname = childredbox.className = "redbox"
    parentredbox.appendChild(childredbox)
}
for (i = 1; i <= 18; i++) {
    redhome()
}


//  red home
var parentwhitered = document.querySelector(".main-11")
var childwhitered = document.createElement("div")
childwhitered.className = "whitered"
parentwhitered.appendChild(childwhitered)


// redgoti 
function redgoti() {
    var parentredgoti = document.querySelector(".whitered")
    var childredgoti = document.createElement("div")
    childredgoti.className = "redgoti"
    parentredgoti.appendChild(childredgoti)
}
for (i = 1; i <= 4; i++) {
    redgoti()
}












// dice2
function rundice2() {
    var runnumber2 = Math.floor(Math.random() * 6) + 1
    var runimage2 = 'assets/dice' + runnumber2 + '.jpg'
    document.querySelector('.dice3').setAttribute('src', runimage2)

    var parentgreendice = document.querySelector(".whitegreen")
    var childgreendice = document.querySelector(".greengoti")
    var parentgreenwhitebox = document.querySelector(".greenbox")

    if (runnumber2 == 6) {
        parentgreenwhitebox.appendChild(childgreendice)
    }
}



//  green white home 

function greenhome() {
    var parentgreenhome = document.querySelector(".main-21")
    var childgreenbox = document.createElement("div")
    var childgreenname = childgreenbox.className = "greenbox"
    parentgreenhome.appendChild(childgreenbox)
}
for (i = 1; i <= 18; i++) {
    greenhome()
}
// green home
var parentwhitegreen = document.querySelector(".main-22")
var childwhitegreen = document.createElement("div")
childwhitegreen.className = "whitegreen"
parentwhitegreen.appendChild(childwhitegreen)
//   greengoti 
function greengoti() {
    var parentgreengoti = document.querySelector(".whitegreen")
    var childgreengoti = document.createElement("div")
    childgreengoti.className = "greengoti"
    parentgreengoti.appendChild(childgreengoti)
}
for (i = 1; i <= 4; i++) {
    greengoti()
}












                //  dice3
function rundice3() {
    var runnumber3 = Math.floor(Math.random() * 6) + 1
    var runimage3 = 'assets/dice' + runnumber3 + '.jpg'
    document.querySelector('.dice2').setAttribute('src', runimage3)

    var parentbluedice = document.querySelector(".whiteblue")
    var childbluedice = document.querySelector(".bluegoti")
    var parentbluewhitebox = document.querySelector(".bluebox")

    if (runnumber3 == 6) {
        parentbluewhitebox.appendChild(childbluedice)
    }
}

                    // blue white home 
function bluehome() {
    var parentbluebox = document.querySelector(".main-32")
    var childbluebox = document.createElement("div")
    var childbluename = childbluebox.className = "bluebox"
    parentbluebox.appendChild(childbluebox)
}
for (i = 1; i <= 18; i++) {
    bluehome()
}
                     //   blue home
var parentwhiteblue = document.querySelector(".main-31")
var childwhiteblue = document.createElement("div")
childwhiteblue.className = "whiteblue"
parentwhiteblue.appendChild(childwhiteblue)
                    // bluegoti 
function bluegoti() {
    var parentbluegoti = document.querySelector(".whiteblue")
    var childbluegoti = document.createElement("div")
    childbluegoti.className = "bluegoti"
    parentbluegoti.appendChild(childbluegoti)
}
for (i = 1; i <= 4; i++) {
    bluegoti()
}










            //    dice4
function rundice4() {
    var runnumber4 = Math.floor(Math.random() * 6) + 1
    var runimage4 = 'assets/dice' + runnumber4 + '.jpg'
    document.querySelector('.dice4').setAttribute('src', runimage4)

    var parentyellowdice = document.querySelector(".whiteyellow")
    var childyellowdice = document.querySelector(".yellowgoti")
    var parentyellowwhitebox = document.querySelector(".yellowbox")

    if (runnumber4 == 6) {
        parentyellowwhitebox.appendChild(childyellowdice)
    }
}

                    // yellow white home 
function yellowhome() {
    var parentyellowbox = document.querySelector(".main-41")
    var childyellowbox = document.createElement("div")
    var childyellowname = childyellowbox.className = "yellowbox"
    parentyellowbox.appendChild(childyellowbox)
}
for (i = 1; i <= 18; i++) {
    yellowhome()
}
                   //   yellow home
var parentwhiteyellow = document.querySelector(".main-42")
var childwhiteyellow = document.createElement("div")
childwhiteyellow.className = "whiteyellow"
parentwhiteyellow.appendChild(childwhiteyellow)
                    //    yellowgoti
function yellowgoti() {
    var parentyellowgoti = document.querySelector(".whiteyellow")
    var childyellowgoti = document.createElement("div")
    childyellowgoti.className = "yellowgoti"
    parentyellowgoti.appendChild(childyellowgoti)
}
for (i = 1; i <= 4; i++) {
    yellowgoti()
}
