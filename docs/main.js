var refreshFps = 40;
var v1,v2,v3,v4;
var focusAchievement = "1_1";

var refresh = setInterval(function() {
    count();
    auto();
    checkAchievement();
    showNumber();
    showDiv();
},1000 / refreshFps);

function count() {
    save.gainLNP_1.change(save.gainLNP.u1,save.gainLNP.u2);
    //条状研究5
    save.researchEffect1_5.change(1,0);
    if (save.research1[4] == 1 && save.LNP.u2 >= 1) {
        save.researchEffect1_5.change(save.LNP.u1,save.LNP.u2);
        save.researchEffect1_5.log(5);
        save.basicApplicationEffect[9].add(1,0);
        save.researchEffect1_5.power(save.basicApplicationEffect[9].u1,save.basicApplicationEffect[9].u2);
        save.basicApplicationEffect[9].add(-1,0);
    }
    save.gainLNP_1.multiply(save.researchEffect1_5.u1,save.researchEffect1_5.u2);
    //条状研究7
    save.gameTime += 1 / refreshFps;
    save.fps.power(-1,0);
    save.gameTime_1.add(save.fps.u1,save.fps.u2);
    save.fps.power(-1,0);
    save.researchEffect1_7.change(1,0);
    if (save.research1[6] == 1) {
        save.researchEffect1_7.change(save.gameTime_1.u1,save.gameTime_1.u2);
        save.researchEffect1_7.power(5,-1);
        save.researchEffect1_7.add(1,0)
    }
    save.gainLNP_1.multiply(save.researchEffect1_7.u1,save.researchEffect1_7.u2);
    //成就点
    save.APEffect.change(save.AP.u1,save.AP.u2);
    save.APEffect.multiply(5,-2);
    save.APEffect.add(1,0);
    if (save.research1[9] == 1) {
        save.APEffect.power(2,0);
    }
    save.gainLNP_1.multiply(save.APEffect.u1,save.APEffect.u2);
    //基础应用
    save.basicApplicationEffect[2].multiply(1,-2);
    save.basicApplicationEffect[2].add(1,0);
    save.gainLNP_1.multiply(save.basicApplicationEffect[2].u1,save.basicApplicationEffect[2].u2);
    save.basicApplicationEffect[2].add(-1,0);
    save.basicApplicationEffect[2].multiply(1,2);
    save.gainLNP_1.add(save.basicApplicationEffect[1].u1,save.basicApplicationEffect[1].u2);
    //帧率
    save.fps.power(-1,0);
    save.gainLNP_1.multiply(save.fps.u1,save.fps.u2);
    save.fps.power(-1,0);
    save.LNP.add(save.gainLNP_1.u1,save.gainLNP_1.u2);
    save.allLNP.add(save.gainLNP_1.u1,save.gainLNP_1.u2);
    if (save.LNP.strictCompare(save.maxLNP.u1,save.maxLNP.u2)) {
        save.maxLNP.change(save.LNP.u1,save.LNP.u2);
    }
    save.gainLNP_1.multiply(save.fps.u1,save.fps.u2);
    save.basicResearchPrice.change(1,10);
    if (save.research1[10] == 1) {
        save.basicResearchPrice.powerRepeat(1.05,0,save.basicResearchLevel.u1,save.basicResearchLevel.u2);
    }
    else {
        save.basicResearchPrice.powerRepeat(1.1,0,save.basicResearchLevel.u1,save.basicResearchLevel.u2);
    }
}

function upgrade1(x) {
    if (save.LNP.compare(save["upgradePrice" + x].u1,save["upgradePrice" + x].u2)) {
        save.LNP.add(-1 * save["upgradePrice" + x].u1,save["upgradePrice" + x].u2);
        save["upgradeLevel" + x].add(1,0);
        countLNP();
        upgradePrice();
    }
}

function research1(x) {
    if (save.LNP.compare(save.researchPrice1[x - 1].u1,save.researchPrice1[x - 1].u2) && save.research1[x - 1] == 0) {
        save.LNP.add(-1 * save.researchPrice1[x - 1].u1,save.researchPrice1[x - 1].u2);
        save.research1[x - 1] = 1;
        save.research1_all.add(1,0);
        countLNP();
        upgradePrice();
    }
}

function basicResearch() {
    if (save.LNP.compare(save.basicResearchPrice.u1,save.basicResearchPrice.u2)) {
        if (save.basicMilestone[3] != 1) {
            save.LNP.add(-1 * save.basicResearchPrice.u1,save.basicResearchPrice.u2);
        }
        save.basicTheory.add(save.basicResearchEffect.u1,save.basicResearchEffect.u2);
        save.basicResearchLevel.add(1,0);
        if (save.basicMilestone[0] == 1 && randomNum(1,5) == 5) {
            save.basicTheory.add(save.basicResearchEffect.u1,save.basicResearchEffect.u2);
        }
        save.basicTheory.int();
    }
}

function gainBasicApplication() {
    if (save.basicTheory.compare(save.basicApplicationPrice.u1,save.basicApplicationPrice.u2)) {
        showDialog(4);
        v1 = randomNum(0,9);
        v2 = randomNum(0,9);
        while (v1 == v2) {
            v2 = randomNum(0,9);
        }
        v3 = randomNum(0,9);
        while (v1 == v3 || v2 == v3) {
            v3 = randomNum(0,9);
        }
        if (save.basicMilestone[1] == 1) {
            document.getElementById("applicationUse4").style.display = "block";
            v4 = randomNum(0,9);
            while (v1 == v4 || v2 == v4 || v3 == v4) {
                v4 = randomNum(0,9);
            }
        }
        else {
            document.getElementById("applicationUse4").style.display = "none";
        }
        document.getElementById("applicationUse1").innerHTML = applicationUseList[v1];
        document.getElementById("applicationUse2").innerHTML = applicationUseList[v2];
        document.getElementById("applicationUse3").innerHTML = applicationUseList[v3];
        if (save.basicMilestone[1] == 1) {
            document.getElementById("applicationUse4").innerHTML = applicationUseList[v4];
        }
        save.basicApplicationBasic[0].change(save.gainLNP_1.u1,save.gainLNP_1.u2);
        save.basicApplicationBasic[0].multiply(1.8,2);
        save.basicApplicationBasic[1].change(save.gainLNP_1.u1,save.gainLNP_1.u2);
        save.basicApplicationBasic[1].multiply(5,-1);
        basicApplicationBasicShow(v1);
        basicApplicationBasicShow(v2);
        basicApplicationBasicShow(v3);
        if (save.basicMilestone[1] == 1) {
            basicApplicationBasicShow(v4);
        }
    }
}

function useApplication(x) {
    switch(x) {
        case 0:
            save.LNP.add(save.basicApplicationBasic[0].u1,save.basicApplicationBasic[0].u2);
            save.basicApplicationEffect[x].add(save.basicApplicationBasic[x].u1,save.basicApplicationBasic[x].u2);
            break;
        case 3:
            save.basicApplicationEffect[x].multiply(save.basicApplicationBasic[x].u1,save.basicApplicationBasic[x].u2);
            break;
        case 4:
            save.basicApplicationEffect[x].multiply(save.basicApplicationBasic[x].u1,save.basicApplicationBasic[x].u2);
            break;
        default:
            save.basicApplicationEffect[x].add(save.basicApplicationBasic[x].u1,save.basicApplicationBasic[x].u2);
            break;
    }
    save.basicTheory.add(-1 * save.basicApplicationPrice.u1,save.basicApplicationPrice.u2);
    save.basicTheory.int();
    save.basicApplication.add(1,0);
    if (save.basicApplication.strictCompare(save.maxBasicApplication.u1,save.maxBasicApplication.u2)) {
        save.maxBasicApplication.change(save.basicApplication.u1,save.basicApplication.u2);
    }
    countLNP();
    upgradePrice();
    closeDialog2();
}

function countLNP() {
    //后继器
    save.upgradeBasic1_1.change(1,0);
    if (save.research1[0] == 1 && save.upgradeLevel1_1.u2 >= 1) {
        save.upgradeLevel1_1_int10.change(save.upgradeLevel1_1.u1,save.upgradeLevel1_1.u2 - 1);
        save.upgradeLevel1_1_int10.floor();
        save.researchEffect1_1.change(save.basicApplicationEffect[6].u1,save.basicApplicationEffect[6].u2);
        save.researchEffect1_1.add(2,0);
        save.upgradeBasic1_1.multiplyRepeat(save.researchEffect1_1.u1,save.researchEffect1_1.u2,save.upgradeLevel1_1_int10.u1,save.upgradeLevel1_1_int10.u2);
    }
    save.upgradeEffect1_1.change(save.upgradeBasic1_1.u1,save.upgradeBasic1_1.u2);
    save.upgradeEffect1_1.multiply(save.upgradeLevel1_1.u1,save.upgradeLevel1_1.u2);
    save.gainLNP.change(0,0);
    save.gainLNP.add(save.upgradeEffect1_1.u1,save.upgradeEffect1_1.u2);
    //累加器
    save.upgradeBasic1_2.change(0,0);
    save.researchEffect1_2.change(1,1);
    save.researchEffect1_2.add(save.basicApplicationEffect[7].u1,save.basicApplicationEffect[7].u2);
    if (save.research1[1] == 1) {
        save.upgradeBasic1_2.change(save.upgradeLevel1_2.u1,save.upgradeLevel1_2.u2);
        save.upgradeBasic1_2.multiply(save.researchEffect1_2.u1,save.researchEffect1_2.u2);
    }
    save.upgradeBasic1_2.add(1,2);
    save.upgradeEffect1_2.change(save.upgradeBasic1_2.u1,save.upgradeBasic1_2.u2);
    save.upgradeEffect1_2.multiply(save.upgradeLevel1_2.u1,save.upgradeLevel1_2.u2);
    save.upgradeEffect1_2.add(1,2);
    save.gainLNP.multiply(save.upgradeEffect1_2.u1,save.upgradeEffect1_2.u2 - 2);
    save.upgradeEffect1_2.add(-1,2);
    //条状研究4
    save.upgradeLevel1_all.change(0,0);
    save.upgradeLevel1_all.add(save.upgradeLevel1_1.u1,save.upgradeLevel1_1.u2);
    save.upgradeLevel1_all.add(save.upgradeLevel1_2.u1,save.upgradeLevel1_2.u2);
    save.upgradeLevel1_all.add(save.upgradeLevel1_3.u1,save.upgradeLevel1_3.u2);
    save.upgradeLevel1_all.add(save.upgradeFreeLevel1_3.u1,save.upgradeFreeLevel1_3.u2);
    if (save.upgradeLevel1_all.strictCompare(save.maxUpgradeLevel1_all.u1,save.maxUpgradeLevel1_all.u2)) {
        save.maxUpgradeLevel1_all.change(save.upgradeLevel1_all.u1,save.upgradeLevel1_all.u2);
    }
    save.researchEffect1_4.change(1,0);
    if (save.research1[3] == 1) {
        save.researchEffect1_4.multiply(5,-2);
        save.researchEffect1_4.multiply(save.upgradeLevel1_all.u1,save.upgradeLevel1_all.u2);
        save.researchEffect1_4.add(1,0);
        save.basicApplicationEffect[8].add(1,0);
        save.researchEffect1_4.power(save.basicApplicationEffect[8].u1,save.basicApplicationEffect[8].u2);
        save.basicApplicationEffect[8].add(-1,0);
    }
    save.gainLNP.multiply(save.researchEffect1_4.u1,save.researchEffect1_4.u2);
    //条状研究8
    save.researchEffect1_8.change(1,0);
    if (save.research1[7] == 1) {
        save.researchEffect1_8.change(save.research1_all.u1,save.research1_all.u2);
        save.researchEffect1_8.multiply(3,0);
        save.researchEffect1_8.add(1,0);
    }
    save.gainLNP.multiply(save.researchEffect1_8.u1,save.researchEffect1_8.u2);
}

function upgradePrice() {
    //压缩器
    save.upgradeFreeLevel1_3.change(save.basicApplicationEffect[5].u1,save.basicApplicationEffect[5].u2);
    save.upgradeBasic1_3.change(1.1,0);
    if (save.research1[2] == 1) {
        save.upgradeBasic1_3.add(1,-1);
    }
    save.upgradeEffect1_3.change(save.upgradeBasic1_3.u1,save.upgradeBasic1_3.u2);
    save.upgradeFreeLevel1_3.add(save.upgradeLevel1_3.u1,save.upgradeLevel1_3.u2);
    save.upgradeEffect1_3.power(-1 * save.upgradeFreeLevel1_3.u1,save.upgradeFreeLevel1_3.u2);
    save.upgradeFreeLevel1_3.add(-1 * save.upgradeLevel1_3.u1,save.upgradeLevel1_3.u2);
    save.upgradePrice1_1.change(1,1);
    save.upgradePrice1_1.multiplyRepeat(1.3,0,save.upgradeLevel1_1.u1,save.upgradeLevel1_1.u2);
    save.upgradePrice1_1.multiply(save.upgradeEffect1_3.u1,save.upgradeEffect1_3.u2);
    save.basicApplicationEffect[3].power(-1,0);
    save.upgradePrice1_1.multiply(save.basicApplicationEffect[3].u1,save.basicApplicationEffect[3].u2);
    save.basicApplicationEffect[3].power(-1,0);
    save.upgradePrice1_2.change(1,2);
    save.upgradePrice1_2.multiplyRepeat(1.5,0,save.upgradeLevel1_2.u1,save.upgradeLevel1_2.u2);
    save.upgradePrice1_2.multiply(save.upgradeEffect1_3.u1,save.upgradeEffect1_3.u2);
    save.basicApplicationEffect[4].power(-1,0);
    save.upgradePrice1_2.multiply(save.basicApplicationEffect[4].u1,save.basicApplicationEffect[4].u2);
    save.basicApplicationEffect[4].power(-1,0);
    save.upgradePrice1_3.change(1,3);
    save.upgradePrice1_3.multiplyRepeat(1.7,0,save.upgradeLevel1_3.u1,save.upgradeLevel1_3.u2);
    save.upgradePrice1_3.multiply(save.upgradeEffect1_3.u1,save.upgradeEffect1_3.u2)
    save.upgradeEffect1_3.power(-1,0);
}

function checkAchievement() {
    if (save.upgradeLevel1_1.compare(1,0) && save.achievement1[0] == 0) {
        save.achievement1[0] = 1;
        save.AP.add(1,0);
    }
    if (save.upgradeLevel1_2.compare(1,0) && save.achievement1[1] == 0) {
        save.achievement1[1] = 1;
        save.AP.add(2,0);
    }
    if (save.research1[0] == 1 && save.achievement1[2] == 0) {
        save.achievement1[2] = 1;
        save.AP.add(3,0);
    }
    if (save.upgradeEffect1_2.compare(5,3) && save.achievement1[3] == 0) {
        save.achievement1[3] = 1;
        save.AP.add(4,0);
    }
    if (save.upgradeEffect1_3.compare(1,2) && save.achievement1[4] == 0) {
        save.achievement1[4] = 1;
        save.AP.add(5,0);
    }
    if (save.LNP.compare(1,25) && save.achievement1[5] == 0) {
        save.achievement1[5] = 1;
        save.AP.add(6,0);
    }
    if (save.basicApplication.compare(1.5,1) && save.achievement1[6] == 0) {
        save.achievement1[6] = 1;
        save.AP.add(7,0);
    }
    var i = 0;
    var x = 0;
    while (i < 10) {
        switch(i) {
            case 3:
                if (save.basicApplicationEffect[i].strictCompare(1,0)) {
                    x++;
                }
                break;
            case 4:
                if (save.basicApplicationEffect[i].strictCompare(1,0)) {
                    x++;
                }
                break;
            case 8:
                if (save.basicApplicationEffect[i].strictCompare(0,0)) {
                    x++;
                }
                break;
            case 9:
                if (save.basicApplicationEffect[i].strictCompare(0,0)) {
                    x++;
                }
                break;
            default:
                if (save.basicApplicationEffect[i].strictCompare(0,0)) {
                    x++;
                }
                break;
        }
        i++;
    }
    if (x == 10 && save.achievement1[7] == 0) {
        save.achievement1[7] = 1;
        save.AP.add(8,0);
    }
    if (save.upgradeLevel1_all.compare(1,3) && save.achievement1[8] == 0) {
        save.achievement1[8] = 1;
        save.AP.add(9,0);
    }
    if (save.research1_all.compare(1.2,1) && save.achievement1[9] == 0) {
        save.achievement1[9] = 1;
        save.AP.add(10,0);
    }
}

function auto() {
    auto1();
}

function auto1() {
    if (save.autoBuyerUnlock1[0] == 1) {
        if (save.autoBuyerUnlock1[1] == 1 && save.autoBuyerOpen1[0] == 1) {
            upgrade1("1_1");
        }
        if (save.autoBuyerUnlock1[2] == 1 && save.autoBuyerOpen1[1] == 1) {
            upgrade1("1_2");
        }
        if (save.autoBuyerUnlock1[3] == 1 && save.autoBuyerOpen1[2] == 1) {
            upgrade1("1_3");
        }
        if (save.autoBuyerUnlock1[5] == 1 && save.autoBuyerOpen1[4] == 1) {
            basicResearch();
        }
        if (save.autoBuyerUnlock1[6] == 1 && save.autoBuyerOpen1[5] == 1) {
            if (save.basicTheory.compare(save.basicApplicationPrice.u1,save.basicApplicationPrice.u2)) {
                gainBasicApplication();
                useApplication(v1);
            }
        }
    }
}

function randomNum(min,max) {
    switch(arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1,10);
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min,10);
        default:
            return 0;
    }
}

function test() {
    save.LNP.add(1,30);
    save.basicTheory.add(1,1);
    var i = 0
    while (i < 10) {
        research1(i + 1);
        i++;
    }
    menu("1_3");
}