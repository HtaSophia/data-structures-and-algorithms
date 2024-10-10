export default class Stack {
    #stack = {};
    #count = 0;

    push(item) {
        this.#stack[this.#count] = item;
        this.#count++;
    }

    pop() {
        const element = this.#stack[this.#count - 1];
        delete this.#stack[this.#count - 1];
        this.#count--;
        return element;
    }

    peek() {
        return this.#stack[this.#count - 1];
    }

    isEmpty() {
        return this.#count === 0;
    }

    size() {
        return this.#count;
    }

    clear() {
        this.#count = 0;
        this.#stack = {};
    }

    toString() {
        if (this.isEmpty()) return "";

        let stackString = `${this.#stack[0]}`;
        for (let index = 1; index < this.#count; index++) {
            stackString += `, ${this.#stack[index]}`;
        }

        return stackString;
    }
}
