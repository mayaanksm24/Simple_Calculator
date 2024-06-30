//To Append the clicked value to the input field
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }


//To Clear the input field
 function clearInput(){
    document.getElementById('res').value = '';
 }

//To Evaluate the expression in the input field and to update the result
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2;

    try {
        num2 = eval(num1);
        document.getElementById('res').value = num2;
        updateHistory(num1 + ' = ' + num2);
    } catch (e) {
        document.getElementById('res').value = 'Error';
    }
 }

 // To Clear both the input field and the history
function clearHistory() {
    var newHistory = document.getElementById('history');
    newHistory.innerHTML = ''; // Clear the history
    document.getElementById('res').innerHTML = '';
}

//To Clear the history section
function ACclear() {
    var toDelete = document.getElementById('history');
    toDelete.innerHTML='';
}


//To Remove the last character from the input field
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
}

// To display new entries in the history section
function updateHistory(entry) {
    var historyDiv = document.getElementById('history');
    var newHistory = historyDiv;
    var newEntry = document.createElement('div');
    newEntry.textContent = entry;
    newHistory.appendChild(newEntry);
}
