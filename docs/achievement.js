function achievement1_1() {
    document.getElementById("achievementText1_1").innerText = "1-1 大数伊始"
    document.getElementById("achievementText1_2").innerText = "购买加法生成器至1级"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_2() {
    document.getElementById("achievementText1_1").innerText = "1-2 初步提升"
    document.getElementById("achievementText1_2").innerText = "购买加法强化器至1级"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_3() {
    document.getElementById("achievementText1_1").innerText = "1-3 改进方法"
    document.getElementById("achievementText1_2").innerText = "购买第一个条状研究"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_4() {
    document.getElementById("achievementText1_1").innerText = "1-4 有效强化"
    document.getElementById("achievementText1_2").innerText = "加法强化器总效果达到5000%"
    document.getElementById("achievementText1_3").innerText = "大数点获取倍数+0.1"
}

function achievement1_5() {
    document.getElementById("achievementText1_1").innerText = "1-5 强力优惠"
    document.getElementById("achievementText1_2").innerText = "加法压缩器总效果小于0.01"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_6() {
    document.getElementById("achievementText1_1").innerText = "1-6 亿万富翁"
    document.getElementById("achievementText1_2").innerText = "拥有1e8大数点"
    document.getElementById("achievementText1_3").innerText = "大数点获取倍数+0.1"
}

function achievement1_7() {
    document.getElementById("achievementText1_1").innerText = "1-7 解放双手"
    document.getElementById("achievementText1_2").innerText = "解锁自动化T1"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_8() {
    document.getElementById("achievementText1_1").innerText = "1-8 初窥门径"
    document.getElementById("achievementText1_2").innerText = "每秒大数点获取达到1e10"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement1_9() {
    document.getElementById("achievementText1_1").innerText = "1-9 团结一致"
    document.getElementById("achievementText1_2").innerText = "加法升级总等级达到300"
    document.getElementById("achievementText1_3").innerText = "大数点获取倍数+0.3"
}

function achievement1_10() {
    document.getElementById("achievementText1_1").innerText = "1-10 首次尝试"
    document.getElementById("achievementText1_2").innerText = "进行第一次乘法重置"
    document.getElementById("achievementText1_3").innerText = "无额外奖励"
}

function achievement2_1() {
    document.getElementById("achievementText2_1").innerText = "2-1 间接升级"
    document.getElementById("achievementText2_2").innerText = "购买乘法生成器至3级"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_2() {
    document.getElementById("achievementText2_1").innerText = "2-2 能量转换"
    document.getElementById("achievementText2_2").innerText = "拥有10000常规能量和1压缩能量"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_3() {
    document.getElementById("achievementText2_1").innerText = "2-3 迎接挑战"
    document.getElementById("achievementText2_2").innerText = "完成普通挑战1"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_4() {
    document.getElementById("achievementText2_1").innerText = "2-4 成千上万"
    document.getElementById("achievementText2_2").innerText = "乘法重置潜在乘法点达到1000"
    document.getElementById("achievementText2_3").innerText = "乘法点获取倍数+0.25"
}

function achievement2_5() {
    document.getElementById("achievementText2_1").innerText = "2-5 轻车熟路"
    document.getElementById("achievementText2_2").innerText = "进行100次乘法重置"
    document.getElementById("achievementText2_3").innerText = "乘法点获取倍数+0.25"
}

function achievement2_6() {
    document.getElementById("achievementText2_1").innerText = "2-6 半自动化"
    document.getElementById("achievementText2_2").innerText = "解锁自动化T2"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_7() {
    document.getElementById("achievementText2_1").innerText = "2-7 小有所成"
    document.getElementById("achievementText2_2").innerText = "完成所有普通挑战"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_8() {
    document.getElementById("achievementText2_1").innerText = "2-8 全面研究"
    document.getElementById("achievementText2_2").innerText = "完成所有表状研究"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function achievement2_9() {
    document.getElementById("achievementText2_1").innerText = "2-9 风驰电掣"
    document.getElementById("achievementText2_2").innerText = "每秒常规能量获取达到5e6"
    document.getElementById("achievementText2_3").innerText = "乘法点获取倍数+0.5"
}

function achievement2_10() {
    document.getElementById("achievementText2_1").innerText = "2-10 新的开始"
    document.getElementById("achievementText2_2").innerText = "进行一次乘方重置"
    document.getElementById("achievementText2_3").innerText = "无额外奖励"
}

function showAchievement() {
    isAchievement1_all = 0
    effect11_1.change(1,0);
    if (isAchievement1_1 == 1 || level1_1.compare(1,0)) {
        isAchievement1_1 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_1").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_1").className = "achievement"
    }
    if (isAchievement1_2 == 1 || level1_2.compare(1,0)) {
        isAchievement1_2 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_2").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_2").className = "achievement"
    }
    if (isAchievement1_3 == 1 || isResearch1_1 == 1) {
        isAchievement1_3 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_3").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_3").className = "achievement"
    }
    if (isAchievement1_4 == 1 || effect1_2.compare(5,3)) {
        isAchievement1_4 = 1
        isAchievement1_all++
        effect11_1.add(1.5,-1);
        document.getElementById("achievement1_4").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_4").className = "achievement"
    }
    if (isAchievement1_5 == 1 || !effect1_3.compare(1,-2)) {
        isAchievement1_5 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_5").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_5").className = "achievement"
    }
    if (isAchievement1_6 == 1 || LNP.compare(1,8)) {
        isAchievement1_6 = 1
        isAchievement1_all++
        effect11_1.add(1.5,-1);
        document.getElementById("achievement1_6").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_6").className = "achievement"
    }
    if (isAchievement1_7 == 1 || isResearch1_5 == 1) {
        isAchievement1_7 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_7").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_7").className = "achievement"
    }
    if (isAchievement1_8 == 1 || gainLNP.compare(1,10)) {
        isAchievement1_8 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_8").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_8").className = "achievement"
    }
    if (isAchievement1_9 == 1 || level1_all.compare(3,2)) {
        isAchievement1_9 = 1
        isAchievement1_all++
        effect11_1.add(3.5,-1);
        document.getElementById("achievement1_9").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_9").className = "achievement"
    }
    if (isAchievement1_10 == 1 || alphaResetTimes >= 1) {
        isAchievement1_10 = 1
        isAchievement1_all++
        effect11_1.add(5,-2);
        document.getElementById("achievement1_10").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement1_10").className = "achievement"
    }
    document.getElementById("achievement1_all").innerText = isAchievement1_all
    if (isAchievement1_all == 10) {
        effect11_1.add(1,0);
    }
    isAchievement2_all = 0
    effect11_2.change(1,0);
    if (isAchievement2_1 == 1 || level2_1.compare(3,0)) {
        isAchievement2_1 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_1").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_1").className = "achievement"
    }
    if (isAchievement2_2 == 1 || (ME.compare(1,4) && CME.compare(1,0))) {
        isAchievement2_2 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_2").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_2").className = "achievement"
    }
    if (isAchievement2_3 == 1 || isChallengeFinish1_1 == 1) {
        isAchievement2_3 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_3").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_3").className = "achievement"
    }
    if (isAchievement2_4 == 1 || gainMP.compare(1,3)) {
        isAchievement2_4 = 1
        isAchievement2_all++
        effect11_2.add(3.5,-1);
        document.getElementById("achievement2_4").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_4").className = "achievement"
    }
    if (isAchievement2_5 == 1 || alphaResetTimes >= 100) {
        isAchievement2_5 = 1
        isAchievement2_all++
        effect11_2.add(3.5,-1);
        document.getElementById("achievement2_5").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_5").className = "achievement"
    }
    if (isAchievement2_6 == 1 || isResearch2_8 == 1) {
        isAchievement2_6 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_6").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_6").className = "achievement"
    }
    if (isAchievement2_7 == 1 || (isChallengeFinish1_1 == 1 && isChallengeFinish1_2 == 1 && isChallengeFinish1_3 == 1 && isChallengeFinish1_4 == 1 && isChallengeFinish1_5 == 1 && isChallengeFinish1_6 == 1)) {
        isAchievement2_7 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_7").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_7").className = "achievement"
    }
    if (isAchievement2_8 == 1 || (isResearch2_1 == 1 && isResearch2_2 == 1 && isResearch2_3 == 1 && isResearch2_4 == 1 && isResearch2_5 == 1 && isResearch2_6 == 1 && isResearch2_7 == 1 && isResearch2_8 == 1 && isResearch2_9 == 1 && isResearch2_10 == 1 && isResearch2_11 == 1 && isResearch2_12 == 1)) {
        isAchievement2_8 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_8").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_8").className = "achievement"
    }
    if (isAchievement2_9 == 1 || gainME.compare(5,6)) {
        isAchievement2_9 = 1
        isAchievement2_all++
        effect11_2.add(6,-1);
        document.getElementById("achievement2_9").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_9").className = "achievement"
    }
    if (isAchievement2_10 == 1) {
        isAchievement2_10 = 1
        isAchievement2_all++
        effect11_2.add(1,-1);
        document.getElementById("achievement2_10").className = "achievement_finish"
    }
    else {
        document.getElementById("achievement2_10").className = "achievement"
    }
    document.getElementById("achievement2_all").innerText = isAchievement2_all
    if (isAchievement2_all == 10) {
        effect11_2.add(2,0);
    }
}