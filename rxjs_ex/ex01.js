const { interval } = require("rxjs")

const obs = interval(1000)

const sub1 = obs.subscribe(num => {
    console.log(num)
})

const sub2 = obs.subscribe(num => {
    console.log(num * 100)
})

setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
}, 6000)