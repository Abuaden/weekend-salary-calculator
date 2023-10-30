let totalMonthly = 0;

    function handleSubmit(event){
    
    console.log('handleSubmit clicked!',event);
        event.preventDefault();
    
    let firstName= document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let eyeD = document.getElementById('eyeD');
    let titleR = document.getElementById('titleR');
    let salary = document.getElementById('salary')
    let tableBody = document.getElementById('tableBody');
    let annualSalary = document.getElementById('salary').value ;

    document.getElementById('tableBody').innerHTML +=
    `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${eyeD.value}</td>
    <td>${titleR.value}</td>
    <td>${salary.value}</td>
    <td><button onclick="deleteText(event)">❌</button></td>
     </tr>`

     firstName.value = ""
     lastName.value = ""
     eyeD.value = ""
     titleR.value = ""
     salary.value = ""
        let monthlySalary = annualSalary / 12;
         totalMonthly += monthlySalary
  document.getElementById("totalMonthlyCost").textContent = totalMonthly;

    let totalMonthlyCostElement = document.getElementById("totalMonthlyCost");
  totalMonthlyCostElement.textContent = totalMonthly;

  let totalMonthlySection = document.getElementById("totalMonthly");
  if (totalMonthly > 20000) {
      totalMonthlySection.classList.add("over-budget");
  } else {
      totalMonthlySection.classList.remove("over-budget");
  }

}

    function deleteText(event) {
    event.target.parentElement.parentElement.remove();
    
    
    }