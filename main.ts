input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.rgb(255, 103, 23))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(255)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(200)
    strip.show()
})
