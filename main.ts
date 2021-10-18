control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    modules.relay1.setClosed(false)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    modules.relay1.setClosed(true)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    myModules.relay2.setClosed(false)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    myModules.relay2.setClosed(true)
})
radio.onReceivedValue(function (name, value) {
    if (name == "ButtonA") {
        if (value == 1) {
            modules.relay1.setClosed(true)
        } else if (value == 0) {
            modules.relay1.setClosed(false)
        }
    } else if (name == "ButtonB") {
        if (value == 1) {
            myModules.relay2.setClosed(true)
        } else if (value == 0) {
            myModules.relay2.setClosed(false)
        }
    }
})
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.forever(function () {
	
})
