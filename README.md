# turtlecanvas

- a simple turtle graphics library in JavaScript
- canvas: (0, 0)-(1000, 1000)
- [demo applications](https://code4fukui.github.io/turtlecanvas/)

## API

|API|feature|機能|
|-|-|-|
|forward(u)|forward u|uだけ進む|
|backward(u)|backward u|uだけ戻る|
|right(dth = 90)|turn right dth degree|dth度、左に曲がる|
|left(dth = 90)|turn left dth degree|dth度、左に曲がる|
|penUp()|disable draw|ペンを上げる|
|penDown()|enable draw|ペンを下げる|
|clear()|clear the screen|画面を消去する|
|sleep(n)|wait n milli seconds|nミリ秒待つ|
|random(n)|return a integer value from 0 up to (but not including) n|0からn未満のランダムな値を返す|
|hue(h)|change the pen hue degree(0-360)|ペンの色相(0-360)を変更|
|satu(s)|change the pen saturation(0-100)|ペンの彩度(0-100)を変更|
|light(l)|change the pen lightness(0-100)|ペンの明度(0-100)を変更|
|getX()|get current position x|現在位置X座標を取得(0-1000)|
|getY()|get current position y|現在位置Y座標を取得(0-1000)|
|getAngle()|get current angle(degree)|現在角度を取得(degree)|
|includes(x = 0, y = 0, w = 2000, h = 2000)|check to include it|範囲内に居るかどうか判定|

## demo in Wirth

```html
<script type="module" src="https://code4fukui.github.io/Wirth/web.js"></script>
<script type="text/wirth">
function forward, hue, rotate, sleep from "https://code4fukui.github.io/turtlecanvas/turtlecanvas.js"

for i = 0 to 1000
  forward(i)
  hue(i / 3)
  sleep(1)
  right(100 + i / 100)
next
</script>
```
[Wirth](https://github.com/code4fukui/Wirth)
