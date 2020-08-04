
/**
 * 
 *  Async Apis
 * 
 *  way-1 : Promise API  ( ES6 )
 * 
 */

// 
//-------------------------------------
// producer
//-------------------------------------
// const producer = {
//     getItem() {
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("ITEM")
//             }, 3000);
//         });
//         return promise;
//     }
// }
//-------------------------------------
// consumer
//-------------------------------------
// const consumer = {
//     doSomething() {
//         const promise = producer.getItem(); //
//         promise
//             .then(item => {
//                 console.log(item)
//             })
//     }
// }
// consumer.doSomething()

//--------------------------------------------------------------------------


/**
 * 
 *  Async Apis
 * 
 *  way-2 : Rxjs  ==> third-party lib based on reactive programming
 * 
 */

const { Subject } = require("rxjs")


// 
//-------------------------------------
// producer
//-------------------------------------
const producer = {
    getItem() {
        const observableStream = new Subject();
        setInterval(() => {
            observableStream.next("ITEM") // push / publish new data/event
        }, 1000)
        return observableStream;
    }
}
//-------------------------------------
// consumer
//-------------------------------------
const consumer = {
    doSomething() {
        const observableStream = producer.getItem(); //
        observableStream
            .subscribe(item => {
                console.log(item)
            })
    }
}
consumer.doSomething()

//--------------------------------------------------------------------------



