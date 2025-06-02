let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x  = event.clientX * scaleFactor;
    const y  = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; ++ i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
   if (contrastToggle) {
     document.body.classList += " dark-theme"
    }
    else {
    document.body.classList.remove("dark-theme")
    }
}

function contact(event) { 
    event.preventDefault()
    const loading = document.querySelector('.modal_overlay--loading')
    const success = document.querySelector('.modal_overlay--success')
    success.classList += " modal_overlay--visible"
    emailjs
    .sendForm(
    'service_sopud4t',
    'template_f7v5o9q',
    event.target,
    'Q-_DB9xv0HNigZ6fX' 
    ).then(() => {
       
         loading.classList.remove("modal_overlay--visible");
         success.classList += " modal_overlay--visible"
    }).catch(() =>{
        loading.classList += " modal_overlay--visible"
        alert(
            "The email service is temp. unavailable. Please contact me directly on: lilsept77@gmail.com"
        );
    
    })
}


function toggleModal() {
   if (isModalOpen) {
    isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}





