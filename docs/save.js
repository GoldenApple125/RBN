function downloadSave(saveName,saveText) {
    let a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + saveText
    a.download = saveName
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function getTime() {
    var time = new Date;
    var year = time.getFullYear();
    var mon = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    nowTime = String(year) + "-" + String(mon) + "-" + String(date) + "-" + String(hours) + "-" + String(minutes) + "-" + String(seconds);
    return nowTime;
}

function export1() {
    getSave();
    var nowTime = getTime();
    downloadSave("RBN-v1.0.0-R004_" + String(nowTime) + ".txt",save);
}

function import1() {
    document.getElementById("select_file").click();
}

function getSave() {
    save = [LNP.u1,LNP.u2,level1_1.u1,level1_1.u2,level1_2.u1,level1_2.u2,level1_3.u1,level1_3.u2,
            pre_price1_1.u1,pre_price1_1.u2,pre_price1_2.u1,pre_price1_2.u2,pre_price1_3.u1,pre_price1_3.u2,isResearch1_1,isResearch1_2,
            isResearch1_3,isResearch1_4,isResearch1_5,isResearch1_6,isAuto1_1,isAuto1_2,isAuto1_3,MP.u1,
            MP.u2,alphaResetTimes,ME.u1,ME.u2,level2_1.u1,level2_1.u2,level2_2.u1,level2_2.u2,
            level2_3.u1,level2_3.u2,pre_price2_1.u1,pre_price2_1.u2,pre_price2_2.u1,pre_price2_2.u2,pre_price2_3.u1,pre_price2_3.u2,
            isResearch2_1,isResearch2_2,isResearch2_3,isResearch2_4,isResearch2_5,isResearch2_6,isResearch2_7,isResearch2_8,
            isResearch2_9,isResearch2_10,isResearch2_11,isResearch2_12,isME1,basic_CME_need.u1,basic_CME_need.u2,CME.u1,
            CME.u2,CME_usable.u1,CME_usable.u2,isResetCME,level2_11.u1,level2_11.u2,level2_12.u1,level2_12.u2,
            level2_13.u1,level2_13.u2,basic_effect2_11.u1,basic_effect2_11.u2,basic_effect2_12.u1,basic_effect2_12.u2,basic_effect2_13.u1,basic_effect2_13.u2,
            pre_price2_11.u1,pre_price2_11.u2,pre_price2_12.u1,pre_price2_12.u2,pre_price2_13.u1,pre_price2_13.u2,isAchievement1_1,isAchievement1_2,
            isAchievement1_3,isAchievement1_4,isAchievement1_5,isAchievement1_6,isAchievement1_7,isAchievement1_8,isAchievement1_9,isAchievement1_10,
            isChallengeRunning1,isChallengeFinish1_1,isChallengeFinish1_2,isChallengeFinish1_3,isChallengeFinish1_4,isChallengeFinish1_5,isChallengeFinish1_6,effect2_21.u1,
            effect2_21.u2,isAuto2_1,isAuto2_2,isAuto2_3,isAuto2_4,isAuto2_5.u1,isAuto2_5.u2,startPlayTime,
            max_LNP.u1,max_LNP.u2,all_LNP.u1,all_LNP.u2,max_level1_all.u1,max_level1_all.u2,max_MP.u1,max_MP.u2,
            all_MP.u1,all_MP.u2,max_level2_all.u1,max_level2_all.u2,max_ME.u1,max_ME.u2,all_ME.u1,all_ME.u2,
            max_CME.u1,max_CME.u2,isAchievement2_1,isAchievement2_2,isAchievement2_3,isAchievement2_4,isAchievement2_5,isAchievement2_6,
            isAchievement2_7,isAchievement2_8,isAchievement2_9,isAchievement2_10]
    save = btoa(save)
}

function useSave() {
    save = atob(save).split(",")
    var i = 0
    while (i < save.length) {
        save[i] = Number(save[i])
        i++
    }
    LNP.u1 = save[0]
    LNP.u2 = save[1]
    level1_1.u1 = save[2]
    level1_1.u2 = save[3]
    level1_2.u1 = save[4]
    level1_2.u2 = save[5]
    level1_3.u1 = save[6]
    level1_3.u2 = save[7]
    pre_price1_1.u1 = save[8]
    pre_price1_1.u2 = save[9]
    pre_price1_2.u1 = save[10]
    pre_price1_2.u2 = save[11]
    pre_price1_3.u1 = save[12]
    pre_price1_3.u2 = save[13]
    isResearch1_1 = save[14]
    isResearch1_2 = save[15]
    isResearch1_3 = save[16]
    isResearch1_4 = save[17]
    isResearch1_5 = save[18]
    isResearch1_6 = save[19]
    isAuto1_1 = save[20]
    isAuto1_2 = save[21]
    isAuto1_3 = save[22]
    MP.u1 = save[23]
    MP.u2 = save[24]
    alphaResetTimes = save[25]
    ME.u1 = save[26]
    ME.u2 = save[27]
    level2_1.u1 = save[28]
    level2_1.u2 = save[29]
    level2_2.u1 = save[30]
    level2_2.u2 = save[31]
    level2_3.u1 = save[32]
    level2_3.u2 = save[33]
    pre_price2_1.u1 = save[34]
    pre_price2_1.u2 = save[35]
    pre_price2_2.u1 = save[36]
    pre_price2_2.u2 = save[37]
    pre_price2_3.u1 = save[38]
    pre_price2_3.u2 = save[39]
    isResearch2_1 = save[40]
    isResearch2_2 = save[41]
    isResearch2_3 = save[42]
    isResearch2_4 = save[43]
    isResearch2_5 = save[44]
    isResearch2_6 = save[45]
    isResearch2_7 = save[46]
    isResearch2_8 = save[47]
    isResearch2_9 = save[48]
    isResearch2_10 = save[49]
    isResearch2_11 = save[50]
    isResearch2_12 = save[51]
    isME1 = save[52]
    basic_CME_need.u1 = save[53]
    basic_CME_need.u2 = save[54]
    CME.u1 = save[55]
    CME.u2 = save[56]
    CME_usable.u1 = save[57]
    CME_usable.u2 = save[58]
    isResetCME = save[59]
    level2_11.u1 = save[60]
    level2_11.u2 = save[61]
    level2_12.u1 = save[62]
    level2_12.u2 = save[63]
    level2_13.u1 = save[64]
    level2_13.u2 = save[65]
    basic_effect2_11.u1 = save[66]
    basic_effect2_11.u2 = save[67]
    basic_effect2_12.u1 = save[68]
    basic_effect2_12.u2 = save[69]
    basic_effect2_13.u1 = save[70]
    basic_effect2_13.u2 = save[71]
    pre_price2_11.u1 = save[72]
    pre_price2_11.u2 = save[73]
    pre_price2_12.u1 = save[74]
    pre_price2_12.u2 = save[75]
    pre_price2_13.u1 = save[76]
    pre_price2_13.u2 = save[77]
    isAchievement1_1 = save[78]
    isAchievement1_2 = save[79]
    isAchievement1_3 = save[80]
    isAchievement1_4 = save[81]
    isAchievement1_5 = save[82]
    isAchievement1_6 = save[83]
    isAchievement1_7 = save[84]
    isAchievement1_8 = save[85]
    isAchievement1_9 = save[86]
    isAchievement1_10 = save[87]
    isChallengeRunning1 = save[88]
    isChallengeFinish1_1 = save[89]
    isChallengeFinish1_2 = save[90]
    isChallengeFinish1_3 = save[91]
    isChallengeFinish1_4 = save[92]
    isChallengeFinish1_5 = save[93]
    isChallengeFinish1_6 = save[94]
    effect2_21.u1 = save[95]
    effect2_21.u2 = save[96]
    isAuto2_1 = save[97]
    isAuto2_2 = save[98]
    isAuto2_3 = save[99]
    isAuto2_4 = save[100]
    isAuto2_5.u1 = save[101]
    isAuto2_5.u2 = save[102]
    startPlayTime = save[103]
    max_LNP.u1 = save[104]
    max_LNP.u2 = save[105]
    all_LNP.u1 = save[106]
    all_LNP.u2 = save[107]
    max_level1_all.u1 = save[108]
    max_level1_all.u2 = save[109]
    max_MP.u1 = save[110]
    max_MP.u2 = save[111]
    all_MP.u1 = save[112]
    all_MP.u2 = save[113]
    max_level2_all.u1 = save[114]
    max_level2_all.u2 = save[115]
    max_ME.u1 = save[116]
    max_ME.u2 = save[117]
    all_ME.u1 = save[118]
    all_ME.u2 = save[119]
    max_CME.u1 = save[120]
    max_CME.u2 = save[121]
    isAchievement2_1 = save[122]
    isAchievement2_2 = save[123]
    isAchievement2_3 = save[124]
    isAchievement2_4 = save[125]
    isAchievement2_5 = save[126]
    isAchievement2_6 = save[127]
    isAchievement2_7 = save[128]
    isAchievement2_8 = save[129]
    isAchievement2_9 = save[130]
    isAchievement2_10 = save[131]
    document.getElementById("input1").value = isAuto2_5.u1
    document.getElementById("input2").value = isAuto2_5.u2
    var j = 0
    while (j < setting.length) {
        setting[j] = Number(setting[j])
        j++
    }
    isAutoSave = setting[0]
}

function save1() {
    getSave();
    window.localStorage.setItem("RBNsave1",JSON.stringify(save));
}

function autoSave() {
    if (isAutoSave == 1) {
        isAutoSave = 0
    }
    else {
        isAutoSave = 1
    }
}