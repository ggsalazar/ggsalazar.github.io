function RollDice(number) {
    var randomNumber = Math.floor(Math.random()* number)+1;
    var box = document.getElementById('box');
    if (box.innerHTML == '') {
        box.innerHTML = randomNumber;
    } else {
        box.innerHTML += "+";
        box.innerHTML += randomNumber;
        var str = box.innerHTML;
        var result = str.split("+").map(x=>parseInt(x));
        if (result.length == 7) {
            result[0] = result[6];
            for (i=0; i<6; i++) {
                result.pop();
            }
            box.innerHTML = result[0];
            return;
        }
        box.innerHTML = result[0];
        for (i=1; i<result.length; i++) {
            box.innerHTML += "+";
            box.innerHTML += result[i];
        }
        var res = result.reduce((a, b) => a+b,0);
        box.innerHTML += "=";
        box.innerHTML += res;
    }
    
}