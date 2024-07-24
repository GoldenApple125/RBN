var save;
var autoSave;
var saveFile;

function resetSave() {
    save = {
        version: "1.0.0-alpha.1",
        firstTime: new Date(),
        latesetTime: new Date(),
        gameTime: 0,
        gameTime_1: new Amount(0,0),
        fps: new Amount(4,1),
        isAutoSave: 1,
        LNP: new Amount(1,1,"LNP"),
        gainLNP: new Amount(0,0),
        gainLNP_1: new Amount(0,0,"gainLNP"),
        maxLNP: new Amount(1,1,"maxLNP"),
        allLNP: new Amount(1,1,"allLNP"),
        upgradePrice1_1: new Amount(1,1,"upgradePrice1_1"),
        upgradeLevel1_1: new Amount(0,0,"upgradeLevel1_1"),
        upgradeLevel1_1_int10: new Amount(0,0),
        upgradeBasic1_1: new Amount(1,0,"upgradeBasic1_1"),
        upgradeEffect1_1: new Amount(0,0,"upgradeEffect1_1"),
        upgradePrice1_2: new Amount(1,2,"upgradePrice1_2"),
        upgradeLevel1_2: new Amount(0,0,"upgradeLevel1_2"),
        upgradeLevel1_2_int10: new Amount(0,0),
        upgradeBasic1_2: new Amount(1,2,"upgradeBasic1_2"),
        upgradeEffect1_2: new Amount(0,0,"upgradeEffect1_2"),
        upgradePrice1_3: new Amount(1,3,"upgradePrice1_3"),
        upgradeLevel1_3: new Amount(0,0,"upgradeLevel1_3"),
        upgradeFreeLevel1_3: new Amount(0,0,"upgradeFreeLevel1_3"),
        upgradeBasic1_3: new Amount(1.1,0,"upgradeBasic1_3"),
        upgradeEffect1_3: new Amount(1,0,"upgradeEffect1_3"),
        upgradeLevel1_all: new Amount(0,0),
        maxUpgradeLevel1_all: new Amount(0,0,"maxUpgradeLevel1_all"),
        researchPrice1: [new Amount(1,3),new Amount(5,4),new Amount(3,5),new Amount(1,6),new Amount(5,9),new Amount(1,12),
                        new Amount(1,13),new Amount(4,15),new Amount(2,18),new Amount(1,20),new Amount(2,22),new Amount(1,30)],
        research1: [0,0,0,0,0,0,0,0,0,0,0,0],
        research1_all: new Amount(0,0),
        researchEffect1_1: new Amount(2,0,"researchEffect1_1"),
        researchEffect1_2: new Amount(1,1,"researchEffect1_2"),
        researchEffect1_4: new Amount(1,0,"researchEffect1_4"),
        researchEffect1_5: new Amount(1,0,"researchEffect1_5"),
        researchEffect1_7: new Amount(1,0,"researchEffect1_7"),
        researchEffect1_8: new Amount(1,0,"researchEffect1_8"),
        autoBuyerUnlock1: [0,0,0,0,0,0,0],
        autoBuyerOpen1: [1,1,1,1,1,1],
        basicTheory: new Amount(0,0,"basicTheory"),
        basicResearchPrice: new Amount(1,10,"basicResearchPrice"),
        basicResearchLevel: new Amount(0,0),
        basicResearchEffect: new Amount(1,0,"basicResearchEffect"),
        basicApplication: new Amount(0,0,"basicApplication"),
        maxBasicApplication: new Amount(0,0,"maxBasicApplication"),
        basicApplicationPrice: new Amount(1,0,"basicApplicationPrice"),
        basicApplicationBasic: [new Amount(1,25,"applicationBasic1"),new Amount(1,20,"applicationBasic2"),new Amount(5,1,"applicationBasic3"),
                                new Amount(1.5,1,"applicationBasic4"),new Amount(2.5,1,"applicationBasic5"),new Amount(5,0,"applicationBasic6"),
                                new Amount(1,-1,"applicationBasic7"),new Amount(1,1,"applicationBasic8"),new Amount(2.5,-1,"applicationBasic9"),
                                new Amount(2,-1,"applicationBasic10")],
        basicApplicationEffect: [new Amount(0,0,"applicationEffect1"),new Amount(0,0,"applicationEffect2"),new Amount(0,0,"applicationEffect3"),
                                new Amount(1,0,"applicationEffect4"),new Amount(1,0,"applicationEffect5"),new Amount(0,0,"applicationEffect6"),
                                new Amount(0,0,"applicationEffect7"),new Amount(0,0,"applicationEffect8"),new Amount(0,0,"applicationEffect9"),
                                new Amount(0,0,"applicationEffect10")],
        basicMilestonePrice: [new Amount(5,0),new Amount(1,1),new Amount(2,1),new Amount(5,1),new Amount(1,2),new Amount(1,3)],
        basicMilestone: [0,0,0,0,0,0],
        achievement1: [0,0,0,0,0,0,0,0,0,0],
        achievementCount: new Amount(0,0,"achievementCount"),
        AP: new Amount(0,0,"AP"),
        APPecent: new Amount(0,0,"APPecent"),
        APEffect: new Amount(1,0,"APEffect"),
        UP: new Amount(0,0,"UP"),
        UPPecent: new Amount(0,0,"UPPecent"),
        UPEffect: new Amount(1,0,"UPEffect"),
        isUPEffect: 1
    };
}

function loadSave() {
    resetSave();
    useSave(localStorage["RBN_1.0.0_save1"]);
    changeAutoSave();
    changeAutoSave();
    document.getElementById("firstTime").innerText = date(save.firstTime);
    menu("1_1");
    document.getElementById("select_file").addEventListener("change", (e) => {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0],"utf-8");
        reader.onload = function(e) {
            saveFile = e.target.result
            useSave(saveFile);
            var file = document.getElementById("select_file");
            file.value = "";
        };
    },false);
}

function useSave(saveFrom) {
    if (saveFrom != undefined && saveFrom != null) {
        var ifError = 0;
        try {
            checkSave(saveFrom);
        }
        catch(error) {
            document.getElementById("errorText").innerText = error;
            showDialog(2);
            ifError = 1;
        }
        finally {
            if (ifError == 0) {
                checkSave(saveFrom);
            }
        }
    }
}

function checkSave(x) {
    var save1 = JSON.parse(atob(x));
    for (const x in save1) {
        if (save1[x].u1 != undefined) {
            save[x].change(save1[x].u1,save1[x].u2);
        }
        else {
            save[x] = save1[x];
        }
    }
    var i = 0;
    while (i < 12) {
        save.researchPrice1[i] = new Amount(save1.researchPrice1[i].u1,save1.researchPrice1[i].u2);
        i++;
    }
    var i = 0;
    while (i < 10) {
        save.basicApplicationEffect[i] = new Amount(save1.basicApplicationEffect[i].u1,save1.basicApplicationEffect[i].u2,"applicationEffect" + String(i + 1));
        i++;
    }
    var i = 0;
    while (i < 10) {
        save.basicApplicationBasic[i] = new Amount(save1.basicApplicationBasic[i].u1,save1.basicApplicationBasic[i].u2,"applicationBasic" + String(i + 1));
        i++;
    }
    var i = 0;
    while (i < 6) {
        save.basicMilestonePrice[i] = new Amount(save1.basicMilestonePrice[i].u1,save1.basicMilestonePrice[i].u2);
        i++;
    }
    save.firstTime = new Date(save.firstTime);
    save.latesetTime = new Date(save.latesetTime);
}

function clearSave() {
    resetSave();
    changeAutoSave();
    changeAutoSave();
    document.getElementById("firstTime").innerText = date(save.firstTime);
    saveGame();
}

function saveGame() {
    var save1 = btoa(JSON.stringify(save));
    window.localStorage.setItem("RBN_1.0.0_save1",save1);
}

function changeAutoSave() {
    if (save.isAutoSave == 0) {
        document.getElementById("autoSaveText").innerText = "自动保存已开启";
        save.isAutoSave = 1;
        autoSave = setInterval(function() {
            saveGame();
        },5000);
        saveGame();
    }
    else {
        document.getElementById("autoSaveText").innerText = "自动保存已关闭";
        save.isAutoSave = 0;
        clearInterval(autoSave);
    }
}

function downloadSave(saveName,saveText) {
    let a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + saveText
    a.download = saveName
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function exportSave() {
    var saveText = btoa(JSON.stringify(save));
    downloadSave("RBN_1.0.0_" + allTime(new Date()) + ".txt",saveText);
}

function importSave() {
    document.getElementById("select_file").click();
}