//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noStroke()
  fill(123)
  rect(0,170,200,30)

stroke(0,0,255)
fill(0,0,255)
ellipse(rectX+10,rectY-10,25) //bluelarge

fill(0,0,255)
ellipse(rectX+108,rectY+5,12) //blue

fill(0)  
rect(rectX,rectY,rect_width,rect_height) //poles

fill(0)  
rect(rectX+100,rectY+10,rect_width-5,rect_height-30) //poles

fill(120)
rect(rectX,rectY,rect_width,rect_height-90) //greybox

fill(120)
rect(rectX+100,rectY+10,rect_width-5,rect_height-95) //greybox

stroke(0,0,255)
strokeWeight(1)
line(rectX+10,rect_height-10,rectY+10,rect_width+85) //firstline

stroke(0,0,255)
strokeWeight (1)
line(rectY+10,rectX+105,200,90) //secondline

stroke(0)
fill(0)
ellipse(rectX+108,rectY+4,6) //blackpart
fill(0)
ellipse(rectX+10,rectY-10,15) //bluepart


}
