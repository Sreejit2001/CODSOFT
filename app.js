let str = "";
let a=5.07
console.log(typeof(a))
let dis = document.getElementById("dis");
//console.log(dis);
let buttons = document.querySelectorAll('.box');
 
for (let i = 0; i < buttons.length; i++) {
    // console.log("h")
     
    buttons[i].onclick = () => {
        if (buttons[i].value == "clear") {
            dis.value = "";
            str = "";

        }
        else if (buttons[i].value == "delete") {
            str = str.slice(0, -1);
            dis.value = str;
        }
        else if (buttons[i].value == "=") {
            let check = str.indexOf("%");
            if (check == -1) {
                try{
                let cal = eval(str);
                //cal=cal.toFixed(4)
                str = String(cal);
                //console.log(typeof(str));
                dis.value = str;
                }
                catch(err){
                    dis.value ="Invalid";
                }
            }
            else {
                // console.log("hi")
                percentage();
            }
        }
        else {
            str = str + buttons[i].value;
            dis.value = str;
        }
        //   console.log(buttons[i])
    }
}
    
 
//calculate percentage
function percentage() {
    try{
    let per = str.indexOf("%");
    let a = str.slice(0, per);
    let b = str.slice(per + 1);
    let s = eval(a * b);
    let s1 = eval(s / "100");
   // s1=s1.toFixed(4)
    str = String(s1);
        dis.value = str;
   // console.log(typeof(s1));
    // console.log(s);
    //console.log(a);
}
catch(err){
    dis.value ="Invalid";
}
}
