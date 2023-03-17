let beforeY  = window.scrollY;
const hambergerButton = document.getElementById('hamberger');
const hamberg = document.getElementsByClassName('patty');
const logo = document.getElementById('socar-logo');
const upperpatty = hamberg[0];
const lowerpatty = hamberg[1];
const modal = document.querySelector('.hamberger-modal');
const fadeObjects = document.querySelectorAll('.standby');
const aTags = document.querySelectorAll('a');
window.addEventListener('scroll', ()=>{
    let afterY = window.scrollY;
    const header = document.getElementById('stc');
    const scrollTop = window.pageYOffset;
    
    modal.classList.add('hide');
    modal.classList.add('deephide');
    upperpatty.classList.remove('blue-patty', 'trnsform-to-x1');
    lowerpatty.classList.remove('blue-patty', 'trnsform-to-x2');
    logo.classList.remove('blue-logo');

    if(afterY > beforeY){

        if(header.classList.contains('not-transparent')){
            header.classList.add('opacity-zero');
        }else{
            header.classList.add('not-transparent');
            logo.src = "/img/logo-blue.svg";
            hamberg[0].style = 'background-color: #0BB8FF;';
            hamberg[1].style = 'background-color: #0BB8FF;';
        }
        
    }else{
        if(header.classList.contains('opacity-zero')){
            header.classList.add('not-transparent');
            header.classList.remove('opacity-zero');
        }else if(window.scrollY === 0){
            header.classList.remove('not-transparent');
            logo.src = "/img/logo-w.svg";
            hamberg[0].style = 'background-color: white;';
            hamberg[1].style = 'background-color: white;';
        }else{
            header.classList.add('not-transparent');
        }
    }

    fadeObjects.forEach((object) => {
        const objectTop = object.offsetTop;
        if (scrollTop > objectTop - window.innerHeight) {
            object.classList.add('moving');
        }});
        
    beforeY  = window.scrollY;
});

hambergerButton.addEventListener('click', (e)=>{
    e.preventDefault();
    upperpatty.classList.toggle('trnsform-to-x1');
    lowerpatty.classList.toggle('trnsform-to-x2');
    modal.classList.toggle('hide');
    modal.classList.toggle('deephide');
    upperpatty.classList.toggle('blue-patty');
    lowerpatty.classList.toggle('blue-patty');
    logo.classList.toggle('blue-logo');
    
    aTags.forEach(a =>{
        a.classList.toggle('absolute-zero');
    })
});
    
modal.addEventListener('click', ()=>{
    modal.classList.add('hide');
    modal.classList.add('deephide');
    aTags.forEach(a =>{
        a.classList.remove('absolute-zero');
    })
})

window.addEventListener("keydown", (e) => {
    if (e.key ==='Escape'){
        modal.classList.add('hide');
        modal.classList.add('deephide');
        aTags.forEach(a =>{
            a.classList.remove('absolute-zero');
        })
    };
  });

