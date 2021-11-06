input.onButtonPressed(Button.A, function () {
    basic.showString("" + (t))
})
let t = 0
t = 0
led.setBrightness(63)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        . . # . .
        # . . . #
        . . # . .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . # . .
        # . . . #
        . . # . .
        `)
}
basic.forever(function () {
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    t = pins.analogReadPin(AnalogPin.P0) - 623
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (t < 0) {
        t = 0
    }
    led.plotBarGraph(
    t,
    400
    )
    basic.pause(2000)
    if (t < 180) {
        basic.showLeds(`
            # # # # #
            . . # . .
            # . . . #
            . . # . .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
