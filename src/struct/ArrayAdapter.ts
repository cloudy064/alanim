class ArrayAdapter {
    private elements: Array<any>;

    constructor(elements: Array<any>) {
        this.elements = elements;
    }

    public swap(i, j) {
        if (i == j) return;

        let temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }

    public length() {
        return this.elements.length;
    }

    public at(i) {
        if (i >= this.length()) {
            throw new Error('out of range');
        }

        return this.elements[i];
    }

    public getIterator(index = 0): ArrayAdapterIterator {
        return new ArrayAdapterIterator(this, index);
    }
}
