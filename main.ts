input.onButtonPressed(Button.A, function () {
    radio.sendString("forwards")
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    if (bitbot.getModel() == bitbot.BBModels(BBModel.Classic)) {
        if (receivedString == "forwards") {
            bitbot.go(BBDirection.Forward, 60)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (receivedString == "backwards") {
            bitbot.go(BBDirection.Reverse, 60)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (receivedString == "left") {
            bitbot.rotate(BBRobotDirection.Left, 60)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (receivedString == "right") {
            bitbot.rotate(BBRobotDirection.Right, 60)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (receivedString == "reset") {
            bitbot.stop(BBStopMode.Brake)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("backwards")
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("reset")
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(142)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . . . . .
    . . . . .
    `)
