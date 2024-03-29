import {IVipTicket, TicketType} from "../../models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {postTicketData} from "@rest/tickets";


let ticketPostInstance: object;

export function initTicketInfo(ticket: TicketType | IVipTicket) {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType: string;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj: Record<string, string>;
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
}

function initPostData(data: object) {
    initUserData();
    
    // Преобразование объекта в строку с использованием JSON.stringify
    const dataString = JSON.stringify(data);
    
    postTicketData(dataString).then((responseData) => {
        // Обработка ответа
        if (responseData.success) {
        }
    });
}

export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}


