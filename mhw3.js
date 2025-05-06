const leggi_button = document.querySelector("#button_leggi");
leggi_button.addEventListener("click", leggi);
const about = document.querySelector('.Testo_about_hidden');


const menu_donna = document.querySelector('#donna');
menu_donna.addEventListener("mouseover", hover);
const menu_hover = document.querySelector('.Menu_hover');
menu_hover.addEventListener("mouseover", hover);

function hover(){
menu_hover.style.display = "flex";  
}


menu_donna.addEventListener("mouseleave", hover_out);
menu_hover.addEventListener("mouseleave", hover_out);

function hover_out(){
menu_hover.style.display = "none";  
}

function leggi(){
    about.classList.replace('Testo_about_hidden', 'Testo_about_visible');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Mostra meno";
    leggi_button.removeEventListener("click", leggi);
    leggi_button.addEventListener("click", leggi_meno);
}


function leggi_meno(){
    about.classList.replace('Testo_about_visible', 'Testo_about_hidden');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Leggi di più";
    leggi_button.removeEventListener("click", leggi_meno);
    leggi_button.addEventListener("click", leggi);
}



const images = [
    'immagini saldi/Costume mare standard fit.jpeg', 'immagini saldi/Polo arancione logo.jpeg', 'immagini saldi/Sneaker semplici con logo.jpeg',
    'immagini saldi/Camicia primaverile donna.jpeg', 'immagini saldi/Borsa con logo.jpeg', 'immagini saldi/Espadrillas in pelle con plateau.png',
    'immagini saldi/T-shirt bambino con logo.jpeg', 'immagini saldi/Abito primaverile bambina.jpeg', 'immagini saldi/Cappello con visiera bambino.jpeg'
  ];

  const prices = [
    '19.99€', '29.99€', '49.99€',
    '39.99€', '59.99€', '59.99€',
    '19.99€', '29.99€', '9.99€'
  ];

  const names = [
    'Costume mare standard fit', 'Polo arancione logo', 'Sneaker semplici con logo',
    'Camicia primaverile donna', 'Borsa con logo', 'Espadrillas in pelle con plateau',
    'T-shirt bambino con logo', 'Abito primaverile bambina', 'Cappello con visiera bambino'
  ];
  
  const leftButton = document.getElementById('left_button');
  const rightButton = document.getElementById('right_button');
  
  leftButton.addEventListener('click', changeImages_saldi_left);
  rightButton.addEventListener('click', changeImages_saldi_right);

  let SetNum = 0;

  const DocImgs=['saldi1', 'saldi2', 'saldi3'];
  
  
  function changeImages_saldi_right() { 
    
    SetNum = (SetNum + 1) % 3;
    const currentIndex = SetNum * 3;
  

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];

    }
  
   
   
  }




  function changeImages_saldi_left() {

    SetNum = (SetNum + 2) % 3;

    const currentIndex = SetNum * 3;
  

   
    

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];
      }

  }


  function CreateModal(event){
    const modal = document.getElementById('modal');
    const Modimage = document.createElement('img');
    Modimage.src = event.currentTarget.src;
    modal.appendChild(Modimage);
    modal.classList.remove('Hidden');
    modal.style.top=window.scrollY + "px";
    document.body.classList.add('noscroll');
  }


  function CloseModal(){
    const modal = document.getElementById('modal');
    modal.classList.add('Hidden');
    document.body.classList.remove('noscroll');
    modal.innerHTML = '';
  }

  
  const imgSaldi1= document.getElementById('saldi1').querySelector('img');
  imgSaldi1.addEventListener('click', CreateModal);
  const imgSaldi2= document.getElementById('saldi2').querySelector('img');
  imgSaldi2.addEventListener('click', CreateModal);
  const imgSaldi3= document.getElementById('saldi3').querySelector('img');
  imgSaldi3.addEventListener('click', CreateModal);

  const close = document.getElementById('modal');
  close.addEventListener('click', CloseModal);
  
 

  function CreateDashB(){
    const dash = document.getElementById('dashB');
    dash.classList.remove('Hidden');
    console.log('riuscito');
    const slide= document.getElementById('dash_log');
    slide.classList.remove('Hidden');
    slide.classList.add('Translate');
    document.body.classList.add('noscroll');
   
    }

    function CloseDashB(event){
      if (event.target===event.currentTarget){
      const dash = document.getElementById('dashB');
      dash.classList.add('Hidden');
      document.body.classList.remove('noscroll');
      const slide= document.getElementById('dash_log');
      slide.classList.add('Hidden');
      slide.classList.remove('Translate');
      }
    }
    
    const dashCreate = document.getElementById('utente');
    dashCreate.addEventListener('click', CreateDashB);
    const dashClose = document.getElementById('dashB');
    dashClose.addEventListener('click', CloseDashB);
    dashClose.addEventListener('click', Close_registration);

    function registration(){
      const dash_log = document.getElementById('dash_log');
      dash_log.classList.add('Hidden');
      dash_log.classList.remove('Translate');
      const dash_reg = document.getElementById('dash_register');
      dash_reg.classList.remove('Hidden');
      dash_reg.classList.add('Translate');
    }


    function Close_registration(event){
      if (event.target===event.currentTarget){
      const dash_reg = document.getElementById('dash_register');
      dash_reg.classList.add('Hidden');
      dash_reg.classList.remove('Translate');
      const dash = document.getElementById('dashB');
      dash.classList.add('Hidden');
      document.body.classList.remove('noscroll');
      }
    }



    const dash_reg_button = document.getElementById('dash_log_register_button');
    dash_reg_button.addEventListener('click', registration);


    function login() {
      const Email = document.getElementById('EmailLog').value;
      const Password = document.getElementById('PasswordLog').value;
      console.log(Email, Password);
    
      fetch('https://api.escuelajs.co/api/v1/auth/login', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: Email,
          password: Password
        })
      })
      .then(res => {
        if (!res.ok) throw new Error('Login fallito');
        return res.json();
      })
      .then(data => {
        console.log('Token JWT:', data.access_token);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        const confirmation = document.createElement('p');
        confirmation.textContent = 'Utente loggato con successo';
        const Log=document.getElementById('log');
        Log.appendChild(confirmation);

      })
      .catch(err => {
        console.error('Errore durante il login:', err);
      });
    }
    

    const log_button = document.getElementById('log_button');
    log_button.addEventListener('click', login);


    function CreateUser() {
      const email= document.getElementById('EmailRegister').value;
      const password= document.getElementById('PasswordRegister').value;

      fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Default User',
          email: email,
          password: password,
          avatar: 'https://www.pngegg.com/it/png-wsggu' 
        })
      })
      .then(res => {
        if (!res.ok) throw new Error('Errore nella creazione utente');
        return res.json();
      })
      .then(user => {
        console.log('Utente creato:', user);
        const confirmation = document.createElement('p');
        confirmation.textContent = 'Utente creato con successo';
        const Reg=document.getElementById('dash_register');
        Reg.appendChild(confirmation);
      })
      .catch(err => {
        console.error(err);
        alert('Errore durante la registrazione');
      });
    }

    const dash_log_button = document.getElementById('register_button');
    dash_log_button.addEventListener('click', CreateUser);
    

    function getLocation() {
      
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const lat = data.latitude;
        const lon = data.longitude;
        const Pos = L;
        const map = Pos.map('map').setView([lat, lon], 13);

      Pos.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      Pos.marker([lat, lon]).addTo(map)
        .bindPopup('Sei qui!')
        .openPopup();
    })
    .catch(err => console.error("Errore nella geolocalizzazione:", err));
  }
  
  window.onload = getLocation;
      
    