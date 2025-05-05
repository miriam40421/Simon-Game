
function del() {
    //label מחיקת ה
    let e = document.getElementById('e')
    e.innerText = ''
}
function chek() {

    // ביטול כותרת הסיסמה
    let pas = document.getElementById('ps')
    pas.innerText = ''
    // סיסמהו  mail משתנים בוליאנים הבודקים את תקינות 
    let f1 = true, f2 = true
    //mail imput
    let inp1 = document.getElementById('email')
    //input pass
    let pass1 = document.getElementById('pass')
    // הערך שלהם
    let inp = inp1.value
    let pass = pass1.value
    let p
    // בדיקת תקינות הקלט
    if (inp.charAt(0) == '@' || inp.indexOf('@') == -1 || (inp.charAt(0) >= 0 && inp.charAt(0) <= 9)
        || inp.indexOf('@') > inp.indexOf('.') || inp.indexOf('@') + 1 == inp.indexOf('.') || inp.indexOf('.') == inp.length - 1 || inp.indexOf('.') == -1) {
        // אם לא תקין 
        inp1.value = ''
        f1 = false
        // אם כבר קימת תגית הערה-רק לשנות אותה
        if (document.getElementById('p') != null) {
            document.getElementById('p').innerText = 'invslid email addres  ,try again'

        }
        // אם לא קימת -תיצור אותה
        else {
            p = document.createElement('span')
            let d = document.getElementsByClassName('inputBox')[0]
            p.innerText = 'invslid email addres  ,try again'
            p.id = 'p'
            p.className = 'error'
            d.appendChild(p)
        }
    }
    // אם תקין אחרי שלא היה תקין
    else {
        if (document.getElementById('p') != null) {
            document.getElementById('p').innerText = ''
        }

    }
    //mail תקינות  
    let flag = false
    // אם לא תקין
    for (let i = 0; i < pass.length; i++) {
        if (!(pass.charAt(i) >= 0 && pass.charAt(i) <= 9)) {
            f2 = false
            flag = true
        }
    }
    // אם תקין
    if (flag) {
        //   הערך נמחק
        pass1.value = ''
        // אם כבר קימת תגית הערה-רק לשנות אותה

        if (document.getElementById('p1') != null) {
            document.getElementById('p1').innerText = 'wrong passwrd ,passsword should contains only numbers!'

        }
        else {
            // אם לא קימת -תיצור אותה
            let p1 = document.createElement('span')
            let d1 = document.getElementsByClassName('inputBox')[1]
            p1.innerText ='wrong passwrd ,passsword should contains only numbers!'
            p1.className = 'error'
            p1.id = 'p1'
            d1.appendChild(p1)
        }

    }
    else {
        // אם תקין אחרי שלא היה תקין
        if (document.getElementById('p1') != null) {
            document.getElementById('p1').innerText = ''
        }

    }
    //תקין וגם סיסמה mail אם ה
    if (f1 && f2) {
        // בלחיצה על שליחה מוסיף לו פןנקציה
        let s = document.getElementById('send')
        s.addEventListener('click', save1)

    }

}
// שמירה
function save1() {
    // שמירת הערכים
    let inp = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    // שליחה לפונקציה
    save(inp, pass)
}

//ואת הסיסמה mail  מקבל את ה
function save(email, pass) {
    // שומר שלא ירעננו את הדף וכך ישמרו הנתונים
    event.preventDefault()
    let flag = false
    // אם עדין לא קיים מספר  המשתמש יוצר אותו
    if (localStorage.getItem('count') == null)
        localStorage.setItem('count', 1)

    // שמירת משתמשים במערך
    let users = [];
    //  אם עדין לא קיים יוצר אותו
    if (localStorage.getItem('arrUsers') == null) {
        localStorage.setItem('arrUsers', JSON.stringify(users))
    }

    else {
        //   אם קיים מויא אותו ועובר עליו 
        users = JSON.parse(localStorage.getItem('arrUsers'))
        for (let i = 0; i < users.length; i++) {
            //כבר קיים mail אם ה
            if (users[i].email == email) {
                flag = true
                // אם הסיסמה גם קיימת
                if (users[i].password == pass) {
                    // שולח לעמוד פרטיים אישיים
                    window.location = "../html/sign.html"
                    //המשתמש לא חדש אם הערכים תקינים true מעדכן 
                    sessionStorage.setItem('f1', true)
                    // שומר לו את הנתונים
                    sessionStorage.setItem('currentUser', JSON.stringify(users[i]))
                }

                else {
                    // אם הסיסמה לא תקינה וקימת כבר הערה

                    if (document.getElementById('p1') != null) {
                        document.getElementById('p1').innerText = ` wrong password,
                       try again`
                    }
                    else {
                        //תיצור אותה אם  לא  קימת  הערה

                        let p1 = document.createElement('span')
                        let d1 = document.getElementsByClassName('inputBox')[1]
                        p1.innerText = `wrong password,
                        try again`
                        p1.className = 'error'
                        p1.id = 'p1'
                        d1.appendChild(p1)
                    }
                }
            }
        }
    }
    //המשתמש חדש- mail אם לא מצא 
    if (flag == false) {
        /////////////////////
        //והסיסמה mail שמירת ה
        sessionStorage.setItem('userEmail', email)
        sessionStorage.setItem('userpass', pass)
        // שליחה לפרטים אישיים
        window.location = "../html/sign.html"
        // המשתמש חדש
        sessionStorage.setItem('f1', false)

    }
   
}