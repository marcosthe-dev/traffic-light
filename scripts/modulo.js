define('modulo', ['text!../config.json'], function (config) {
    var modulo = {
        // function to initialize the traffic light
        init: function () {
            const redLight = document.getElementById('redLight');
            const yellowLight = document.getElementById('yellowLight');
            const greenLight = document.getElementById('greenLight');

            config = JSON.parse(config);

            this.redLight = { light: redLight, time: config.redTime };
            this.yellowLight = { light: yellowLight, time: config.yellowTime };
            this.greenLight = { light: greenLight, time: config.greenTime };

            this.changeTrafficLight({
                lights: [this.greenLight, this.yellowLight, this.redLight]
            });
        },

        changeTrafficLight: function ({ lights: [green, yellow, red] }) {
            setTimeout(() => {
                this.turnOn(green.light);
                setTimeout(() => {
                    this.turnOn(yellow.light);
                    setTimeout(() => {
                        this.turnOn(red.light);
                        setTimeout(() => {
                            this.changeTrafficLight({ lights: [green, yellow, red] });
                        }, red.time);
                    }, yellow.time);
                }, green.time);
            }, 0);
        },

        turnOff: function (light) {
            light.style.backgroundColor = config.initialColor;
        },
        
        turnOn: function (light) {
            this.turnOff(document.getElementById('redLight'));
            this.turnOff(document.getElementById('yellowLight'));
            this.turnOff(document.getElementById('greenLight'));

            if (light.id === 'greenLight') {
                light.style.backgroundColor = config.greenColor;
            }
            
            if (light.id === 'yellowLight') {
                light.style.backgroundColor = config.yellowColor;
            }

            if (light.id === 'redLight') {
                light.style.backgroundColor = config.redColor;
            }
        }
    };
    return modulo;
});
