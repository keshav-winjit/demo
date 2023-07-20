let btn=document.getElementById("add")
btn.addEventListener("click", fun2)
function fun2(e){
  e.preventDefault()

//   const retrievedItems1 = localStorage.getItem('myItems');
//   const itemArray1 = retrievedItems1? JSON.parse(retrievedItems1): null;
//   if(itemArray1){
//   const serializedItems = JSON.stringify(itemArray1);
//   localStorage.setItem('myItems', serializedItems);
//   }
//   else{
//     localStorage.clear()
//   }
  window.location.href="form.html"
}




const retrievedItems = localStorage.getItem('myItems');
const itemArray = retrievedItems? JSON.parse(retrievedItems): null;

// let formDataJSON = localStorage.getItem("formData")
// let formData = formDataJSON ? JSON.parse(formDataJSON) : null
// array=[]
// array.push(formData)
let tr,td1,td2,td3,td4,td5
if(itemArray)
{
  for(let i=0;i<itemArray.length;i++)
  {
     tr=document.createElement("tr")
    document.getElementById("table").appendChild(tr)

    td1=document.createElement("td")
    if(itemArray[i].employeeId=='')
    continue
    td1.innerHTML=itemArray[i].employeeId
    tr.appendChild(td1)

    td2=document.createElement("td")
    td2.innerHTML=itemArray[i].employeeName
    tr.appendChild(td2)
 
     td3=document.createElement("td")
     img=document.createElement("img")
    //  img.src=array[i].employeeImage
     img.alt="no"
     td3.appendChild(img)
     tr.appendChild(td3)

     td4=document.createElement("td")
     td4.innerHTML=itemArray[i].department
     tr.appendChild(td4)


     td5=document.createElement("button")
       td5.type="button"
       td5.innerHTML="Save"
       td5.className="btn btn-primary"
       tr.appendChild(td5)

       td6=document.createElement("button")
       td6.type="button"
       td6.innerHTML="Delete"
       td6.className="btn btn-primary"
       tr.appendChild(td6) 


     document.getElementById("table").appendChild(tr)

     td5.addEventListener("click", function2)
     function function2(e){
      e.preventDefault()
      alert("Data Saved Successfully")
    
    }
     

    td6.addEventListener("click", function3)
     function function3(e){
      e.preventDefault()
      alert("Data Deleted  Successfully")
    itemArray.splice(i,1)

    const serializedItems = JSON.stringify(itemArray);
    localStorage.setItem('myItems', serializedItems);
    window.location.reload();
    
    }

    
  }





}