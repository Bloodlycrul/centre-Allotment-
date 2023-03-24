const userName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("mobile");
const mainTable = document.getElementById("tablemain");

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

function submit() {
  // Create the Element for the table push

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

  if (userName.value && email.value && number.value === "") {
    alert("Fill All The Details");
  } else if (
    match.some((e) => {
      return e.email === email.value;
    })
  ) {
    alert("This email id is already Register");
  } else {
    let randomNumber = Math.floor(Math.random() * 10);

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
  }
}
