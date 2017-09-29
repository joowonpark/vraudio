inlets = 2;
outlets = 24; 

var x, y, z;
var q1, q2, q3, q4;
var s1loc = [0.0, 1.0, -5.0];


function list() {
	if (inlet == 0) {
		var a = arguments;
		x = a[0];
		y = a[1];
		z = a[2];
	}

	if (inlet == 1) {
		var b = arguments; 
		q1 = b[0];
		q2 = b[1];
		q3 = b[2];
		q4 = b[3];
	}
	
	var theta = Math.acos(q4) //theta/2
	if ((Math.abs(Math.sin(theta) - q2) > Math.abs(Math.sin(2*Math.PI - theta) - q2)) ) {
 		theta = 2*Math.PI - theta;
	}
	
	theta = 2*theta;
	
	if (theta > 2*Math.PI) {
		theta = theta - 2*Math.PI;
	}
	
	var soundtheta = 2*Math.PI - theta // the sound source's relative angle
	// Now I know theta (range 0 to 2pi)
	
	var n = 24; //for example, when n=4, it is 90 degree increment
	
	var increment = 2*Math.PI/n;
	
	//sum of weights = 1
	
	var weight0 = 0.0;
	var weight1 = 0.0;
	var weight2 = 0.0;
	var weight3 = 0.0;
	var weight4 = 0.0;
	var weight5 = 0.0;
	var weight6 = 0.0;
	var weight7 = 0.0;
	var weight8 = 0.0;
	var weight9 = 0.0;
	var weight10 = 0.0;
	var weight11 = 0.0;
	var weight12 = 0.0;
	var weight13 = 0.0;
	var weight14 = 0.0;
	var weight15 = 0.0;
	var weight16 = 0.0;
	var weight17 = 0.0;
	var weight18 = 0.0;
	var weight19 = 0.0;
	var weight20 = 0.0;
	var weight21 = 0.0;
	var weight22 = 0.0;
	var weight23 = 0.0;
	
	var ratio = soundtheta/increment
	


	if (0 <= ratio & ratio < 1) { 
	 weight0 = 1 - ratio;  
	 weight1 = ratio - 0; 
	 }
	if (1 <= ratio & ratio < 2) { 
	 weight1 = 2 - ratio;  
	 weight2 = ratio - 1; 
	 }
		if (2 <= ratio & ratio < 3) { 
	 weight2 = 3 - ratio;  
	 weight3 = ratio - 2; 
	 }
		if (3 <= ratio & ratio < 4) { 
	 weight3 = 4 - ratio;  
	 weight4 = ratio - 3; 
	 }
		if (4 <= ratio & ratio < 5) { 
	 weight4 = 5 - ratio;  
	 weight5 = ratio - 4; 
	 }
		if (5 <= ratio & ratio < 6) { 
	 weight5 = 6 - ratio;  
	 weight6 = ratio - 5; 
	 }
		if (6 <= ratio & ratio < 7) { 
	 weight6 = 7 - ratio;  
	 weight7 = ratio - 6; 
	 }
		if (7 <= ratio & ratio < 8) { 
	 weight7 = 8 - ratio;  
	 weight8 = ratio - 7; 
	 }
		if (8 <= ratio & ratio < 9) { 
	 weight8 = 9 - ratio;  
	 weight9 = ratio - 8; 
	 }
		if (9 <= ratio & ratio < 10) { 
	 weight9 = 10 - ratio;  
	 weight10 = ratio - 9; 
	 }
		if (10 <= ratio & ratio < 11) { 
	 weight10 = 11 - ratio;  
	 weight11 = ratio - 10; 
	 }
		if (11 <= ratio & ratio < 12) { 
	 weight11 = 12 - ratio;  
	 weight12 = ratio - 11; 
	 }
		if (12 <= ratio & ratio < 13) { 
	 weight12 = 13 - ratio;  
	 weight13 = ratio - 12; 
	 }
		if (13 <= ratio & ratio < 14) { 
	 weight13 = 14 - ratio;  
	 weight14 = ratio - 13; 
	 }
		if (14 <= ratio & ratio < 15) { 
	 weight14 = 15 - ratio;  
	 weight15 = ratio - 14; 
	 }
		if (15 <= ratio & ratio < 16) { 
	 weight15 = 16 - ratio;  
	 weight16 = ratio - 15; 
	 }
		if (16 <= ratio & ratio < 17) { 
	 weight16 = 17 - ratio;  
	 weight17 = ratio - 16; 
	 }
		if (17 <= ratio & ratio < 18) { 
	 weight17 = 18 - ratio;  
	 weight18 = ratio - 17; 
	 }
		if (18 <= ratio & ratio < 19) { 
	 weight18 = 19 - ratio;  
	 weight19 = ratio - 18; 
	 }
		if (19 <= ratio & ratio < 20) { 
	 weight19 = 20 - ratio;  
	 weight20 = ratio - 19; 
	 }
		if (20 <= ratio & ratio < 21) { 
	 weight20 = 21 - ratio;  
	 weight21 = ratio - 20; 
	 }
		if (21 <= ratio & ratio < 22) { 
	 weight21 = 22 - ratio;  
	 weight22 = ratio - 21; 
	 }
		if (22 <= ratio & ratio < 23) { 
	 weight22 = 23 - ratio;  
	 weight23 = ratio - 22; 
	 }
		if (23 <= ratio & ratio <= 24) { 
	 weight23 = 24 - ratio;  
	 weight0 = ratio - 23; 
	 }
				
	outlet(0, weight0); 
	outlet(1, weight1); 
	outlet(2, weight2); 
	outlet(3, weight3);
 	outlet(4, weight4);
 	outlet(5, weight5);
 	outlet(6, weight6);
	outlet(7, weight7);
	outlet(8, weight8);
	outlet(9, weight9);
	outlet(10, weight10);
	outlet(11, weight11);
	outlet(12, weight12);
	outlet(13, weight13);
	outlet(14, weight14);
	outlet(15, weight15);
	outlet(16, weight16);
	outlet(17, weight17);
	outlet(18, weight18);
	outlet(19, weight19);
	outlet(20, weight20);
	outlet(21, weight21);
	outlet(22, weight22);
	outlet(23, weight23);
}

