//your parameter variables go here!
let rect_width  = 9;
let rect_height = 24;
let ellipse_R = 50;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(GLIDE_WALLPAPER);
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
  
  //windscreen
fill(100,100,255);
stroke(0);
strokeWeight(1);
ellipse(73,115,66,33)

  //round base
fill(255,0,0);
stroke(0);
strokeWeight(1);
ellipse(100,130,80,20)

//connection between back wheel MIDDLE SHADING
fill(180,0,0);
stroke(0);
strokeWeight(0)
beginShape();
vertex(131, 142); //bottomL
vertex(130, 128); //topL
vertex(80, 105); //topR
vertex(81, 117); //bottomR
endShape(CLOSE);

//connection between back wheel MIDDLE
fill(255,0,0);
stroke(0);
strokeWeight(0.5)
beginShape();
vertex(130, 140); //bottomL
vertex(130, 128); //topL
vertex(80, 105); //topR
vertex(80, 115); //bottomR
endShape(CLOSE);


//seat
fill(0);
rect(120,100,rect_width,rect_height-10)
rect(95,110,rect_height+10,rect_width)

//base background
fill(255,0,0);
stroke(0);
strokeWeight(1)
beginShape();
vertex(20, 140); //bottomL
vertex(40, 118); //topL
vertex(100, 105); //topR
vertex(100, 125); //bottomR
endShape(CLOSE);

//base segment
fill(255,0,0);
stroke(0);
strokeWeight(0.5)
beginShape();
vertex(60, 130); //bottomL
vertex(70, 118); //topL
vertex(100, 105); //topR
vertex(110, 115); //bottomR
endShape(CLOSE);

//base segment (DETAILING INSIDE)
fill(255,0,0);
stroke(0);
strokeWeight(0.1)
beginShape();
vertex(66, 124); //bottomL
vertex(76, 118); //topL
vertex(103, 108); //topR
vertex(107, 112); //bottomR
endShape(CLOSE);

//lil wheel holder thing
stroke(0)
strokeWeight(0.5)
fill(255,0,0)
ellipse(41,116,5,15)

//front wheel  
fill(23);
noStroke();
ellipse(30,130,39);

//back wheel  
fill(23);
noStroke();
ellipse(170,130,45);


//connection between front wheel SHADING
fill(180,0,0);
stroke(0);
strokeWeight(0)
beginShape();
vertex(31, 142); //bottomL
vertex(30, 118); //topL
vertex(80, 105); //topR
vertex(80, 117); //bottomR
endShape(CLOSE);

//connection between front wheel
fill(255,0,0);
stroke(0);
strokeWeight(0.5)
beginShape();
vertex(30, 140); //bottomL
vertex(30, 118); //topL
vertex(80, 105); //topR
vertex(80, 115); //bottomR
endShape(CLOSE);

//inner front wheel SHADING
fill(180,0,0);
stroke(0);
strokeWeight(0);
ellipse(31,132,23)

//inner front wheel
fill(255,0,0);
stroke(0);
strokeWeight(0.5);
ellipse(30,130,23)


//inner back wheel SHADING
fill(180,0,0);
stroke(0);
strokeWeight(0);
ellipse(171,132,29)

//connection between back wheel
fill(180,0,0);
stroke(0);
strokeWeight(0)
beginShape();
vertex(131, 142); //bottomL
vertex(130, 128); //topL
vertex(170, 123); //topR
vertex(171, 144); //bottomR
endShape(CLOSE);

//connection between back wheel
fill(255,0,0);
stroke(0);
strokeWeight(0.5)
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
ellipse(170,130,29)











}
