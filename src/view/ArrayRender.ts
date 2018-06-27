class ArrayRenderer extends egret.DisplayObjectContainer {
    private array: ArrayAdapter;
    private elementText: Array<egret.TextField> = new Array();

    constructor(array: ArrayAdapter) {
        super();

        this.array = array;
    }

    public render() {
        let item_length = 100;
        let total_length = item_length * this.array.length();
        let offset_x = (this.parent.width - total_length) / 2;

        let rect = new egret.Shape();
        rect.graphics.lineStyle(2, 0xffffff);
        rect.graphics.drawRect(offset_x, (this.parent.height - item_length) / 2, total_length, item_length);
        this.addChild(rect);

        for (let i = 1; i < this.array.length(); ++i) {
            let line = new egret.Shape();
            line.graphics.lineStyle(2, 0xffffff);
            line.graphics.moveTo(0, 0);
            line.graphics.lineTo(0, item_length);
            line.x = offset_x + item_length * i;
            line.y = (this.parent.height - item_length) / 2;
            this.addChild(line);
        }

        for (let i = 0; i < this.array.length(); ++i) {
            let text = new egret.TextField();
            text.x = offset_x + item_length * i;
            text.y = (this.parent.height - item_length) / 2;
            text.width = item_length;
            text.height = item_length;
            text.textAlign = egret.HorizontalAlign.CENTER;
            text.verticalAlign = egret.VerticalAlign.MIDDLE;
            text.text = `${this.array.at(i)}`;
            text.textColor = 0xffffff;
            text.size = 24;

            this.elementText.push(text);
            this.addChild(text);
        }
    }
}