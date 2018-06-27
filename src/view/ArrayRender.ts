class ArrayRenderer extends egret.DisplayObjectContainer {
    private array: ArrayAdapter;
    private elementText: Array<egret.TextField> = new Array();
    public elementWidth: number = 100;

    constructor(array: ArrayAdapter) {
        super();

        this.array = array;
    }

    public render() {
        let totalLength = this.elementWidth * this.array.length();
        this.x = (this.parent.width - totalLength) / 2;
        this.y = (this.parent.height - this.elementWidth) / 2;

        let rect = new egret.Shape();
        rect.graphics.lineStyle(2, 0xffffff);
        rect.graphics.drawRect(0, 0, totalLength, this.elementWidth);
        this.addChild(rect);

        for (let i = 1; i < this.array.length(); ++i) {
            let line = new egret.Shape();
            line.graphics.lineStyle(2, 0xffffff);
            line.graphics.moveTo(0, 0);
            line.graphics.lineTo(0, this.elementWidth);
            line.x = this.elementWidth * i;
            line.y = 0;
            this.addChild(line);
        }

        for (let i = 0; i < this.array.length(); ++i) {
            let text = new egret.TextField();
            text.x = this.elementWidth * i;
            text.y = 0;
            text.width = this.elementWidth;
            text.height = this.elementWidth;
            text.textAlign = egret.HorizontalAlign.CENTER;
            text.verticalAlign = egret.VerticalAlign.MIDDLE;
            text.text = `${this.array.at(i)}`;
            text.textColor = 0xffffff;
            text.size = 24;

            this.elementText.push(text);
            this.addChild(text);
        }
    }

    public getArrowPointAt(i) {
        return {
            x: this.x + i * this.elementWidth + this.elementWidth / 2,
            y: this.y - 10
        };
    }

    public createIteratorRenderer(): ArrayIteratorRenderer {
        return new ArrayIteratorRenderer(this.array.getIterator(), this);
    }
}