num = 0
def game2():
    global num
    for index in range(2):
        music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.pause(200)
    music.stop_all_sounds()
    num = randint(2, 12)
    if num == 2:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            """)
    elif num == 3:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif num == 4:
        basic.show_leds("""
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
    elif num == 5:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif num == 6:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif num == 7:
        basic.show_leds("""
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . . # . .
            """)
    elif num == 8:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif num == 9:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif num == 10:
        basic.show_leds("""
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            """)
    elif num == 11:
        basic.show_leds("""
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            """)
    else:
        basic.show_leds("""
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            """)
    if num != 7:
        music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
            music.PlaybackMode.UNTIL_DONE)
    else:
        music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
            music.PlaybackMode.UNTIL_DONE)

def on_gesture_shake():
    game2()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    game2()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
