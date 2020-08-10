function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
			
			flagBody();
			moon();
			sun(275,370,50,35,12);

			
		}
function moon(){
			strokeWeight(2);stroke('white');fill('white')
			beginShape();
			vertex(340,225);
			bezierVertex(310, 280, 250, 280, 220, 225);
			bezierVertex(250, 270, 310, 270, 340,225);

			endShape();
			sun(280,245,15,10,12);

}
function flagBody(){
			fill('red');stroke('blue');strokeWeight(8);
			beginShape();
			vertex(200,80);
			vertex(200,500);
			vertex(500,500);
			vertex(300,280);
			vertex(500,280);
			vertex(200,80)
			endShape();
}

function sun(x , y , radius1 , radius2,starWings){
			
			let angleForFull = TWO_PI / starWings;
			let halfAngleForFull = angleForFull / 2.0;
			
			fill('white');strokeWeight(8);

			beginShape();
			
			for(a = 0; a <TWO_PI; a+=angleForFull){
				let sx = x + cos(a)*radius2;
				let sy = y + sin(a)*radius2;
				vertex(sx,sy);
				sx = x + cos(a+halfAngleForFull)*radius1;
				sy = y + sin(a+halfAngleForFull)*radius1;
				vertex(sx,sy);
				}
			
			endShape(CLOSE);

			}
