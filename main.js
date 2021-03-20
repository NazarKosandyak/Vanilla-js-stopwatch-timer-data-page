let getDiv = document.querySelector('.time1')

//Date
let myTime = function(){
    let myDate = new Date
    
    let date = myDate.getDate()
    let month = myDate.getMonth() + 1
    let year = myDate.getFullYear()

    if(month < 10){
        month = '0' + month
    }
    getDiv.innerHTML = `${date}.${month}.${year}`
    
}
myTime()

// Digital clock
    
let getTimer2 = document.querySelector('.timer2')
setInterval(function(){
    let myDate = new Date
    
    let hours = myDate.getHours()
    let minutes = myDate.getMinutes() 
    let seconds = myDate.getSeconds()

        if(seconds < 10 ){
            seconds = '0' + seconds
        }
        if(minutes < 10 ){
            minutes = '0' + minutes
        }
    getTimer2.innerHTML = `${hours}:${minutes}:${seconds}`

},1000)

//stopwatch

let sec = 00
let milis = 000
let min = 00
let hour = 00
let getBtnStart = document.querySelector('#start')

let getMilis = document.querySelector('.milis')
let getSec = document.querySelector('.sec')
let getMin = document.querySelector('.min')
let getHour = document.querySelector('.hour')



getBtnStart.addEventListener('click',function(){

    let myInterval;
    function startTimer(){
        milis++
        if(milis > 100){
            milis = 000
            sec++
            if(sec < 10){
                sec = '0' + sec
            }
            if(sec > 59){
                sec = 00
                min++
                if(min < 10){
                    min = '0' + min
                }
                
               
                if(min > 59){
                    min = 00
                    hour++
                }
            }
           
           
            // loop
            let getTextArea = document.querySelector('.myText')
            
            document.querySelector('#loop').addEventListener('click',function(){
              
                getTextArea.innerHTML = `${hour}:${min}:${sec}:${milis}\n`
             
               
            })
            // Stop interval
            document.querySelector('#stop').addEventListener('click',function(){
                clearInterval(myInterval)
            })

            document.querySelector('#reset').addEventListener('click',function(){
                
                sec = 00
                milis = 000
                min = 00
                hour = 00   

                getMilis.textContent = '00'
                getSec.textContent = '00'
                getMin.textContent = '00'
                getHour.textContent = '00'
                getTextArea.textContent= ''
                clearInterval(myInterval)
            })
           
            
            
        }

// вивід на екран
        getMilis.textContent = milis
        getSec.textContent = sec
        getMin.textContent = min
        getHour.textContent = hour
//*********************** */
        
    }
    if(sec == 0){
        sec = '00'
    }
    if(min == 0){
        min = '00'
    }
    if(hour == 0){
        hour ='00'
    }
    myInterval = setInterval(startTimer,10)

})


// timer

let getPlus = document.querySelector('.plus')
let getMinus = document.querySelector('.minus')
let getMinutes = document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds')
let getArticle = document.querySelector('.article')

let getStart = document.querySelector('.start1')
let getStop = document.querySelector('.stop1')
let getReset1 = document.querySelector('.reset1')
// const getForm = document.forms.mytimer

debugger
let minute = 0
let second = 0
getPlus.addEventListener('click',function(e){
    e.preventDefault()
    minute++
    getMinus.disabled = false;
    if(minute < 10){
        minute = '0' + minute
    }
    getArticle.innerHTML= minute
   
})

getStart.addEventListener('click',function(el){
    getStart.disabled = true
    getPlus.disabled = true
    getMinus.disabled = true
    let interval;

    el.preventDefault()
    function getMove(){
        second--
        if(second<10){
            second = '0'+second
        }
        
        if(second  == 0){
            minute--
            second = 59
        }
       
       
        if(minute <= 0 || second <= 0){
            clearInterval(interval)
            getMinutes.innerHTML = minute + '0'
            getSeconds.innerHTML = '00'
        }
        
        else{
            getMinutes.innerHTML = minute -1
            getSeconds.innerHTML = second 
        }
        getStop.addEventListener('click',function(){
            clearInterval(interval)
            getStart.disabled = false
            
        })
        getReset1.addEventListener('click',function(e){ 
            e.preventDefault()
            minute = 0
            second = 0
            getMinutes.innerHTML = minute +'0'
            getSeconds.innerHTML = second +'0'
            getArticle.innerHTML= minute 
            getPlus.disabled = false
            getMinus.disabled = false
            clearInterval(interval)

        })
        
        
        
        
    } 
    interval = setInterval(getMove,1000)
  
})
second = 60 



getMinus.addEventListener('click',function(el){
    el.preventDefault()
      
    if(minute <=0){
        getMinus.disabled = true;
        
    }
   
    else{
        minute--   
         if(minute >= 0 && minute < 10){
            minute = '0' + minute
         }
    
    }
    getArticle.innerHTML= minute
  
    

})





