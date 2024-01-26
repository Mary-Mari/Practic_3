import {getTicketById, postTicketData} from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss'
import { registerConfirmButton, initTicketInfo } from "@services/tickets/ticket"; 
import {IVipTicket, TicketType, ITicket} from "../../models/ticket/ticket";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";


let ticketInstance: TicketType ;
const clientType:string = "custom";



// init main  data
initApp();
registerConfirmButton();

function initApp(): void {
    getTicketById<IVipTicket>('someId')
        .then((data): void => {
            if (data && data.length > 0) {
                ticketInstance = data[0];
                const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
                initHeaderTitle(ticketName, 'h3');
                initFooterTitle('Туры по всему миру', 'h2');
                initTicketInfo(ticketInstance);
            } else {
                // Обработка случая, когда данные отсутствуют
                console.error("No ticket data found");
                
            }
        })
        .catch((error) => {
            // Обработка ошибки при загрузке данных
            console.error("Error fetching ticket data:", error);
            
        });
}


/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/




