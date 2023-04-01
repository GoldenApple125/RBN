var LNP = new Amount(0,0,"LNP");
var gainLNP = new Amount(1,0,"gainLNP");
var level1_1 = new Amount(0,0,"level1_1");
var level1_2 = new Amount(0,0,"level1_2");
var level1_3 = new Amount(0,0,"level1_3");
var int10_level1_1 = new Amount(0,0);
var level1_all = new Amount(0,0);
var basic_effect1_1 = new Amount(1,0,"basic_effect1_1");
var basic_effect1_2 = new Amount(1,2,"basic_effect1_2");
var basic_effect1_3 = new Amount(9,-1,"basic_effect1_3");
var effect1_1 = new Amount(0,0,"effect1_1");
var effect1_2 = new Amount(0,0,"effect1_2");
var effect1_3 = new Amount(1,0,"effect1_3");
var effect1_all = new Amount(1,0,"effect1_all");
var pre_price1_1 = new Amount(1,1);
var pre_price1_2 = new Amount(1,2);
var pre_price1_3 = new Amount(1,3);
var price1_1 = new Amount(1,1,"price1_1");
var price1_2 = new Amount(1,2,"price1_2");
var price1_3 = new Amount(1,3,"price1_3");
var isResearch1_1 = 0
var isResearch1_2 = 0
var isResearch1_3 = 0
var isResearch1_4 = 0
var isResearch1_5 = 0
var isResearch1_6 = 0
var isAuto1_1 = 1
var isAuto1_2 = 1
var isAuto1_3 = 1
var isAuto1_mode = 1

function addLNP() {
    gainLNP.change(effect1_1.u1,effect1_1.u2);
    gainLNP.add(1,0);
    effect1_2.add(1,2);
    gainLNP.multiply(effect1_2.u1,effect1_2.u2 - 2);
    effect1_2.add(-1,2);
    gainLNP.multiply(effect1_all.u1,effect1_all.u2);
    LNP.add(gainLNP.u1 / 4,gainLNP.u2 - 1);
}

function effect() {
    basic_effect1_1.change(1,0);
    if (isResearch1_1 == 1) {
        if (level1_1.u2 >= 1) {
            int10_level1_1.change(level1_1.u1,level1_1.u2 - 1);
            int10_level1_1.floor();
            basic_effect1_1.multiplyRepeat(2,0,int10_level1_1.u1,int10_level1_1.u2);
        }
    }
    basic_effect1_2.change(1,2);
    if (isResearch1_2 == 1) {
        level1_2.multiply(5,0);
        basic_effect1_2.add(level1_2.u1,level1_2.u2);
        level1_2.multiply(2,-1);
    }
    effect1_1.change(level1_1.u1,level1_1.u2);
    effect1_1.multiply(basic_effect1_1.u1,basic_effect1_1.u2);
    effect1_2.change(level1_2.u1,level1_2.u2 + 2);
    effect1_2.multiply(basic_effect1_2.u1,basic_effect1_2.u2 - 2);
    effect1_3.change(1,0);
    effect1_3.multiplyRepeat(basic_effect1_3.u1,basic_effect1_3.u2,level1_3.u1,level1_3.u2);
    price1_1.change(pre_price1_1.u1,pre_price1_1.u2);
    price1_1.multiply(effect1_3.u1,effect1_3.u2);
    price1_2.change(pre_price1_2.u1,pre_price1_2.u2);
    price1_2.multiply(effect1_3.u1,effect1_3.u2);
    price1_3.change(pre_price1_3.u1,pre_price1_3.u2);
    price1_3.multiply(effect1_3.u1,effect1_3.u2);
    level1_all.change(0,0);
    level1_all.add(level1_1.u1,level1_1.u2);
    level1_all.add(level1_2.u1,level1_2.u2);
    level1_all.add(level1_3.u1,level1_3.u2);
    level1_all.int();
    effect1_all.change(1,0);
    if (isResearch1_4 == 1) {
        effect1_all.add(5 * level1_all.u1,level1_all.u2 - 2);
    }
}

function showBuy() {
    if (LNP.compare(price1_1.u1,price1_1.u2)) {
        document.getElementById("buy1_1").className = "upgrade";
    }
    else {
        document.getElementById("buy1_1").className = "upgrade_unable";
    }
    if (LNP.compare(price1_2.u1,price1_2.u2)) {
        document.getElementById("buy1_2").className = "upgrade";
    }
    else {
        document.getElementById("buy1_2").className = "upgrade_unable";
    }
    if (LNP.compare(price1_3.u1,price1_3.u2)) {
        document.getElementById("buy1_3").className = "upgrade";
    }
    else {
        document.getElementById("buy1_3").className = "upgrade_unable";
    }
    if (LNP.compare(1,3) && isResearch1_1 == 0) {
        document.getElementById("research1_1").className = "upgrade";
        document.getElementById("research1_1").innerHTML = "研究";
    }
    else if (isResearch1_1 == 1) {
        document.getElementById("research1_1").className = "upgrade_max";
        document.getElementById("research1_1").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_1").className = "upgrade_unable";
        document.getElementById("research1_1").innerHTML = "研究";
    }
    if (LNP.compare(5,4) && isResearch1_2 == 0) {
        document.getElementById("research1_2").className = "upgrade";
        document.getElementById("research1_2").innerHTML = "研究";
    }
    else if (isResearch1_2 == 1) {
        document.getElementById("research1_2").className = "upgrade_max";
        document.getElementById("research1_2").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_2").className = "upgrade_unable";
        document.getElementById("research1_2").innerHTML = "研究";
    }
    if (LNP.compare(3,5) && isResearch1_3 == 0) {
        document.getElementById("research1_3").className = "upgrade";
        document.getElementById("research1_3").innerHTML = "研究";
    }
    else if (isResearch1_3 == 1) {
        document.getElementById("research1_3").className = "upgrade_max";
        document.getElementById("research1_3").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_3").className = "upgrade_unable";
        document.getElementById("research1_3").innerHTML = "研究";
    }
    if (LNP.compare(2,6) && isResearch1_4 == 0) {
        document.getElementById("research1_4").className = "upgrade";
        document.getElementById("research1_4").innerHTML = "研究";
    }
    else if (isResearch1_4 == 1) {
        document.getElementById("research1_4").className = "upgrade_max";
        document.getElementById("research1_4").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_4").className = "upgrade_unable";
        document.getElementById("research1_4").innerHTML = "研究";
    }
    if (LNP.compare(1,8) && isResearch1_5 == 0) {
        document.getElementById("research1_5").className = "upgrade";
        document.getElementById("research1_5").innerHTML = "研究";
    }
    else if (isResearch1_5 == 1) {
        document.getElementById("research1_5").className = "upgrade_max";
        document.getElementById("research1_5").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_5").className = "upgrade_unable";
        document.getElementById("research1_5").innerHTML = "研究";
    }
    if (LNP.compare(5,10) && isResearch1_6 == 0) {
        document.getElementById("research1_6").className = "upgrade";
        document.getElementById("research1_6").innerHTML = "研究";
    }
    else if (isResearch1_6 == 1) {
        document.getElementById("research1_6").className = "upgrade_max";
        document.getElementById("research1_6").innerHTML = "已研究";
    }
    else {
        document.getElementById("research1_6").className = "upgrade_unable";
        document.getElementById("research1_6").innerHTML = "研究";
    }
}

function buy1_1() {
    if (LNP.compare(price1_1.u1,price1_1.u2)) {
        LNP.add(-1 * price1_1.u1,price1_1.u2);
        level1_1.add(1,0);
        pre_price1_1.multiply(1.3,0);
    }
}

function buy1_2() {
    if (LNP.compare(price1_2.u1,price1_2.u2)) {
        LNP.add(-1 * price1_2.u1,price1_2.u2);
        level1_2.add(1,0);
        pre_price1_2.multiply(1.5,0);
    }
}

function buy1_3() {
    if (LNP.compare(price1_3.u1,price1_3.u2)) {
        LNP.add(-1 * price1_3.u1,price1_3.u2);
        level1_3.add(1,0);
        pre_price1_3.multiply(1.7,0);
    }
}

function research1_1() {
    if (LNP.compare(1,3) && isResearch1_1 == 0) {
        LNP.add(-1,3);
        isResearch1_1 = 1
    }
}

function research1_2() {
    if (LNP.compare(5,4) && isResearch1_2 == 0) {
        LNP.add(-5,4);
        isResearch1_2 = 1
    }
}

function research1_3() {
    if (LNP.compare(3,5) && isResearch1_3 == 0) {
        LNP.add(-3,5);
        isResearch1_3 = 1
        basic_effect1_3.change(8,-1);
    }
}

function research1_4() {
    if (LNP.compare(2,6) && isResearch1_4 == 0) {
        LNP.add(-2,6);
        isResearch1_4 = 1
    }
}

function research1_5() {
    if (LNP.compare(1,8) && isResearch1_5 == 0) {
        LNP.add(-1,8);
        isResearch1_5 = 1
    }
}

function research1_6() {
    if (LNP.compare(5,10) && isResearch1_6 == 0) {
        LNP.add(-5,10);
        isResearch1_6 = 1
    }
}

function auto1_1() {
    if (isAuto1_1 == 1) {
        isAuto1_1 = 0
        document.getElementById("auto1_1").className = "upgrade_unable";
        document.getElementById("auto1_1").innerHTML = "已关闭";
    }
    else {
        isAuto1_1 = 1
        document.getElementById("auto1_1").className = "upgrade";
        document.getElementById("auto1_1").innerHTML = "已开启";
    }
}

function auto1_2() {
    if (isAuto1_2 == 1) {
        isAuto1_2 = 0
        document.getElementById("auto1_2").className = "upgrade_unable";
        document.getElementById("auto1_2").innerHTML = "已关闭";
    }
    else {
        isAuto1_2 = 1
        document.getElementById("auto1_2").className = "upgrade";
        document.getElementById("auto1_2").innerHTML = "已开启";
    }
}

function auto1_3() {
    if (isAuto1_3 == 1) {
        isAuto1_3 = 0
        document.getElementById("auto1_3").className = "upgrade_unable";
        document.getElementById("auto1_3").innerHTML = "已关闭";
    }
    else {
        isAuto1_3 = 1
        document.getElementById("auto1_3").className = "upgrade";
        document.getElementById("auto1_3").innerHTML = "已开启";
    }
}

function auto1_mode() {
    if (isAuto1_mode == 1) {
        isAuto1_mode = 2
        document.getElementById("auto1_mode").innerHTML = "从下至上购买";
    }
    else if (isAuto1_mode == 2) {
        isAuto1_mode = 1
        document.getElementById("auto1_mode").innerHTML = "从上至下购买";
    }
}