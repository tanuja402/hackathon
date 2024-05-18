$(document).ready(function() {
    
    let expenses = [];


    if (localStorage.getItem('expenses')) {
        expenses = JSON.parse(localStorage.getItem('expenses'));
        displayExpenses();
    }

    
    $('#expense-form').submit(function(event) {
        event.preventDefault();
        const amount = parseFloat($('#amount').val());
        const category = $('#category').val();
        const date = $('#date').val();
        const description = $('#description').val();
        if (!isNaN(amount) && description.trim() !== '') {
            const expense = { amount, category, date, description };
            expenses.push(expense);
            saveExpenses();
            displayExpenses();
            $('#expense-form')[0].reset(); 
        } else {
            alert('Please enter a valid amount and description.');
        }
    });

    
    function displayExpenses() {
        const tableBody = $('#expenses-table tbody');
        tableBody.empty();
        expenses.forEach(function(expense, index) {
            const formattedDate = new Date(expense.date).toLocaleDateString();
            const editButton = `<button class="edit-btn" data-index="${index} ">Edit</button>`;
            const deleteButton = `<button class="delete-btn" data-index="${index}">Delete</button>`;
            tableBody.append(`<tr>
                <td>${formattedDate}</td>
                <td>$${expense.amount.toFixed(2)}</td>
                <td>${expense.category}</td>
                <td>${expense.description}</td>
                <td>${editButton} ${deleteButton}</td>
            </tr>`);
        });
    }


    $(document).on('click', '.delete-btn', function() {
        const index = $(this).data('index');
        expenses.splice(index, 1);
        saveExpenses();
        displayExpenses();
    });

    
    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
});
