//שיוצא מהפקד label מוחקת את ה
function del() {
    let level = document.getElementById(event.currentTarget.id.charAt(0))
    level.innerText = ''
}
function load() {
    //////////////////////////////////////
    // אם המשתמש חדש
    let f = sessionStorage.getItem('f1')
    if (f == 'false')
        signIn()
    else
        defination()
}
function signIn() {
//    מוסיף לכניסה שם וכו
//label ואחכ מוחק את ה
    let h = document.getElementsByTagName('h2')[0]
    h.innerText = 'sign up'
    let allD = document.getElementById('sign')
    let d1 = document.createElement('div')
    d1.className = 'inputBox'
    allD.appendChild(d1)
    let u = document.createElement('input')
    u.id = 'userName'
    u.addEventListener('blur', del)
    d1.appendChild(u)
    let l1 = document.createElement('label')
    l1.id = 'u'
    l1.innerText = 'userName'
    d1.appendChild(l1)
    let d2 = document.createElement('div')
    d2.className = 'inputBox'
    allD.appendChild(d2)
    let p = document.createElement('input')
    p.id = 'phone'
    p.addEventListener('blur', del)
    d2.appendChild(p)
    let l2 = document.createElement('label')
    l2.id = 'p'
    l2.innerText = 'phone'
    d2.appendChild(l2)
    let d3 = document.createElement('div')
    d3.className = 'inputBox'
    allD.appendChild(d3)
    let a = document.createElement('input')
    a.id = 'adress'
    a.addEventListener('blur', del)
    d3.appendChild(a)
    let l3 = document.createElement('label')
    l3.id = 'a'
    l3.innerText = 'adress'
    d3.appendChild(l3)
// שולח לשמירה
    let b = document.getElementById('send')
    b.addEventListener('click', saveDetails)



}
// שמירת פרטי המשתמש החדש
function saveDetails() {
    event.preventDefault()
    let arr = localStorage.getItem('arrUsers')
    let email = sessionStorage.getItem('userEmail')
    let pass = sessionStorage.getItem('userpass')
    let name = document.getElementById('userName').value
    let phone = document.getElementById('phone').value
    let adress = document.getElementById('adress').value
    let color = document.getElementById('myColor').value
    let usersArr
    usersArr = JSON.parse(arr)
    // let newArr=(usersArr)
    sessionStorage.setItem('mycolor',color)
    // המרת המספר
    let cUsers = +localStorage.getItem('count')
//    שמירה במערך חדש
    let newUser = {
        email: email,
        password: pass,
        name: name,
        phone: phone,
        adress: adress,
        color: color,
        pointWin:0

    }
    // המרה למחרוזת
    let uJson = JSON.stringify(newUser)
    if(cUsers==1){
        localStorage.setItem('winner',uJson)
        let d=new Date();
        let d1=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
        localStorage.setItem('dateWin',d1)
    }
    // שמירת המשתמש עם אנדקס מתקדם
    // קידום האנדקס
    localStorage.setItem('count', ++cUsers)
    // הוספה למערך
    usersArr.push(newUser)
    // שמירת המערך
    localStorage.setItem('arrUsers', JSON.stringify(usersArr))
    //את הנוכחי session  שמירה ב
   sessionStorage.setItem('currentUser', uJson)
    // פתיחת המשחק
    window.location = "../html/game.html"
}
// שינוי הגדרות למשתמש קיים
function defination() {
    // תפיסת כפתור השליחה
    let b = document.getElementById('send')
    // הוספת אירוע עדכון
    b.addEventListener('click', update)
}
// עדכון הגדרות
function update() {
    // ביטול פעולה דפולטיבית
    event.preventDefault()
    let color = document.getElementById('myColor').value
    sessionStorage.setItem('mycolor',color);
    window.location = "../html/game.html"

}
//enter כניסה למשחק גם אם לחץ
function enter(){
    if (event.keyCode == 13)
        window.location='../html/game.html'
}