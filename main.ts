basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    motors.dualMotorPower(Motor.M0, 100)
    led.toggle(0, 0)
    if (true) {
        led.toggle(0, 0)
    } else {
        led.unplot(0, 0)
    }
})
