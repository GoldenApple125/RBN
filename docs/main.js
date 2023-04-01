function showNumber() {
    var list = [LNP,gainLNP,level1_1,level1_2,level1_3,basic_effect1_1,effect1_all,basic_effect1_2,
                basic_effect1_3,effect1_1,effect1_2,effect1_3,price1_1,price1_2,price1_3];
    var i = 0
    while (i <list.length) {
        list[i].show(0,0);
        i++
    }
    basic_effect1_3.show(0,1);
    effect1_3.show(0,2);
    effect1_all.show(1,2);
}

function showDiv() {
    if (isResearch1_5 == 1) {
        document.getElementById("menu1_3").style.display = "block";
    }
    else {
        document.getElementById("menu1_3").style.display = "none";
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
    showNumber();
    showBuy();
    showDiv();
    auto();
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