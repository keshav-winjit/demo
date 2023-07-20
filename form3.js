
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the values from the input fields
    const employeeId = document.getElementById("employeeid").value;
    const employeeName = document.getElementById("employeename").value;
    const employeeImage = document.getElementById("inputGroupFile01").value;
    const department = document.getElementById("dept").value;
    
  
    // Display the values in the console (you can do something else with them as well)
    console.log("Employee ID:", employeeId);
    console.log("Employee Name:", employeeName);
    console.log("Employee Image:", employeeImage);
    console.log("Department:", department);
   
  
    // You can perform further actions here, such as sending the data to the server, etc.
  }
  
  // Add event listener to the "Submit" button
  const submitButton = document.getElementById("btn");
  submitButton.addEventListener("click", handleSubmit);
  