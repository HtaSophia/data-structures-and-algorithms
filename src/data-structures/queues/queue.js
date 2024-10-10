export default class Queue {
    #queue = {};
    #count = 0;
    #lowestIndex = 0;

    enqueue(element) {
        this.#queue[this.#count] = element;
        this.#count++;
    }

    dequeue() {
        if (this.isEmpty()) return;

        const element = this.#queue[this.#lowestIndex];
        delete this.#queue[this.#lowestIndex];
        this.#lowestIndex++;

        return element;
    }

    peek() {
        return this.#queue[this.#lowestIndex];
    }

    isEmpty() {
        return this.#count === this.#lowestIndex;
    }

    size() {
        return this.#count - this.#lowestIndex;
    }

    clear() {
        this.#queue = {};
        this.#count = 0;
        this.#lowestIndex = 0;
    }

    toString() {
        if (this.isEmpty()) return "";

        let queueString = `${this.peek()}`;

        for (let index = this.#lowestIndex + 1; index < this.#count; index++) {
            queueString += `,${this.#queue[index]}`;
        }

        return queueString;
    }
}
