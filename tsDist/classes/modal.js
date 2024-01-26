"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        Modal.modals.push(this);
        this.id = id || String(Modal.modals.length);
    }
    Modal.prototype.open = function (template) {
        var _this = this;
        this.container = document.createElement('div');
        this.container.innerHTML = template;
        this.container.id = this.id;
        this.container.setAttribute('modal-id', this.id);
        this.container.classList.add('modal-element');
        var closeBtn = this.container.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.remove();
            });
        }
        document.body.appendChild(this.container);
    };
    ;
    Modal.prototype.remove = function () {
        var _this = this;
        this.container.remove();
        Modal.modals = Modal.modals.filter(function (e) { return e === _this; });
    };
    //метод findIndex для поиска индекса элемента в массиве.
    //Это уменьшит необходимость дополнительного сравнения
    Modal.removeById = function (id) {
        var _a;
        var index = Modal.modals.findIndex(function (e) { return e.id === id; });
        if (index !== -1) {
            Modal.modals[index].remove();
            Modal.modals.splice(index, 1);
        }
        else {
            (_a = Modal.modals[Modal.modals.length - 1]) === null || _a === void 0 ? void 0 : _a.remove();
        }
    };
    Modal.removeAll = function () {
        Modal.modals.forEach(function (e) { return e.remove(); });
    };
    Modal.modals = [];
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map