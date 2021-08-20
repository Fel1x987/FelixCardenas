var t1 = document.getElementById("texto1");
var t2 = document.getElementById("texto2");
var cifrado1 = () =>{
    let u = t1.value.toLowerCase();
    var c = u.split("");
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

var cifrado2 = () =>{
    let u = t1.value.toLowerCase();
    var c = u.split("");
    var length = c.length;
    console.log(length);
    var m = "";
    var cipher = 0;
    for (var i = 0; i < length; i++) {
        console.log(c[i].charCodeAt(0));
        cipher = c[i].charCodeAt(0);
        cipher += 3;
        if(cipher == 123){
            cipher = 97;
        } else if (cipher == 124) {
            cipher = 98;
        } else if(cipher == 125){
            cipher = 99;
        }
        m += String.fromCharCode(cipher);
        cipher = 0;
    }
    t2.value = m;
}

var decode1 = () =>{
    var c = t1.value.split("");
    var length = c.length;
    console.log(length);
    var m = "";
    var cipher = 0;
    for (var i = 0; i < length; i++) {
        console.log(c[i].charCodeAt(0));
        cipher = c[i].charCodeAt(0);
        switch (cipher) {
            case 97:
                cipher = 121;
                break;
            case 98: 
                cipher = 122;
            default:
                cipher -= 2;
        }
        m += String.fromCharCode(cipher);
        cipher = 0;
    }
    t2.value = m;
}

var decode2 = () =>{
    var c = t1.value.split("");
    var length = c.length;
    console.log(length);
    var m = "";
    var cipher = 0;
    for (var i = 0; i < length; i++) {
        console.log(c[i].charCodeAt(0));
        cipher = c[i].charCodeAt(0);
        switch (cipher) {
            case 97:
                cipher = 120;
                break;
            case 98: 
                cipher = 121;
                break;
            case 99:
                cipher = 122;
                break;
            default:
                cipher -= 3;
        }
        m += String.fromCharCode(cipher);
        cipher = 0;
    }
    t2.value = m;
}
//abcdefghijklmnopqrstuvwxyz

//cdefghijklmnopqrstuvwxyzab