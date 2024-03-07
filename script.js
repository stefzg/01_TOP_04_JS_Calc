let op1 = "";
let op2 = "";
let op3 = "";

const allButtons = document.querySelector('.calc');
allButtons.addEventListener('click', (e) => {
  /*e.target.classList.add('red');*/
  switch(e.target.id) {
    case "b00":
    case "b01":
    case "b02":
    case "b03":
    case "b04":
    case "b05":
    case "b06":
    case "b07":    
    case "b08":
    case "b09":
      typeDigit(e.target.id.substr(2,1));
      break;
    case "period":
      typeDigit(".");
      break;
    case "add":
    case "sub":
    case "mult":
    case "div":
      typeOperator(e.target.id);
      break;
    case "clr":
      pressClear();
      break;
    case "enter":
      op1 = pressEnter();
      op2 = "";
      op3 = "";
      updateGui("op1", op1);
      updateGui("op2", op2);
      updateGui("op3", op3);
      break;
    default:
      break;
  };
});

function buttonClick() {
  console.log("bla");
}

function typeDigit(strDigit) {
    if (op2 == "") {
      op1 += strDigit;
      if (strDigit !== ".") {
        op1 = parseFloat(op1) ?? "";
      }
      updateGui("op1", op1);
    } else {
      op3 += strDigit;
      if (strDigit !== ".") {
        op3 = parseFloat(op3) ?? "";
      }
      updateGui("op3", op3);
    }
    return;
}

function pressClear() {
  if (op3 != "") {
    op3 = "";
    updateGui("op3", op3);
  } else if (op3 == "" && op2 != "") {
    op2 = "";
    updateGui("op2", op2);
  } else {
    op1 = "";
    updateGui("op1", op1);
  }
}

function typeOperator(strOperator) {
  op2 = strOperator;
  op1 = parseFloat(op1) ?? "";
  updateGui("op1", op1);
  updateGui("op2", op2);
}

function updateGui(strWhich, strWhat) {
  document.querySelector("#" + strWhich).textContent = strWhat; 
}

function pressEnter() {
  op1 = parseFloat(op1) ?? "";
  op3 = parseFloat(op3) ?? "";
  updateGui("op1", op1);
  updateGui("op3", op3);
  if (op1 === "" || op2 === "" || op3 === "") { 
    return;
  }
  switch (op2) {
    case "add":
    return parseFloat(op1) + parseFloat(op3);  
    break;
    case "sub":
    return parseFloat(op1) - parseFloat(op3);  
    break;
    case "mult":
    return parseFloat(op1) * parseFloat(op3);  
    break;
    case "div":
    return parseFloat(op1) / parseFloat(op3);  
    break;
  }

}
