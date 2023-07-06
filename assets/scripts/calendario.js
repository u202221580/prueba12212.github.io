var calendarBody = document.getElementById('calendar-body');
var monthYear = document.getElementById('month-year');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

function generateCalendar(year, month) {
    var startDate = new Date(year, month, 1);
    var endDate = new Date(year, month + 1, 0);
    var startDay = startDate.getDay();
    var totalDays = endDate.getDate();
    var numRows = Math.ceil((startDay + totalDays) / 7);
    var dayCount = 1;

    calendarBody.innerHTML = '';

    for (var row = 0; row < numRows; row++) {
        var newRow = document.createElement('tr');

        for (var day = 0; day < 7; day++) {
            var newCell = document.createElement('td');

            if (row === 0 && day < startDay) {
                // Fill in empty cells before the start day
                newCell.textContent = '';
            } else if (dayCount > totalDays) {
                // Fill in empty cells after the end day
                newCell.textContent = '';
            } else {
                // Fill in the actual day number
                newCell.textContent = dayCount;

                if (
                    year === currentYear &&
                    month === currentMonth &&
                    dayCount === currentDate.getDate()
                ) {
                    newCell.classList.add('current-month');
                }

                dayCount++;
            }

            newRow.appendChild(newCell);
        }

        calendarBody.appendChild(newRow);
    }

    calendarBody.classList.remove('fade');
    setTimeout(function() {
        calendarBody.classList.add('fade');
    }, 10);

    monthYear.textContent = months[month] + ' ' + year;
}

function changeMonth(delta) {
    currentMonth += delta;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    generateCalendar(currentYear, currentMonth);
}

generateCalendar(currentYear, currentMonth);

prevBtn.addEventListener('click', function() {
    changeMonth(-1);
});

nextBtn.addEventListener('click', function() {
    changeMonth(1);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeMonth(-1);
    } else if (event.key === 'ArrowRight') {
        changeMonth(1);
    }
});
const targetDiv = document.getElementById("recordatorio");
targetDiv.style.display="none";
calendarBody.addEventListener('click', function(event) {
    var cell = event.target;

    if ( cell.textContent === "8" || cell.textContent === "19"||cell.textContent === "30") {
        targetDiv.style.display = "flex";
    }else{
        console.log()
        targetDiv.style.display="none";
    }
});


let list =document.querySelectorAll(".navigation li")

function activelink(){
    list.forEach((item)=>{item.classList.remove("hovered")});
    this.classList.add("hovered");
}
list.forEach(item=>{item.addEventListener("click",activelink)})

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main= document.querySelector(".main");

toggle.onclick=function(){
    navigation.classList.toggle("active");
    main.classList.toggle(("active"));
}