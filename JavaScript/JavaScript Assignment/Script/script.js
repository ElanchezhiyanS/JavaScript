function validate(){
var username=document.getElementById("name");
//var rusername=document.getElementById("requiredName");
var fathername=document.getElementById("fatherName");
var email=document.getElementById("email");
var dateOfBirth=document.getElementById("dateOfBirth");
var mobileNumber=document.getElementById("mobileNo");
var currentAddress=document.getElementById("currentAddress");
var address2=document.getElementById("address2");
var states=document.getElementById("states");
var city=document.getElementById("city");
var zipCode=document.getElementById("zipCode");
var upload=document.getElementById("uploadphoto");
var regex1=/^\w+.[a-zA-Z]+.[a-z]+$/;
 var regex2=/^[0-9]{2}.[0-9]{2}.[0-9]{4}$/;
 var regex3=/^[6-9]+[0-9]{9}$/;
 if((username.value.trim()=="")&&(fathername.value.trim()=="")&&(dateOfBirth.value.trim()=="")&&(email.value.trim()=="")&&(mobileNumber.value.trim()=="")&&(currentAddress.value.trim()=="")&&(city.value.trim()=="")&&(zipCode.value.trim()=="")){

    document.getElementsByTagName("label").style.color="red";
    return false;
}
if(username.value.trim()=="")
{ 
    username.style.border="1px solid red";
    document.getElementById("requiredName").innerHTML="Name is required";
    return false;
}
 else if(fathername.value.trim()=="")
{
fathername.style.border="1px solid red";
document.getElementById("requiredFname").innerHTML="fathername is required";
return false;
}
 if(email.value.trim()==""){
    document.getElementById("requiredEmail").innerHTML="email is required";
    email.style.color="red";
    
    if(!regex1.test(email.value)){
        document.getElementById("requiredEmail").innerHTML="Email is not in correct pattern";
    }
    
    return false;
}
else if(dateOfBirth.value.trim()==""){
    document.getElementById("requiredDateofBirth").innerHTML="Date of Birth is required";
    dateOfBirth.style.color="red";
   
    if(!regex2.test(dateOfBirth.value)){
        document.getElementById("requiredDateofBirth").innerHTML="Date of Birth isn't in this DD-MM-YYYY format";
    }
    return false;
}
else if(mobileNumber.value.trim()==""){
    document.getElementById("requiredMob").innerHTML="Mobile Number is required";
    mobileNumber.style.color="red";
    if(mobileNumber.value.trim().length>10){
        document.getElementById("requiredMob").innerHTML="Mobile number upto 10 numbers only";
    } 
     if(!regex3.test(mobileNumber.value)){
        document.getElementById("requiredMob").innerHTML="Mobile number is not in correct pattern";
        return false;
    }
    return false;
}
else if(currentAddress.value.trim()==""){
     currentAddress.style.color="red";

     document.getElementById("requiredAd").innerHTML="Current Address is required";
   
    return false;
}
else if(city.value.trim()==""){
    city.style.color="red"; 
    document.getElementById("requiredCity").innerHTML="City is Required";
   
    return false;
}
else if(zipCode.value.trim()==""){
    zipCode.style.color="red";
    document.getElementById("requiredCode").innerHTML="Zip Code is required";
    return false;
}else if(upload.value.length==null){
    document.getElementById("requiredPhoto").innerHTML="Upload your profile photo";
    upload.style.color="red";
    return false;
}
else{
    return true;
}
}