var menuList = ["1_1","1_2","1_3","1_4","2_1","2_2","2_3","2_4","2_5","11_1","11_2","12_1","12_2","12_3"];
var applicationUseList = [
    "<div style='display: inline;color: #8e8e8e;'>1</div>&nbsp;一次性获得<div style='display: inline;' id='applicationBasic1'></div>大数点",
    "<div style='display: inline;color: #8e8e8e;'>2</div>&nbsp;大数点获取+<div style='display: inline;' id='applicationBasic2'></div>",
    "<div style='display: inline;color: #8e8e8e;'>3</div>&nbsp;大数点获取+<div style='display: inline;' id='applicationBasic3'></div>%",
    "<div style='display: inline;color: #8e8e8e;'>4</div>&nbsp;后继器价格/<div style='display: inline;' id='applicationBasic4'></div>",
    "<div style='display: inline;color: #8e8e8e;'>5</div>&nbsp;累加器价格/<div style='display: inline;' id='applicationBasic5'></div>",
    "<div style='display: inline;color: #8e8e8e;'>6</div>&nbsp;压缩器免费等级+<div style='display: inline;' id='applicationBasic6'></div>",
    "<div style='display: inline;color: #8e8e8e;'>7</div>&nbsp;条状研究1的效果+<div style='display: inline;' id='applicationBasic7'></div>",
    "<div style='display: inline;color: #8e8e8e;'>8</div>&nbsp;条状研究2的效果+<div style='display: inline;' id='applicationBasic8'></div>%",
    "<div style='display: inline;color: #8e8e8e;'>9</div>&nbsp;条状研究4的总效果指数+<div style='display: inline;' id='applicationBasic9'></div>",
    "<div style='display: inline;color: #8e8e8e;'>10</div>&nbsp;条状研究5的总效果指数+<div style='display: inline;' id='applicationBasic10'></div>"
];
var applicationEffectList = [
    "一次性获得<div style='display: inline;' id='applicationEffect1'></div>大数点",
    "大数点获取+<div style='display: inline;' id='applicationEffect2'></div>",
    "大数点获取+<div style='display: inline;' id='applicationEffect3'></div>%",
    "后继器价格/<div style='display: inline;' id='applicationEffect4'></div>",
    "累加器价格/<div style='display: inline;' id='applicationEffect5'></div>",
    "压缩器免费等级+<div style='display: inline;' id='applicationEffect6'></div>",
    "条状研究1的效果+<div style='display: inline;' id='applicationEffect7'></div>",
    "条状研究2的效果+<div style='display: inline;' id='applicationEffect8'></div>%",
    "条状研究4的总效果指数+<div style='display: inline;' id='applicationEffect9'></div>",
    "条状研究5的总效果指数+<div style='display: inline;' id='applicationEffect10'></div>"
];
var achievementHTML = {
    "1_1": "1-1&nbsp;起点<br>购买一个后继器<br><br><br><br>奖励：1成就点",
    "1_2": "1-2&nbsp;初步提升<br>购买一个累加器<br><br><br><br>奖励：2成就点",
    "1_3": "1-3&nbsp;改进方法<br>购买条状研究1<br><br><br><br>奖励：3成就点",
    "1_4": "1-4&nbsp;有效累加<br>累加器总效果达到+5000%<br><br><br>奖励：4成就点",
    "1_5": "1-5&nbsp;强力压缩<br>压缩器总效果达到/100<br><br><br>奖励：5成就点",
    "1_6": "1-6&nbsp;小有所成<br>大数点达到1e25<br><br><br><br>奖励：6成就点",
    "1_7": "1-7&nbsp;资源丰富<br>集合元素达到15<br><br><br><br>奖励：7成就点",
    "1_8": "1-8&nbsp;十全十美<br>单元素集合有10种不同效果<br><br><br>奖励：8成就点",
    "1_9": "1-9&nbsp;团结一致<br>加法升级总等级达到1000<br><br><br>奖励：9成就点",
    "1_10": "1-10&nbsp;初窥门径<br>购买前12个条状研究<br><br><br>奖励：10成就点",
    "2_1": "2-1&nbsp;新的开始<br>进行一次乘法重置<br><br><br><br>奖励：12成就点",
    "2_2": "2-2&nbsp;取舍<br>购买4个表状研究<br><br><br><br>奖励：14成就点",
    "2_3": "2-3&nbsp;轻车熟路<br>乘法重置次数达到50<br><br><br>奖励：16成就点",
    "2_4": "2-4&nbsp;进步迅速<br>代数公式中y的值达到1e6<br><br><br>奖励：18成就点",
    "2_5": "2-5&nbsp;初见端倪<br>完成前3个普通挑战<br><br><br><br>奖励：20成就点",
    "2_6": "2-6&nbsp;加强<br>改进一次代数公式<br><br><br><br>奖励：22成就点",
    "2_7": "2-7&nbsp;融会贯通<br>完成6个普通挑战<br><br><br><br>奖励：24成就点",
    "2_8": "2-8&nbsp;披荆斩棘<br>购买18个表状研究<br><br><br><br>奖励：26成就点",
    "2_9": "2-9&nbsp;全自动加法<br>自动化T1达到6个自动项目<br><br><br>奖励：28成就点",
    "2_10": "2-10&nbsp;掌握乘法<br>乘法点达到1e8<br><br><br><br>奖励：30成就点",
};
var secretAchievementHTML = {
    "1": "1&nbsp;真正的起点<br>???<br><br><br><br>奖励：1不稳定点",
    "1_show": "1&nbsp;真正的起点<br>点击“初始版本”<br><br><br><br>奖励：1不稳定点",
    "2": "2&nbsp;大标题<br>???<br><br><br><br>奖励：2不稳定点",
    "2_show": "2&nbsp;大标题<br>使游戏标题变大<br><br><br><br>奖励：2不稳定点",
    "3": "3&nbsp;破坏者<br>???<br><br><br><br>奖励：3不稳定点",
    "3_show": "3&nbsp;破坏者<br>加载一个引起错误的存档<br><br><br>奖励：3不稳定点",
    "4": "4&nbsp;敬请期待<br>???<br><br><br><br>奖励：4不稳定点",
    "5": "5&nbsp;敬请期待<br>???<br><br><br><br>奖励：5不稳定点",
    "6": "6&nbsp;敬请期待<br>???<br><br><br><br>奖励：6不稳定点",
    "7": "7&nbsp;敬请期待<br>???<br><br><br><br>奖励：7不稳定点",
    "8": "8&nbsp;敬请期待<br>???<br><br><br><br>奖励：8不稳定点",
    "9": "9&nbsp;敬请期待<br>???<br><br><br><br>奖励：9不稳定点",
    "10": "10&nbsp;敬请期待<br>???<br><br><br><br>奖励：10不稳定点",
    "11": "11&nbsp;敬请期待<br>???<br><br><br><br>奖励：11不稳定点",
    "12": "12&nbsp;敬请期待<br>???<br><br><br><br>奖励：12不稳定点",
    "13": "13&nbsp;敬请期待<br>???<br><br><br><br>奖励：13不稳定点",
    "14": "14&nbsp;敬请期待<br>???<br><br><br><br>奖励：14不稳定点",
    "15": "15&nbsp;敬请期待<br>???<br><br><br><br>奖励：15不稳定点",
    "16": "16&nbsp;敬请期待<br>???<br><br><br><br>奖励：16不稳定点",
    "17": "17&nbsp;敬请期待<br>???<br><br><br><br>奖励：17不稳定点",
    "18": "18&nbsp;敬请期待<br>???<br><br><br><br>奖励：18不稳定点",
    "19": "19&nbsp;敬请期待<br>???<br><br><br><br>奖励：19不稳定点",
    "20": "20&nbsp;敬请期待<br>???<br><br><br><br>奖励：20不稳定点",
    "21": "21&nbsp;敬请期待<br>???<br><br><br><br>奖励：21不稳定点",
    "22": "22&nbsp;敬请期待<br>???<br><br><br><br>奖励：22不稳定点",
    "23": "23&nbsp;敬请期待<br>???<br><br><br><br>奖励：23不稳定点",
    "24": "24&nbsp;敬请期待<br>???<br><br><br><br>奖励：24不稳定点",
    "25": "25&nbsp;敬请期待<br>???<br><br><br><br>奖励：25不稳定点",
};
var newsList = [];
var scale = 1;
var applicationList2 = ["12","13","14","15","16","17","18","19","110","23","24","25","26","27","28",
                        "29","210","34","35","36","37","38","39","310","45","46","47","48","49","410",
                        "56","57","58","59","510","67","68","69","610","78","79","710","89","810","910",];
var isApplicationChooseButton = -1;
var isApplicationChoose = [0,0];

function changeScale() {
    if (window.screen.width < 500) {
        scale = window.screen.width / 1080;
        document.body.style.zoom = scale * save.scale / 100;
    }
    else {
        scale = window.screen.width / 1600;
        document.body.style.zoom = scale * save.scale / 100;
    }
}

function minusScale() {
    if (save.scale >= 55) {
        save.scale -= 5;
        changeScale();
    }
}

function addScale() {
    if (save.scale <= 145) {
        save.scale += 5;
        changeScale();
    }
}

function resetScale() {
    save.scale = 100;
    changeScale();
}

function menu(x) {
    var i = 0;
    while (i < menuList.length) {
        document.getElementById("main" + menuList[i]).style.display = "none";
        document.getElementById("menu" + menuList[i]).className = "menu2";
        i++;
    }
    document.getElementById("main" + x).style.display = "block";
    document.getElementById("menu" + x).className = "menu2_focus";
}

function showAchievement(x) {
    focusAchievement = x;
    document.getElementById("achievementText").innerHTML = achievementHTML[x];
    if (x.length == 3) {
        var achievement = save["achievement" + x[0]][Number(x[2]) - 1];
    }
    else if (x.length == 4) {
        var achievement = save["achievement" + x[0]][Number(x[2] + x[3]) - 1];
    }
    if (achievement == 1) {
        document.getElementById("achievementText").className = "autobuyer_bought";
    }
    else {
        document.getElementById("achievementText").className = "autobuyer";
    }
}

function showSecretAchievement(x) {
    focusSecretchievement = x;
    var secretAchievement = save.secretAchievement[x - 1];
    if (secretAchievement == 1) {
        document.getElementById("secretAchievementText").className = "autobuyer_bought";
        document.getElementById("secretAchievementText").innerHTML = secretAchievementHTML[x + "_show"];
    }
    else {
        document.getElementById("secretAchievementText").className = "autobuyer";
        document.getElementById("secretAchievementText").innerHTML = secretAchievementHTML[x];
    }
}

function showNumber() {
    for (const x in save) {
        if (save[x].u1 != undefined) {
            save[x].show(0,2);
        }
    }
    save.LNP.show(0,0);
    save.gainLNP_1.show(0,0);
    save.upgradeBasic1_3.show(1,1);
    save.upgradeEffect1_3.show(2,2);
    save.researchEffect1_1.show(1,1);
    save.researchEffect1_4.show(2,2);
    save.researchEffect1_5.show(2,2);
    save.researchEffect1_7.show(2,2);
    save.researchEffect1_8.show(2,2);
    save.APEffect.show(2,2);
    save.UPEffect.show(2,2);
    save.basicMilestoneEffect2_1.show(2,2);
    var i = 0;
    while (i < 10) {
        basicApplicationEffectShow(i);
        i++;
    }
    document.getElementById("scaleText").innerText = save.scale;
}

function basicApplicationBasicShow(x) {
    switch(x) {
        case 6:
            save.basicApplicationBasic[x].show(1,1);
            break;
        case 8:
            save.basicApplicationBasic[x].show(2,2);
            break;
        case 9:
            save.basicApplicationBasic[x].show(1,1);
            break;
        default:
            save.basicApplicationBasic[x].show(0,0);
            break;
    }
}

function basicApplicationEffectShow(x) {
    switch(x) {
        case 3:
        case 4:
            if (save.basicApplicationEffect[x].strictCompare(1,0)) {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = applicationEffectList[x];
                save.basicApplicationEffect[x].show(0,0);
            }
            else {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = "???";
            }
            break;
        case 5:
            if (save.basicApplicationEffect[x].strictCompare(0,0)) {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = applicationEffectList[x];
                save.basicApplicationEffect[x].show(0,0);
                document.getElementById("upgradeFreeLevelText1_3").style.display = "inline";
            }
            else {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = "???";
                document.getElementById("upgradeFreeLevelText1_3").style.display = "none";
            }
            break;
        case 6:
            if (save.basicApplicationEffect[x].strictCompare(0,0)) {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = applicationEffectList[x];
                save.basicApplicationEffect[x].show(1,1);
            }
            else {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = "???";
            }
            break;
        case 8:
        case 9:
            if (save.basicApplicationEffect[x].strictCompare(0,0)) {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = applicationEffectList[x];
                save.basicApplicationEffect[x].show(2,2);
            }
            else {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = "???";
            }
            break;
        default:
            if (save.basicApplicationEffect[x].strictCompare(0,0)) {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = applicationEffectList[x];
                save.basicApplicationEffect[x].show(0,0);
            }
            else {
                document.getElementById("applicationText" + String(x + 1)).innerHTML = "???";
            }
            break;
    }
}

function showPriceChange() {
    save.upgradeLevel1_1.int();
    save.upgradeLevel1_2.int();
    save.upgradeLevel1_3.int();
    if (save.upgradeLevel1_1.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2) || save.upgradeLevel1_2.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2) || save.upgradeLevel1_3.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2)) {
        save.isUpgradePriceChange1 = 1;
    }
    if (save.isUpgradePriceChange1 == 1) {
        document.getElementById("upgradePriceChangeText1").style.display = "block";
    }
    else {
        document.getElementById("upgradePriceChangeText1").style.display = "none";
    }
    if (save.upgradeLevel1_1.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2)) {
        document.getElementById("upgradeName1_1").style.fontStyle = "italic";
        document.getElementById("upgradeName1_1").style.color = "#4f4f4f";
    }
    else {
        document.getElementById("upgradeName1_1").style.fontStyle = "normal";
        document.getElementById("upgradeName1_1").style.color = "#000000";
    }
    if (save.upgradeLevel1_2.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2)) {
        document.getElementById("upgradeName1_2").style.fontStyle = "italic";
        document.getElementById("upgradeName1_2").style.color = "#4f4f4f";
    }
    else {
        document.getElementById("upgradeName1_2").style.fontStyle = "normal";
        document.getElementById("upgradeName1_2").style.color = "#000000";
    }
    if (save.upgradeLevel1_3.compare(save.upgradePriceChangeLevel1.u1,save.upgradePriceChangeLevel1.u2)) {
        document.getElementById("upgradeName1_3").style.fontStyle = "italic";
        document.getElementById("upgradeName1_3").style.color = "#4f4f4f";
    }
    else {
        document.getElementById("upgradeName1_3").style.fontStyle = "normal";
        document.getElementById("upgradeName1_3").style.color = "#000000";
    }
}

function changeFps(u1,u2) {
    save.fps.change(u1,u2);
    clearInterval(refresh);
    refreshFps = u1 * 10 ** u2;
    refresh = setInterval(function() {
        count();
        auto();
        checkAchievement();
        showNumber();
        showDiv();
    },1000 / refreshFps);
}

function showDiv() {
    showUpgrade1();
    showResearch1();
    showDocument();
    refreshTime();
    showGameTime();
    showPriceChange();
    showAchievement(focusAchievement);
    showSecretAchievement(focusSecretchievement);
    refreshNews();
}

function showUpgrade1() {
    var i = 0;
    while (i < 3) {
        if (save.LNP.compare(save["upgradePrice1_" + String(i + 1)].u1,save["upgradePrice1_" + String(i + 1)].u2)) {
            document.getElementById("upgrade1_" + String(i + 1)).className = "upgrade_button1";
        }
        else {
            document.getElementById("upgrade1_" + String(i + 1)).className = "upgrade_button1_unable";
        }
        i++;
    }
}

function showResearch1() {
    var i = 0;
    while (i < 12) {
        if (save.research1[i] == 0) {
            if (save.LNP.compare(save.researchPrice1[i].u1,save.researchPrice1[i].u2)) {
                document.getElementById("research1_" + String(i + 1)).className = "research_button1";
            }
            else {
                document.getElementById("research1_" + String(i + 1)).className = "research_button1_unable";
            }
        }
        else {
            document.getElementById("research1_" + String(i + 1)).className = "research_button1_bought";
        }
        i++;
    }
    if (save.LNP.compare(save.basicResearchPrice.u1,save.basicResearchPrice.u2)) {
        document.getElementById("basicResearch").className = "upgrade_button1";
    }
    else {
        document.getElementById("basicResearch").className = "upgrade_button1_unable";
    }
    if (save.basicTheory.compare(save.basicApplicationPrice.u1,save.basicApplicationPrice.u2)) {
        document.getElementById("gainBasicApplication").className = "research_button1";
    }
    else {
        document.getElementById("gainBasicApplication").className = "research_button1_unable";
    }
    var i = 0;
    while (i < 5) {
        if (save.basicApplication.compare(save.basicMilestonePrice[i].u1,save.basicMilestonePrice[i].u2)) {
            document.getElementById("basicMilestone1_" + String(i + 1)).className = "milestone_button1_bought";
            save.basicMilestone[i] = 1;
        }
        else {
            document.getElementById("basicMilestone1_" + String(i + 1)).className = "milestone_button1";
            save.basicMilestone[i] = 0;
        }
        i++;
    }
    var i = 0;
    save.basicApplication2_all.change(0,0);
    while (i < 45) {
        if (save.basicApplication2[i] == 1) {
            save.basicApplication2_all.add(1,0);
            document.getElementById("basicApplication2_" + String(i + 1)).innerText = "+";
        }
        else {
            document.getElementById("basicApplication2_" + String(i + 1)).innerText = "\n";
        }
        i++;
    }
    var i = 0;
    while (i < 4) {
        if (save.basicApplication2_all.compare(save.basicMilestonePrice2[i].u1,save.basicMilestonePrice2[i].u2)) {
            document.getElementById("basicMilestone2_" + String(i + 1)).className = "milestone_button1_bought";
            save.basicMilestone2[i] = 1;
        }
        else {
            document.getElementById("basicMilestone2_" + String(i + 1)).className = "milestone_button1";
            save.basicMilestone2[i] = 0;
        }
        i++;
    }
    countLNP();
    upgradePrice();
}

function showDocument() {
    if (save.research1[5] == 1) {
        document.getElementById("menu1_4").style.display = "block";
        save.autoBuyerUnlock1[0] = 1;
        save.autoBuyerUnlock1[1] = 1;
        save.autoBuyerUnlock1[2] = 1;
        save.autoBuyerUnlock1[3] = 1;
    }
    else {
        document.getElementById("menu1_4").style.display = "none";
        save.autoBuyerUnlock1[0] = 0;
        save.autoBuyerUnlock1[1] = 0;
        save.autoBuyerUnlock1[2] = 0;
        save.autoBuyerUnlock1[3] = 0;
    }
    if (save.research1[8] == 1) {
        document.getElementById("menu1_3").style.display = "block";
    }
    else {
        document.getElementById("menu1_3").style.display = "none";
    }
    var i = 0;
    while (i < 6) {
        if (save.autoBuyerUnlock1[i + 1] == 1) {
            document.getElementById("autobuyer1_" + String(i + 1)).style.display = "block";
        }
        else {
            document.getElementById("autobuyer1_" + String(i + 1)).style.display = "none";
        }
        if (save.autoBuyerOpen1[i] == 1) {
            document.getElementById("autobuyerButton1_" + String(i + 1)).innerText = "已开启";
            document.getElementById("autobuyer1_" + String(i + 1)).className = "autobuyer";
        }
        else {
            document.getElementById("autobuyerButton1_" + String(i + 1)).innerText = "已关闭";
            document.getElementById("autobuyer1_" + String(i + 1)).className = "autobuyer_close";
        }
        i++;
    }
    if (save.research1[11] == 1) {
        //document.getElementById("showMP").style.display = "block";
        //document.getElementById("reset1").style.display = "block";
    }
    else {
        document.getElementById("showMP").style.display = "none";
        document.getElementById("reset1").style.display = "none";
    }
    var i = 0;
    save.achievementCount.change(0,0);
    while (i < 10) {
        if (save.achievement1[i] == 1) {
            document.getElementById("achievement1_" + String(i + 1)).className = "achievement_button_bought";
            save.achievementCount.add(1,0);
        }
        else {
            document.getElementById("achievement1_" + String(i + 1)).className = "achievement_button";
        }
        i++;
    }
    var i = 0;
    save.secretAchievementCount.change(0,0);
    while (i < 3) {
        if (save.secretAchievement[i] == 1) {
            document.getElementById("secretAchievement" + String(i + 1)).className = "achievement_button_bought";
            save.secretAchievementCount.add(1,0);
        }
        else {
            document.getElementById("secretAchievement" + String(i + 1)).className = "achievement_button";
        }
        i++;
    }
    if (save.basicMilestone[1] == 1) {
        document.getElementById("basicApplicationText2").style.display = "block";
    }
    else {
        document.getElementById("basicApplicationText2").style.display = "none";
    }
    if (save.basicMilestone[2] == 1) {
        save.autoBuyerUnlock1[5] = 1;
    }
    else {
        save.autoBuyerUnlock1[5] = 0;
    }
    if (save.basicMilestone[4] == 1) {
        save.autoBuyerUnlock1[6] = 1;
    }
    else {
        save.autoBuyerUnlock1[6] = 0;
    }
    if (save.isUPEffect == 1) {
        document.getElementById("secretEffectText").innerText = "已开启";
    }
    else {
        document.getElementById("secretEffectText").innerText = "已关闭";
    }
    if (save.autoBuyerUnlock1[6] == 1 && save.autoBuyerOpen1[5] == 1) {
        document.getElementById("autoBasicApplicationText").style.display = "inline";
    }
    else {
        document.getElementById("autoBasicApplicationText").style.display = "none";
    }
    if (save.scale <= 50) {
        document.getElementById("minusScaleButton").className = "upgrade_button1_unable";
    }
    else {
        document.getElementById("minusScaleButton").className = "upgrade_button1";
    }
    if (save.scale >= 150) {
        document.getElementById("addScaleButton").className = "upgrade_button1_unable";
    }
    else {
        document.getElementById("addScaleButton").className = "upgrade_button1";
    }
    var i = 0;
    while (i < 10) {
        switch(i) {
            case 3:
            case 4:
                if (save.basicApplicationEffect[i].strictCompare(1,0)) {
                    document.getElementById("applicationChoose" + String(i + 1)).className = "achievement_button";
                }
                else {
                    document.getElementById("applicationChoose" + String(i + 1)).className = "achievement_button_unable";
                }
                break;
            default:
                if (save.basicApplicationEffect[i].strictCompare(0,0)) {
                    document.getElementById("applicationChoose" + String(i + 1)).className = "achievement_button";
                }
                else {
                    document.getElementById("applicationChoose" + String(i + 1)).className = "achievement_button_unable";
                }
                break;
        }
        i++;
    }
    var i = 0;
    var x = 0;
    var list = [0,0];
    while (i < 10) {
        if (applicationChooseList[i] == 1) {
            document.getElementById("applicationChoose" + String(i + 1)).className = "achievement_button_bought";
            if (x == 0) {
                list[0] = i + 1;
                isApplicationChoose[0] = i + 1;
            }
            if (x == 1) {
                list[1] = i + 1;
                isApplicationChoose[1] = i + 1;
            }
            x++;
        }
        i++;
    }
    var i = 0;
    while (i < 45) {
        if (String(list[0]) + String(list[1]) == applicationList2[i]) {
            var y = i;
        }
        i++;
    }
    if (x == 2 && save.basicApplication2[y] == 0) {
        isApplicationChooseButton = y;
        document.getElementById("applicationChooseButton").className = "upgrade_button1";
    }
    else {
        isApplicationChooseButton = -1;
        document.getElementById("applicationChooseButton").className = "upgrade_button1_unable";
    }
}

function autoBuyer1(x) {
    if (save.autoBuyerOpen1[x - 1] == 1) {
        save.autoBuyerOpen1[x - 1] = 0;
    }
    else {
        save.autoBuyerOpen1[x - 1] = 1;
    }
}

function autoBuyerAll1(x) {
    var i = 0;
    while (i < 6) {
        if (save.autoBuyerUnlock1[i + 1] == 1) {
            save.autoBuyerOpen1[i] = x;
        }
        i++;
    }
}

function time(timer) {
    const hour = timer.getHours();
    const minute = timer.getMinutes();
    const second = timer.getSeconds();
    return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

function date(timer) {
    const year = timer.getFullYear();
    const month = timer.getMonth() + 1;
    const day = timer.getDate();
    const hour = timer.getHours();
    const minute = timer.getMinutes();
    const second = timer.getSeconds();
    return `${pad(year,4)}/${pad(month)}/${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

function allTime(timer) {
    const year = timer.getFullYear();
    const month = timer.getMonth() + 1;
    const day = timer.getDate();
    const hour = timer.getHours();
    const minute = timer.getMinutes();
    const second = timer.getSeconds();
    return `${pad(year,4)}${pad(month)}${pad(day)}_${pad(hour)}${pad(minute)}${pad(second)}`;
}

function pad(timeEl,total = 2,str = "0") {
    return timeEl.toString().padStart(total,str);
}

function refreshTime() {
    save.latesetTime = new Date();
}

function showDialog(x) {
    if (x != 4) {
        document.getElementById("mainDialog").style.display = "block";
        document.getElementById("dialog" + x).style.display = "block";
    }
    else {
        document.getElementById("mainDialog2").style.display = "block";
        document.getElementById("dialog4").style.display = "block";
    }
}

function useDialog(x) {
    switch(x) {
        case 1:
            closeDialog();
            break;
        case 2:
            closeDialog();
            break;
        case 3:
            clearSave();
            closeDialog();
            break;
        case 5:
            closeDialog();
            break;
        case 6:
            closeDialog();
            break;
        case 7:
            if (isApplicationChooseButton != -1) {
                save.basicApplication2[isApplicationChooseButton] = 1;
                minusBasicApplication(isApplicationChoose[0]);
                minusBasicApplication(isApplicationChoose[1]);
                applicationChooseList = [0,0,0,0,0,0,0,0,0,0];
                closeDialog();
            }
            break;
        case 8:
            closeDialog();
            break;
    }
}

function closeDialog() {
    document.getElementById("mainDialog").style.display = "none";
    var i = 0;
    while (i < 3) {
        document.getElementById("dialog" + String(i + 1)).style.display = "none";
        i++;
    }
    document.getElementById("dialog5").style.display = "none";
    document.getElementById("dialog6").style.display = "none";
    document.getElementById("dialog7").style.display = "none";
    document.getElementById("dialog8").style.display = "none";
    applicationChooseList = [0,0,0,0,0,0,0,0,0,0];
}

function closeDialog2() {
    document.getElementById("mainDialog2").style.display = "none";
    document.getElementById("dialog4").style.display = "none";

}

function showGameTime() {
    const time = save.gameTime.toFixed(0);
    const day = parseInt(time / 86400);
    const hour = parseInt((time / 3600) % 24);
    const minute = parseInt((time / 60) % 60);
    const second = parseInt(time % 60);
    const timeText = `${day}天${hour}时${minute}分${second}秒`;
    document.getElementById("gameTime").innerText = timeText;
}

function refreshNews() {
    if (newsList[0] == undefined) {
        document.getElementById("newsLine").style.color = "#8e8e8e";
        document.getElementById("newsLine").innerHTML = "当前无事发生(<div style='display: inline;' id='newsTime'>hh:mm:ss</div>)";
        document.getElementById("newsTime").innerText = time(save.latesetTime);
    }
    else {
        document.getElementById("newsLine").style.color = "#169500";
        document.getElementById("newsLine").innerHTML = "";
        var i = 0
        while (i < newsList.length) {
            document.getElementById('newsLine').innerHTML += '&nbsp;&nbsp;&nbsp;' + newsList[i] + '&nbsp;&nbsp;&nbsp;';
            i++;
        }
    }
}