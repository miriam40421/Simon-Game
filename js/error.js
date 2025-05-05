function onloud() {
    // מס הנקודות
    let s = document.getElementsByClassName('score')[0]
    s.innerText = 'your score: ' + sessionStorage.getItem('score')
    let c = document.createElement('p')
    let h = document.getElementsByTagName('header')[0]
    // השיא שלך
    c.innerText = 'your max:' + JSON.parse(sessionStorage.getItem('currentUser')).pointWin
    h.appendChild(c)
}
// למשחק חדש
function loc() {
    window.location = "../html/game.html"

}
