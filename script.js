// button 1
const myBtn1 = document.querySelector('#myBtn1');
myBtn1.addEventListener('click', function(){
   document.body.classList.toggle('biru-muda');
});

// Button 2
const myBtn2 = document.createElement('button');
const NewText = document.createTextNode('Random Color');
myBtn2.appendChild(NewText);
myBtn2.setAttribute('type', 'button');
myBtn1.after(myBtn2);
myBtn2.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +', ' + g +', ' + b + ')';
});


// For range
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', '+ b +')';
});


// For MouseMove
document.body.addEventListener('mousemove', function(e){
    const Xposition = Math.round((e.clientX / window.innerWidth) * 255);
    const Yposition = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ Xposition +', '+ Yposition +', 100)';
});