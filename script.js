let pieces = [];
let board;
let sel;

function setup() {
    createCanvas(600, 600);
    pieces.push(new Piece(floor(Math.random()*19), 400, 400));
    pieces.push(new Piece(floor(Math.random()*19), 225, 400));
    pieces.push(new Piece(floor(Math.random()*19), 50, 400));
    repos();
    board = new Board();
}

function repos() {
    for (var i=0; i<3; i++) {
        pieces[i].spawnX = pieces[i].x + (150 - pieces[i].w)/2;
        pieces[i].spawnY = pieces[i].y + (150 - pieces[i].h)/2;
        pieces[i].x = pieces[i].spawnX;
        pieces[i].y = pieces[i].spawnY;
        pieces[i].reinput();
    }
}
function draw() {
    background(255);
    fill(100);
    rect(400, 400, 150, 150);
    rect(225, 400, 150, 150);
    rect(50, 400, 150, 150);
    board.draw();
    for (var i=0; i<pieces.length; i++) {
        pieces[i].draw();
    }
    if (pieces[0].placed && pieces[1].placed && pieces[2].placed) {
        pieces = null; pieces = [];
        pieces.push(new Piece(floor(Math.random()*19), 400, 400));
        pieces.push(new Piece(floor(Math.random()*19), 225, 400));
        pieces.push(new Piece(floor(Math.random()*19), 50, 400));
        repos();
    }
}

function mousePressed() {
   var set;
   for (var i=0; i<pieces.length; i++) {
       for (var j=0; j<pieces[i].sqs.length; j++) {
           if (mouseX > pieces[i].sqs[j][0] && mouseX < pieces[i].sqs[j][0]+30 && mouseY > pieces[i].sqs[j][1] && mouseY < pieces[i].sqs[j][1] + 30) { /*console.log("here");*/ set = pieces[i];}
       }
   }
   if (set) { sel = set; sel.selected = true; sel.mousePressed();}
   //console.log(sel.x);
}

function mouseReleased() {
    sel.mouseReleased();
}

function drawSq(x, y) {rect(x+2, y+2, 26, 26, 4);}
