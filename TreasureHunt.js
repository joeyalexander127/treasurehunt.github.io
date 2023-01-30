var trap = Math.floor(Math.random() * 12)
var cheese = Math.floor(Math.random() * 12)
if(cheese === trap ){
    cheese = Math.floor(Math.random() * 12)
}


const random = (num) => {
   
    if(trap === num){
        document.getElementById(num).innerHTML = "<img src=\'https://www.cartertoons.com/wp-content/uploads/2015/08/ratdiningexp.jpg\' height=\'50px\'>" 
        setTimeout(function() {
            if (confirm("Game over-no cheese for you") ) {
                if (confirm("Play again?" )) {
                    window.location.reload();
                } else {
                    //code here for no save but leave (No)
                }
            } else {
                //code here for don't leave (Cancel)
            }
        },100)
        
    }else if(cheese === num){
        document.getElementById(num).innerHTML = "<img src=\'https://t3.ftcdn.net/jpg/00/48/23/68/360_F_48236851_FuBolpayROwduyopfR3H37y2QRDvCTAH.jpg\' height=\'50px\'>"       
        setTimeout(function() {
            if(confirm("You won - enjoy that cheese")){
                window.location.reload()
            }
        },100)
    }else {
        document.getElementById(num).innerHTML = "<img src=\'https://i.pinimg.com/736x/39/9c/d9/399cd91a53fcd07cd89a83663254e3aa.jpg\' height=\'50px\'>" 
        
    }
}

