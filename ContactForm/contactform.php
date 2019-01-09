<?php

$con = mysqli_connect("localhost","root","welcome$123", "chicktech");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 

$sql="INSERT INTO communication (name, email,appointmentdate, message)

VALUES

('$_POST[dname]','$_POST[demail]','$_POST[datepicker]','$_POST[dmessage]')";

 



if (!mysqli_query($con,$sql))
  {
  echo("<div style='color:red ; font-size: 20px; padding: 20px;'>Error description: " . mysqli_error($con) + "</div>");
  }
else 
{
   echo("<div style='color:blue ; font-size: 30px; padding: 20px;'>Thank you for contacting us. We will get back to you at the earliest.</div>");

}


mysqli_close($con);

?>

