

 export class Modal {
  private readonly id: string;
  private container: HTMLDivElement;
  public static modals: Modal[] = [];

  constructor(id: string = null) {
    Modal.modals.push(this);
    this.id = id || String(Modal.modals.length);
  }

  public open(template: string): void {
    this.container = document.createElement('div');
    this.container.innerHTML = template;
    this.container.id = this.id;
    this.container.setAttribute('modal-id', this.id);
    this.container.classList.add('modal-element');
    const closeBtn: Element = this.container.querySelector('.close-modal');
    if (closeBtn) {
      closeBtn.addEventListener("click", (event: Event) => {
        event.stopPropagation();
        this.remove();
      })
    }
    document.body.appendChild(this.container);
  };

  public remove(): void {
    this.container.remove();
    Modal.modals = Modal.modals.filter((e: Modal) => e === this);
}


//метод findIndex для поиска индекса элемента в массиве.
//Это уменьшит необходимость дополнительного сравнения

public static removeById(id: string): void {
  const index = Modal.modals.findIndex((e: Modal) => e.id === id); 
  if (index !== -1) {
      Modal.modals[index].remove();
      Modal.modals.splice(index, 1);
  } else {
      Modal.modals[Modal.modals.length - 1]?.remove();
  }
}

  public static removeAll(): void {
    Modal.modals.forEach((e: Modal) => e.remove());
  }
}

  