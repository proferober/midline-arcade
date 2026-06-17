//% weight=100 color=#FF6B6B icon="\u2500"
namespace MidLine {
    let _lineSprite: Sprite = null
    let _rectSprite: Sprite = null

    //% blockId="midline_show"
    //% block="show midline color $color"
    //% color.shadow="colorindexpicker"
    export function showMidline(color: number): void {
        if (_lineSprite) _lineSprite.destroy()
        let img = image.create(160, 1)
        img.fill(color)
        _lineSprite = sprites.createProjectile(img, 0, 0, 0)
        _lineSprite.setPosition(80, 60)
    }

    //% blockId="midline_horizontal"
    //% block="show horizontal line at y $y color $color"
    //% y.min=0 y.max=119
    //% color.shadow="colorindexpicker"
    export function showHorizontalLine(y: number, color: number): void {
        if (_lineSprite) _lineSprite.destroy()
        let img = image.create(160, 1)
        img.fill(color)
        _lineSprite = sprites.createProjectile(img, 0, 0, 0)
        _lineSprite.setPosition(80, y)
    }

    //% blockId="midline_rect"
    //% block="show white rectangle from x $x1 y $y1 to x $x2 y $y2"
    //% x1.min=0 x1.max=159
    //% y1.min=0 y1.max=119
    //% x2.min=0 x2.max=159 x2.defl=100
    //% y2.min=0 y2.max=119 y2.defl=100
    export function showWhiteRectangle(x1: number, y1: number, x2: number, y2: number): void {
        if (_rectSprite) _rectSprite.destroy()
        let left = Math.min(x1, x2)
        let top = Math.min(y1, y2)
        let w = Math.abs(x2 - x1) + 1
        let h = Math.abs(y2 - y1) + 1
        let img = image.create(w, h)
        img.fill(15)
        _rectSprite = sprites.createProjectile(img, 0, 0, 0)
        _rectSprite.setPosition(left + Math.floor(w / 2), top + Math.floor(h / 2))
    }
}
