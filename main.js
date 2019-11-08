function sphere(radius){
	return {
		volume : (radius**3) * Math.PI * 4/3,
		area : 4 * Math.PI * (radius**2) 
	}
}

function cube(side){
	return {
		volume : side**3 ,
		area : 6 * (radius**2) 
	}
}

function cone(radius, height){
	return {
		volume : (radius**2) * Math.PI * height/3,
		area : Math.PI * radius *(Math.sqrt((height**2) + (radius**2)) + radius)
	}
}

function cuboid(length, depth, height){
	return {
		volume : length * depth * height,
		area : 2 * (length*depth + length*height + depth*height)  
	}
}

function cylinder(radius, height){
	return {
		volume : (radius**2) * Math.PI * height,
		area : 2 * Math.PI * radius *(radius+height)  
	}
}

function torus(minor, major){
	return {
		volume : 2 * (Math.PI ** 2) * major * (minor**2),
		area : 4 * (Math.PI**2) * major * minor
	}
}

function tetrahedron(side){
	return {
		volume : (side**3) * Math.sqrt(2) / 12 ,
		area : Math.sqrt(3) * (side**2) 
	}
}

function sqrPyramid(side, height){
	return {
		volume : (side**2) * height/3,
		area : (side**2) + (Math.sqrt((side**2)/4) + (height**2))
	}
}

function icosahedron(side){
	return {
		volume : (side**3) * (3+Math.sqrt(5)) * 5 / 12,
		area : 5 * Math.sqrt(3) * (side**2) 
	}
}

var radius = 0;
var side = 0;
var height = 0;
var length = 0;
var depth = 0;
var minor = 0;
var major = 0;

$('#sphere').on('click', function() {
	$('#container').hide()
	//$('#container').css('filter', 'blur(10px)')
	$('#popupSphere').show()

	radius = $('#sr').val()

	
	
})



function blur() {
	$('#container').blur()
}

