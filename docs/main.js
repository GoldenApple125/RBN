function showNumber() {
    var list = [LNP,gainLNP,level1_1,level1_2,level1_3,basic_effect1_1,basic_effect1_2,basic_effect1_3,
                effect1_1,effect1_2,effect1_3,effect1_4,price1_1,price1_2,price1_3,MP,
                gainMP,ME,gainME,level2_1,level2_2,level2_3,basic_effect2_1,basic_effect2_2,
                basic_effect2_3,basic_effect2_4,effect2_1,effect2_2,effect2_3,effect2_4,price2_1,price2_2,
                price2_3,CME_need,CME,CME_usable,level2_11,level2_12,level2_13,basic_effect2_11,
                basic_effect2_12,basic_effect2_13,effect2_11,effect2_12,effect2_13,price2_11,price2_12,price2_13];
    var i = 0
    while (i <list.length) {
        list[i].show(0,0);
        i++
    }
    basic_effect1_3.show(0,1);
    effect1_3.show(0,2);
    effect1_4.show(2,2);
    basic_effect2_4.show(2,2);
    effect2_4.show(2,2);
    basic_effect2_13.show(2,2);
    effect2_13.show(2,2);
    var showGainMP = gainMP.show(0,0);
    document.getElementById("showGainMP").innerHTML = showGainMP;
}

function showDiv() {
    if (isResearch1_5 == 1) {
        document.getElementById("menu1_3").style.display = "block";
    }
    else {
        document.getElementById("menu1_3").style.display = "none";
    }
    if (isResearch1_6 == 1) {
        document.getElementById("reset1").style.display = "block";
        document.getElementById("showMP").style.display = "inline";
    }
    else {
        document.getElementById("reset1").style.display = "none";
        document.getElementById("showMP").style.display = "none";
    }
    if (isResearch2_2 == 1) {
        document.getElementById("dialog_text1").innerHTML = "所有大数点和加法升级，<br>";
    }
    else {
        document.getElementById("dialog_text1").innerHTML = "所有大数点、加法升级和大部分<br>条状研究，";
    }
    if (isResearch2_4 == 1) {
        document.getElementById("menu2_4").style.display = "block";
    }
    else {
        document.getElementById("menu2_4").style.display = "none";
    }
    if (ME.compare(1,4) || isME1 == 1) {
        document.getElementById("main2_3_1").style.display = "none";
        document.getElementById("main2_3_2").style.display = "block";
        isME1 = 1
    }
    else {
        document.getElementById("main2_3_1").style.display = "block";
        document.getElementById("main2_3_2").style.display = "none";
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

function auto1_change1() {
    if (isAuto1_1 == 0) {
        auto1_1();
    }
    if (isAuto1_2 == 0) {
        auto1_2();
    }
    if (isAuto1_3 == 0) {
        auto1_3();
    }
}

function auto1_change2() {
    if (isAuto1_1 == 1) {
        auto1_1();
    }
    if (isAuto1_2 == 1) {
        auto1_2();
    }
    if (isAuto1_3 == 1) {
        auto1_3();
    }
}

function auto() {
    if (isResearch1_5 == 1) {
        if (isAuto1_mode == 1) {
            if (isAuto1_1 == 1) {
                buy1_1();
            }
            if (isAuto1_2 == 1) {
                buy1_2();
            }
            if (isAuto1_3 == 1) {
                buy1_3();
            }
        }
        else if (isAuto1_mode == 2) {
            if (isAuto1_3 == 1) {
                buy1_3();
            }
            if (isAuto1_2 == 1) {
                buy1_2();
            }
            if (isAuto1_1 == 1) {
                buy1_1();
            }
        }
    }
}

var refresh = setInterval(function() {
    effect();
    addLNP();
    addME();
    resetEffect();
    auto();
    showNumber();
    showBuy();
    showDiv();
},25)

function close() {
    var list = ["main1_1","main1_2","main1_3","main2_1","main2_2","main2_3","main2_4","main2_5",
                "main3_1","main3_2","main3_3","main3_4","main3_5","main3_6","main4_1","main4_2",
                "main4_3","main4_4","main4_5","main4_6","main11_1","main12_1","main12_2","main12_3"];
    var i = 0
    while (i < list.length) {
        document.getElementById(list[i]).style.display = "none";
        i++
    }
}

function menu(x) {
    close();
    document.getElementById("main" + x).style.display = "block";
}

function dialog(x) {
    document.getElementById("dialog_background").style.display = "block";
    document.getElementById("dialog" + x).style.display = "block";
}

function dialog_cancel() {
    document.getElementById("dialog_background").style.display = "none";
}