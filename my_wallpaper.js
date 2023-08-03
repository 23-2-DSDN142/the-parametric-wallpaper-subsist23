//your parameter variables go here!
let rect_width  = 5;
let rect_height = 20;
let ellipse_R = 50;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.output_mode(DEVELOP_GLYPH);

  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//person
//head
noStroke()
fill(240, 201, 146)
ellipse(113,100,11,13)
//body
fill(0,120,0)
ellipse(125,109,24,18)
  

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
ellipse(30,132,43);

//back wheel  
fill(23);
noStroke();
ellipse(170,130,53);

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
vertex(30, 140); //bottomL
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
stroke(0);
strokeWeight(0);
beginShape();
vertex(131, 142); //bottomL
vertex(130, 128); //topL
vertex(170, 123); //topR
vertex(171, 144); //bottomR
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
