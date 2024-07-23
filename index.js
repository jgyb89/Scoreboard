let scoreHome = 0
let scoreGuest = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function hAddOne(){
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function hAddTwo(){
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function hAddThree(){
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function gAddOne(){
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function gAddTwo(){
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function gAddThree(){
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}