input.onButtonPressed(Button.A, function () {
    celsius = input.temperature()
    if (celsius == 10) {
        basic.showString("" + (celsius))
        basic.showString("Ski time!")
    } else if (celsius == 20) {
        basic.showString("" + (celsius))
        basic.showString("Picnic time!")
    } else if (celsius == 30) {
        basic.showString("" + (celsius))
        basic.showString("Beach time!")
    } else if (celsius == 40) {
        basic.showString("" + (celsius))
        basic.showString("It is better to stay at home")
    } else {
        basic.showString("" + (celsius))
    }
    basic.clearScreen()
})
let celsius = 0
celsius = randint(10, 100)
