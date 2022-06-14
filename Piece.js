class Piece {
    constructor(id, x, y) {
        this.spawnX = x;
        this.spawnY = y;
        this.x = x;
        this.xOff, this.yOff;
        this.y = y;
        this.id = id;
        this.selected = false;
        this.sqs = [];
        this.w, this.h;
        this.placed = false;
        this.color; 
        // ID KEY
        // MARK TOP LEFT CORNER
        // this is the dumbest thing i have ever done. wait nvm.
        // ,0: 2x2 ┘
        // ,1: 2x2 ┎
        // ,2: 2x2 L
        // ,3: 2x2 ┐
        //
        // ,4: 3x3 ┘ **************
        // ,5: 3x3 ┎
        // ,6: 3x3 L
        // ,7: 3x3 ┐
        //
        // ,8: single 123 136 193
        // ,9: 2vert 255 198 62
        // ,10: 2hz
        // ,11: 3vert 235 148 73
        // ,12: 3hz
        // ,13: 4vert 231 107 132
        // ,14: 4hz
        // ,15: 5vert 221 102 85
        // ,16: 5hz
        //
        // ,17: 2x2 151 219 85
        // 18: 3x3 77 213 176
        if (this.id == 0) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y]); this.w = 60; this.h = 60; this.color = color(89, 203, 135); }
        if (this.id == 1) { this.sqs.push([this.x+30, this.y+30]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y]); this.w = 60; this.h = 60; this.color = color(89, 203, 135); }
        if (this.id == 2) { this.sqs.push([this.x,this.y]); this.sqs.push([this.x,this.y+30]); this.sqs.push([this.x+30,this.y+30]); this.w = 60; this.h = 60; this.color = color(89, 203, 135); }
        if (this.id == 3) { this.sqs.push([this.x,this.y]); this.sqs.push([this.x+30,this.y]); this.sqs.push([this.x+30,this.y+30]); this.w = 60; this.h = 60; this.color = color(89, 203, 135); }
        if (this.id == 4) { this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); this.w = 90; this.h = 90; this.color = color(92, 189, 228);}
        if (this.id == 5) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.w = 90; this.h = 90; this.color = color(92, 189, 228);}
        if (this.id == 6) { this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y+60]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y]); this.w = 90; this.h = 90; this.color = color(92, 189, 228);}
        if (this.id == 7) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); this.w = 90; this.h = 90; this.color = color(92, 189, 228);}
        if (this.id == 8) { this.sqs.push([this.x, this.y]); this.w = 30; this.h = 30; this.color = color(123, 136, 193); }
        if (this.id == 9) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.w = 30; this.h = 60; this.color = color(255, 198, 62); }
        if (this.id == 10) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.w = 60; this.h = 30; this.color = color(255, 198, 62); }
        if (this.id == 11) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.w = 30; this.h = 90; this.color = color(235, 148, 73); }
        if (this.id == 12) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.w = 90; this.h = 30; this.color = color(235, 148, 73); }
        if (this.id == 13) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x, this.y+90]); this.w = 30; this.h = 120; this.color = color(231, 107, 132); }
        if (this.id == 14) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+90, this.y]); this.w = 120; this.h = 30; this.color = color(231, 107, 132); }
        if (this.id == 15) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x, this.y+90]); this.sqs.push([this.x, this.y+120]); this.w = 30; this.h = 150; this.color = color(221, 102, 85); }
        if (this.id == 16) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+90, this.y]); this.sqs.push([this.x+120, this.y]); this.w = 150; this.h = 30; this.color = color(221, 102, 85); }
        if (this.id == 17) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y+30]); this.w = 60; this.h = 60; this.color = color(151, 219, 85); }
        if (this.id == 18) { this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); this.w = 90; this.h = 90; this.color = color(77, 213, 176); }
    }

    reinput() {
        if (this.id == 0) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y]); }
        if (this.id == 1) { this.sqs = null; this.sqs = []; this.sqs.push([this.x+30, this.y+30]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y]);}
        if (this.id == 2) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y+30]);}
        if (this.id == 3) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+30, this.y+30]);}
        if (this.id == 4) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); }
        if (this.id == 5) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); }
        if (this.id == 6) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y+60]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y]); }
        if (this.id == 7) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); }
        if (this.id == 8) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]) ;}
        if (this.id == 9) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); }
        if (this.id == 10) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); }
        if (this.id == 11) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]);}
        if (this.id == 12) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]);}
        if (this.id == 13) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x, this.y+90]);}
        if (this.id == 14) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+90, this.y]);}
        if (this.id == 15) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x, this.y+90]); this.sqs.push([this.x, this.y+120]);}
        if (this.id == 16) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+90, this.y]); this.sqs.push([this.x+120, this.y]);}
        if (this.id == 17) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y+30]); }
        if (this.id == 18) { this.sqs = null; this.sqs = []; this.sqs.push([this.x, this.y]); this.sqs.push([this.x+30, this.y]); this.sqs.push([this.x, this.y+30]); this.sqs.push([this.x+30, this.y+30]); this.sqs.push([this.x, this.y+60]); this.sqs.push([this.x+30, this.y+60]); this.sqs.push([this.x+60, this.y]); this.sqs.push([this.x+60, this.y+30]); this.sqs.push([this.x+60, this.y+60]); }


    }


    draw() {
       // ellipse(this.x, this.y, 5, 5);
       if (!this.placed) {
           fill(this.color); noStroke(); for (var i=0; i<this.sqs.length; i++) {drawSq(this.sqs[i][0], this.sqs[i][1]);}
       }        
       this.move();
    }

    move() {
        if (!this.placed && this.selected && this.inRange()) {
            //console.log(this.xOff);
            //console.log(this.x);
            this.x = mouseX - this.xOff;
            this.y = mouseY - this.yOff;
            this.reinput();
        } else if (!this.placed && this.selected && !this.inRange()) {
            //console.log(this.x + ", " + this.y);
            if (this.x <= 0) {this.x = 1;}
            if (this.y <= 0) {this.y = 1;}
            if (this.x >= width-this.w) {this.x = width-this.w-1;}
            if (this.y >= height-this.h) {this.y = height-this.h-1;}
            this.reinput();
            this.mouseReleased();
        }
    }

    inRange() {
        //console.log(":");
        /*if (this.id == 0) {*/return (this.x > 0 & this.y > 0 && this.x<width-this.w && this.y<height-this.h);//}
    
    }

    mousePressed() {
        this.xOff = mouseX - this.x;
        this.yOff = mouseY - this.y;
        //console.log(this.xOff + ", " + this.yOff);
    }

    nOverlap() {
        var x = round((this.x - 50)/30)*30 + 50;
        var y = round((this.y - 50)/30)*30 + 50;
        var r = round((y - 50)/30);
        var c = round((x - 50)/30);
        if (this.id == 0) { return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r][c+1];}
        if (this.id == 1) {return !board.bools[r+1][c+1] && !board.bools[r+1][c] && !board.bools[r][c+1];} 
        if (this.id == 2) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r+1][c+1];}
        if (this.id == 3) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r+1][c+1];}
        if (this.id == 4) {return !board.bools[r+2][c] && !board.bools[r+2][c+1] && !board.bools[r][c+2] && !board.bools[r+1][c+2] && !board.bools[r+2][c+2]; }
        if (this.id == 5) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r][c+2] && !board.bools[r+1][c] && !board.bools[r+2][c]; }
        if (this.id == 6) {return !board.bools[r+2][c] && !board.bools[r+2][c+1] && !board.bools[r+2][c+2] && !board.bools[r+1][c] && !board.bools[r][c]; }
        if (this.id == 7) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r][c+2] && !board.bools[r+1][c+2] && !board.bools[r+2][c+2]; }
        if (this.id == 8) {return !board.bools[r][c];}
        if (this.id == 9) {return !board.bools[r][c] && !board.bools[r+1][c];}
        if (this.id == 10) {return !board.bools[r][c] && !board.bools[r][c+1];}
        if (this.id == 11) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r+2][c];}
        if (this.id == 12) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r][c+2];}
        if (this.id == 13) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r+2][c] && !board.bools[r+3][c];}
        if (this.id == 14) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r][c+2] && !board.bools[r][c+3];}
        if (this.id == 15) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r+2][c] && !board.bools[r+3][c] && !board.bools[r+4][c];}
        if (this.id == 16) {return !board.bools[r][c] && !board.bools[r][c+1] && !board.bools[r][c+2] && !board.bools[r][c+3] && !board.bools[r][c+4];}
        if (this.id == 17) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r][c+1] && !board.bools[r+1][c+1]; }
        if (this.id == 18) {return !board.bools[r][c] && !board.bools[r+1][c] && !board.bools[r][c+1] && !board.bools[r+1][c+1] && !board.bools[r+2][c] && !board.bools[r+2][c+1] && !board.bools[r][c+2] && !board.bools[r+1][c+2] && !board.bools[r+2][c+2]; }

    }


    mouseReleased() {
       this.selected = false;
       //console.log(this.x + "," + this.y);
       if (!this.placed && this.x >= 40 && this.x <= 360-this.w && this.y >= 40 && this.y <= 360-this.h && this.nOverlap()) {
           this.x = round((this.x - 50)/30)*30 + 50;
           this.y = round((this.y - 50)/30)*30 + 50;
           var r = round((this.y - 50)/30);
           var c = round((this.x - 50)/30);
           this.reinput();
           //did you know?? r and c are NO LONGER swapped.
           if (this.id == 0) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true;}
           if (this.id == 1) {board.colors[r+1][c+1] = this.color; board.bools[r+1][c+1] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true;}
           if (this.id == 2) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r+1][c+1] = this.color; board.bools[r+1][c+1] = true;}
           if (this.id == 3) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r+1][c+1] = this.color; board.bools[r+1][c+1] = true;}
           if (this.id == 4) {board.colors[r+2][c] = this.color; board.bools[r+2][c] = true; board.colors[r+2][c+1] = this.color; board.bools[r+2][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r+1][c+2] = this.color; board.bools[r+1][c+2] = true; board.colors[r+2][c+2] = this.color; board.bools[r+2][c+2] = true;}
           if (this.id == 5) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r+2][c] = this.color; board.bools[r+2][c] = true;}
           if (this.id == 6) {board.colors[r+2][c] = this.color; board.bools[r+2][c] = true; board.colors[r+2][c+1] = this.color; board.bools[r+2][c+1] = true; board.colors[r+2][c+2] = this.color; board.bools[r+2][c+2] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r][c] = this.color; board.bools[r][c] = true;}
           if (this.id == 7) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r+1][c+2] = this.color; board.bools[r+1][c+2] = true; board.colors[r+2][c+2] = this.color; board.bools[r+2][c+2] = true;}
           if (this.id == 8) {board.colors[r][c] = this.color; board.bools[r][c] = true;}
           if (this.id == 9) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true;}
           if (this.id == 10) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true;}
           if (this.id == 11) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r+2][c] = this.color; board.bools[r+2][c] = true;}
           if (this.id == 12) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true;}
           if (this.id == 13) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r+2][c] = this.color; board.bools[r+2][c] = true; board.colors[r+3][c] = this.color; board.bools[r+3][c] = true;}
           if (this.id == 14) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r][c+3] = this.color; board.bools[r][c+3] = true;}
           if (this.id == 15) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r+2][c] = this.color; board.bools[r+2][c] = true; board.colors[r+3][c] = this.color; board.bools[r+3][c] = true; board.colors[r+4][c] = this.color; board.bools[r+4][c] = true;}
           if (this.id == 16) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r][c+3] = this.color; board.bools[r][c+3] = true; board.colors[r][c+4] = this.color; board.bools[r][c+4] = true;}
           if (this.id == 17) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r+1][c+1] = this.color; board.bools[r+1][c+1] = true;}
           if (this.id == 18) {board.colors[r][c] = this.color; board.bools[r][c] = true; board.colors[r+1][c] = this.color; board.bools[r+1][c] = true; board.colors[r][c+1] = this.color; board.bools[r][c+1] = true; board.colors[r+1][c+1] = this.color; board.bools[r+1][c+1] = true; board.colors[r+2][c] = this.color; board.bools[r+2][c] = true; board.colors[r+2][c+1] = this.color; board.bools[r+2][c+1] = true; board.colors[r][c+2] = this.color; board.bools[r][c+2] = true; board.colors[r+1][c+2] = this.color; board.bools[r+1][c+2] = true; board.colors[r+2][c+2] = this.color; board.bools[r+2][c+2] = true;}
           this.placed = true;
       } else {
           this.x = this.spawnX;
           this.y = this.spawnY;
           this.reinput();
       }
    }

}; 