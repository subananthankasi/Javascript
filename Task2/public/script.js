function submitform() {
  //user name
  item = true;
  let name = document.getElementById('username').value;
  if (name == "") {
    document.getElementById('nameError').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('nameError').innerHTML = ""
  }
  //Email
  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let email = document.getElementById('Email').value;
  if (email == "") {
    document.getElementById("erroremail").innerHTML = "*required...!";
    item = false;
  } else if (!pattern.test(email)) {
    document.getElementById("erroremail").innerHTML = "*invalid Number";
    item = false;
  }
  else {
    document.getElementById("erroremail").innerHTML = ""
  }
  //phone num
  let phonenum = document.getElementById("phonenumber").value;
  if (phonenum == "") {
    document.getElementById('errornum').innerHTML = "*required...!";
    item = false;
  } else if (phonenum.length != 10) {
    document.getElementById('errornum').innerHTML = "*invalid Number";
    item = false;
  }
  else {
    document.getElementById("errornum").innerHTML = ""
  }

  //DOB
  let dtbirth = document.getElementById("dob").value;
  if (dtbirth == "") {
    document.getElementById("errordob").innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('errordob').innerHTML = ""
  }

  //REligian
  let religion = document.getElementById('nation').value;
  if (religion == "") {
    document.getElementById('errornation').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('errornation').innerHTML = ""
  }

  //Degree
  let degrees = document.getElementById('degree').value;
  if (degrees == "") {
    document.getElementById('Errordegree').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('Errordegree').innerHTML = ""
  }

  //branch
  let branch = document.getElementById('Branch').value;
  if (branch == "") {
    document.getElementById('Errorbranch').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('Errorbranch').innerHTML = ""
  }
  //years
  let years = document.getElementById('Year').value;
  if (years == "") {
    document.getElementById('Erroryear').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('Erroryear').innerHTML = ""
  }
  //semester
  let semesters = document.getElementById('Semester').value;
  if (semesters == "") {
    document.getElementById('Errorsemester').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('Errorsemester').innerHTML = ""
  }

  //Admission
  let admissions = document.getElementById('Admission').value;
  if (admissions == "") {
    document.getElementById('ErrorAdmission').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('ErrorAdmission').innerHTML = ""
  }
  //fathers name
  let fnames = document.getElementById('FathersName').value;
  if (fnames == "") {
    document.getElementById('ErrorFathersName').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('ErrorFathersName').innerHTML = ""
  }

  //Fathers occupation
  let foccupations = document.getElementById('FathersOccupation').value;
  if (foccupations == "") {
    document.getElementById('ErrorFathersOccupation').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('ErrorFathersOccupation').innerHTML = ""
  }

  //fathers income
  let fincomes = document.getElementById('FathersIncome').value;
  if (fincomes == "") {
    document.getElementById('ErrorFathersIncome').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('ErrorFathersIncome').innerHTML = ""
  }

  //mother name
  let mnames = document.getElementById('MothersName').value;
  if (mnames == "") {
    document.getElementById('ErrorMothersName').innerHTML = "*required...!";
    item = false;
  }
  else {
    document.getElementById('ErrorMothersName').innerHTML = ""
  }

  //phone number
  let contnums = document.getElementById('Contactnumber').value;
  if (contnums == "") {
    document.getElementById('ErrorPhoneNumber').innerHTML = "*required...!";
    item = false;
  } else if (contnums.length != 10) {
    document.getElementById('ErrorPhoneNumber').innerHTML = "*invalied Number"
    item = false;
  }
  else {
    document.getElementById('ErrorPhoneNumber').innerHTML = ""
  }
    //pinmum
    let pinnum = document.getElementById('PinNumber').value;
    if (pinnum == "") {
      document.getElementById('ErrorPinNumber').innerHTML = "*required...!";
      item = false;
    }
    else {
      document.getElementById('ErrorPinNumber').innerHTML = ""
    }
  //Extra
  let details = document.getElementById('Extradetails');
  var extraArray = [];
  if (details != null) {
    if (details.value == "") {
      document.getElementById('Adderror').innerHTML = "*required";
      item = false;
    }
    else {
      document.getElementById('Adderror').innerHTML = ""
      extraArray.push(details.value)
    }
  }

  //gender
  var males = document.getElementById('Male');
  var females = document.getElementById('Female');
  var others = document.getElementById('Others');
  var gender = false;
  var gendervalue = '';
  if (males.checked) {
    gender = true;
    gendervalue = 'Male';
  } else if (females.checked) {
    gender = true;
    gendervalue = 'Female';
  } else if (others.checked) {
    gender = true;
    gendervalue = 'Others';
  }
  if (gender) {
    document.getElementById('ErrorGender').innerHTML = ""
  } else {
    document.getElementById('ErrorGender').innerHTML = '*required...!';
    item = false;
  }
  //Language
  var checkbox1 = document.getElementById('check1');
  var checkbox2 = document.getElementById('check2');
  var checkbox3 = document.getElementById('check3');
  var language = 0;
  var languageknow = [];
  if (checkbox1.checked) {
    language++;
    languageknow.push(checkbox1.value);
  }
  if (checkbox2.checked) {
    language++;
    languageknow.push(checkbox2.value);
  }
  if (checkbox3.checked) {
    language++;
    languageknow.push(checkbox3.value);
  }
  if (language == "") {
    document.getElementById('ErrorLanguage').innerHTML = "*required...!";
    item = false;
  } else {
    document.getElementById('ErrorLanguage').innerHTML = "";
  }
  // .........

  let detail = document.getElementsByClassName("add1");
  for (i = 0; i < detail.length; i++) {
    if (detail[i].value == "") {
      document.getElementsByClassName("error2")[i].innerHTML = "*required...!";
      item = false;
       }
    else {
      document.getElementsByClassName("error2")[i].innerHTML = "";
      extraArray.push(detail[i].value)
    }
  }
//Store console
  var student = {
    studentName: name,
    studentemail: email,
    studentphonenum: phonenum,
    studentdbirth: dtbirth,
    studentreligion: religion,
    studentdegrees: degrees,
    studentbranch: branch,
    studentyears: years,
    studentsemesters: semesters,
    studentadmissions: admissions,
    studentfname: fnames,
    studentoccupation: foccupations,
    studentfincome: fincomes,
    studentmname: mnames,
    studentcontnum: contnums,
    studentgender: gendervalue,
    studentlanguage: languageknow,
    studentpinnum:pinnum,
    // studentextra:Extra,
    studentdetails:extraArray

  }
console.log(student);

  if (item) {
    let studentlist = JSON.parse(localStorage.getItem("student"))
    if (null == studentlist) {
      studentlist = [];
    }
    studentlist.push(student)

    localStorage.setItem("student", JSON.stringify(studentlist))
    redirectTomainpage();
  }
  alert("your form Submited")
}
function redirectTomainpage() {
  window.location.href = 'index1.html';
 }



function loadTableData() {
  var list = JSON.parse(localStorage.getItem("student"));
  if (list.length > 0) {
  
    if (list) {
      var tablerow = "";
      for (var i = 0; i < list.length; i++) {
        var data = list[i];
        var currentrow = "<tr><td>" + Number(i + 1) + "</td><td>" +
        data.studentName + "</td><td>" +
        data.studentemail + "</td><td>" +
        data.studentdbirth + "</td><td>" +
        data.studentgender + "</td><td>" +
        data.studentphonenum + "</td><td>" +
          ` <i class="fa-solid fa-pen-to-square" style="color:blue; cursor: pointer;" onclick="edit(${i})"></i>&nbsp;<i class="fa-solid fa-trash mt-3" style="color:red;cursor: pointer;" onclick="deletedrow(${i})"></i>` + "</td></tr>";

        tablerow = tablerow + currentrow;
      }
      document.getElementById("tableid").innerHTML = tablerow;
    }
  } 
else {
    output.style.display = "none";
  }
}
function deletedrow(index) {
  var list = JSON.parse(localStorage.getItem("student"));
  if (index < list.length) {
    if (confirm("Do you want to delete this item ?")) {
      list.splice(index, 1);
      localStorage.setItem("student", JSON.stringify(list))
      loadTableData();
    }
  }
}
function edit(index) {
  window.location.href = "index.html?id=" + index;
}


window.onload =  function (){
  editpage()
}
function editpage() {
  var page1 = window.location.href;
  var url = new URL(page1);
  var edit2 = url.searchParams.get("id");
  if (edit2 != null) {
    var edits = JSON.parse(localStorage.getItem("student"));
    document.getElementById("username").value = edits[edit2].studentName;
    document.getElementById("Email").value = edits[edit2].studentemail;
    document.getElementById("phonenumber").value = edits[edit2].studentphonenum;
    document.getElementById("dob").value = edits[edit2].studentdbirth;
    document.getElementById("nation").value = edits[edit2].studentreligion;
    document.getElementById("degree").value = edits[edit2].studentdegrees;
    document.getElementById("Branch").value = edits[edit2].studentbranch;
    document.getElementById("Year").value = edits[edit2].studentyears;
    document.getElementById("Semester").value = edits[edit2].studentsemesters;
    document.getElementById("Admission").value = edits[edit2].studentadmissions;
    document.getElementById("FathersName").value = edits[edit2].studentfname;
    document.getElementById("FathersOccupation").value = edits[edit2].studentoccupation;
    document.getElementById("FathersIncome").value = edits[edit2].studentfincome;
    document.getElementById("MothersName").value = edits[edit2].studentmname;
    document.getElementById("Contactnumber").value = edits[edit2].studentcontnum;
    document.getElementById("PinNumber").value = edits[edit2].studentpinnum;
    document.getElementById("Extradetails").value = edits[edit2].studentextra;
    if (edits[edit2].studentgender == 'Male') {
      document.getElementById("Male").checked = true;
    } else if (edits[edit2].studentgender == 'Female') {
      document.getElementById("Female").checked = true;
    } else if (edits[edit2].studentgender == 'Other') {
      document.getElementById("Others").checked = true;
    }
    if (edits[edit2].studentlanguage.includes('Tamil')) {
      document.getElementById("check1").checked = true;
    }
    if (edits[edit2].studentlanguage.includes('English')) {
      document.getElementById("check2").checked = true;
    }
    if (edits[edit2].studentlanguage.includes('Other')) {
      document.getElementById("check3").checked = true;
    }
    // var extraDetails = edits[edit2].studentdetails;
    // if (extraDetails && extraDetails.length > 0) {
    //   document.getElementById("Extradetails").value = extraDetails[0];
    //   for (var i = 1; i < extraDetails.length; i++) {
    //     addition(i - 1);
    //     document.getElementsByClassName("add1")[i - 1].value = extraDetails[i];
    //   }
    // }
    /////student extra
     if(edits[edit2].studentdetails == null){
      // console.log("length");
      document.getElementById("Extradetails").value=edits[edit2].studentdetails;
    }
         for(i=0;i<edits[edit2].studentdetails.length-1;i++){
      addition(i);
    }
    for(i=0; i<edits[edit2].studentdetails.length-1; i++){
      document.getElementsByClassName("add1")[i].value=edits[edit2].studentdetails[i+1];
    }
    // .........................
    // var edit1 = JSON.parse(localStorage.getItem("student"));

    edits.splice(edit2, 1);
    localStorage.setItem("student", JSON.stringify(edits));//edits
    // JSON.parse(localStorage.getItem("student"));
  }

}
let addmore = 0;
function more() {
  addmore++;
  var input1 = `<input type="text" class="form-control mt-2 add1" placeholder="Add Detail" id="d1${addmore}">`;
  var require = `<div class="error2" id='d3${addmore}'style="color:red"></div>`;
  var icon = `<i class="fa-solid fa-trash mt-2" style="cursor:pointer;" onclick="trash1(${addmore})" id='d2${addmore}'></i>`;
  document.getElementById('card1').insertAdjacentHTML("beforeend", input1 + require +icon);
}
function addition(index) {
  addmore++;
  var input1 = `<input type="text" class="form-control mt-2 add1" placeholder="Add Detail" id="d1${addmore}">`;
  var icon = `<i class="fa-solid fa-trash mt-2" style="cursor:pointer;" onclick="trash1(${addmore})" id='d2${addmore}'></i>`;
  var require = `<div class="error2" id='d3${addmore}'style="color:red"></div>`;
  document.getElementById('card1').insertAdjacentHTML("beforeend", input1 + require +icon);
}


// function more() {
 
//   var newdiv = document.createElement('div');
//   var suba = `<input type="text" class="form-control" placeholder="Add details">`;
//   var error = `<p id="card1"></p>`;
//   var icon1 = `<i class="fa-solid fa-trash mt-2" style="cursor:pointer;"></i>`;
  
//   newdiv.innerHTML = suba + error + icon1;
//   excess.appendChild(newdiv);
// }




function trash() {
  var para1 = document.getElementById("Extradetails");
  var para2 = document.getElementById("Adderror");
  var para3 = document.getElementById("del");
  var para4 = document.getElementsByClassName("add1");
  if (para4.length > 0) {
    para1.remove();
    para2.remove();
    para3.remove();
    
  }
  else {
    alert("can't deleted");
  }
}
function trash1(addmore) {
  var para5 = document.getElementById('Extradetails');
  var para6 = document.getElementsByClassName('add1');
  var para7 = document.getElementById('d1' + addmore);
  var para8 = document.getElementById('d2' + addmore);
  var para9 = document.getElementById('d3' + addmore);
  if (para5) {
    para7.remove();
    para8.remove();
    para9.remove();
    confirm("Are you sure delete this detail..?");
  }
  else {
   
    if (para6.length > 0) {
      para7.remove();
      para8.remove();
      para9.remove();

    } 
// //     //..............
// //     // else {
// //     //   alert("can't delete")
// //     // }.................comment
  }
}
// //.....................
// function trash(){
//   alert("can't delete")
// }...............comment



  