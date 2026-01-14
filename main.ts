input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
