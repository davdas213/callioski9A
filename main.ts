basic.forever(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    motors.dualMotorPower(Motor.M0, 100)
})
