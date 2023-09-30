function getValue(bin, oct, dec, hex) {
    // check if has input 
    if ( (bin.length || oct.length || dec.length || hex.length) <= 0) {
        window.alert("Its needed input");
    } else {
        if (bin.length > 0) {
            fromBin(bin);
        } else if (oct.length > 0) {
            fromOct(oct);
        } else if (dec.length > 0) {
            fromDeci(dec);
        } else if (hex.length > 0) {
            fromHex(hex);
        }
    }
}

// BINARY
function fromBin(value) {
    var isTrue = true;
    for(var i = 0; i < value.length; i++) {
        if (value[i] != '1' && value[i] != '0') {
            isTrue = false;
        }
    }
    if (isTrue) {
        var dec = parseInt(value, 2).toString(10);
        var oct = parseInt(value, 2).toString(8);
        var hex = parseInt(value, 2).toString(16).toUpperCase();
        document.getElementById('dec').value = dec;
        document.getElementById('oct').value = oct;
        document.getElementById('hex').value = hex;
    } else {
        window.alert("Invalid Value. Try again");
        document.getElementById('resetButton').click();
    }
}

// OCTAL
fromOct = (value) => {
    var isTrue = true;
    var digit;
    for(var i = 0; i < value.length; i++) {
        digit = parseInt(value[i]);
        if(digit < 0 || digit > 8) {
            isTrue = false;
        }
    }

    if (isTrue) {
        var bin = parseInt(value, 8).toString(2);
        var dec = parseInt(value, 8).toString(10);
        var hex = parseInt(value, 8).toString(16);
        
        document.getElementById('bin').value = bin;
        document.getElementById('dec').value = dec;
        document.getElementById('hex').value = hex;
    } else {
        window.alert("Invalid Value. Try again");
        document.getElementById('resetButton').click();
    }
}

// DECIMAL
fromDeci = (value) => {
    var bin = parseInt(value, 10).toString(2);
    var oct = parseInt(value, 10).toString(8);
    var hex = parseInt(value, 10).toString(16).toUpperCase();
    document.getElementById('bin').value = bin;
    document.getElementById('oct').value = oct;
    document.getElementById('hex').value = hex;
}

// HEXADECIMAL -> to check the hexadecimal value, we use the check() method
fromHex = (value) => {
    var isTrue = true;
    var length = value.length;
    /* 
        using a regular expression
        the ^ and the $ indicates that the pattern must follow the string in its completeness
    */
    var regex = /^[0-9a-fA-F]+$/;
    if(regex.test(value)) {
        isTrue;
    } else {
        isTrue = false;
    }

    if(isTrue) { 
        var bin = parseInt(value, 16).toString(2);
        var oct = parseInt(value, 16).toString(8);
        var dec = parseInt(value, 16).toString(10);
        
        document.getElementById('bin').value = bin;
        document.getElementById('oct').value = oct;
        document.getElementById('dec').value = dec;
    } else {
        window.alert('Invalid Value. Try again');
        document.getElementById('resetButton').click();
    }
}