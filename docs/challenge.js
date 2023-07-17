function challenge1_1() {
    if (isChallengeFinish1_1 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(3);
        }
        else if (isChallengeRunning1 == 1) {
            dialog(9);
        }
    }
}

function challenge1_2() {
    if (isChallengeFinish1_2 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(4);
        }
        else if (isChallengeRunning1 == 2) {
            dialog(9);
        }
    }
}

function challenge1_3() {
    if (isChallengeFinish1_3 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(5);
        }
        else if (isChallengeRunning1 == 3) {
            dialog(9);
        }
    }
}

function challenge1_4() {
    if (isChallengeFinish1_4 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(6);
        }
        else if (isChallengeRunning1 == 4) {
            dialog(9);
        }
    }
}

function challenge1_5() {
    if (isChallengeFinish1_5 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(7);
        }
        else if (isChallengeRunning1 == 5) {
            dialog(9);
        }
    }
}

function challenge1_6() {
    if (isChallengeFinish1_6 == 0) {
        if (isChallengeRunning1 == 0) {
            dialog(8);
        }
        else if (isChallengeRunning1 == 6) {
            dialog(9);
        }
    }
}

function dialog_confirm3() {
    alphaReset();
    isChallengeRunning1 = 1
    dialog_cancel();
}

function dialog_confirm4() {
    alphaReset();
    isChallengeRunning1 = 2
    dialog_cancel();
}

function dialog_confirm5() {
    alphaReset();
    isChallengeRunning1 = 3
    dialog_cancel();
}

function dialog_confirm6() {
    alphaReset();
    isChallengeRunning1 = 4
    dialog_cancel();
}

function dialog_confirm7() {
    alphaReset();
    isChallengeRunning1 = 5
    dialog_cancel();
}

function dialog_confirm8() {
    alphaReset();
    isChallengeRunning1 = 6
    dialog_cancel();
}

function dialog_confirm9() {
    alphaReset();
    isChallengeRunning1 = 0
    dialog_cancel();
}

function challenge1() {
    if (isChallengeRunning1 == 1 && LNP.compare(1,10)) {
        dialog_confirm9();
        isChallengeFinish1_1 = 1
    }
    if (isChallengeRunning1 == 2 && LNP.compare(1,10)) {
        dialog_confirm9();
        isChallengeFinish1_2 = 1
    }
    if (isChallengeRunning1 == 3 && LNP.compare(1,12)) {
        dialog_confirm9();
        isChallengeFinish1_3 = 1
    }
    if (isChallengeRunning1 == 4 && LNP.compare(1,8)) {
        dialog_confirm9();
        isChallengeFinish1_4 = 1
    }
    if (isChallengeRunning1 == 5 && LNP.compare(1,15)) {
        dialog_confirm9();
        isChallengeFinish1_5 = 1
    }
    if (isChallengeRunning1 == 6 && LNP.compare(3,14)) {
        dialog_confirm9();
        isChallengeFinish1_6 = 1
        CME_usable.add(CME.u1,CME.u2);
        CME_usable.add(CME.u1,CME.u2);
        CME_usable.add(CME.u1,CME.u2);
        CME.multiply(4,0);
    }
}