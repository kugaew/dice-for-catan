let num = 0
function game2 () {
    for (let index = 0; index < 2; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(200)
    }
    music.stopAllSounds()
    num = randint(2, 12)
    if (num == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (num == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (num == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 7) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
    } else if (num == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (num == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (num != 7) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    }
}
input.onGesture(Gesture.Shake, function () {
    game2()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game2()
})
