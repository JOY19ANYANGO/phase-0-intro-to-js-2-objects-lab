// Write your solution in this file!
 let  employee = {
      name: 'Sam',
      streetAddress: 'New York',
    };

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee={...employee}
    newEmployee.streetAddress='11 Broadway'
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee.streetAddress='12 Broadway'
  return employee;
}
function deleteFromEmployeeByKey(employee, key){
   let newEmployee = {...employee}
  delete newEmployee.name
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name
  return employee;
}

