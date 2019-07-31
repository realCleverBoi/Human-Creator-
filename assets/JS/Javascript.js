// var gen;
function Selector(gender) {
	gen = gender;
	created.innerHTML = "";
}

function Humancreator() {
	
	class Human{
		constructor(){
			this.name = oruko.value;
			this.eye = 2;
			this.nose = 2;
			this.head  = 1;
			this.ear = 2;
			this.leg = 2;
			// this.activator();
		}
		activator(){
			return "<b>Name:</b> " +this.name + "<br>"+"<br>" 
			+"<b>Head:</b> " +this.head + "<br>"+"<br>"
			+"<b>Eyes:</b> " +this.eye + "<br>"+"<br>"
			+"<b>Nose:</b> " +this.nose + "<br>"+"<br>"
			+"<b>Ears:</b> " +this.ear + "<br>"+"<br>"
			+"<b>Legs:</b> " +this.leg + "<br>"+"<br>";
		}
		displayer(){
			created.innerHTML = "<u style='color:red;font-weight:bolder;font-size:25px;position:relative;top:150px;'>Notice:</u> "
		}
	}
	
	class Male extends Human{
		bear = "Yes";
		hair = "Short";
		avatar = "<img src='assets/img/m.png' style='width:50px;height:50px;position:relative;bottom:320px;left:120px;border-radius:25px;'>";
	}

	class Female extends Human{
		bear = "No";
		hair = "Long";
		avatar = "<img src='assets/img/f.png' style='width:50px;height:50px;position:relative;bottom:320px;left:120px;border-radius:25px;border:0.1px solid black;'>";
	}
	class Nothing extends Human{
		info = "<b style='font-weight:bolder;font-size:18px;position:relative;top:150px;'> Person's name not specified!</b>"
	}
	if (oruko.value != "") {
		if (gen == "m") {
			let pman = new Male;
			created.innerHTML = "<b>You created a man</b>" + "<br>"+"<br>"
			+pman.activator() 
			+"<b>Bear:</b> " +pman.bear + "<br>"+"<br>"
			+"<b>Hair:</b> " +pman.hair  + "<br>"+"<br>"
			+pman.avatar;
		} else if (gen == "f") {
			let pman = new Female;
			created.innerHTML = "<b>You created a woman</b>" + "<br>"+"<br>"
			+pman.activator() 
			+"<b>Bear:</b> " +pman.bear + "<br>"+"<br>"
			+"<b>Hair:</b> " +pman.hair + "<br>"+"<br>"
			+pman.avatar;;
		}
	} else {
		// alert("Please Enter Person's name(s)");
		let n = new Nothing;
		n.displayer();
		created.innerHTML += n.info;
	}
}	