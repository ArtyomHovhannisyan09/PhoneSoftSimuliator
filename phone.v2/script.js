


function displayTime() {
    
    var dataTime = new Date();
    var hrs = dataTime.getHours()
    var min = dataTime.getMinutes()
    var month =dataTime.getMonth()+1
    if(month ==1){
        month="January"
    }else if (month==2){
        month="February"
    }else if (month==3){
        month="March"
    }else if (month==4){
        month="April"
    }else if (month==5){
        month="May"
    }else if (month==6){
        month="June"
    }else if (month==7){
        month="July"
    }else if (month==8){
        month="August"
    }else if (month==9){
        month="September"
    }else if (month==10){
        month="October"
    }
    else if (month==11){
        month="November"
    }
    else if (month==12){
        month="December"
    }
   
    document.getElementById('hours').innerHTML =hrs;
    document.getElementById('minut').innerHTML =min;
    document.getElementById('monthly').innerHTML =month;
}
setInterval(displayTime,10)


// function calcuateManager(num) {
//     var re;
//     var display = document.getElementById('display--input')
//     display.addEventListener('click', ()=>{
//   display.value
//     })
// }

// search
let searchInput = document.querySelector('#search--in--home')
let searchBtn = document.querySelector('#logo--search')
searchBtn.onclick = function(){
let url = 'https://www.google.com/search?q=' +searchInput.value;
window.open(url)
}

