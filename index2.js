let btn=document.getElementById("add")
btn.addEventListener("click", fun2)
function fun2(e){
  e.preventDefault()



  window.location.href="form.html"
}


let formDataJSON = localStorage.getItem("formData")
let formData = formDataJSON ? JSON.parse(formDataJSON) : null
array=[]
array.push(formData)
let tr,td1,td2,td3,td4,td5
if(formData)
{
  for(let i=0;i<array.length;i++)
  {
     tr=document.createElement("tr")
    document.getElementById("table").appendChild(tr)

    td1=document.createElement("td")
    td1.innerHTML=array[i].employeeId
    tr.appendChild(td1)

    td2=document.createElement("td")
    td2.innerHTML=array[i].employeeName
    tr.appendChild(td2)
 
     td3=document.createElement("td")
     img=document.createElement("img")
     img.src=array[i].employeeImage
     img.alt="no"
     td3.appendChild(img)
     tr.appendChild(td3)

     td4=document.createElement("td")
     td4.innerHTML=array[i].department
     tr.appendChild(td4)


     td5=document.createElement("button")
       td5.type="button"
       td5.innerHTML="Save"
       td5.className="btn btn-primary"
       tr.appendChild(td5)


     document.getElementById("table").appendChild(tr)

     td5.addEventListener("click", function2)
     function function2(e){
      e.preventDefault()
      alert("Data Saved Successfully")
    
    }
    
  }





}