"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initToursDivElements = exports.getTours = void 0;
var tours_1 = require("../../templates/tours");
var modalService_1 = require("@services/modal/modalService");
// запрос на получение списка туров - Определить типы (возвращающие и для параметров)
function getTours() {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')
        .then(function (response) { return response.json(); });
}
exports.getTours = getTours;
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector('.main-app');
        var tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        // init click for modal
        initTourElemListener(tourWrap);
        var rootElementData_1 = '';
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_1.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        rootElement.appendChild(tourWrap);
    }
}
exports.initToursDivElements = initToursDivElements;
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute('data-tour-item-index');
            (0, modalService_1.openModal)('order', Number(dataIndex));
        }
    });
}
//# sourceMappingURL=tours.js.map