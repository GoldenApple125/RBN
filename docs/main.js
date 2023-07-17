function showNumber() {
    var list = [LNP,gainLNP,level1_1,level1_2,level1_3,basic_effect1_1,basic_effect1_2,basic_effect1_3,
                effect1_1,effect1_2,effect1_3,effect1_4,price1_1,price1_2,price1_3,MP,
                gainMP,ME,gainME,level2_1,level2_2,level2_3,basic_effect2_1,basic_effect2_2,
                basic_effect2_3,basic_effect2_4,effect2_1,effect2_2,effect2_3,effect2_4,price2_1,price2_2,
                price2_3,CME_need,CME,CME_usable,level2_11,level2_12,level2_13,basic_effect2_11,
                basic_effect2_12,basic_effect2_13,effect2_11,effect2_12,effect2_13,price2_11,price2_12,price2_13,
                effect11_1,free_level1_3,effect2_5,max_LNP,all_LNP,max_level1_all,max_MP,all_MP,
                max_level2_all,max_ME,max_CME,effect11_2];
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
    basic_effect2_13.show(2,1);
    effect2_13.show(2,2);
    effect11_1.show(2,2);
    effect2_5.show(2,2);
    effect11_2.show(2,2);
    var showGainMP = gainMP.show(0,0);
    document.getElementById("showGainMP").innerHTML = showGainMP;
    if (!LNP.compare(1,-2)) {
        document.getElementById("LNP").innerHTML = "0";
    }
    if (!gainLNP.compare(1,-2)) {
        document.getElementById("gainLNP").innerHTML = "0";
    }
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
        document.getElementById("dialog_text1").innerHTML = "所有大数点、加法升级和前四个<br>条状研究，";
    }
    if (isResearch2_4 == 1) {
        document.getElementById("menu2_4").style.display = "block";
    }
    else {
        document.getElementById("menu2_4").style.display = "none";
    }
    if (isResearch2_8 == 1) {
        document.getElementById("menu2_5").style.display = "block";
    }
    else {
        document.getElementById("menu2_5").style.display = "none";
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
    document.getElementById("alphaResetTimes").innerText = alphaResetTimes
}

function auto1_1() {
    if (isAuto1_1 == 1) {
        isAuto1_1 = 0
    }
    else {
        isAuto1_1 = 1
    }
}

function auto1_2() {
    if (isAuto1_2 == 1) {
        isAuto1_2 = 0
    }
    else {
        isAuto1_2 = 1
    }
}

function auto1_3() {
    if (isAuto1_3 == 1) {
        isAuto1_3 = 0
    }
    else {
        isAuto1_3 = 1
    }
}

function auto2_1() {
    if (isAuto2_1 == 1) {
        isAuto2_1 = 0
    }
    else {
        isAuto2_1 = 1
    }
}

function auto2_2() {
    if (isAuto2_2 == 1) {
        isAuto2_2 = 0
    }
    else {
        isAuto2_2 = 1
    }
}

function auto2_3() {
    if (isAuto2_3 == 1) {
        isAuto2_3 = 0
    }
    else {
        isAuto2_3 = 1
    }
}

function auto2_4() {
    if (isAuto2_4 == 1) {
        isAuto2_4 = 0
    }
    else {
        isAuto2_4 = 1
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

function auto2_change1() {
    if (isAuto2_1 == 0) {
        auto2_1();
    }
    if (isAuto2_2 == 0) {
        auto2_2();
    }
    if (isAuto2_3 == 0) {
        auto2_3();
    }
    if (isAuto2_4 == 0) {
        auto2_4();
    }
}

function auto2_change2() {
    if (isAuto2_1 == 1) {
        auto2_1();
    }
    if (isAuto2_2 == 1) {
        auto2_2();
    }
    if (isAuto2_3 == 1) {
        auto2_3();
    }
    if (isAuto2_4 == 1) {
        auto2_4();
    }
}

function auto() {
    var amount1 = /^[0-9]+\.{0,1}[0-9]*$/
    var amount2 = /^[0-9]+$/
    if (!amount1.test(document.getElementById("input1").value)) {
        document.getElementById("input1").value = ""
    }
    else {
        isAuto2_5.u1 = Number(document.getElementById("input1").value)
    }
    if (!amount2.test(document.getElementById("input2").value)) {
        document.getElementById("input2").value = ""
    }
    else {
        isAuto2_5.u2 = Number(document.getElementById("input2").value)
    }
    if (document.getElementById("input1").value == "") {
        isAuto2_5.u1 = 1
    }
    if (document.getElementById("input2").value == "") {
        isAuto2_5.u2 = 4
    }
    isAuto2_5.improve();
    isAuto2_5.fixed(2);
    if (isResearch1_5 == 1) {
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
    if (isResearch2_8 == 1) {
        if (isAuto2_1 == 1) {
            buy2_1();
        }
        if (isAuto2_2 == 1) {
            buy2_2();
        }
        if (isAuto2_3 == 1) {
            buy2_3();
        }
        if (isAuto2_4 == 1) {
            if (gainMP.compare(1,0) && gainMP.compare(isAuto2_5.u1,isAuto2_5.u2) && isChallengeRunning1 == 0) {
                alphaReset();
            }
        }
    }
    if (isAutoSave == 1) {
        save1();
    }
    setting = [isAutoSave]
    window.localStorage.setItem("RBNsetting1",JSON.stringify(setting));
}

var refresh = setInterval(function() {
    effect();
    addLNP();
    addME();
    resetEffect();
    auto();
    challenge1();
    showAchievement();
    showNumber();
    showBuy();
    showDiv();
},25)

function close() {
    var list = ["1_1","1_2","1_3","2_1","2_2","2_3","2_4","2_5",
                "3_1","3_2","3_3","3_4","3_5","3_6","4_1","4_2",
                "4_3","4_4","4_5","4_6","11_1","11_2","12_1","12_2",
                "12_3"];
    var i = 0
    while (i < list.length) {
        document.getElementById("main" + list[i]).style.display = "none";
        document.getElementById("menu" + list[i]).style.borderBottomColor = "#00000000";
        i++
    }
}

function menu(x) {
    close();
    document.getElementById("main" + x).style.display = "block";
    document.getElementById("menu" + x).style.borderBottomColor = "#26a921";
}

function dialog(x) {
    document.getElementById("dialog_background").style.display = "block";
    document.getElementById("dialog" + x).style.display = "block";
}

function dialog_cancel() {
    document.getElementById("dialog_background").style.display = "none";
    var i = 1
    while (i < 10) {
        document.getElementById("dialog" + i).style.display = "none";
        i++
    }
}