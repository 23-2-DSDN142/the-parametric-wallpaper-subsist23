//your parameter variables go here!
let rect_width  = 100;
let rect_height = 100;
let ellipse_R = 50;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#235e48"); //dark green
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
//biglightgreenellipses
noFill(0); 
stroke(74, 255, 201)
strokeWeight(.5)
ellipse(100,100,ellipse_R*2);
ellipse(100,100,ellipse_R/2+10);
ellipse(100,100,ellipse_R/2+90);

//darkgreenrects
noFill();
stroke(0,200,0);
strokeWeight(1);
rect (0,0,rect_width,rect_height);
rect (10,10,rect_width,rect_height);
rect (30,30,rect_width,rect_height);

//lightgreenrects
noFill();
stroke(120,230,120);
strokeWeight(.5);
rect (100,100,rect_width,rect_height);
rect (90,90,rect_width,rect_height);
rect (70,70,rect_width,rect_height);

//greenellipses
noFill();
stroke(0,222,0);
strokeWeight(.5);
ellipse(150,150,ellipse_R);
ellipse(50,50,ellipse_R);
ellipse(100,100,ellipse_R);
ellipse(150,50,ellipse_R);
ellipse(50,150,ellipse_R);

fill (74,255,201)
stroke(74, 255, 201)
strokeWeight(1)
ellipse(150,50,ellipse_R/2);
ellipse(50,150,ellipse_R/3);


stroke("#D4AF37"); //gold!
strokeWeight(1)
line (20,20,100,20);
line (20,20,20,100);
//line (20,20,100,100);
line (20,20,20,100);
strokeWeight(1)
line (180,180,100,180);
line (180,180,180,100);
//line (180,180,100,100);
line (170,170,110,170);
line (170,170,170,110);







}
