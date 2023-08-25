
let addbtn = document.getElementById("addbtn");
let container = document.querySelector('.container');
let taskbox = document.getElementById("mainbox");
//console.log(taskbox);
let userinput;
function add() {
  userinput = document.getElementById("userinput");
  let v = userinput.value;
  ///console.log(v);
  if (v != "") {
    const additem = ` 
   <div class="taskbox" id="taskbox">
   <input type="checkbox" id="checked">
   <input type="text" id="task" readonly value="${v}">
   <button type="button" id="edit"><i class="fa-solid fa-file-pen" style="color: #64ca12;font-size: 30px;"></i></button>
   <button type="button" id="del"><i class="fa-solid fa-trash" style="color: #ec1818;font-size: 30px;"></i></button>

   </div>
   `
    taskbox.insertAdjacentHTML("afterend", additem);
    //console.log(userinput);
    userinput.value = "";
  }
  else {
    alert("Task cannot be empty");
  }
}
let delbtn;
let editbtn;
let taskdiv;
let task;
let checkbox;
addbtn.onclick = () => {
  add();
  delbtn = document.querySelectorAll("#del");
  editbtn = document.querySelectorAll("#edit");
  taskdiv = document.querySelectorAll("#taskbox");
  task = document.querySelectorAll("#task");
  checkbox = document.querySelectorAll("#checked");


  //console.log(taskdiv);
  del();
  edit();
  check();
}

function check() {
  for (let i = 0; i < checkbox.length; i++) {
    //console.log(delbtn[i]);
    checkbox[i].onclick = () => {
      //  console.log(task[i]);
      if (checkbox[i].checked == true) {
        //console.log(task[i]);
        task[i].style.textDecoration = "line-through";
      }
      else {
        task[i].style.textDecoration = "none";
      }
    }

  }
}

function del() {
  for (let i = 0; i < delbtn.length; i++) {
    //console.log(delbtn[i]);
    delbtn[i].onclick = () => {
      //console.log(delbtn[i]);
      // console.log(taskdiv[i]);
      taskdiv[i].remove();
    }

  }
}
function edit() {
  for (let i = 0; i < editbtn.length; i++) {
    //console.log(delbtn[i]);
    editbtn[i].onclick = () => {
      let val = task[i].value;
      userinput.value = val;
      taskdiv[i].remove();
      //console.log(val);
    }

  }
}



