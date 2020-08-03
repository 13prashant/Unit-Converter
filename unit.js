//Clock

function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if(hours < 10) {
        hours = `0${hours}`;
    }
    
    if(mins < 10) {
        mins = `0${mins}`;
    }
    if(secs < 10) {
        secs = `0${secs}`;
    }

    document.getElementById('hour').innerHTML = hours; 
    document.getElementById('minute').innerHTML = ':' + mins; 
    document.getElementById('second').innerHTML = ':' + secs; 
}

setInterval(clock, 1000);

//Land Area Converter

const bighaInput = document.querySelector('.bigha > input');
const gunthaInput = document.querySelector('.guntha > input');
const hectareInput = document.querySelector('.hectare > input');
const sqvarInput = document.querySelector('.sq-var > input');
const sqmtInput = document.querySelector('.sq-mt > input');
const sqftInput = document.querySelector('.sq-ft > input');
const acreInput = document.querySelector('.acre > input');

function bighaToOthers() {                  //Final
    const bighaUnit = bighaInput.value;
    const gunthaUnit = bighaUnit * 23.78;
    const hectareUnit = bighaUnit / 4.206;
    const sqvarUnit = bighaUnit * 2844;
    const sqmtUnit = bighaUnit * 2378;
    const sqftUnit = bighaUnit * 2844 * 9;
    const acreUnit = bighaUnit * 0.2378 * 2.47;
   
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. ft';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function gunthaToOthers() {                 //Final
    const gunthaUnit = gunthaInput.value;
    const bighaUnit = gunthaUnit / 23.78;
    const hectareUnit = gunthaUnit /23.78 /4.206;
    const sqvarUnit = gunthaUnit * 121;
    const sqmtUnit = gunthaUnit * 101.17;
    const sqftUnit = gunthaUnit * 121 * 9;
    const acreUnit = gunthaUnit /23.78 /4.206 * 2.47;

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. ft';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function hectareToOthers() {                    //Final
    const hectareUnit = hectareInput.value;
    const bighaUnit = hectareUnit * 4.206;
    const gunthaUnit = hectareUnit * 4.206 * 23.78;
    const sqvarUnit = hectareUnit * 10000 / 0.8361;
    const sqmtUnit = hectareUnit * 10000;
    const sqftUnit = hectareUnit * 4.206 * 2844 * 9; 
    const acreUnit = hectareUnit * 2.47;

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. ft';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function sqvarToOthers() {                      //Checked
    const sqvarUnit = sqvarInput.value;
    const bighaUnit = sqvarUnit / 2844; 
    const gunthaUnit = sqvarUnit / 121;
    const hectareUnit = sqvarUnit * 0.8361 / 10000;
    const sqmtUnit = sqvarUnit * 0.8361
    const sqftUnit = sqvarUnit  * 9;
    const acreUnit = sqvarUnit * 0.8361 / 10000 *2.47

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. ft';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function sqmtToOthers() {                      //Checked
    const sqmtUnit = sqmtInput.value;
    const bighaUnit = sqmtUnit / 2378;
    const gunthaUnit = sqmtUnit / 101.17;
    const hectareUnit = sqmtUnit / 10000;
    const sqvarUnit = sqmtUnit / 0.8361;
    const sqftUnit = sqmtUnit / 0.8361 * 9;
    const acreUnit = sqmtUnit / 10000 * 2.47

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. mt';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function sqftToOthers() {                      //Checked
    const sqftUnit = sqftInput.value;
    const bighaUnit = sqftUnit / 9 / 2844;
    const gunthaUnit = sqftUnit / 9 / 121;
    const hectareUnit = sqftUnit /9 * 0.8361 / 10000;
    const sqvarUnit = sqftUnit / 9;
    const sqmtUnit = sqftUnit / 9 * 0.8361; 
    const acreUnit = sqftUnit / 9 * 0.8361 / 10000 * 2.47; 

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    acreInput.value = parseFloat((acreUnit).toFixed(4)) + '          acre';
}

function acreToOthers() {                      //Checked
    const acreUnit = acreInput.value;
    const bighaUnit = acreUnit / 2.47 / 0.2378;
    const gunthaUnit = acreUnit / 2.47 / 0.2378 * 23.78;
    const hectareUnit = acreUnit / 2.47;
    const sqvarUnit = acreUnit / 2.47 / 0.2378 * 2844;
    const sqmtUnit = acreUnit / 2.47 * 10000; 
    const sqftUnit = acreUnit / 2.47 * 10000 / 0.8361 * 9; 

    bighaInput.value = parseFloat((bighaUnit).toFixed(4)) + '          bigha';
    gunthaInput.value = parseFloat((gunthaUnit).toFixed(4)) + '          guntha';
    hectareInput.value = parseFloat((hectareUnit).toFixed(4)) + '          hectare';
    sqvarInput.value = parseFloat((sqvarUnit).toFixed(4)) + '          sq. var';
    sqmtInput.value = parseFloat((sqmtUnit).toFixed(4)) + '          sq. mt';
    sqftInput.value = parseFloat((sqftUnit).toFixed(4)) + '          sq. ft';
}

bighaInput.addEventListener('input', bighaToOthers);
gunthaInput.addEventListener('input', gunthaToOthers);
hectareInput.addEventListener('input', hectareToOthers);
sqvarInput.addEventListener('input', sqvarToOthers);
sqmtInput.addEventListener('input', sqmtToOthers);
sqftInput.addEventListener('input', sqftToOthers);
acreInput.addEventListener('input', acreToOthers);



//Clear Button
function btn() {
    location.reload();
}