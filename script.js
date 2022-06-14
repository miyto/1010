let pieces = [];
let board;
let sel;

function setup() {
    createCanvas(600, 600);
    pieces.push(new Piece(0, 450, 450));
    pieces.push(new Piece(16, 400, 400));
    //console.log(pieces[0].id);
    board = new Board();
    //pieces[0].selected = true;
    sel = pieces[0];
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
