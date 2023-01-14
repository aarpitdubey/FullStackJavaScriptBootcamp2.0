// let myHeros = ["Thor", "Spiderman"]

// let heropower = {
//     Thor: "hammer",
//     Spiderman: "sling",

//     getSpiderPower: function() {
//         console.log('Spidy poer is ${this.spiderman}');
        
//     }
// }

// inheritance

const User = {
    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

// Goal: get true length of string

String.prototype.truelength = function () {
    console.log(`truelength is: ${this.trim().length}`)
}
