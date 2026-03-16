//ODE DE CHANGEMENTS D'AFFICHAGE DEBUT:{
//VARIABLES AFFICHAGES OPTION
    const option1=document.querySelector('#option1');
    const option2=document.querySelector('#option2');
    const option3=document.querySelector('#option3');
    const option4=document.querySelector('#option4');
//VARIABLES BOUTTON 
    const accueil=document.querySelector('#accueil');
    const tuto=document.querySelector('#tuto');
    const reparateurs=document.querySelector('#reparateurBtn');
    const marketplace=document.querySelector('#marketplaceBtn');
    //marketplace.style.display='none';

    accueil.addEventListener('click',function (){
        option1.style.display='block';
        option2.style.display='none';
        option3.style.display='none';
        option4.style.display='none';
        accueil.classList.add('onfocus');
        tuto.classList.remove('onfocus');
        reparateurs.classList.remove('onfocus');
        marketplace.classList.remove('onfocus');
        console.log(accueil+'accueil');
    })
    tuto.addEventListener('click',function (){
        option1.style.display='none';
        option2.style.display='block';
        option3.style.display='none';
        option4.style.display='none';
        accueil.classList.remove('onfocus');
        tuto.classList.add('onfocus');
        reparateurs.classList.remove('onfocus');
        marketplace.classList.remove('onfocus');
        console.log(tuto+'tutoriels');
    })
    reparateurs.addEventListener('click',function (){
        option1.style.display='none';
        option2.style.display='none';
        option3.style.display='block';
        option4.style.display='none';
        accueil.classList.remove('onfocus');
        tuto.classList.remove('onfocus');
        reparateurs.classList.add('onfocus');
        marketplace.classList.remove('onfocus');
        console.log(reparateurs+'reparateur');
    })
    marketplace.addEventListener('click',function (){
        option1.style.display='none';
        option2.style.display='none';
        option3.style.display='none';
        option4.style.display='block';
        accueil.classList.remove('onfocus');
        tuto.classList.remove('onfocus');
        reparateurs.classList.remove('onfocus');
        marketplace.classList.add('onfocus');
        console.log(marketplace+'markerplace');
    })
//}FIN
