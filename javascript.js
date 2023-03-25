
// login and signup

var user;

function openpopup()
{
       document.getElementById("loginform").reset();   
       document.getElementById("SignIn").style.visibility= "visible";
}
function closepopup()
{
        document.getElementById("SignIn").style.visibility= "hidden";
}
    
function opensignup()
  {
    document.getElementById("SignUp").style.visibility= "visible";
  }

function opensignupfromlogin()
{
    document.getElementById("signupform").reset();   
    document.getElementById("SignIn").style.visibility= "hidden"
    document.getElementById("SignUp").style.visibility= "visible";
}

function openpopupfromsignup()
{
    document.getElementById("loginform").reset();   
    document.getElementById("SignUp").style.visibility= "hidden";
    document.getElementById("SignIn").style.visibility= "visible";   
}

function closesignup()
{
    document.getElementById("SignUp").style.visibility = "hidden";
}
let bool=1; 
function validatelogin()
{
    user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    const a = (localStorage.getItem(`${user}`));

    if (a === "") {
        swal("Wrong Details", "Invalid Username or Password", "error");
        return false;
      }
      else {
    
    
        if (a === pass) {
          swal(
            "Log In Succesfull!",
            "Welcome, to the website " + user + "!",
            "success"
          );
          bool=0;
          closepopup();
          // document.getElementById("submitonlogin").reset();
          edit_details();
          // window.location.href = "index.html";
        }
        else {
          swal("Wrong Details", "Invalid Username or Password", "error");
        }
      }
}
function check1(){
  console.log(bool)
  if (bool==1)
  {
    openpopup()
  }
  else{
    window.location.href = "Accomodation.html";
    return false;
  }
}
 
function check2(){
  console.log(bool)
  if (bool==1)
  {
    openpopup()
  }
  else{
    window.location.href = "bms_mess.html";
    return false;
  }
}

function check3(){
  console.log(bool)
  if (bool==1)
  {
    openpopup()
  }
  else{
    window.location.href = "bms_hospital.html";
    return false;
  }
}


function callsignup()
{
    let usernmame = document.getElementById("usernamesignup").value;
    let password = document.getElementById("passwordsignup").value;
    localStorage.setItem(usernmame,password);
}

function edit_details()
{
    document.getElementById("nav1").style.visibility = "hidden";
    document.getElementById("nav2").style.visibility = "visible";
    document.getElementById("name").innerHTML =`${user}`;
}

function signout() 
{
swal({
  title: 'Are you sure?',
  text: "You will be Logged Out !",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor:'#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then(function() {
  swal(
    'Signed Out!',
    'Youhave been signed out',
    'success'
    );
    location.reload();
})  
}

