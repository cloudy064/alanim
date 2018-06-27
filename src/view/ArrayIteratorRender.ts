class ArrayIteratorRenderer extends egret.DisplayObjectContainer {
    private iterator: ArrayAdapterIterator;
    private arrayRenderer: ArrayRenderer;
    private arrow: egret.Shape;

    constructor(iterator: ArrayAdapterIterator, arrayRenderer: ArrayRenderer) {
        super();

        this.iterator = iterator;
        this.arrayRenderer = arrayRenderer;
    }

    public render() {
        let index = this.iterator.currentIndex();
        let arrowPoint = this.arrayRenderer.getArrowPointAt(index);
        this.arrow = new egret.Shape();
        this.arrow.graphics.lineStyle(2, 0xffffff);
        this.arrow.graphics.moveTo(arrowPoint.x, arrowPoint.y);
        this.arrow.graphics.lineTo(arrowPoint.x, arrowPoint.y - 50);
        this.arrow.graphics.moveTo(arrowPoint.x, arrowPoint.y);
        this.arrow.graphics.lineTo(arrowPoint.x - 10, arrowPoint.y - 20);
        this.arrow.graphics.moveTo(arrowPoint.x, arrowPoint.y);
        this.arrow.graphics.lineTo(arrowPoint.x + 10, arrowPoint.y - 20);
        this.addChild(this.arrow);
    }

    public moveToNext() {
        this.iterator.next();
        if (!this.iterator.isValid()) return;

        let arrowPoint = this.arrayRenderer.getArrowPointAt(this.iterator.currentIndex());
        let anim = egret.Tween.get(this.arrow);
        anim.to({
            x: this.arrayRenderer.elementWidth
        }, 400);
    }
}