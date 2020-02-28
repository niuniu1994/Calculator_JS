function init() {
    let num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";
    let oButtons = document.getElementsByTagName("input");

    let tmp;
    let sym;

    for (let i = 0; i < oButtons.length; i++) {
        oButtons[i].onclick = function () {
            if (!isNaN(this.value)) {
                if (isNull(num.value)) {
                    num.value = this.value;
                } else if (tmp != null && sym != null) {
                    num.value = this.value;
                } else {
                    num.value = num.value + this.value;
                }
            } else {
                let btn = this.value;

                switch (btn) {
                    case "+":
                        if (tmp == null) {
                            tmp = parseFloat(num.value);
                            num.value = 0;
                            sym = "+";
                        } else {
                            num.value = symbol(sym,num.value,tmp);
                            sym = "+";
                            tmp = parseFloat(num.value);
                        }
                        break;
                    case "-":
                        if (tmp == null){
                            tmp = parseFloat(num.value);
                            num.value = 0;
                            sym = "-";
                        } else {
                            num.value = symbol(sym,num.value,tmp);
                            sym = "-";
                            tmp = parseFloat(num.value);
                        }

                        break;

                    case "*":
                        if (tmp == null){
                            tmp = parseFloat(num.value);
                            num.value = 0;
                            sym = "*";
                        } else {
                            num.value = symbol(sym,num.value,tmp);
                            sym = "*";
                            tmp = parseFloat(num.value);
                        }
                        break;

                    case "/":
                        if (tmp == null){
                            tmp = parseFloat(num.value);
                            num.value = 0;
                            sym = "/";
                        } else {
                            num.value = symbol(sym,num.value,tmp);
                            sym = "/";
                            tmp = parseFloat(num.value);
                        }
                        break;

                    case "=":
                        num.value = symbol(sym,num.value,tmp)
                        sym = null;
                        tmp = null;
                        break;

                    case ".":
                        num.value = dec_point(num.value);
                        break;

                    case "c":
                        num.value = 0;
                        tmp = null;
                        sym = null;
                        break;

                    case "<-":
                        num.value = back(num.value);
                        break;

                    case "+/-":
                        num.value = change(num.value);
                        break;

                    case "m":
                        alert(parseInt("20+2"));
                        break;

                }
            }
        }
    }
}

//退位健
function back(n) {
    n = n.substr(0, n.length - 1);
    if (!isNull(n)) {
        return n;
    }
    return "0";
}

//dectection of point
function dec_point(n) {
    if (n.indexOf(".") == -1) {
        return n + ".";
    }
}

function isNull(n) {
    if (n == "0" || n.length === 0) {
        return true;
    }
    return false;
}

function change(n) {
    if (!isNull(n)){
        n = n * -1;
    }else {
        n = "0";
    }

    return n;
}

function symbol(sym,n,tmp) {
    switch (sym) {
        case "+":
            n = tmp + parseFloat(n);
            break;
        case "-":
            n = tmp - parseFloat(n);
            break;

        case "*":
            n = tmp * parseFloat(n);
            break;

        case "/":
            if (n !== "0") {
                n = tmp / parseFloat(n);
            }
            break;
        default:
            break;
    }
    return n;
}