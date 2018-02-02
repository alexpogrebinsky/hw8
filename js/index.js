var x = Math.floor((Math.random() * 10) + 1);
var y = Math.floor((Math.random() * 10) + 1);            
var z = Math.floor((Math.random() * 10) + 1);


function myFunction() {
            

            if (x == 1) {
                document.getElementById("one").className ="one";
    }
            else if (x == 2) {
                document.getElementById("one").className = "two";
    }

            else if (x == 3) {
                document.getElementById("one").className = "three";

    }

}


function myFunctionTwo() {
            


            if (y == 1) {
                document.getElementById("second").className = "one";
        }
            else if (y == 2) {
                document.getElementById("second").className = "two";
        }

            else if (y == 3) {
                document.getElementById("second").className = "three";

            }
            
}



 function myFunctionThree() {
            
  


            if (z === 1) {
                document.getElementById("third").className = "one";
        }
            else if (z === 2) {
                document.getElementById("third").className = "two";
        }
            else if (z === 3) {
                document.getElementById("third").className = "three";

        }
  
};

function Congrats() {


    if (x === 1 && y === 1 && z === 1) {
        document.getElementById('msg').innerHTML = 'Congrats! You Won!';
    }
    else if (x === 2 && y === 2 & z === 2) {
        document.getElementById('msg').innerHTML = "Congrats! You Won!";
    }
    else if (x === 3 && y === 3 && z === 3) {
        document.getElementById('msg').innerHTML = "Congrats! You Won!";
    }

    else {
        document.getElementById('msg').innerHTML = "Sorry! Try Again!";
    }
    
    
}





function startProcess() {

    myFunction();
    myFunctionTwo();
    myFunctionThree();
    Congrats();
    
}