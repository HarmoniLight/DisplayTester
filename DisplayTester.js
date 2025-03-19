/**
 * @file The main script for the display test unit
 * @author Owen Plimer <owen@plimsoft.co.uk>
 * @version 1.0.0
 */

// Turn off the display, otherwise we can't use certain pins
led.enable(false)

// First, define the pins that we are using for the display.
const col0 = DigitalPin.P0;
const col1 = DigitalPin.P1;
const col2 = DigitalPin.P2;
const col3 = DigitalPin.P3;
const col4 = DigitalPin.P4;

const row0 = DigitalPin.P10;
const row1 = DigitalPin.P5;
const row2 = DigitalPin.P6;
const row3 = DigitalPin.P7;
const row4 = DigitalPin.P9;

// Now set the pins for the columns to be pull-down so that they are at GND when set to low
pins.setPull(col0, PinPullMode.PullDown);
pins.setPull(col1, PinPullMode.PullDown);
pins.setPull(col2, PinPullMode.PullDown);
pins.setPull(col3, PinPullMode.PullDown);
pins.setPull(col4, PinPullMode.PullDown);

/**
 * Sets the LED at the specifed row and col to ON
 * 
 * Yes, it is terribly inefficient, deal with it for now,
 * it will be fixed eventually in the future
 * 
 * @example <caption>Example usage of method1.</caption>
 * // Sets Light at (0, 0) to ON
 * setLight(0, 0);
 * 
 * @param {Number} row The Y coordinate of the LED to turn on
 * @param {Number} col The X coordinate of the LED to turn on
 * 
 * @version 1.0.0
 * @author Owen Plimer <owen@plimsoft.co.uk>
 */
function setLight(row: number, col: number) {
    if (row == 0) {
        pins.digitalWritePin(row0, 1);
    } else if (row == 1) {
        pins.digitalWritePin(row1, 1);
    } else if (row == 2) {
        pins.digitalWritePin(row2, 1);
    } else if (row == 3) {
        pins.digitalWritePin(row3, 1);
    } else if (row == 4) {
        pins.digitalWritePin(row4, 1);
    };

    if (col == 0) {
        pins.digitalWritePin(col0, 0);
    } else if (col == 1) {
        pins.digitalWritePin(col1, 0);
    } else if (col == 2) {
        pins.digitalWritePin(col2, 0);
    } else if (col == 3) {
        pins.digitalWritePin(col3, 0);
    } else if (col == 4) {
        pins.digitalWritePin(col4, 0);
    };
}


/**
 * Set all row pins to 0 and set all column pins to 1
 * 
 * @example <caption>Turn all LEDs off</caption>
 * // Turns all LEDs in the display off
 * turnOffAll();
 * 
 * @version 1.0.0
 * @author Owen Plimer <owen@plimsoft.co.uk>
 */
function turnOffAll() {
    pins.digitalWritePin(row0, 0);
    pins.digitalWritePin(row1, 0);
    pins.digitalWritePin(row2, 0);
    pins.digitalWritePin(row3, 0);
    pins.digitalWritePin(row4, 0);

    pins.digitalWritePin(col0, 1);
    pins.digitalWritePin(col1, 1);
    pins.digitalWritePin(col2, 1);
    pins.digitalWritePin(col3, 1);
    pins.digitalWritePin(col4, 1);
}

// Configure the display so that it is ready to be drawn on
turnOffAll();

basic.forever(function () {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            turnOffAll();
            setLight(row, col);
            basic.pause(5);
        };
    };
})
