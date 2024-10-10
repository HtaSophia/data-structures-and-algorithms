export default class Deque {
    #deque = {};
    #count = 0;
    #lowestIndex = 0;

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.#lowestIndex > 0) {
            this.#lowestIndex--;
            this.#deque[this.#lowestIndex] = element;
        } else {
            for (let index = this.#count; index > this.#lowestIndex; index--) {
                const previousElement = this.#deque[index - 1];
                this.#deque[index] = previousElement;
            }

            this.#deque[this.#lowestIndex] = element;
            this.#count++;
        }
    }

    addBack(element) {
        this.#deque[this.#count] = element;
        this.#count++;
    }

    removeFront() {
        if (this.isEmpty()) return;

        const element = this.#deque[this.#lowestIndex];
        delete this.#deque[this.#lowestIndex];
        this.#lowestIndex++;

        return element;
    }

    removeBack() {
        if (this.isEmpty()) return;

        const element = this.#deque[this.#count - 1];
        delete this.#deque[this.#count - 1];
        this.#count--;

        return element;
    }

    peekFront() {
        return this.#deque[this.#lowestIndex];
    }

    peekBack() {
        return this.#deque[this.#count - 1];
    }

    isEmpty() {
        return this.#count === this.#lowestIndex;
    }

    size() {
        return this.#count - this.#lowestIndex;
    }

    toString() {
        if (this.isEmpty()) return "";

        let dequeString = `${this.peekFront()}`;

        for (let index = this.#lowestIndex + 1; index < this.#count; index++) {
            dequeString += `,${this.#deque[index]}`;
        }

        return dequeString;
    }
}
