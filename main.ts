let Orange2: number[] = []
let Yellows2: number[] = []
let b = 0
let g = 0
let r = 0
let White2: number[] = []
let factor = 0
let Reds2: number[] = []
let Orange: number[] = []
let White: number[] = []
let Yellows: number[] = []
pixel.setColor(0xff0000)
let strip = light.createStrip(pins.A2, 30)
let pause2 = true
for (let index = 0; index < Math.randomRange(3, 7); index++) {
    Reds2.push(light.rgb(20 * Math.randomRange(3, 10), 0, 0))
}
for (let index = 0; index < Math.randomRange(3, 7); index++) {
    factor = Math.randomRange(3, 10)
    White2.push(light.rgb(20 * factor, 20 * factor, 20 * factor))
}
for (let index = 0; index < Math.randomRange(3, 7); index++) {
    factor = Math.randomRange(3, 10)
    r = 229
    g = 236
    b = 28
    Yellows2.push(light.rgb(r / factor, g / factor, b / factor))
}
for (let index = 0; index < Math.randomRange(3, 7); index++) {
    factor = Math.randomRange(3, 10)
    r = 255
    g = 128
    b = 0
    Orange2.push(light.rgb(r / factor, g / factor, b / factor))
}
pause(1000)
pause2 = false
forever(function () {
    if (!(pause2)) {
        strip.setPixelColor(Math.randomRange(0, 29), Reds2[Math.randomRange(1, Reds2.length)])
        pause(50 + Math.randomRange(0, 10))
    }
})
forever(function () {
    if (!(pause2)) {
        strip.setPixelColor(Math.randomRange(0, 29), White2[Math.randomRange(1, White2.length)])
        pause(50 + Math.randomRange(0, 10))
    }
})
forever(function () {
    if (!(pause2)) {
        strip.setPixelColor(Math.randomRange(0, 29), Orange2[Math.randomRange(1, Orange2.length)])
        pause(50 + Math.randomRange(0, 10))
    }
})
forever(function () {
    if (!(pause2)) {
        strip.setPixelColor(Math.randomRange(0, 29), Yellows2[Math.randomRange(1, Yellows2.length)])
        pause(50 + Math.randomRange(0, 10))
    }
})
