class Board {
    constructor() {
        this.grid = [];
        this.colors = [];
        this.bools = [];
        for (var i=0; i<10; i++) {
            let tempG = [];
            let tempC = [];
            let tempB = [];
            for (var j=0; j<10; j++) {
                tempG.push([i, j]);
                tempC.push(color(227));
                tempB.push(false);
            }
            this.grid.push(tempG);
            this.colors.push(tempC);
            this.bools.push(tempB);
        }
    }

    draw() {
        //fill(150);
        //rect(50, 50, 300, 300);
        //strokeWeight(5);
        //this.ctstr();
        noStroke();
        this.check();
        for (var i=0; i<10; i++) {
            for (var j=0; j<10; j++) {
                //console.log(this.colors[8][8]);
                fill(this.colors[j][i]);
                drawSq(50+30*i, 50+30*j, 30, 30);
            }
        }

    }

    check() {
        let clearR = [];
        let clearC = [];
        for (var c=0; c<10; c++) {
            var cCtr = 0;
            for (var r=0; r<10; r++) {
                //console.log(this.colors[r][c]);
                if (this.bools[r][c]) {cCtr++;}
            }
            if (cCtr == 10) {clearC.push(c);}
        }
        for (var r=0; r<10; r++) {
            var rCtr = 0;
            for (var c=0; c<10; c++) {
                if (this.bools[r][c]) {rCtr ++;}
            }
            if (rCtr == 10) {clearR.push(r);}
        }
        //console.log(clearC.length);
        for (var c=0; c<clearC.length; c++) {
            for (var r=0; r<10; r++) {
                this.colors[r][clearC[c]] = color(227);
                this.bools[r][clearC[c]] = false;
            }
        }
        for (var r=0; r<clearR.length; r++) {
            //console.log("are yoy called");
            for (var c=0; c<10; c++) {
                this.colors[clearR[r]][c] = color(227);
                this.bools[clearR[r]][c] = false;
                //console.log(this.colors[r][c]);
            }
        }
    }

    ctstr() {
        var ret = [];
        for (var r=0; r<10; r++) {
            for (var c=0; c<10; c++) {
                ret += this.colors + " ";
            }
            ret += "\n";
        }
        console.log(ret);
    }
}