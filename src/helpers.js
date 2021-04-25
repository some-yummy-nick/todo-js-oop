export function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.entries(props).map(([key, value]) => {
        if(value){
            element.setAttribute(key, value)
        }
      });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

export function save(data) {
    const string = JSON.stringify(data);

    localStorage.setItem('todos', string);
}

export function load() {
    const string = localStorage.getItem('todos');

    return JSON.parse(string);
}
