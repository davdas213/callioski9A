input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
