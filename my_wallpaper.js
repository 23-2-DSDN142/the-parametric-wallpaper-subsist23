//your parameter variables go here!
let rect_width = 200;
let sunheight = 130;
let sunsize = 90;
let wheel = 49;
let ufoX = 170;
//for handin- 1.sunheight at 110, 2.sunheight at 130, ufoX at 20, ufoX at 170

function setup_wallpaper(pWallpaper) {
//pWallpaper.output_mode(GLIDE_WALLPAPER);
 pWallpaper.output_mode(GRID_WALLPAPER);
//pWallpaper.output_mode(DEVELOP_GLYPH);

  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
background(190,20,100); 
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//sun
stroke(255,100,0);
strokeWeight(6);
fill(255, 132, 0);
ellipse(100,sunheight,sunsize);
noStroke();
fill(255,230,0);
ellipse(100,sunheight,sunsize-30);


//if statement for night time mode and ufo coming out
if(sunheight > 123){

//nighttime background
fill(40,5,40);
rect(0,0,200,200);
//stars  
fill(255,232,232);
ellipse(20,50,1);
ellipse(39,60,1);
ellipse(35,35,1);
ellipse(49,20,.3);
ellipse(50,50,.3);
ellipse(59,60,1);
ellipse(59,20,1);
ellipse(70,55,.3);
ellipse(89,55,.3);
ellipse(159,16,.1);
ellipse(139,23,.3);
ellipse(120,50,1);
ellipse(129,60,1);
ellipse(140,55,1);
//moon
fill(230);
ellipse(100,100,sunsize-10);
//ufo
fill(122, 25, 255); //darkpurple
ellipse(ufoX,36,9,8);
fill(230);
ellipse(ufoX,36,7,6);
fill(122,25,255); //darkpurple
ellipse(ufoX,39,25,5);
fill(100,150,255);
ellipse(ufoX,38,27,5);

//if statement for ufo abducting sheep
if (ufoX > 169 ){
//ufobeams
noFill();
stroke(222, 25, 235);
strokeWeight(.3);
ellipse(170,50,23,3);
ellipse(170,60,23,3);
ellipse(170,70,23,3);
ellipse(170,80,23,3);
ellipse(170,90,23,3); 
//sheep abductee
fill(255);
noStroke(0);
//body
ellipse(170,75,9,6);
//head
ellipse(165,75,3.3);
//legs
ellipse(173,76,1,6);
ellipse(171,76,1,6);
ellipse(169,76,1,6);
ellipse(167,76,1,6);
//eye
fill(0);
ellipse(164.5,76,.3);
}

}

//road
noStroke();
fill(30,30,130);
rect (0,101,rect_width,100);
//road line
fill(190);
rect (0,139,200,33);
//road line-line
fill(123); 
rect (0,148,200,12);
//purple horizon line
fill(122,25,255); //darkpurple
rect(0,100,200,2);
//person  
//body
noStroke();
fill(90,150,50); //dark red
ellipse(125,113,23,31);
//arm
stroke(0);
strokeWeight(.6);
fill(0,150,50); //dark red
ellipse(129,109,42,10);
//head
noStroke();
fill(240, 200, 146);
ellipse(122.3,96,10,12);
//eye
noStroke();
fill(0);
ellipse(119.3,96,1.2);
ellipse(123.3,96,1.6);
//mouth
rect(120,100,3,.3);
//bike background ellipse
noStroke();
fill(180,0,0);
ellipse(105,129,90,35);
stroke(0);
strokeWeight(.1);
fill(255,0,0);
ellipse(105,127,90,35);
//windscreen
fill(100,150,255);
stroke(100,150,255);
strokeWeight(2);
beginShape();
vertex(40, 123); //bottomL
vertex(40, 112); //topL
vertex(95, 90); //topR
vertex(105, 95); //bottomR
endShape(CLOSE);
//base
fill(180,0,0);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(45, 135); //bottomL
vertex(60, 130); //topL
vertex(120, 130); //topR
vertex(130, 140); //bottomR
endShape(CLOSE);
//base 
fill(255,0,0);
stroke(0);
strokeWeight(.3);
beginShape();
vertex(105, 125); //bottomL
vertex(150, 120); //topL
vertex(120, 120); //topR
vertex(130, 120); //bottomR
endShape(CLOSE);
//seat
fill(0);
noStroke();
ellipse(136,111,13,23)
fill(205,0,0);
stroke(0);
strokeWeight(0.3);
beginShape();
vertex(160, 110); //bottomL
vertex(130, 90); //topL
vertex(140, 105); //topR
vertex(140, 135); //bottomR
endShape(CLOSE); 
fill(255,0,0);
stroke(0);
strokeWeight(0);
beginShape();
vertex(150, 110); //bottomL
vertex(130, 90); //topL
vertex(140, 105); //topR
vertex(140, 135); //bottomR
endShape(CLOSE);
fill(0);
stroke(0);
strokeWeight(0);
beginShape();
vertex(140, 110); //bottomL
vertex(120, 90); //topL
vertex(140, 105); //topR
vertex(140, 135); //bottomR
//base
noFill();
stroke(0);
strokeWeight(.3);
beginShape();
vertex(25, 125); //bottomL
vertex(60, 130); //topL
vertex(120, 130); //topR
vertex(130, 140); //bottomR
endShape(CLOSE);
//connection between back wheel MIDDLE SHADING
fill(180,0,0);
noStroke();
beginShape();
vertex(131, 142); //bottomL
vertex(130, 128); //topL
vertex(80, 105); //topR
vertex(81, 117); //bottomR
endShape(CLOSE);
//connection between back wheel MIDDLE
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(130, 140); //bottomL
vertex(130, 128); //topL
vertex(80, 105); //topR
vertex(80, 115); //bottomR
endShape(CLOSE);
//base background
fill(255,0,0);
stroke(0);
strokeWeight(.5);
beginShape();
vertex(20, 140); //bottomL
vertex(40, 118); //topL
vertex(100, 105); //topR
vertex(100, 125); //bottomR
endShape(CLOSE);
//connection twist in middle
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(120, 120); //bottomL
vertex(130, 128); //topL
vertex(80, 105); //topR
vertex(80, 115); //bottomR
endShape(CLOSE);
//base segment
fill(150,0,0);
stroke(0);
strokeWeight(0);
beginShape();
vertex(50, 130); //bottomL
vertex(70, 120); //topL
vertex(100, 105); //topR
vertex(110, 115); //bottomR
endShape(CLOSE);
beginShape();
//segment piece
fill(255,0,0);
vertex(160, 130); //bottomL
vertex(170, 118); //topL
vertex(100, 105); //topR
vertex(110, 115); //bottomR
endShape(CLOSE);
//base segment (DETAILING INSIDE)
fill(255,0,0);
stroke(0);
strokeWeight(.5);
beginShape();
vertex(66, 124); //bottomL
vertex(76, 118); //topL
vertex(103, 108); //topR
vertex(107, 112); //bottomR
endShape(CLOSE);
//lil wheel holder thing
stroke(0);
strokeWeight(0.5);
fill(255,0,0);
ellipse(41,116,5,15);
//front wheel  
fill(23);
noStroke();
ellipse(30,132,wheel-6);
//back wheel  
fill(23);
noStroke();
ellipse(170,130,wheel);
//connection between front wheel SHADING
fill(180,0,0);
noStroke();
beginShape();
vertex(31, 142); //bottomL
vertex(30, 118); //topL
vertex(80, 105); //topR
vertex(80, 117); //bottomR
endShape(CLOSE);
//connection 
fill(255,100,100);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(120, 110); //bottomL
vertex(120, 110); //topL
vertex(140, 115); //topR
vertex(140, 135); //bottomR
endShape(CLOSE);
//connection shading
fill(180,0,0); 
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(120, 110); //bottomL
vertex(120, 110); //topL
vertex(160, 115); //topR
vertex(160, 145); //bottomR
endShape(CLOSE);
//connection between front wheel
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(20, 136); //bottomL
vertex(30, 118); //topL
vertex(80, 105); //topR
vertex(80, 115); //bottomR
endShape(CLOSE);
//inner front wheel
fill(180);
stroke(0);
strokeWeight(0.5);
ellipse(30,132,23);
//inner front wheel detail
fill(123);
stroke(0);
strokeWeight(0.3);
ellipse(30,132,13);
//connection between back wheel shading
fill(180,0,0);
noStroke();
beginShape();
vertex(130, 142); //bottomL
vertex(130, 128); //topL
vertex(170, 123); //topR
vertex(170, 145); //bottomR
endShape(CLOSE);
//connection between back wheel
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
beginShape();
vertex(130, 140); //bottomL
vertex(130, 128); //topL
vertex(170, 123); //topR
vertex(170, 142); //bottomR
endShape(CLOSE);
//inner back wheel
fill(180);
stroke(0);
strokeWeight(0.5);
ellipse(170,130,33);
//inner back wheel details
fill(255,0,0);
stroke(0);
strokeWeight(0.3);
ellipse(170,130,23);
ellipse(177,123,9);
ellipse(177,123,6);
fill(0)
ellipse(180,123,1);
ellipse(174,123,1);
//cicrle detailing
fill(180);
stroke(0);
strokeWeight(0.3);
ellipse(142,119,9);
fill(180)
ellipse(110,124,3);
ellipse(123,131,6);

}
