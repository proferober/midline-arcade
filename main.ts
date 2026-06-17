//% weight=100 color=#FF6B6B icon="\u2500"
namespace MidLine {
    let _lineSprite: Sprite = null
    let _rectSprite: Sprite = null
    let _textSprite: Sprite = null

    function setupSprite(s: Sprite): void {
        s.setFlag(SpriteFlag.RelativeToCamera, true)
        s.setFlag(SpriteFlag.Ghost, true)
        s.z = scene.HUD_Z - 5
    }

    //% blockId="midline_show"
    //% block="show midline color $color"
    //% color.shadow="colorindexpicker"
    export function showMidline(color: number): void {
        if (_lineSprite) _lineSprite.destroy()
        let img = image.create(160, 1)
        img.fill(color)
        _lineSprite = sprites.create(img, 0)
        setupSprite(_lineSprite)
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
        _lineSprite = sprites.create(img, 0)
        setupSprite(_lineSprite)
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
        _rectSprite = sprites.create(img, 0)
        setupSprite(_rectSprite)
        _rectSprite.setPosition(left + Math.floor(w / 2), top + Math.floor(h / 2))
    }

    //% blockId="midline_text"
    //% block="show text $text at x $x y $y color $color"
    //% x.min=0 x.max=159
    //% y.min=0 y.max=119
    //% color.shadow="colorindexpicker"
    export function showText(text: string, x: number, y: number, color: number): void {
        if (_textSprite) _textSprite.destroy()
        if (text.length == 0) return
        let w = text.length * 6 + 2
        let h = 7
        let img = image.create(w, h)
        img.print(text, 1, 1, color, image.font5)
        _textSprite = sprites.create(img, 0)
        setupSprite(_textSprite)
        _textSprite.setPosition(x + Math.floor(w / 2), y + Math.floor(h / 2))
    }
}
