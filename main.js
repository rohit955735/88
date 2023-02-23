
var canvas = new fabric.Canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

function load_img(){
	fabric.Image.fromURL("golf-h.png",function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
          top:hole_y,
		  left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
fabric.Image.fromURL("ball.png",function(Img){
ball_obj = Img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
top:ball_y,
left:ball_x
});
canvas.add(ball_obj);
});
};

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		console.log("goal");
		document.getElementById('hd3').innerHTML="You have hit the Goal!!!";
		document.getElementById('myCanvas').style.borderColor='red';
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
			ball_y=ball_x+block_image_height;
			console.log("block image height="+block_image_height);
			console.log("when up arrow is pressed,x="+player_x+",y="+player_y);
			canvas.remove(player_objects);
			new_image();
	}

	function down()
	{
			ball_y=ball_y-block_image_height;
			console.log("block image height="+block_image_height);
			console.log("when down arrow is pressed,x="+player_x+",y="+player_y);
			canvas.remove(player_obj);
			new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x=player_x-block_image_width;
				console.log("block image width="+block_image_width);
				console.log("when left arrow is pressed,x="+ball_x+",y="+ball_y);
				canvas.remove(ball_obj);
				new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
			console.log("block image width="+block_image_width);
			console.log("when right arrow is pressed,x="+player_x+",y="+player_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}
window.addEventListener("keydown", my_keydown);
ball_obj.scaleToHeight(50);
ball_obj.scaleToWidth(50);


















