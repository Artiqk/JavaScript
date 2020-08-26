let width = 600;
let height = 600;

let widthM = width / 3;
let heightM = height / 3;

let matrix = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
];

let player = 'X';

function drawBoard() {

  line(widthM, 0, width / 3, height);
  line(widthM * 2, 0, widthM * 2, height);

  line(0, heightM, width, heightM);
  line(0, heightM * 2, width, heightM * 2);

  stroke(0);
  strokeWeight(3);
}

function mouseBoard() {
  if ((mouseX >= 0 && mouseY >= 0) && (mouseX < widthM && mouseY < heightM)) {
    return 1;
  } else if ((mouseX >= widthM && mouseY > 0) && (mouseX < (widthM * 2)) && mouseY < heightM) {
    return 2;
  } else if ((mouseX >= widthM * 2 && mouseY >= 0) && (mouseX < width && mouseY < heightM)) {
    return 3;
  } else if ((mouseX >= 0 && mouseY >= heightM) && (mouseX < widthM && mouseY < heightM * 2)) {
    return 4;
  } else if ((mouseX >= widthM && mouseY >= heightM) && (mouseX < widthM * 2 && mouseY < heightM * 2)) {
    return 5;
  } else if ((mouseX >= widthM * 2 && mouseY >= heightM) && (mouseX < width && mouseY < heightM * 2)) {
    return 6;
  } else if ((mouseX >= 0 && mouseY >= heightM * 2) && (mouseX < widthM && mouseY < height)) {
    return 7;
  } else if ((mouseX >= widthM && mouseY >= heightM * 2) && (mouseX < widthM * 2 && mouseY < height)) {
    return 8;
  } else if ((mouseX >= widthM * 2 && mouseY >= heightM * 2) && (mouseX < width && mouseY < height)) {
    return 9;
  } else {
    return 0;
  }
}

function togglePlayer() {
  if (player == 'X') {
    player = 'O'
  } else if (player == 'O') {
    player = 'X';
  }
}

function setMarker(i, j) {
  if (matrix[i][j] == 'X' || matrix[i][j] == 'O') {
    return true;
  } else {
    return false;
  }
}

function createCross(i, j){
  if(i == 0 && j == 0){
    line(0, 0, widthM, heightM);
    line(widthM, 0, 0, heightM);
  }else if(i == 0 && j == 1){
    line(widthM, 0, widthM * 2, heightM);
    line(widthM *2, 0, widthM, heightM);
  }else if(i == 0 && j == 2){
    line(widthM * 2, 0, width, heightM);
    line(width, 0, widthM * 2, heightM);
  }else if(i == 1 && j == 0){
    line(0, heightM, widthM, heightM * 2);
    line(widthM, heightM, 0, heightM * 2);
  }else if(i == 1 && j == 1){
    line(widthM, heightM, widthM * 2, heightM * 2);
    line(widthM * 2, heightM, widthM, heightM * 2);
  }else if(i == 1 && j == 2){
    line(widthM * 2, heightM, width, heightM * 2);
    line(width, heightM, widthM * 2, heightM * 2);
  }else if(i == 2 && j == 0){
    line(0, heightM * 2, widthM, height);
    line(widthM, heightM * 2, 0, height);
  }else if(i == 2 && j == 1){
    line(widthM, heightM * 2, widthM * 2, height);
    line(widthM * 2, heightM * 2, widthM, height);
  }else if(i == 2 && j == 2){
    line(widthM * 2, heightM * 2, width, height);
    line(width, heightM * 2, widthM * 2, height);
  }
}

function createCircle(i, j){
  if(i == 0 && j == 0){
    circle(100, 100, 175);
  }else if(i == 0 && j == 1){
    circle(300, 100, 175);
  }else if(i == 0 && j == 2){
    circle(500, 100, 175);
  }else if(i == 1 && j == 0){
    circle(100, 300, 175);
  }else if(i == 1 && j == 1){
    circle(300, 300, 175);
  }else if(i == 1 && j == 2){
    circle(500, 300, 175);
  }else if(i == 2 && j == 0){
    circle(100, 500, 175);
  }else if(i == 2 && j == 1){
    circle(300, 500, 175);
  }else if(i == 2 && j == 2){
    circle(500, 500, 175);
  }
}

function drawSigns(){
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if(matrix[i][j] == 'X'){
        createCross(i, j);
      }else if(matrix[i][j] == 'O'){
        createCircle(i, j);
      }
    }
  }
}

function mousePressed() {

  var goodMove = false;
  
  if (mouseBoard() == 1 && !setMarker(0, 0)) {
    matrix[0][0] = player;
    goodMove = true;
  } else if (mouseBoard() == 2 && !setMarker(0, 1)) {
    matrix[0][1] = player;
    goodMove = true;
  } else if (mouseBoard() == 3 && !setMarker(0, 2)) {
    matrix[0][2] = player;
    goodMove = true;
  } else if (mouseBoard() == 4 && !setMarker(1, 0)) {
    matrix[1][0] = player;
    goodMove = true;
  } else if (mouseBoard() == 5 && !setMarker(1, 1)) {
    matrix[1][1] = player;
    goodMove = true;
  } else if (mouseBoard() == 6 && !setMarker(1, 2)) {
    matrix[1][2] = player;
    goodMove = true;
  } else if (mouseBoard() == 7 && !setMarker(2, 0)) {
    matrix[2][0] = player;
    goodMove = true;
  } else if (mouseBoard() == 8 && !setMarker(2, 1)) {
    matrix[2][1] = player;
    goodMove = true;
  } else if (mouseBoard() == 9 && !setMarker(2, 2)) {
    matrix[2][2] = player;
    goodMove = true;
  } else {
    goodMove = false;
  }
  
  if(goodMove){
    togglePlayer();
  }

}