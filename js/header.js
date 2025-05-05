// קישורים
// למשחק
function send1() {
    window.location = '../html/game.html'
}
// הוראות
function send2() {
    window.location = '../html/instruction.html'
}
// המנצחים
function send3() {
    window.location = '../html/winners.html'
}
// יציאה
function send4() {
    window.location = '../html/enter.html'
}
// התנתקות
function send5() {
    let c = confirm(`Are you sure that you want to delete your account?\n 
Note! all your history will be deleted`)


    // אם רוצה להתנתק
    if (c) {
        // מקבל את מערך המשתמשים
        let arrUser = JSON.parse(localStorage.getItem('arrUsers'))
        // מקבל את המשתמש הנוכחי
        let user = JSON.parse(sessionStorage.getItem('currentUser'))
        // מוצא אותו במערך המשתמשים
        let i = arrUser.findIndex(x => x.email == user.email)
        // מוחק אותו
        arrUser.splice(i, 1)
        // מעדכן אותו מחדש
        localStorage.setItem('arrUsers', JSON.stringify(arrUser))
        let c = JSON.parse(localStorage.getItem('winner'))
        let arr = JSON.parse(localStorage.getItem('arrUsers'))
        let maxUser = arr[0]
        if (user.email == c.email) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i].pointWin > maxUser.pointWin) {
                    maxUser = arr[i]
                }
            }
            localStorage.setItem('winner',JSON.stringify(maxUser))
        }


        // מחזיר אותו לכניסה
        window.location = '../html/enter.html'

    }
}

