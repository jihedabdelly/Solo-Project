function sphere(radius){
	return {
		volume : (radius**3) * Math.PI * 4/3,
		area : 4 * Math.PI * (radius**2) 
	}
}

function cube(side){
	return {
		volume : side**3 ,
		area : 6 * (side**2) 
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
var vol = 0;
var are = 0;
var unit = "";
var pow2 = "²";
var pow3 = "³";

function showpop() {
	$('#container').hide()
	//$('#container').css('filter', 'blur(10px)')
	$('#popupSphere').show()
}

function showresult() {
	$('#container').hide()
	$('#popupSphere').hide()
	$('#result').show()
}

$('#sphere').on('click', function() {
    $('#container').hide()
	$('#popupSphere').show()	
	
	$('#bt1').on('click', function(){
	  	
	  radius = $('#sr').val(); //1st variable

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = sphere(radius).volume;
	  are = sphere(radius).area

	  alert("The volume of Sphere = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#cube').on('click', function() {
    $('#container').hide()
	$('#popupCube').show()	
	
	$('#bt2').on('click', function(){
	  	
	  side = $('#cs').val(); //1st variable

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = cube(side).volume;
	  are = cube(side).area

	  alert("The volume of Cube = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#cone').on('click', function() {
    $('#container').hide()
	$('#popupCone').show()	
	
	$('#bt3').on('click', function(){
	  	
	  radius = $('#cobr').val(); //1st variable
	  height = $('#coh').val();

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = cone(radius, height).volume;
	  are = cone(radius, height).area

	  alert("The volume of Cone = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#cuboid').on('click', function() {
    $('#container').hide()
	$('#popupCuboid').show()	
	
	$('#bt4').on('click', function(){
	  	
	  length = $('#cul').val(); //1st variable
	  depth = $('#cud').val();
	  height = $('#cuh').val();

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = cuboid(length,depth,height).volume;
	  are = cuboid(length,depth,height).area

	  alert("The volume of Cuboid = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#cylinder').on('click', function() {
    $('#container').hide()
	$('#popupCylinder').show()	
	
	$('#bt5').on('click', function(){
	  	
	  radius = $('#cyr').val(); //1st variable
	  height = $('#cyh').val();

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = cylinder(radius, height).volume;
	  are = cylinder(radius, height).area

	  alert("The volume of Cylinder = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#torus').on('click', function() {
    $('#container').hide()
	$('#popupTorus').show()	
	
	$('#bt6').on('click', function(){
	  	
	  major = $('#tma').val(); //1st variable
	  minor = $('#tmi').val();

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = torus(minor, major).volume;
	  are = torus(minor, major).area

	  alert("The volume of Torus = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#tetrahedron').on('click', function() {
    $('#container').hide()
	$('#popupTetrahedron').show()	
	
	$('#bt7').on('click', function(){
	  	
	  side = $('#tes').val(); //1st variable
	  

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = tetrahedron(side).volume;
	  are = tetrahedron(side).area

	  alert("The volume of Tetrahedron = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#sqrPyramid').on('click', function() {
    $('#container').hide()
	$('#popupSqrPyramid').show()	
	
	$('#bt8').on('click', function(){
	  	
	  side = $('#sps').val(); //1st variable
	  height = $('#sph').val();	 

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = sqrPyramid(side, height).volume;
	  are = sqrPyramid(side, height).area

	  alert("The volume of Square Pyramid = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})

$('#icosahedron').on('click', function() {
    $('#container').hide()
	$('#popupIcosahedron').show()	
	
	$('#bt9').on('click', function(){
	  	
	  side = $('#is').val(); //1st variable
	  

	  unit = $('.dropdown').val();
	  var unit2 = " "+unit + pow2
	  var unit3 = " "+unit + pow3
	  
	  vol = icosahedron(side).volume;
	  are = icosahedron(side).area

	  alert("The volume of Icosahedron = " + Math.floor(vol*100)/100 +unit3+ " and its surface area = " +Math.floor(are*100)/100+unit2 )
	  
 })
})