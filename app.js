const userName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("mobile");
const mainTable = document.getElementById("tablemain");
const btn = document.querySelector('.btn');


let match = [];
let listOfTheCenter = [
  "Bhopal",
  "Delhi",
  "Mumbai",
  "Haryana",
  "Uttar Pradesh",
  "Rachi",
  "Assam",
  "Goa",
  "Gujarat",
  "Kerala",
];

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let IndNum = /^[0]?[789]\d{9}$/;


btn.addEventListener('click' ,function submit() {
  // Create the Element for the table push

  if (userName.value === "" || email.value === "" || number.value === "") {
    alert("Fill All The Details");
  } else if (!mailformat.test(email.value)) {
    alert("please Enter the right Gmail");
  } else if (
    match.some((e) => {
      return e.email === email.value;
    })
  ) {
    alert("This email id is already Register");
  } else if (!IndNum.test(number.value)) {
    alert("Please Enter the Correct Mobile no.");
  } else {
    let randomNumber = Math.floor(Math.random() * 10);
    let tableCreate = document.createElement("tr");
    let tableRowName = document.createElement("td");
    let tableRowEmail = document.createElement("td");
    let tableRowNumber = document.createElement("td");
    let tableRowCenter = document.createElement("td");

    mainTable.appendChild(tableCreate);
    tableCreate.appendChild(tableRowName);
    tableCreate.appendChild(tableRowEmail);
    tableCreate.appendChild(tableRowNumber);
    tableCreate.appendChild(tableRowCenter);

    let obj = {
      userName: userName.value,
      email: email.value,
      mobile: mobile.value,
    };

    match.push(obj);

    tableRowName.innerText = userName.value;
    tableRowEmail.textContent = email.value;
    tableRowNumber.textContent = number.value;
    tableRowCenter.textContent = listOfTheCenter[randomNumber];

    userName.value = "";
    email.value = "";
    number.value = "";
    
      
  }
})


