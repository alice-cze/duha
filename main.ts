input.onButtonPressed(Button.A, function () {
    pocitadlo += -1
    pocitadlo = Math.constrain(pocitadlo, 0, 5)
})
input.onSound(DetectedSound.Loud, function () {
    if (pocitadlo != 0) {
        pocitadlo = 0
    } else {
        pocitadlo = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    pocitadlo = 5
})
input.onButtonPressed(Button.B, function () {
    pocitadlo += 1
    pocitadlo = Math.constrain(pocitadlo, 0, 5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pocitadlo = 0
})
let pocitadlo = 0
input.setSoundThreshold(SoundThreshold.Loud, 111)
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.setBrightness(255)
pocitadlo = 0
strip.clear()
basic.forever(function () {
    basic.showNumber(pocitadlo)
    if (pocitadlo == 0) {
        strip.clear()
        strip.show()
    }
    if (pocitadlo == 1) {
        strip.showColor(neopixel.rgb(255, 103, 23))
    }
    if (pocitadlo == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (pocitadlo == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
    if (pocitadlo == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
    if (pocitadlo == 5) {
        strip.showRainbow(1, 360)
        strip.rotate(1)
    }
})
