class ArrayAdapterIterator {
    private array: ArrayAdapter;
    private index: number;

    constructor(array: ArrayAdapter, index = 0) {
        this.array = array;
        this.index = index;
    }

    public isValid(): boolean {
        if (this.array == null) return false;
        if (this.index >= this.array.length()) return false;

        return true;
    }

    public next() {
        ++this.index;
        return this.currentValue();
    }

    public prev() {
        --this.index;
        return this.currentValue();
    }

    public currentIndex() {
        return this.index;
    }

    public currentValue() {
        return this.array.at(this.index);
    }
}