
function calculateCrossProduct() {

    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var z1 = parseFloat(document.getElementById('z1').value);

    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);
    var z2 = parseFloat(document.getElementById('z2').value);

    // if(x1=='')

    var resultX = y1 * z2 - z1 * y2;
    var resultY = z1 * x2 - x1 * z2;
    var resultZ = x1 * y2 - y1 * x2;

    document.getElementById('result').value = '(' + resultX + ', ' + resultY + ', ' + resultZ + ')';
    // steps

    const Ax = document.getElementsByClassName('Ax');
    const Ay = document.getElementsByClassName('Ay');
    const Az = document.getElementsByClassName('Az');

    const Bx = document.getElementsByClassName('Bx');
    const By = document.getElementsByClassName('By');
    const Bz = document.getElementsByClassName('Bz');


    for (var i = 0 ; i < 2; i++) {
        Ax[i].value=x1
        Ay[i].value=y1
        Az[i].value=z1

        Bx[i].value=x2
        By[i].value=y2
        Bz[i].value=z2
    }


    Cx1 = document.getElementById('Cx1').value=(Ay[0].value)*(Bz[0].value)
    Cx2 = document.getElementById('Cx2').value=(Az[0].value)*(By[0].value)
    CxR = document.getElementById('CxR').value = Cx1-Cx2

    Cy1 = document.getElementById('Cy1').value=(Az[0].value)*(Bx[0].value)
    Cy2 = document.getElementById('Cy2').value=(Ax[0].value)*(Bz[0].value)
    CyR = document.getElementById('CyR').value = Cy1-Cy2

    Cz1 = document.getElementById('Cz1').value=(Ax[0].value)*(By[0].value)
    Cz2 = document.getElementById('Cz2').value=(Ay[0].value)*(Bx[0].value)
    CzR = document.getElementById('CzR').value = Cz1-Cz2






    

}

function cross_reset() {
    

   const list = document.getElementsByTagName("input");

   for (var i = 0; i < list.length; i++) {
       list[i].value=''
   }

}



function calculateDistance() {
    var pointX = parseFloat(document.getElementById('pointX').value);
    var pointY = parseFloat(document.getElementById('pointY').value);
    var pointZ = parseFloat(document.getElementById('pointZ').value);

    var planeA = parseFloat(document.getElementById('planeA').value);
    var planeB = parseFloat(document.getElementById('planeB').value);
    var planeC = parseFloat(document.getElementById('planeC').value);
    var planeD = parseFloat(document.getElementById('planeD').value);
    var planeZ = parseFloat(document.getElementById('planeZ').value);

    if (planeZ != 0) {
        if(planeZ > 0){
            planeD = planeD - planeZ
        } else{
            planeD = planeD + planeZ

        }
    } 

    // Calculate the distance between the point and the plane
    var distance = Math.abs(planeA * pointX + planeB * pointY + planeC * pointZ + planeD) /
                   Math.sqrt(planeA * planeA + planeB * planeB + planeC * planeC);

    // document.getElementById('DPP_result').innerText = 'Distance: ' + distance.toFixed(2);


    // step 1
    // var equation = '\\( d = \\frac{' + a + '(1) + ' + b + '(-2) + ' + c + '(4) + ' + d + '}{\\sqrt{' + a + '^2 + ' + b + '^2 + ' + c + '^2}} \\)';
        document.getElementById('s1').innerHTML = '\\( d = \\frac{' + planeA + '('+ pointX+') + ' + planeB + '('+pointY+') + ' + planeC + '('+pointZ+') + ' + planeD + '}{\\sqrt{' + planeA + '^2 + ' + planeB + '^2 + ' + planeC + '^2}} \\)';
        // MathJax.typeset();

    // step 2
        document.getElementById('s2').innerHTML = '\\( d = \\frac{'+planeA*pointX+' + '+planeB*pointY+' + '+planeC*pointZ+' + '+planeD+'}{\\sqrt{'+planeA*planeA+' + '+planeB*planeB+' + '+planeC*planeC+'}} \\)'

    // step3
        document.getElementById('s3').innerHTML = '\\( d = \\frac{'+((planeA*pointX)+(planeB*pointY)+(planeC*pointZ)+(planeD))+'}{\\sqrt{'+((planeA*planeA)+(planeB*planeB)+(planeC*planeC))+'}} \\)'
    // step4



        eq1 =(planeA*pointX)+(planeB*pointY)+(planeC*pointZ)+(planeD)
        eq2 = (planeA*planeA)+(planeB*planeB)+(planeC*planeC)
        console.log(eq1,eq2)
        // console.log(Number.isInteger(Math.sqrt(2)))
        if (Number.isInteger(Math.sqrt(eq2))) {
            if (Number.isInteger(eq1/Math.sqrt(eq2))) {
             document.getElementById('DPP_result').innerHTML = '\\( d = '+eq1/Math.sqrt(eq2)+'\\)'

            } else{
        document.getElementById('DPP_result').innerHTML = '\\( d = \\frac{'+eq1+'}{{'+Math.sqrt(eq2)+'}} \\)'

            }
        } else{
        document.getElementById('DPP_result').innerHTML = '\\( d = \\frac{'+eq1+'}{\\sqrt{'+eq2+'}} \\)'

        }

        document.getElementById('DPP_result').innerHTML = '\\( d = \\frac{'+((planeA*pointX)+(planeB*pointY)+(planeC*planeZ)+(planeD))+'}{{7}} \\)'
        MathJax.typeset();






}


