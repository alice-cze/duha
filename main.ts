let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
    strip.rotate(1)
})
