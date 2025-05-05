// מספר שלב
let n = 0;
//מערך צבעי הסיימון
let color = ['red', 'green', 'yellow', 'blue']
// מערך בחירות הסיימון
let level = []//new Array(10)
// מערך בחירות אישיות
let choice = []//new Array(10)
//  עד לשלב שעליו להדליק level מקדם ה-
let step = 0;
// המיקום של הכפתור הנוכחי שלחץ במערך הבחירות
let currentIndex = 0;
// מס הנקודות הנוכחי
let point = 0
// יוצר לכל צבע בסיימון אינדקס
//מערך המשתמשים
let arrUser = JSON.parse(localStorage.getItem('arrUsers'))
// ...משתמש הנוכחי
let user = JSON.parse(sessionStorage.getItem('currentUser'))
console.log(user);

//   נתינת ערך לכל צבע 
function load() {
//     let user = JSON.parse(sessionStorage.getItem('currentUser'))
// console.log(user);
    let allSec = document.getElementsByTagName('section')
    for (let l = 0; l < allSec.length; l++) {
        allSec[l].setAttribute('data-i', l)
    }
    // תפיסת שם המשתמש
    let p = document.getElementById('player')
    // שם המשתמש
    let name = user.name
    let col = sessionStorage.getItem('mycolor')
    console.log(col);
    p.innerText += name
    // צבע הכיתוב של הכותרת
    let h1 = document.getElementById('s')
     h1.style.color=col

}

// בתחילה הפונקציה מציבה את המספר הראשון
function start() {
    // תפיסת הstart
    let s = document.getElementById('display')
    // לא מאופשר יותר
    s.disabled = true
    // start() לבטל את הפונקציה 
    // מספר רנדומלי  שיאיר
    let num1 = (Math.floor(Math.random() * 4))
    // הוספה למערך השלבים
    level.push(num1);

    // event.preventDefault()
    light()
}
// הפונקציה עובדת על מערך בחירות הסיימון 
// בכל פעם עוברת על הכפתור ומאירה אותו
function light() {


    for (let i = 0; i < level.length; i++) {
        // מאירה את כל הצבעים עד לסוף המערך ואחכ מכבה אותם
        let d = document.getElementById(color[level[i]])
        setTimeout(() => {

            d.className = 'active_' + d.getAttribute('data-i')

            setTimeout(() => {
                d.className = 'pad'
            }, 100 + (150))
        }, 500 * (i + 1))
    }
}
//  תפיסת כיתוב השלבים ושינוי בכל לחיצה 
let text = document.getElementsByTagName('p')[1]
console.log(text);
let count = text.innerText.substring(0, 1)
console.log(count);
let e = text.innerText.substring(1)
console.log(e);
// let sum = document.getElementById('sum')
//מציב את בחירת המשתמש במערך בחירות
//אם לחץ על מספר מעביר לפונקציה עם המספר עליו לחץ
function num() {
    // 
    if (event.keyCode == 49)
        put1(0)
    if (event.keyCode == 50)
        put1(1)

    if (event.keyCode == 51)
        put1(2);
    if (event.keyCode == 52)
        put1(3)
}
function key()
//אם לחץ על חץ מעביר לפונקציה עם ערך החץ עליו לחץ

{
    if (event.keyCode == 38)
        put1(0)
    if (event.keyCode == 39)
        put1(1)

    if (event.keyCode == 40)
        put1(2);
    if (event.keyCode == 37)
        put1(3)
}
function put() {
    // /אם לחץ שולח אותו לפוט1 עם הערך שלו
    put1((+event.currentTarget.getAttribute('data-i')))
}
function put1(value) {
    choice.push(value);//[3,]הוספת המספר למערך
    text.innerText = ++count + '/' + level.length
    // תפיסת הכפתור שעליו לחצת
    let choiseDiv = document.getElementById(color[choice[currentIndex]])
    // מאיר אותו ואחכ מכבה
    choiseDiv.className = 'active_' + choiseDiv.getAttribute('data-i')
    setTimeout(() => {
        choiseDiv.className = 'pad'
    }, 200);
    //    שולח לבדיקה
    chek(currentIndex, value);

}

//בדיקה האם זה נכון
function chek(i, value) {

    if (level[i] != choice[i]) {
        sessionStorage.setItem('score', point)
        // בדיקת השיא
        if (point > user.pointWin) {
            user.pointWin = point
            // מציאת מיקום המשתמש הנוכחי במערך
            let i1 = arrUser.findIndex(x => x.email == user.email)
            // עדכון המערך
            arrUser[i1] = user
            let c = JSON.stringify(user)
            // עדכון המשתמש
            sessionStorage.setItem('currentUser', c)
            // עדכון המערך
            localStorage.setItem('arrUsers', JSON.stringify(arrUser))
        }


        let c=localStorage.getItem('winner')
        let w=JSON.parse(c)
        if(point>w.pointWin){
         let d=new Date()
        let d1=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
        localStorage.setItem('dateWin',d1)
        localStorage.setItem('winner',JSON.stringify(user))
        setTimeout(() => { window.location='../html/winners.html' },500)

        }
        else{ let e = document.getElementById("error")
        e.play();
        error();}
        //    אם טעה
       
    }
    else {
        //   אם נכון השמעת הרעש של הכפתור
        let c = document.getElementById("click")
        c.src = "../sounds/c_" + value + ".mp3"
        c.play()
        // העלאה בנקודות
        point++
        sc.innerText = 'your score:' + point
        // let b

        // אם עדין לא הגיע לסוף המערך האנדקס מתקדם
        currentIndex++;

        //אם כל הערכים ב-2 המערכים שווים  הם מתאפסים וגם המקדם של 
        // ואז מתחילה שוב על choiceה 
        //++step 

        if (level.length == choice.length) {
            // אם סיים שלב
            if (level.length % 7 == 0) {
                // מספר שלב
                n++
                // הודעת העלאה בשלב
                let b=document.getElementById('next')
                b.innerText = 'wow!!!! you finish level ' + n
                setTimeout(() => { b.innerText = "" }, 2000)


            }

            //    אם הגיע לסוף
            if (level.length == 100) {
                point += 20
                let s = document.getElementById('sc')
                s.innerText = ' your score:' + point
                if (point > user.pointWin) {
                    user.pointWin = point
                    // מציאת מיקום המשתמש הנוכחי במערך
                    let i1 = arrUser.findIndex(x => x.email == user.email)
                    // עדכון המערך
                    arrUser[i1] = user
                    let c = JSON.stringify(user)
                    // עדכון המשתמש
                    sessionStorage.setItem('currentUser', c)
                    // עדכון המערך
                    localStorage.setItem('arrUsers', JSON.stringify(arrUser))
                }
                if(point>w.pointWin){
                    let d=new Date();
                let d1=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
                localStorage.setItem('dateWin',d1)
                localStorage.setItem('winner',JSON.stringify(user))
                setTimeout(() => { window.location='../html/winners.html' }, 2000)
                }
                sessionStorage.setItem('score', point)
                window.location = '../html/win.html'

            }
              //אם סיים ועדין לא הגיע לסוף המשחק
            point += level.length
            let s = document.getElementById('sc')
            s.innerText = ' your score:' + point
            count = 0
            // ריקון מערך הבחירות
            choice = [];
            // איפוס המקדם של הבחירות
            currentIndex = 0;
            // בחירת מספר נוסף 
            let num1 = (Math.floor(Math.random() * 4))
            // הוספה למערך
            level.push(num1); //[3,]הוספת המספר למערך

            //   הארה
            light();
        }

    }
}
// בעת שגיאה:
function error() {
    setTimeout(() => { window.location = '../html/error.html' }, 500)
}
