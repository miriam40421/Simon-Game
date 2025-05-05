function loud() {
    // sessionStorage-מס הנקודות מה
    let p = sessionStorage.getItem('score')
    let t = document.getElementsByClassName('prize')[0]
    console.log(t);
    let br = document.createElement('br')
    t.appendChild(br)
    t.innerText += 'your score:' + p
    setTimeout(() => { window.location = '../html/game.html' }, 5000)


}
