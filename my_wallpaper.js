//your parameter variables go here!
let rect_width  = 200;
let ground_height = 101;
let sunheight = 100;
let sunsize = 70;
let wheel = 53
let ufoX = 150
//for handin- 1.sunheight at 100, 2.sunheight at 130, ufoX at 20, ufoX at 150

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.output_mode(DEVELOP_GLYPH);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(10,20,100); 
}

//note- stroke for background ellipde dsrk red
//ufos for background whe night time
//stars at lower opacity next to stars


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//if statement for sun popping up if the ground is lowered
if(ground_height > 100){

//sun
noStroke();
fill(255, 132, 0)
ellipse(100,sunheight,sunsize)
fill(255,230,0)
ellipse(100,sunheight,sunsize-30)
}

//if statement for stars if the sun is down low enough + ufo coming out
if(sunheight > 123){

  //sunsetbackground
fill(40,5,40);
rect(0,0,200,200)

//stars  
fill(232)
ellipse(20,50,1)
ellipse(25,55,2)
ellipse(39,60,1)
ellipse(35,35,2)
ellipse(49,20,1)
ellipse(40,55,2)
ellipse(50,50,1)
ellipse(55,55,2)
ellipse(59,60,1)
ellipse(65,35,2)
ellipse(59,20,1)
fill(252)
ellipse(70,55,2)
ellipse(150,50,1)
ellipse(155,55,2)
ellipse(159,60,1)
ellipse(165,35,2)
ellipse(139,20,1)
ellipse(160,55,2)
ellipse(120,50,1)
ellipse(125,55,2)
ellipse(129,60,1)
ellipse(135,35,2)
ellipse(119,20,1)
ellipse(160,55,2)
ellipse(100,100,sunsize-10)
//ufo!
fill(23,150,255);
ellipse(ufoX,36,9,8)
fill(123)
ellipse(ufoX,38.5,25,5)
fill(23)
ellipse(ufoX,38,25,5)


if (ufoX > 120 ){
  //ufobeams
noFill();
stroke(52, 235, 235)
strokeWeight(.3)
ellipse(150,50,23,3)
ellipse(150,60,23,3)
ellipse(150,70,23,3) 
ellipse(150,80,23,3)
ellipse(150,90,23,3)  
//sheep abductee
fill(255)
noStroke(0)
//body
ellipse(150,75,9,6)
//head
ellipse(145,75,3.3)
//legs
ellipse(153,76,1,6)
ellipse(151,76,1,6)
ellipse(149,76,1,6)
ellipse(147,76,1,6)
//eye
fill(0)
ellipse(144.5,76,.3)

fill(255)
noStroke(0)
//body
ellipse(150,55,9,6)
//head
ellipse(145,55,3.3)
//legs
ellipse(153,56,1,6)
ellipse(151,56,1,6)
ellipse(149,56,1,6)
ellipse(147,56,1,6)
//eye
fill(0)
ellipse(144.5,56,.3)

}

}



//backroundstuff-road
noStroke();
fill(123);
rect (0,101,rect_width,100);
//road line
fill(72)
rect (0,139,200,20)


//person
//body
stroke(0);
strokeWeight(.5);
fill(0,120,0)
ellipse(125,113,23,28)
//arm
stroke(0);
strokeWeight(.3);
fill(0,120,0)
ellipse(123,115,9,28)
//head
noStroke()
fill(240, 201, 146)
ellipse(114,100,11,13)
//eye
noStroke()
fill(0)
ellipse(111,100,2)



//bikebackgroundellipse
stroke(0)
strokeWeight(0)
fill(180,0,0);
ellipse(105,130,90,35)
stroke(0)
strokeWeight(.5)
fill(255,0,0)
ellipse(105,128,90,35)


//windscreen
fill(100,150,255);
stroke(0);
strokeWeight(0)
beginShape();
vertex(40, 123); //bottomL
vertex(40, 110); //topL
vertex(95, 90); //topR
vertex(105, 95); //bottomR
endShape(CLOSE);

//base
fill(255,0,0);
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
noStroke()
endShape(CLOSE);
ellipse(136,111,13,23)
fill(205,0,0);
stroke(0);
strokeWeight(0.5);
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
strokeWeight(0)
beginShape();
vertex(50, 130); //bottomL
vertex(70, 120); //topL
vertex(100, 105); //topR
vertex(110, 115); //bottomR
endShape(CLOSE);
beginShape();

//segment
fill(255,0,0)
vertex(160, 130); //bottomL
vertex(170, 118); //topL
vertex(100, 105); //topR
vertex(110, 115); //bottomR
endShape(CLOSE);

//base segment (DETAILING INSIDE)
fill(255,0,0);
stroke(0);
strokeWeight(.5);
beginShape()
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
ellipse(30,132,wheel-9);

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

//connection green
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
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
ellipse(30,132,23);

//inner front wheel detail
fill(255,0,0);
stroke(0);
strokeWeight(0.3);
ellipse(30,132,13);

//connection between back wheel
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
fill(255,0,0);
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
fill(255,0,0);
stroke(0);
strokeWeight(0.3);
ellipse(142,119,9);
fill(180,0,0)
ellipse(110,124,3);
ellipse(123,131,6);

}
