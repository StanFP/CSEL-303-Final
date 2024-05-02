function calculateParam(){

	let px1 = parseFloat(document.getElementById('px1').value);
	let py1 = parseFloat(document.getElementById('py1').value);
	let pz1 = parseFloat(document.getElementById('pz1').value);

	let px2 = parseFloat(document.getElementById('px2').value);
	let py2 = parseFloat(document.getElementById('py2').value);
	let pz2 = parseFloat(document.getElementById('pz2').value);

	// console.log(px1,py1, pz1)
	// console.log(py1)

	let dn = [px2-px1,py2-py1,pz2-pz1]

	console.log(dn)

    document.getElementById('ax').innerHTML = 'x = '+px2+'+ ('+dn[0]+')t'
    document.getElementById('ay').innerHTML = 'y = '+py2+'+ ('+dn[1]+')t'
    document.getElementById('az').innerHTML = 'z = '+pz2+'+ ('+dn[2]+')t'
    // document.getElementById('sf').innerHTML = '\\( d = \\frac{'+((planeA*pointX)+(planeB*pointY)+(planeC*pointZ)+(planeD))+'}{\\sqrt{'+((planeA*planeA)+(planeB*planeB)+(planeC*planeC))+'}} \\)'

    document.getElementById('sf').innerHTML = '\\( \\frac{x-'+px2+'}{'+dn[0]+'}\\ = \\frac{y-'+py2+'}{'+dn[1]+'}\\ = \\frac{z-'+pz2+'}{'+dn[2]+'}\\)'
    MathJax.typeset();


    // solution

    // document.getElementById('dn').innerHTML = '('+(px1, py1, pz1)+')'
	document.getElementById('dn1').innerHTML = '(' + px2 + ', ' + py2 + ', ' + pz2 + ') - ('+px1+','+py1+','+pz1+')';
	document.getElementById('dn2').innerHTML = '('+dn[0]+','+dn[1]+','+dn[2]+')'





}