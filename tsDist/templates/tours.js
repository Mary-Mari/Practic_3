"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTourTemplate = void 0;
// указать возвращающий тип и тип для параметра
function getTourTemplate(obj, i) {
    return " \n       <div  data-tour-item-index=".concat(i, " class=\"tour-block\">\n           <h2>").concat(obj.name, "</h2>\n           <img class='tour-pic' src=\"/dist/").concat(obj.img, "\" alt=\"").concat(obj.name, "\"/>\n           <div class=\"ticket-description\">").concat(obj.description, "</div>\n           <p>").concat(obj.price, "</p>\n       </div>\n    ");
}
exports.getTourTemplate = getTourTemplate;
//# sourceMappingURL=tours.js.map