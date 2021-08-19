var t1 = document.getElementById("texto1");
var t2 = document.getElementById("texto2");
var cifrado1 = () =>{
    var c = t1.value.split("");
    var length = c.length;
    console.log(length);
    var m = "";
    var cipher = 0;
    for (var i = 0; i < length; i++) {
        console.log(c[i].charCodeAt(0));
        cipher = c[i].charCodeAt(0);
        cipher += 2;
        if(cipher == 123){
            cipher = 97;
        } else if (cipher == 124) {
            cipher = 98;
        }
        m += String.fromCharCode(cipher);
        cipher = 0;
    }

    t2.value = m;
}

//String.fromCharCode(65,66,67)
//"ABC".charCodeAt(0) // returns 65