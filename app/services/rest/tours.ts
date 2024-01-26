
import {ITours} from "../../models/tours/tours";
import {getTourTemplate} from "../../templates/tours";
import {openModal} from "@services/modal/modalService";


// запрос на получение списка туров - Определить типы (возвращающие и для параметров)
export function getTours(): Promise<{ id: string; name: string; description: string }[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')
        .then((response) => response.json());
}


 export function initToursDivElements(data: ITours[]) {

    if (Array.isArray(data)) {
        const rootElement: Element = document.querySelector('.main-app');
        const tourWrap: HTMLDivElement = document.createElement('div');

        tourWrap.classList.add('tour-wrap');

        // init click for modal
        initTourElemListener(tourWrap);

        let rootElementData: string = '';
        data.forEach((el: ITours, i: number) => {
            rootElementData += getTourTemplate(el, i);
        });

        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}

function initTourElemListener(tourWrap: HTMLDivElement): void {
    tourWrap.addEventListener('click', (ev: MouseEvent) => {
        const targetItem: HTMLElement = ev.target as HTMLElement;
        const parentItem: HTMLElement = targetItem?.parentNode as HTMLElement;
        let realTarget: HTMLElement;

        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }

        if (realTarget) {
            const dataIndex: string = realTarget.getAttribute('data-tour-item-index');
            openModal('order', Number(dataIndex));
        }
    });
}