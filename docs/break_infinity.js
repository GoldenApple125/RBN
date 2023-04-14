//created by 静火Ω
function Amount(u1,u2,show) {
    this.u1 = u1;
    this.u2 = u2;
    this.show = show;
    this.change = function(v1,v2) {
        this.u1 = v1;
        this.u2 = v2;
    }
    this.add = function(v1,v2) {
        if (Math.abs(this.u2 - v2) <= 25) {
            this.u1 *= 10 ** (this.u2 - v2)
            this.u1 += v1
            this.u1 /= 10 ** (this.u2 - v2)
            this.improve();
        }
        else if (v2 > this.u2) {
            this.u1 = v1
            this.u2 = v2
        }
    }
    this.multiply = function(v1,v2) {
        this.u1 *= v1;
        this.u2 += v2;
        this.improve();
    }
    this.power = function(v1,v2) {
        if (this.u1 != 0) {
            var u3 = Math.LOG10E * Math.log(this.u1) + this.u2
            this.u1 = 1
            this.u2 = u3 * v1 * 10 ** v2
            if (!Number.isInteger(this.u2)) {
                this.u1 *= 10 ** (this.u2 - Math.floor(this.u2))
                this.u2 = Math.floor(this.u2)
            }
        }
        this.improve();
    }
    this.multiplyRepeat = function(v1,v2,v3,v4) {
        if (v1 != 0) {
            var u3 = Math.LOG10E * Math.log(v1) + v2
            v1 = 1
            v2 = u3 * v3 * 10 ** v4
            if (!Number.isInteger(v2)) {
                v1 *= 10 ** (v2 - Math.floor(v2))
                v2 = Math.floor(v2)
            }
        }
        this.multiply(v1,v2);
    }
    this.log = function(v1) {
        u3 = Math.LOG10E * Math.log((Math.LOG10E * Math.log(this.u1) + this.u2)) - Math.LOG10E * Math.log((Math.LOG10E * Math.log(v1)))
        this.u2 = Math.floor(u3)
        this.u1 = 10 ** (u3 - this.u2)
        this.improve();
    }
    this.compare = function(v1,v2) {
        if (this.u2 > v2) {
            return true;
        }
        else if (this.u2 == v2 && this.u1 >= v1) {
            return true;
        }
        else {
            return false;
        }
    }
    this.improve = function() {
        while (Math.abs(this.u1) >= 10) {
            this.u1 /= 10
            this.u2++
        }
        while (Math.abs(this.u1) > 0 && Math.abs(this.u1) < 1) {
            this.u1 *= 10
            this.u2--
        }
        if (this.u1 == 0) {
            this.u2 = 0
        }
    }
    this.int = function() {
        if (this.u2 <= 100) {
            if (Number(this.u1.toFixed(this.u2)) != this.u1) {
                this.u1 = Number(this.u1.toFixed(this.u2))
            } 
        }
        this.improve();
    }
    this.floor = function() {
        if (this.u2 <= 100) {
            if (Number(this.u1.toFixed(this.u2)) != this.u1) {
                this.u1 = Number(Math.floor(this.u1 * 10 ** this.u2)) / 10 ** this.u2
            }
        }
        this.improve();
    }
    this.show = function(v1,v2) {
        if (this.u2 < -2) {
            showText = this.u1.toFixed(2) + "e" + this.u2
        }
        else if (this.u2 >= -2 && this.u2 < v1) {
            showText = (this.u1 * 10 ** this.u2).toFixed(v2)
        }
        else if (this.u2 >= v1 && this.u2 < 6) {
            showText = (this.u1 * 10 ** this.u2).toFixed(0)
        }
        else if (this.u2 >= 6 && this.u2 < 1e6) {
            showText = this.u1.toFixed(2) + "e" + this.u2
            if (this.u1.toFixed(2) == 10) {
                showText = "1.00e" + (this.u2 + 1)
            }
        }
        else if (this.u2 >= 1e6 && this.u2 != Infinity){
            var u3 = Math.floor((Math.LOG10E * Math.log(this.u2)).toPrecision(11))
            showText = "e" + (this.u2 / (10 ** u3)).toFixed(2) + "e" + u3
        }
        else {
            showText = "Infinity"
        }
        document.getElementById(show).innerHTML = showText;
        return showText;
    }
}