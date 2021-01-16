'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


// Agrego a cada uno de los elementos con clase 'show-modal' un Detector de Eventos Local.  
for (let i = 0; i < btnsShowModal.length; i++) {
   btnsShowModal[i].addEventListener('click', function () {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
   });
}

btnCloseModal.addEventListener('click', function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
});

// Agrego un Detector de eventos Global. 
document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
   }

   // console.log(e);  // KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
});


/*

OBS: Cuando construimos un proyecto como este, generalemnte lo que hacemos primero es seleccionar todos los elementos que vamos a necesitar y luego almacenarlos en variables para poder luego utilizarlos todas las veces que queramos.

IMPORTANTISIMO: Cuando asignamos una función anónima a una variable y queremos utilizarla dentro del Controlador de evento (2do argumento), debemos llamarla a traves del nombre de la variable pero SIN utilizar los paréntesis para que la función anónima NO se invoque automáticamente cuando se ejecuta el script. De lo contrario no va a funcionar.

*/