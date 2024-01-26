import {Modal} from "../../classes/modal";
import {ITours} from "../../models/tours/tours";
import {toursDataArray} from "../../index";



// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type: 'order', i: number): void {
    const data: ITours = toursDataArray[i];
    const tourId: string = data?.id || '';  
 
    let modalInfo = {};
    switch (type) {
       case 'order':
          const modalTemplate = `
             <div> 
                <p data-moda-id="tour-modal" class="close-modal">x</p>
                <p>${data.name}</p>
                <p>${data.description}</p>
                <div data-tour-id=${tourId} class="ticket-submit">
                   <a href="/ticket.html">Купить билет</a>
                </div>
             </div>
          `;
          const modal = new Modal('tour-modal');
          modal.open(modalTemplate);
          break;
    }
 }