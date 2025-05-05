function myC() {

let c1=localStorage.getItem('winner')
let c=JSON.parse(c1)
let h = document.getElementsByTagName('span')[0]
 let p = document.getElementsByTagName('span')[1]
 let d = document.getElementsByTagName('span')[2]
  h.innerText='Winner:'+c.name
  p.innerText='His point:'+c.pointWin
  d.innerText='Date:'+localStorage.getItem('dateWin')
}
//     // קבלת מערך
//     let user = JSON.parse(localStorage.getItem('arrUsers'))
//     console.log(user);
//     let max = user[0].pointWin, userWin = user[0]
//     for (let i = 1; i < user.length; i++) {
//         console.log(user[i]);
//         // אם השיא יותר גדול
//         if (user[i].pointWin > max) {
//             max = user[i].pointWin
//             userWin = user[i]
//         }
//     }
   
//     // שם המנצח
//     let n = userWin.name
//     // תפיסת השורות
//     let h = document.getElementsByTagName('span')[0]
//     let p = document.getElementsByTagName('span')[1]
//     // הצבה
//     h.innerText = 'winner:' + n
//     p.innerText = 'score:' + max
// }