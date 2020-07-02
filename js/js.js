//all function
/*
    new Date()  /  getMonth()  /  toDateString()  /  getDay()  / toUpperCase() / 
*/

let date = new Date(),
    currentDay = date.getDate();

let startCalender = () =>{  
    let MonthsArray = ["january","febuary","march","april","may","june","july","augest","september","october","november","december"],
        currentMonth = MonthsArray[ date.getMonth() ].toUpperCase(),
        currentWeekDay = date.toDateString(),
        daysOfTheCurrentMonth = new Date(date.getFullYear(), date.getMonth()+1 , 0).getDate(),
        lastDaysInPrevMonth = new Date(date.getFullYear(), date.getMonth() , 0).getDate();

    date.setDate(1);
    let indexOfFirstDayInCurrentMonth = date.getDay();


    document.querySelector(".calender .monthData .month span:first-of-type").innerHTML = currentMonth; // fall the month
    
    if( date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && currentDay === new Date().getDate()){
        document.querySelector(".calender .monthData .month span:last-of-type").innerHTML = new Date().toDateString();
    }else{
        document.querySelector(".calender .monthData .month span:last-of-type").innerHTML = currentWeekDay; // fall the complet day
    }

    let days = "",
    dayLength = 0;
    for( let d = indexOfFirstDayInCurrentMonth   ; d > 0 ; d-- ){
    days += `<span class="prevDays">${lastDaysInPrevMonth - d +1}</span>`;
    dayLength ++;
    }

    for( let d = 1; d <= daysOfTheCurrentMonth ; d++ ){
    d == currentDay && date.getMonth() == new Date().getMonth() &&  date.getFullYear() == new Date().getFullYear()? days += `<span class="active">${d}</span>`: days += `<span>${d}</span>`;
    dayLength ++;
    }

    for( let d = 1; d <= 42 - dayLength ; d++ ){
    days += `<span class="nextDays">${d}</span>`;
    }

    document.querySelector(".calender .days").innerHTML = days
}

document.querySelector(".calender .monthData .fa-chevron-circle-left").addEventListener("click", ()=> {
    date.setMonth( date.getMonth() -1 );
    startCalender();
})
document.querySelector(".calender .monthData .fa-chevron-circle-right").addEventListener("click", ()=> {
    date.setMonth( date.getMonth() + 1 );
    startCalender();
})

startCalender();


$(".calender .days").on("click","span",function(){
    if($(this).hasClass("active")){
        $(this).css({
            "background-color":"#E91E63",
            "color":"#FFF"
        }).siblings().css({ 
            "background-color": "transparent",
            "border": "0px"
        })
    }else{
        $(this).css({
            "background-color": "rgb(22, 22, 22)",
            "border": "1px solid rgb(199, 199, 199)"
        }).siblings().css({ 
            "background-color": "transparent",
            "border": "0px"
        })
        $(this).siblings(".active").css("color","#E91E63")
    }
})