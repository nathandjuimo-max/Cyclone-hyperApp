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
//TEST D'insertion de code dynamique
let profil_pechel={
    nom:'pechel tchamcheu',
    categorie:'non assigné',
    budget:'moyen',
    notation:5.0,
    niveau:'expert'
}
let profil_kendra={
    nom:'kendra',
    categorie:'non assigné',
    budget:'très cher',
    notation:4.5,
    niveau:'moyen'
}
let profil_joshua={
    nom:'joshua',
    categorie:'non assigné',
    budget:'très cher',
    notation:4.5,
    niveau:'moyen'
}
const neo=`
    <div class="profil-reparateur visit-card ">
        <div class="flex">
            <img src="image/homme.png" alt="" class="profil-img" style="border: 1px solid gray;">
                <div>
                    <h2 style="margin: 0px; width: 20vw;">${profil_pechel.nom}</h2>
                    <H4 style="margin: 0px; margin-top: 0.5vh;">${profil_pechel.categorie}</H4>
                                        
                </div>
                <img src="image/verifie.png" alt="profil vérifier" class="profil-verifier">
        </div>
        <div class="flex" >
            <div class="flex etoile">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
            </div>
            <div class="note">${profil_pechel.notation}</div>
            <img src="image/signet.png" alt="" class="add-favoris">
                                
        </div>
            <p>ninvau: <span class="underline" id="niveau-rep">${profil_pechel.niveau}</span></p>
            <p>budget: <span class="underline">négociable</span></p>
            <div class="flex">
                <button class="special-button-border-gray extreme-margin">
                    entrer en contact
                </button>
                <button class="special-button-border-gray margin-left">
                    consulter 
                    profil
                </button>
        </div>
</div>
`;
const neo2=`
    <div class="profil-reparateur visit-card ">
        <div class="flex">
            <img src="image/homme.png" alt="" class="profil-img" style="border: 1px solid gray;">
                <div>
                    <h2 style="margin: 0px; width: 20vw;">${profil_kendra.nom}</h2>
                    <H4 style="margin: 0px; margin-top: 0.5vh;">${profil_pechel.categorie}</H4>
                                        
                </div>
                <img src="image/verifie.png" alt="profil vérifier" class="profil-verifier">
        </div>
        <div class="flex" >
            <div class="flex etoile">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
                <img src="image/etoile(3).png" alt="" class="etoile-notation">
            </div>
            <div class="note">${profil_kendra.notation}</div>
            <img src="image/signet.png" alt="" class="add-favoris">
                                
        </div>
            <p>ninvau: <span class="underline" id="niveau-rep">${profiil_kendra.niveau}</span></p>
            <p>budget: <span class="underline">négociable</span></p>
            <div class="flex">
                <button class="special-button-border-gray extreme-margin">
                    entrer en contact
                </button>
                <button class="special-button-border-gray margin-left">
                    consulter 
                    profil
                </button>
        </div>
</div>
`;
const add=document.querySelector('#add');
add.insertAdjacentHTML('afterbegin',neo);
add.insertAdjacentHTML('beforeend',neo2);