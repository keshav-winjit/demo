fetch('employee.json')
  .then(response =>response.json())
  .then(function(data){
   
    for(let i=0;i<data.employee.length;i++)
    {
       

      tr=document.createElement("tr")
      document.getElementById("table").appendChild(tr)
  
      td1=document.createElement("td")
      td1.innerHTML=data.employee[i].employeeId
      tr.appendChild(td1)
  
      td2=document.createElement("td")
      td2.innerHTML=data.employee[i].employeeName
      tr.appendChild(td2)
   
       td3=document.createElement("td")
       img=document.createElement("img")
       img.src=data.employee[i].employeeImage
       img.alt="no"
       td3.appendChild(img)
       tr.appendChild(td3)
  
       td4=document.createElement("td")
       td4.innerHTML=data.employee[i].department
       tr.appendChild(td4)


       td5=document.createElement("button")
       td5.type="button"
       td5.innerHTML="Edit"
       td5.className="btn btn-primary"
       tr.appendChild(td5)

  
  
       document.getElementById("table").appendChild(tr)


       td5.addEventListener("click", function1)
       function function1(e){
        e.preventDefault()

        let formData = {
          employeeId: data.employee[i].employeeId,
          employeeName: data.employee[i].employeeName,
          //employeeImage: data.employee[i].employeeImage,
          department: data.employee[i].department,
           
        }
      
      localStorage.setItem("formData", JSON.stringify(formData))

      



        window.location.href="form.html"
       }

    }



  })