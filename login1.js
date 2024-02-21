function submit_form()
{
    window.location="pop_eg.html";
}
function Create()
{
    window.location="Signup.html";
}
function Check()
{
    let a=(Signup.pwd2.value)
    let b=(Signup.pwd1.value)
    if(Signup.uname.value=="" | Signup.pwd1.value=="" | Signup.pwd2.value=="")
    {
      alert ("Please Fill Details !!")
    }
    else if(Signup.pwd1.value != a)
    {
          alert("Please Check the Password !!")
    }
    else if(a.length <6)
    {
        alert("Password Characters Should be >6")
    }
    else if(a==b)
    {
        alert("Account Created Successfully !!")
    }
}
function submit_sign()
{
    window.location="login1.html";
}
function Log()
{
    window.location="login1.html";
}
function Oncreate()
{
    if(Login.uname.value=="" | Login.pwd.value=="")
    {
      alert("Please Fill Details !!") ;
    }
    else
    {
        alert("Login Successful !!");
    
    }
}
