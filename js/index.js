function ProcessBox1() {
    var ranNum;

    do {
        ranNum = Math.floor((Math.random() * 10) + 1);
    } while (ranNum == 0 || ranNum >= 4)

    if (ranNum == 1) {
        document.getElementById("one").className = "one";
    }
    else if (ranNum == 2) {
        document.getElementById("one").className = "two";
    }

    else if (ranNum == 3) {
        document.getElementById("one").className = "three";
    }
    return ranNum;
}


function ProcessBox2() {
    do {
        ranNum2 = Math.floor((Math.random() * 10) + 1);
    } while (ranNum2 == 0 || ranNum2 >= 4)

    if (ranNum2 == 1) {
        document.getElementById("second").className = "one";
    }
    else if (ranNum2 == 2) {
        document.getElementById("second").className = "two";
    }

    else if (ranNum2 == 3) {
        document.getElementById("second").className = "three";
    }

    return ranNum2;
}



function ProcessBox3() {
    do {
        ranNum3 = Math.floor((Math.random() * 10) + 1);
    } while (ranNum3 == 0 || ranNum3 >= 4)
    if (ranNum3 === 1) {
        document.getElementById("third").className = "one";
    }
    else if (ranNum3 === 2) {
        document.getElementById("third").className = "two";
    }
    else if (ranNum3 === 3) {
        document.getElementById("third").className = "three";
    }
    return ranNum3;
}

function Congrats(ranNum, ranNum2, ranNum3) {
    if (ranNum === 1 && ranNum2 === 1 && ranNum3 === 1) {
        document.getElementById('msg').innerHTML = 'Congrats! You Won!';
    }
    else if (ranNum === 2 && ranNum2 === 2 & ranNum3 === 2) {
    document.getElementById('msg').innerHTML = "Congrats! You Won!";
    }
   else if (ranNum === 3 && ranNum2 === 3 && ranNum3 === 3) {
        document.getElementById('msg').innerHTML = "Congrats! You Won!";
   }
    else {
        document.getElementById('msg').innerHTML = "Sorry! Try Again!";
    }
}


function startProcess() {
    var ranNum = ProcessBox1();
    var ranNum2 = ProcessBox2();
    var ranNum3 = ProcessBox3();

    Congrats(ranNum, ranNum2, ranNum3);
}

startProcess();
