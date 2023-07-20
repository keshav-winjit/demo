// let formDataJSON = localStorage.getItem("formData")
// let formData = formDataJSON ? JSON.parse(formDataJSON) : null
// document.getElementById("employeeid").value=formData.employeeId
// document.getElementById("employeename").value=formData.employeeName
//document.getElementById("inputGroupFile01").value=formData.employeeImage
// document.getElementById("dept").value=formData.department

// localStorage.clear()



// Get the item properties from the input fields
// const itemName = document.getElementById('itemName').value;
// const itemPrice = document.getElementById('itemPrice').value;

// Retrieve existing items from localStorage or initialize an empty array
// const existingItems = localStorage.getItem('myItems');
// const itemArray = existingItems ? JSON.parse(existingItems) : [];

// Create an object for the current item
// const newItem = {
//   name: itemName,
//   price: itemPrice,
  // Add more properties for additional inputs if needed
// };

// Add the new item object to the array
// itemArray.push(newItem);

// Serialize the array to a JSON string
// const serializedItems = JSON.stringify(itemArray);

// Store the serialized items in localStorage
// localStorage.setItem('myItems', serializedItems);



let eid,ename,file,deptm
let butn=document.getElementById("btn")
butn?.addEventListener("click",fun1)

function fun1(e){
e.preventDefault()
eid=document.getElementById("employeeid").value
ename=document.getElementById("employeename").value
//file=document.getElementById("inputGroupFile01").value
deptm=document.getElementById("dept").value


const existingItems = localStorage.getItem('myItems');
const itemArray = existingItems ? JSON.parse(existingItems) : [];

    
const newItem = {
    employeeId: eid,
    employeeName: ename,
    //employeeImage: file,
    department: deptm,
     
  }

  itemArray.push(newItem);
  const serializedItems = JSON.stringify(itemArray);


localStorage.setItem('myItems', serializedItems);
window.location.href="index.html"

// localStorage.set('eid',eid)
// localStorage.set('ename',ename)
// localStorage.set('file',file)
// localStorage.set('dept',deptm)

}
