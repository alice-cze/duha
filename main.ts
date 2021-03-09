input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(200)
    strip.show()
})
