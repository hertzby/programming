var starColor = '#FFF07F';
    var r = 255;
    var g = 255;
    var b = 102;

    var r2 = 50;
    var g2 = 50;
    var b2 = 50;

function setup() {
    createCanvas(800,800);
}

function draw() {


    
    background('#0C357C')
    
    
    

        fill(r2,g2,b2)
    noStroke();
    
    // Rect Hides Background
    rect(325, 250, 150, 150)
    rect(320, 252, 150, 150)
    rect(470, 252, 10, 150)
    rect(300, 275, 210, 150)
    
    // Top Triangle
    triangle(275, 250, 400, 50, 520, 250)
    
    // Right Triangle
    triangle(475, 225, 675, 300, 500, 425)
    
    // Bottom Right
    triangle(525, 350, 575, 575, 325, 450)
    
    // Left Triangle
    triangle(325, 225, 125, 300, 300, 425)
    
    // Bottom Left
    triangle(275, 350, 225, 575, 450, 465)
    
    
    
    
    
    
    fill(r,g,b)
    noStroke();
    
    // Rect Hides Background
    rect(325, 250, 150, 150)
    rect(320, 252, 150, 150)
    rect(470, 252, 10, 150)
    rect(300, 275, 210, 150)
    
    // Top Triangle
    triangle(325, 250, 400, 100, 475, 250)
    
    // Right Triangle
    triangle(475, 250, 650, 300, 500, 400)
    
    // Bottom Right
    triangle(500, 350, 550, 550, 350, 450)
    
    // Left Triangle
    triangle(325, 250, 150, 300, 300, 400)
    
    // Bottom Left
    triangle(300, 350, 250, 550, 450, 450)
    
    var starsX = random(0, 800);
    var starsY = random(0, 800);

    ellipse(starsX, starsY, 4, 4);
    textSize(35);
    text('imma star', 600, 750);
    fill(40, 102,153);
    
    


    
}


function mousePressed(){
    

    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    
    r2 = random(0, 255);
    g2 = random(0, 255);
    b2 = random(0, 255);
    //fill(r, g, b)


    
}