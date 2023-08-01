function validate(str)
{

	// <---------------- Login input ------------------->
	
	if(str.login.value=="")
	{
	document.getElementById("msg").innerHTML="! Please enter Some Value in Login ID";
	str.login.focus();
	return false;
	}
    if(!str.login.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Only Character Value";
	str.login.focus();
	return false;
	}

	// <---------------- Password input ------------------->

    if(str.pass.value=="")
	{
	document.getElementById("msg").innerHTML="! Please enter Some Value in Password";
	str.pass.focus();
	return false;
	}
	if(str.pass.value.length<8)
	{
	document.getElementById("msg").innerHTML="! Please enter minimum 8 digit length";
	str.pass.focus();
	return false;
	}

	// <---------------- Country input ------------------->

	if(str.country.value=="")
	{
	document.getElementById("msg").innerHTML="! Please Select Some Value in Country";
	str.country.focus();
	return false;
	}

	// <---------------- First Name input ------------------->

	if(!str.fname.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Only Character Value";
	str.fname.focus();
	return false;
	}

	// <---------------- Middle Name input ------------------->

	if(!str.mname.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Only Character Value";
	str.mname.focus();
	return false;
	}

	// <---------------- Last Name input ------------------->

	if(!str.lname.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Only Character Value";
	str.lname.focus();
	return false;
	}

	// <---------------- Resident input ------------------->

	if(str.resident.value=="")
	{
	document.getElementById("msg").innerHTML="! Please Select Some Value in Resident";
	str.resident.focus();
	return false;
	}

	// <----------------State  input ------------------->

	if(str.State.value=="")
	{
	document.getElementById("msg").innerHTML="! Please Select Some Value in State";
	str.State.focus();
	return false;
	}

	// <----------------Email  input ------------------->

	if(str.email.value=="")
	{
	document.getElementById("msg").innerHTML="! Please enter Some Value in Email";
	str.email.focus();
	return false;
	}
	
	if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Correct Email Address";
	str.email.focus();
	return false;
	}

	// <----------------PHone number input ------------------->

	if(str.phone.value=="")
	{
	document.getElementById("msg").innerHTML="! Please enter Some Value in Phone Number";
	str.phone.focus();
	return false;
	}
	// if(str.phone);
	// {
	// document.getkE,lementById("msg").innerHTML="! Please enter minimum 10 digit length";
	// str.phone.focus();
	// return false;
	// }

	// <----------------Account Number input------------------->

	if(str.acc.value=="")
	{
	document.getElementById("msg").innerHTML="! Please enter Some Value in Account Number";
	str.acc.focus();
	return false;
	}
	if(!str.acc.value.match(/^[0-9]{15}$/))
	{
	document.getElementById("msg").innerHTML="! Please enter Only 15 Number";
	str.acc.focus();
	return false;
	}
}