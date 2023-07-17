var save = []
var setting = []

var LNP = new Amount(1,1,"LNP");
var gainLNP = new Amount(0,0,"gainLNP");
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
var effect1_4 = new Amount(1,0,"effect1_4");//条状研究4效果
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

var MP = new Amount(0,0,"MP");
var gainMP = new Amount(0,0,"gainMP");
var alphaResetTimes = 0
var ME = new Amount(0,0,"ME");
var gainME = new Amount(0,0,"gainME");
var level2_1 = new Amount(0,0,"level2_1");
var level2_2 = new Amount(0,0,"level2_2");
var level2_3 = new Amount(0,0,"level2_3");
var basic_effect2_1 = new Amount(1,0,"basic_effect2_1");
var basic_effect2_2 = new Amount(1,2,"basic_effect2_2");
var basic_effect2_3 = new Amount(2,0,"basic_effect2_3");
var basic_effect2_4 = new Amount(1,-2,"basic_effect2_4");
var effect2_1 = new Amount(0,0,"effect2_1");
var effect2_2 = new Amount(0,0,"effect2_2");
var effect2_3 = new Amount(1,0,"effect2_3");
var effect2_4 = new Amount(1,0,"effect2_4");
var effect2_5 = new Amount(1,0,"effect2_5");//表状研究9效果
var pre_price2_1 = new Amount(1,0);
var pre_price2_2 = new Amount(1,1);
var pre_price2_3 = new Amount(1,2);
var price2_1 = new Amount(1,0,"price2_1");
var price2_2 = new Amount(1,1,"price2_2");
var price2_3 = new Amount(1,2,"price2_3");
var isResearch2_1 = 0
var isResearch2_2 = 0
var isResearch2_3 = 0
var isResearch2_4 = 0
var isResearch2_5 = 0
var isResearch2_6 = 0
var isResearch2_7 = 0
var isResearch2_8 = 0
var isResearch2_9 = 0
var isResearch2_10 = 0
var isResearch2_11 = 0
var isResearch2_12 = 0
var isME1 = 0
var basic_CME_need = new Amount(5,3);
var CME_need = new Amount(5,3,"CME_need");
var CME = new Amount(0,0,"CME");
var CME_usable = new Amount(0,0,"CME_usable");
var isResetCME = 0
var level2_11 = new Amount(0,0,"level2_11");
var level2_12 = new Amount(0,0,"level2_12");
var level2_13 = new Amount(0,0,"level2_13");
var basic_effect2_11 = new Amount(1,1,"basic_effect2_11");
var basic_effect2_12 = new Amount(2,0,"basic_effect2_12");
var basic_effect2_13 = new Amount(1,-1,"basic_effect2_13");
var effect2_11 = new Amount(0,0,"effect2_11");
var effect2_12 = new Amount(1,0,"effect2_12");
var effect2_13 = new Amount(1,0,"effect2_13");
var pre_price2_11 = new Amount(1,0);
var pre_price2_12 = new Amount(1,0);
var pre_price2_13 = new Amount(1,0);
var price2_11 = new Amount(1,0,"price2_11");
var price2_12 = new Amount(1,0,"price2_12");
var price2_13 = new Amount(1,0,"price2_13");

var isAchievement1_1 = 0
var isAchievement1_2 = 0
var isAchievement1_3 = 0
var isAchievement1_4 = 0
var isAchievement1_5 = 0
var isAchievement1_6 = 0
var isAchievement1_7 = 0
var isAchievement1_8 = 0
var isAchievement1_9 = 0
var isAchievement1_10 = 0
var isAchievement1_all = 0
var effect11_1 = new Amount(1,0,"effect11_1");
var effect11_2 = new Amount(1,0,"effect11_2");
var free_level1_3 = new Amount(0,0,"free_level1_3");
var isChallengeRunning1 = 0
var isChallengeFinish1_1 = 0
var isChallengeFinish1_2 = 0
var isChallengeFinish1_3 = 0
var isChallengeFinish1_4 = 0
var isChallengeFinish1_5 = 0
var isChallengeFinish1_6 = 0
var effect2_21 = new Amount(1,0);//普通挑战6效果
var isAuto2_1 = 1
var isAuto2_2 = 1
var isAuto2_3 = 1
var isAuto2_4 = 1
var isAuto2_5 = new Amount(1,4);
var startPlayTime = new Date().getTime();
var level2_all = new Amount(0,0);
var max_LNP = new Amount(1,1,"max_LNP");
var all_LNP = new Amount(1,1,"all_LNP");
var max_level1_all = new Amount(0,0,"max_level1_all");
var max_MP = new Amount(0,0,"max_MP");
var all_MP = new Amount(0,0,"all_MP");
var max_level2_all = new Amount(0,0,"max_level2_all");
var max_ME = new Amount(0,0,"max_ME");
var all_ME = new Amount(0,0);
var max_CME = new Amount(0,0,"max_CME");
var isAchievement2_1 = 0
var isAchievement2_2 = 0
var isAchievement2_3 = 0
var isAchievement2_4 = 0
var isAchievement2_5 = 0
var isAchievement2_6 = 0
var isAchievement2_7 = 0
var isAchievement2_8 = 0
var isAchievement2_9 = 0
var isAchievement2_10 = 0
var isAchievement2_all = 0

var isAutoSave = 1

function addLNP() {
    gainLNP.change(effect1_1.u1,effect1_1.u2);
    effect1_2.add(1,2);
    gainLNP.multiply(effect1_2.u1,effect1_2.u2 - 2);
    effect1_2.add(-1,2);
    gainLNP.multiply(effect1_4.u1,effect1_4.u2);
    gainLNP.multiply(effect2_4.u1,effect2_4.u2);
    gainLNP.multiply(effect11_1.u1,effect11_1.u2);
    gainLNP.multiply(effect2_5.u1,effect2_5.u2);
    if (isChallengeRunning1 == 5) {
        gainLNP.multiplyRepeat(8,-1,level1_all.u1,level1_all.u2);
    }
    if (isChallengeRunning1 == 3 || isChallengeRunning1 == 4) {
        gainLNP.power(5,-1);
    }
    if (isChallengeRunning1 == 6) {
        gainLNP.power(effect2_21.u1,effect2_21.u2);
    }
    LNP.add(gainLNP.u1 / 4,gainLNP.u2 - 1);
    all_LNP.add(gainLNP.u1 / 4,gainLNP.u2 - 1);
}

function addME() {
    gainME.change(effect2_1.u1,effect2_1.u2);
    effect2_2.add(1,2);
    gainME.multiply(effect2_2.u1,effect2_2.u2 - 2);
    effect2_2.add(-1,2);
    if (isChallengeFinish1_2 == 1) {
        gainME.power(1.5,0);
    }
    ME.add(gainME.u1 / 4,gainME.u2 - 1);
    all_ME.add(gainME.u1 / 4,gainME.u2 - 1);
}

function compress1() {
    if (ME.compare(CME_need.u1,CME_need.u2)) {
        if (isResearch2_7 == 0) {
            ME.add(-1 * CME_need.u1,CME_need.u2);
        }
        if (isChallengeFinish1_6 == 1) {
            CME.add(4,0);
            CME_usable.add(4,0);
        }
        else {
            CME.add(1,0);
            CME_usable.add(1,0);
        }
        basic_CME_need.multiply(5,0);
    }
}

function effect() {
    basic_effect1_1.change(1,0);
    if (isResearch1_1 == 1 && isChallengeRunning1 != 2 && isChallengeRunning1 != 4) {
        if (level1_1.u2 >= 1) {
            int10_level1_1.change(level1_1.u1,level1_1.u2 - 1);
            int10_level1_1.floor();
            basic_effect1_1.multiplyRepeat(2,0,int10_level1_1.u1,int10_level1_1.u2);
        }
    }
    basic_effect1_2.change(1,2);
    if (isResearch1_2 == 1 && isChallengeRunning1 != 2 && isChallengeRunning1 != 4) {
        level1_2.multiply(1,1);
        basic_effect1_2.add(level1_2.u1,level1_2.u2);
        level1_2.multiply(1,-1);
    }
    effect1_1.change(level1_1.u1,level1_1.u2);
    effect1_1.multiply(basic_effect1_1.u1,basic_effect1_1.u2);
    effect1_2.change(level1_2.u1,level1_2.u2 + 2);
    effect1_2.multiply(basic_effect1_2.u1,basic_effect1_2.u2 - 2);
    if (isChallengeRunning1 == 1 || isChallengeRunning1 == 4) {
        effect1_2.change(0,0);
    }
    effect1_3.change(1,0);
    effect1_3.multiplyRepeat(basic_effect1_3.u1,basic_effect1_3.u2,level1_3.u1,level1_3.u2);
    if (free_level1_3.compare(1,0)) {
        effect1_3.multiplyRepeat(basic_effect1_3.u1,basic_effect1_3.u2,free_level1_3.u1,free_level1_3.u2);
    }
    if (isChallengeRunning1 == 1 || isChallengeRunning1 == 4) {
        effect1_3.change(1,0);
    }
    price1_1.change(pre_price1_1.u1,pre_price1_1.u2);
    price1_1.multiply(effect1_3.u1,effect1_3.u2);
    price1_2.change(pre_price1_2.u1,pre_price1_2.u2);
    price1_2.multiply(effect1_3.u1,effect1_3.u2);
    price1_3.change(pre_price1_3.u1,pre_price1_3.u2);
    price1_3.multiply(effect1_3.u1,effect1_3.u2);
    if (isResearch2_10 == 1) {
        price1_1.power(9,-1);
        price1_2.power(9,-1);
        price1_3.power(9,-1);
    }
    level1_all.change(0,0);
    level1_all.add(level1_1.u1,level1_1.u2);
    level1_all.add(level1_2.u1,level1_2.u2);
    level1_all.add(level1_3.u1,level1_3.u2);
    level1_all.int();
    level2_all.change(0,0);
    level2_all.add(level2_1.u1,level2_1.u2);
    level2_all.add(level2_2.u1,level2_2.u2);
    level2_all.add(level2_3.u1,level2_3.u2);
    level2_all.int();
    effect1_4.change(1,0);
    if (isResearch1_4 == 1 && isChallengeRunning1 != 2 && isChallengeRunning1 != 4) {
        effect1_4.add(3 * level1_all.u1,level1_all.u2 - 2);
    }
    if (isChallengeFinish1_4 == 1) {
        effect1_4.power(2,0);
    }
    basic_effect2_1.change(1,0);
    if (isResearch2_3 == 1) {
        basic_effect2_1.add(level2_1.u1,level2_1.u2);
    }
    effect2_1.change(level2_1.u1,level2_1.u2);
    effect2_1.multiply(basic_effect2_1.u1,basic_effect2_1.u2);
    effect2_2.change(level2_2.u1,level2_2.u2 + 2);
    effect2_2.multiply(basic_effect2_2.u1,basic_effect2_2.u2 - 2);
    effect2_3.change(1,0);
    effect2_3.multiplyRepeat(basic_effect2_3.u1,basic_effect2_3.u2,level2_3.u1,level2_3.u2);
    price2_1.change(pre_price2_1.u1,pre_price2_1.u2);
    price2_2.change(pre_price2_2.u1,pre_price2_2.u2);
    price2_3.change(pre_price2_3.u1,pre_price2_3.u2);
    effect2_11.change(basic_effect2_11.u1,basic_effect2_11.u2);
    effect2_11.multiply(level2_11.u1,level2_11.u2);
    free_level1_3.change(effect2_11.u1,effect2_11.u2);
    effect2_12.change(1,0);
    effect2_12.multiplyRepeat(basic_effect2_12.u1,basic_effect2_12.u2,level2_12.u1,level2_12.u2);
    effect2_13.change(level2_13.u1,level2_13.u2);
    effect2_13.multiply(basic_effect2_13.u1,basic_effect2_13.u2);
    effect2_13.add(1,0);
    price2_11.change(pre_price2_11.u1,pre_price2_11.u2);
    price2_12.change(pre_price2_12.u1,pre_price2_12.u2);
    price2_13.change(pre_price2_13.u1,pre_price2_13.u2);
    effect2_4.change(0,0);
    effect2_4.add(ME.u1,ME.u2 - 2);
    effect2_4.multiply(basic_effect2_4.u1,basic_effect2_4.u2 + 2);
    effect2_4.add(1,0);
    if (isResearch2_6 == 1) {
        effect2_4.power(1.2,0);
    }
    effect2_5.change(1,0);
    if (isResearch2_9 == 1) {
        effect2_5.add(LNP.u1,LNP.u2);
        effect2_5.power(1,-1);
    }
    if (isChallengeRunning1 == 6) {
        effect2_21.add(-5,-3);
    }
    else {
        effect2_21.change(1,0);
    }
    CME_need.change(basic_CME_need.u1,basic_CME_need.u2);
    if (isChallengeFinish1_3 == 1) {
        CME_need.power(9,-1);
    }
    if (isChallengeFinish1_5 == 1) {
        basic_effect2_11.change(3,1);
    }
    else {
        basic_effect2_11.change(1,1);
    }
    if (LNP.compare(max_LNP.u1,max_LNP.u2)) {
        max_LNP.change(LNP.u1,LNP.u2);
    }
    if (level1_all.compare(max_level1_all.u1,max_level1_all.u2)) {
        max_level1_all.change(level1_all.u1,level1_all.u2);
    }
    if (MP.compare(max_MP.u1,max_MP.u2)) {
        max_MP.change(MP.u1,MP.u2);
    }
    if (level2_all.compare(max_level2_all.u1,max_level2_all.u2)) {
        max_level2_all.change(level2_all.u1,level2_all.u2);
    }
    if (ME.compare(max_ME.u1,max_ME.u2)) {
        max_ME.change(ME.u1,ME.u2);
    }
    if (CME.compare(max_CME.u1,max_CME.u2)) {
        max_CME.change(CME.u1,CME.u2);
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
    if (MP.compare(price2_1.u1,price2_1.u2)) {
        document.getElementById("buy2_1").className = "upgrade";
    }
    else {
        document.getElementById("buy2_1").className = "upgrade_unable";
    }
    if (MP.compare(price2_2.u1,price2_2.u2)) {
        document.getElementById("buy2_2").className = "upgrade";
    }
    else {
        document.getElementById("buy2_2").className = "upgrade_unable";
    }
    if (MP.compare(price2_3.u1,price2_3.u2)) {
        document.getElementById("buy2_3").className = "upgrade";
    }
    else {
        document.getElementById("buy2_3").className = "upgrade_unable";
    }
    if (CME_usable.compare(price2_11.u1,price2_11.u2)) {
        document.getElementById("buy2_11").className = "upgrade";
    }
    else {
        document.getElementById("buy2_11").className = "upgrade_unable";
    }
    if (CME_usable.compare(price2_12.u1,price2_12.u2)) {
        document.getElementById("buy2_12").className = "upgrade";
    }
    else {
        document.getElementById("buy2_12").className = "upgrade_unable";
    }
    if (CME_usable.compare(price2_13.u1,price2_13.u2)) {
        document.getElementById("buy2_13").className = "upgrade";
    }
    else {
        document.getElementById("buy2_13").className = "upgrade_unable";
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
    if (LNP.compare(3,4) && isResearch1_2 == 0) {
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
    if (LNP.compare(5,5) && isResearch1_3 == 0) {
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
    if (LNP.compare(1,7) && isResearch1_4 == 0) {
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
    if (LNP.compare(1,10) && isResearch1_5 == 0) {
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
    if (LNP.compare(1,12) && isResearch1_6 == 0) {
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
    if (MP.compare(2,1) && isResearch2_1 == 0) {
        document.getElementById("research2_1").className = "upgrade";
        document.getElementById("research2_1").innerHTML = "研究";
    }
    else if (isResearch2_1 == 1) {
        document.getElementById("research2_1").className = "upgrade_max";
        document.getElementById("research2_1").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_1").className = "upgrade_unable";
        document.getElementById("research2_1").innerHTML = "研究";
    }
    if (MP.compare(5,1) && isResearch2_2 == 0) {
        document.getElementById("research2_2").className = "upgrade";
        document.getElementById("research2_2").innerHTML = "研究";
    }
    else if (isResearch2_2 == 1) {
        document.getElementById("research2_2").className = "upgrade_max";
        document.getElementById("research2_2").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_2").className = "upgrade_unable";
        document.getElementById("research2_2").innerHTML = "研究";
    }
    if (MP.compare(3,2) && isResearch2_3 == 0) {
        document.getElementById("research2_3").className = "upgrade";
        document.getElementById("research2_3").innerHTML = "研究";
    }
    else if (isResearch2_3 == 1) {
        document.getElementById("research2_3").className = "upgrade_max";
        document.getElementById("research2_3").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_3").className = "upgrade_unable";
        document.getElementById("research2_3").innerHTML = "研究";
    }
    if (MP.compare(1,3) && isResearch2_4 == 0) {
        document.getElementById("research2_4").className = "upgrade";
        document.getElementById("research2_4").innerHTML = "研究";
    }
    else if (isResearch2_4 == 1) {
        document.getElementById("research2_4").className = "upgrade_max";
        document.getElementById("research2_4").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_4").className = "upgrade_unable";
        document.getElementById("research2_4").innerHTML = "研究";
    }
    if (MP.compare(2,3) && isResearch2_5 == 0) {
        document.getElementById("research2_5").className = "upgrade";
        document.getElementById("research2_5").innerHTML = "研究";
    }
    else if (isResearch2_5 == 1) {
        document.getElementById("research2_5").className = "upgrade_max";
        document.getElementById("research2_5").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_5").className = "upgrade_unable";
        document.getElementById("research2_5").innerHTML = "研究";
    }
    if (MP.compare(1,4) && isResearch2_6 == 0) {
        document.getElementById("research2_6").className = "upgrade";
        document.getElementById("research2_6").innerHTML = "研究";
    }
    else if (isResearch2_6 == 1) {
        document.getElementById("research2_6").className = "upgrade_max";
        document.getElementById("research2_6").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_6").className = "upgrade_unable";
        document.getElementById("research2_6").innerHTML = "研究";
    }
    if (MP.compare(2.5,5) && isResearch2_7 == 0) {
        document.getElementById("research2_7").className = "upgrade";
        document.getElementById("research2_7").innerHTML = "研究";
    }
    else if (isResearch2_7 == 1) {
        document.getElementById("research2_7").className = "upgrade_max";
        document.getElementById("research2_7").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_7").className = "upgrade_unable";
        document.getElementById("research2_7").innerHTML = "研究";
    }
    if (MP.compare(1,6) && isResearch2_8 == 0) {
        document.getElementById("research2_8").className = "upgrade";
        document.getElementById("research2_8").innerHTML = "研究";
    }
    else if (isResearch2_8 == 1) {
        document.getElementById("research2_8").className = "upgrade_max";
        document.getElementById("research2_8").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_8").className = "upgrade_unable";
        document.getElementById("research2_8").innerHTML = "研究";
    }
    if (MP.compare(3,6) && isResearch2_9 == 0) {
        document.getElementById("research2_9").className = "upgrade";
        document.getElementById("research2_9").innerHTML = "研究";
    }
    else if (isResearch2_9 == 1) {
        document.getElementById("research2_9").className = "upgrade_max";
        document.getElementById("research2_9").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_9").className = "upgrade_unable";
        document.getElementById("research2_9").innerHTML = "研究";
    }
    if (MP.compare(1,7) && isResearch2_10 == 0) {
        document.getElementById("research2_10").className = "upgrade";
        document.getElementById("research2_10").innerHTML = "研究";
    }
    else if (isResearch2_10 == 1) {
        document.getElementById("research2_10").className = "upgrade_max";
        document.getElementById("research2_10").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_10").className = "upgrade_unable";
        document.getElementById("research2_10").innerHTML = "研究";
    }
    if (MP.compare(1,8) && isResearch2_11 == 0) {
        document.getElementById("research2_11").className = "upgrade";
        document.getElementById("research2_11").innerHTML = "研究";
    }
    else if (isResearch2_11 == 1) {
        document.getElementById("research2_11").className = "upgrade_max";
        document.getElementById("research2_11").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_11").className = "upgrade_unable";
        document.getElementById("research2_11").innerHTML = "研究";
    }
    if (MP.compare(1,9) && isResearch2_12 == 0) {
        document.getElementById("research2_12").className = "upgrade";
        document.getElementById("research2_12").innerHTML = "研究";
    }
    else if (isResearch2_12 == 1) {
        document.getElementById("research2_12").className = "upgrade_max";
        document.getElementById("research2_12").innerHTML = "已研究";
    }
    else {
        document.getElementById("research2_12").className = "upgrade_unable";
        document.getElementById("research2_12").innerHTML = "研究";
    }
    if (gainMP.compare(1,0)) {
        document.getElementById("dialog_button1").className = "dialog_button";
    }
    else {
        document.getElementById("dialog_button1").className = "dialog_button_unable";
    }
    if (ME.compare(CME_need.u1,CME_need.u2)) {
        document.getElementById("compress1").className = "upgrade";
    }
    else {
        document.getElementById("compress1").className = "upgrade_unable";
    }
    if (alphaResetTimes >= 1) {
        document.getElementById("menu2").style.display = "block";
        document.getElementById("main12_1_2").style.display = "block";
        document.getElementById("menu11_2").style.display = "block";
    }
    else {
        document.getElementById("menu2").style.display = "none";
        document.getElementById("main12_1_2").style.display = "none";
        document.getElementById("menu11_2").style.display = "none";
    }
    if (isResetCME == 0) {
        document.getElementById("resetCME").className = "upgrade_unable";
        document.getElementById("resetCME").innerHTML = "已关闭";
    }
    else {
        document.getElementById("resetCME").className = "upgrade";
        document.getElementById("resetCME").innerHTML = "已开启";
    }
    if (isResearch1_3 == 1 && isChallengeRunning1 != 2 && isChallengeRunning1 != 4) {
        basic_effect1_3.change(8,-1);
    }
    else {
        basic_effect1_3.change(9,-1);
    }
    if (isResearch2_1 == 1) {
        basic_effect2_4.change(2,-2);
    }
    else {
        basic_effect2_4.change(1,-2);
    }
    basic_effect2_4.multiplyRepeat(basic_effect2_12.u1,basic_effect2_12.u2,level2_12.u1,level2_12.u2);
    if (isAutoSave == 1) {
        document.getElementById("autoSave").className = "upgrade";
        document.getElementById("autoSave").innerHTML = "自动保存已开启";
    }
    else {
        document.getElementById("autoSave").className = "upgrade_unable";
        document.getElementById("autoSave").innerHTML = "自动保存已关闭";
    }
    if (free_level1_3.compare(1,0)) {
        document.getElementById("free_level1_3_text").style.display = "inline";
    }
    else {
        document.getElementById("free_level1_3_text").style.display = "none";
    }
    if (isAuto1_1 == 1) {
        document.getElementById("auto1_1").className = "upgrade";
        document.getElementById("auto1_1").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto1_1").className = "upgrade_unable";
        document.getElementById("auto1_1").innerHTML = "已关闭";
    }
    if (isAuto1_2 == 1) {
        document.getElementById("auto1_2").className = "upgrade";
        document.getElementById("auto1_2").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto1_2").className = "upgrade_unable";
        document.getElementById("auto1_2").innerHTML = "已关闭";
    }
    if (isAuto1_3 == 1) {
        document.getElementById("auto1_3").className = "upgrade";
        document.getElementById("auto1_3").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto1_3").className = "upgrade_unable";
        document.getElementById("auto1_3").innerHTML = "已关闭";
    }
    if (isAuto2_1 == 1) {
        document.getElementById("auto2_1").className = "upgrade";
        document.getElementById("auto2_1").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto2_1").className = "upgrade_unable";
        document.getElementById("auto2_1").innerHTML = "已关闭";
    }
    if (isAuto2_2 == 1) {
        document.getElementById("auto2_2").className = "upgrade";
        document.getElementById("auto2_2").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto2_2").className = "upgrade_unable";
        document.getElementById("auto2_2").innerHTML = "已关闭";
    }
    if (isAuto2_3 == 1) {
        document.getElementById("auto2_3").className = "upgrade";
        document.getElementById("auto2_3").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto2_3").className = "upgrade_unable";
        document.getElementById("auto2_3").innerHTML = "已关闭";
    }
    if (isAuto2_4 == 1) {
        document.getElementById("auto2_4").className = "upgrade";
        document.getElementById("auto2_4").innerHTML = "已开启";
    }
    else {
        document.getElementById("auto2_4").className = "upgrade_unable";
        document.getElementById("auto2_4").innerHTML = "已关闭";
    }
    if (isResearch2_11 == 1) {
        basic_effect2_12.change(5,0);
    }
    else {
        basic_effect2_12.change(2,0);
    }
    if (isChallengeRunning1 == 0) {
        document.getElementById("challenge1_1").innerHTML = "进入挑战";
        document.getElementById("challenge1_2").innerHTML = "进入挑战";
        document.getElementById("challenge1_3").innerHTML = "进入挑战";
        document.getElementById("challenge1_4").innerHTML = "进入挑战";
        document.getElementById("challenge1_5").innerHTML = "进入挑战";
        document.getElementById("challenge1_6").innerHTML = "进入挑战";
        document.getElementById("challenge1_1").className = "upgrade";
        document.getElementById("challenge1_2").className = "upgrade";
        document.getElementById("challenge1_3").className = "upgrade";
        document.getElementById("challenge1_4").className = "upgrade";
        document.getElementById("challenge1_5").className = "upgrade";
        document.getElementById("challenge1_6").className = "upgrade";
    }
    if (isChallengeRunning1 == 1) {
        document.getElementById("challenge1_1").innerHTML = "退出挑战";
        document.getElementById("challenge1_2").className = "upgrade_unable";
        document.getElementById("challenge1_3").className = "upgrade_unable";
        document.getElementById("challenge1_4").className = "upgrade_unable";
        document.getElementById("challenge1_5").className = "upgrade_unable";
        document.getElementById("challenge1_6").className = "upgrade_unable";
    }
    if (isChallengeRunning1 == 2) {
        document.getElementById("challenge1_2").innerHTML = "退出挑战";
        document.getElementById("challenge1_1").className = "upgrade_unable";
        document.getElementById("challenge1_3").className = "upgrade_unable";
        document.getElementById("challenge1_4").className = "upgrade_unable";
        document.getElementById("challenge1_5").className = "upgrade_unable";
        document.getElementById("challenge1_6").className = "upgrade_unable";
    }
    if (isChallengeRunning1 == 3) {
        document.getElementById("challenge1_3").innerHTML = "退出挑战";
        document.getElementById("challenge1_1").className = "upgrade_unable";
        document.getElementById("challenge1_2").className = "upgrade_unable";
        document.getElementById("challenge1_4").className = "upgrade_unable";
        document.getElementById("challenge1_5").className = "upgrade_unable";
        document.getElementById("challenge1_6").className = "upgrade_unable";
    }
    if (isChallengeRunning1 == 4) {
        document.getElementById("challenge1_4").innerHTML = "退出挑战";
        document.getElementById("challenge1_1").className = "upgrade_unable";
        document.getElementById("challenge1_2").className = "upgrade_unable";
        document.getElementById("challenge1_3").className = "upgrade_unable";
        document.getElementById("challenge1_5").className = "upgrade_unable";
        document.getElementById("challenge1_6").className = "upgrade_unable";
    }
    if (isChallengeRunning1 == 5) {
        document.getElementById("challenge1_5").innerHTML = "退出挑战";
        document.getElementById("challenge1_1").className = "upgrade_unable";
        document.getElementById("challenge1_2").className = "upgrade_unable";
        document.getElementById("challenge1_3").className = "upgrade_unable";
        document.getElementById("challenge1_4").className = "upgrade_unable";
        document.getElementById("challenge1_6").className = "upgrade_unable";
    }
    if (isChallengeRunning1 == 6) {
        document.getElementById("challenge1_6").innerHTML = "退出挑战";
        document.getElementById("challenge1_1").className = "upgrade_unable";
        document.getElementById("challenge1_2").className = "upgrade_unable";
        document.getElementById("challenge1_3").className = "upgrade_unable";
        document.getElementById("challenge1_4").className = "upgrade_unable";
        document.getElementById("challenge1_5").className = "upgrade_unable";
    }
    if (isChallengeFinish1_1 == 1) {
        document.getElementById("challenge1_1").innerHTML = "挑战完成";
        document.getElementById("challenge1_1").className = "upgrade_max";
    }
    if (isChallengeFinish1_2 == 1) {
        document.getElementById("challenge1_2").innerHTML = "挑战完成";
        document.getElementById("challenge1_2").className = "upgrade_max";
    }
    if (isChallengeFinish1_3 == 1) {
        document.getElementById("challenge1_3").innerHTML = "挑战完成";
        document.getElementById("challenge1_3").className = "upgrade_max";
    }
    if (isChallengeFinish1_4 == 1) {
        document.getElementById("challenge1_4").innerHTML = "挑战完成";
        document.getElementById("challenge1_4").className = "upgrade_max";
    }
    if (isChallengeFinish1_5 == 1) {
        document.getElementById("challenge1_5").innerHTML = "挑战完成";
        document.getElementById("challenge1_5").className = "upgrade_max";
    }
    if (isChallengeFinish1_6 == 1) {
        document.getElementById("challenge1_6").innerHTML = "挑战完成";
        document.getElementById("challenge1_6").className = "upgrade_max";
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

function buy2_1() {
    if (MP.compare(price2_1.u1,price2_1.u2)) {
        MP.add(-1 * price2_1.u1,price2_1.u2);
        level2_1.add(1,0);
        pre_price2_1.multiply(1.9,0);
        pre_price2_1.int();
    }
}

function buy2_2() {
    if (MP.compare(price2_2.u1,price2_2.u2)) {
        MP.add(-1 * price2_2.u1,price2_2.u2);
        level2_2.add(1,0);
        pre_price2_2.multiply(2.5,0);
        pre_price2_1.int();
    }
}

function buy2_3() {
    if (MP.compare(price2_3.u1,price2_3.u2)) {
        MP.add(-1 * price2_3.u1,price2_3.u2);
        level2_3.add(1,0);
        pre_price2_3.multiply(1,1);
    }
}

function buy2_11() {
    if (CME_usable.compare(price2_11.u1,price2_11.u2)) {
        CME_usable.add(-1 * price2_11.u1,price2_11.u2);
        level2_11.add(1,0);
        pre_price2_11.add(1,0);
    }
}

function buy2_12() {
    if (CME_usable.compare(price2_12.u1,price2_12.u2)) {
        CME_usable.add(-1 * price2_12.u1,price2_12.u2);
        level2_12.add(1,0);
        pre_price2_12.add(1,0);
    }
}

function buy2_13() {
    if (CME_usable.compare(price2_13.u1,price2_13.u2)) {
        CME_usable.add(-1 * price2_13.u1,price2_13.u2);
        level2_13.add(1,0);
        pre_price2_13.add(1,0);
    }
}

function research1_1() {
    if (LNP.compare(1,3) && isResearch1_1 == 0) {
        LNP.add(-1,3);
        isResearch1_1 = 1
    }
}

function research1_2() {
    if (LNP.compare(3,4) && isResearch1_2 == 0) {
        LNP.add(-3,4);
        isResearch1_2 = 1
    }
}

function research1_3() {
    if (LNP.compare(5,5) && isResearch1_3 == 0) {
        LNP.add(-5,5);
        isResearch1_3 = 1
    }
}

function research1_4() {
    if (LNP.compare(1,7) && isResearch1_4 == 0) {
        LNP.add(-1,7);
        isResearch1_4 = 1
    }
}

function research1_5() {
    if (LNP.compare(1,10) && isResearch1_5 == 0) {
        LNP.add(-1,10);
        isResearch1_5 = 1
    }
}

function research1_6() {
    if (LNP.compare(1,12) && isResearch1_6 == 0) {
        LNP.add(-1,12);
        isResearch1_6 = 1
    }
}

function research2_1() {
    if (MP.compare(2,1) && isResearch2_1 == 0) {
        MP.add(-2,1);
        isResearch2_1 = 1
    }
}

function research2_2() {
    if (MP.compare(5,1) && isResearch2_2 == 0) {
        MP.add(-5,1);
        isResearch2_2 = 1
    }
}

function research2_3() {
    if (MP.compare(3,2) && isResearch2_3 == 0) {
        MP.add(-3,2);
        isResearch2_3 = 1
    }
}

function research2_4() {
    if (MP.compare(1,3) && isResearch2_4 == 0) {
        MP.add(-1,3);
        isResearch2_4 = 1
    }
}

function research2_5() {
    if (MP.compare(2,3) && isResearch2_5 == 0) {
        MP.add(-2,3);
        isResearch2_5 = 1
    }
}

function research2_6() {
    if (MP.compare(1,4) && isResearch2_6 == 0) {
        MP.add(-1,4);
        isResearch2_6 = 1
    }
}

function research2_7() {
    if (MP.compare(2.5,5) && isResearch2_7 == 0) {
        MP.add(-2.5,5);
        isResearch2_7 = 1
    }
}

function research2_8() {
    if (MP.compare(1,6) && isResearch2_8 == 0) {
        MP.add(-1,6);
        isResearch2_8 = 1
    }
}

function research2_9() {
    if (MP.compare(3,6) && isResearch2_9 == 0) {
        MP.add(-3,6);
        isResearch2_9 = 1
    }
}

function research2_10() {
    if (MP.compare(1,7) && isResearch2_10 == 0) {
        MP.add(-1,7);
        isResearch2_10 = 1
    }
}

function research2_11() {
    if (MP.compare(1,8) && isResearch2_11 == 0) {
        MP.add(-1,8);
        isResearch2_11 = 1
    }
}

function research2_12() {
    if (MP.compare(1,9) && isResearch2_12 == 0) {
        MP.add(-1,9);
        isResearch2_12 = 1
    }
}

function resetCME() {
    if (isResetCME == 0) {
        isResetCME = 1
    }
    else {
        isResetCME = 0
    }
}

function resetEffect() {
    if (LNP.compare(1,10)) {
        gainMP.change(LNP.u1,LNP.u2 - 10);
        if (isResearch2_5 == 1) {
            gainMP.log(2);
        }
        else {
            gainMP.log(3);
        }
        gainMP.add(1,0);
        gainMP.floor();
        gainMP.multiply(effect2_3.u1,effect2_3.u2);
        if (isChallengeFinish1_1 == 1) {
            gainMP.multiply(3,0);
        }
        gainMP.multiply(effect11_2.u1,effect11_2.u2);
        gainMP.power(effect2_13.u1,effect2_13.u2);
        gainMP.int();
    }
    else {
        gainMP.change(0,0);
    }
}

function reset0() {
    dialog(2);
}

function reset1() {
    if (isChallengeRunning1 == 0) {
        dialog(1);
    }
    else {
        dialog(9);
    }
}

function dialog_confirm1() {
    if (gainMP.compare(1,0)) {
        alphaReset();
        dialog_cancel();
    }
}

function dialog_confirm2() {
    save = "MSwxLDAsMCwwLDAsMCwwLDEsMSwxLDIsMSwzLDAsMCwwLDAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMSwxLDEsMiwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDUsMywwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDIsMCwxLC0xLDEsMCwxLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMSwxLDEsMSwxLDQsLTEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMA=="
    useSave();
    dialog_cancel();
    effect();
    startPlayTime = new Date().getTime();
}

function alphaReset() {
    MP.add(gainMP.u1,gainMP.u2);
    all_MP.add(gainMP.u1,gainMP.u2);
    alphaResetTimes++
    LNP.change(1,1);
    level1_1.change(0,0);
    level1_2.change(0,0);
    level1_3.change(0,0);
    pre_price1_1.change(1,1);
    pre_price1_2.change(1,2);
    pre_price1_3.change(1,3);
    if (isResearch2_2 == 0) {
        isResearch1_1 = 0
        isResearch1_2 = 0
        isResearch1_3 = 0
        isResearch1_4 = 0
    }
    if (isResetCME == 1) {
        CME_usable.change(CME.u1,CME.u2);
        level2_11.change(0,0);
        level2_12.change(0,0);
        level2_13.change(0,0);
        pre_price2_11.change(1,0);
        pre_price2_12.change(1,0);
        pre_price2_13.change(1,0);
    }
}

function test(v) {
    if (v == 1) {
        LNP.change(1,13);
        research1_1();
        research1_2();
        research1_3();
        research1_4();
        research1_5();
    }
    if (v == 2) {
        alphaReset();
        MP.change(2,3);
        research2_1();
        research2_2();
        research2_3();
        research2_4();
        var i = 0
        buy2_3();
        while (i < 3) {
            buy2_2();
            buy2_1();
            buy2_1();
            i++
        }
        MP.change(1,1); 
        ME.change(2,4);
        compress1();
        test(1);
        research1_6();
    }
    if (v == 3) {
        test(2);
        MP.change(1,10);
        research2_5();
        research2_6();
        research2_7();
        research2_8();
        research2_9();
        research2_10();
        research2_11();
        research2_12();
        isChallengeFinish1_1 = 1
        isChallengeFinish1_2 = 1
        isChallengeFinish1_3 = 1
        isChallengeFinish1_4 = 1
        isChallengeFinish1_5 = 1
        isChallengeFinish1_6 = 1
    }
}