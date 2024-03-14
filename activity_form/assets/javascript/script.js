// add ng event listener
document.getElementById('log-hours').addEventListener('click', function() {
    // add ng variable para icall ung mga input
    let employeeId = document.getElementById('employee-id').value;
    let employeeName = document.getElementById('employee-name').value;
    let workingHours = document.getElementById('working-hours').value;

    // error if else if not indicated Employee ID or Workinghours (nested yung process)
    if (employeeId === "" || workingHours === "") {
        alert("Please provide both employee ID and working hours.");
    } else {
        // Create nang row
        let row = document.createElement('tr');

        // Create nag table data cells
        let idCell = document.createElement('td');
        idCell.textContent = employeeId;
        row.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.textContent = employeeName;
        row.appendChild(nameCell);

        let hoursCell = document.createElement('td');
        hoursCell.textContent = workingHours;
        row.appendChild(hoursCell);

        let actionCell = document.createElement('td');

        // to Add Edit button
        let editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.className = "btn btn-primary btn-sm mr-1";
        editButton.addEventListener('click', function() {
            // i-Call edit function
            editRow(row);
        });
        actionCell.appendChild(editButton);

        // eto remove button
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "btn btn-danger btn-sm";
        removeButton.addEventListener('click', function() {
            row.remove();
        });
        actionCell.appendChild(removeButton);

        row.appendChild(actionCell);

        // Append sa baba
        document.getElementById('output').appendChild(row);
    }
});

// Function para sa edit row
function editRow(row) {
    // Get data from the row
    let employeeId = row.cells[0].textContent;
    let employeeName = row.cells[1].textContent;
    let workingHours = row.cells[2].textContent;

    // Set data to input fields
    document.getElementById('employee-id').value = employeeId;
    document.getElementById('employee-name').value = employeeName;
    document.getElementById('working-hours').value = workingHours;

    // Disable employee ID input
    document.getElementById('employee-id').disabled = true;
}
