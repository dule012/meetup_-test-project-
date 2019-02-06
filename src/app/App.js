import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MeetUpCities from './pages/MeetUpCities'
import MeetUpInfo from './pages/MeetUpInfo'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:meetupCity/:number" component={MeetUpInfo} />
        <Route path="/:meetupCity" component={MeetUpCities} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;


// String.prototype.reverse = function () {
//   var reversedString = ''
//   for (var i = this.length - 1; i > -1; i--) {
//     reversedString += this[i]
//   }
//   return reversedString
// }


// const reverse = (string) => {
//   let reversedString = ''

//   for (let i = string.length - 1; i > -1; i--) {
//     reversedString += string[i]
//   }
//   console.log(reversedString)
//   return reversedString
// }

// String.prototype.numberOfWords = function () {
//   var counter = 0
//   for (var i = 0; i < this.length; i++) {
//     if (this[i]) {

//     }
//   }
// }


// const numberOfWords = (param) => {
//   let string = ' ' + param
//   let countWords = 0
//   // 'fgas?abc!jkl.a'
//   const notLetter = '@#$%^&*()_+~|<>{}"-=[];\'/\\`1234567890*'
//   const signsOfInterpunctions = '.,!?:'
//   let k
//   for (let i = 0; string.length > 0; i++) {
//     console.log(`${string}`)
//     console.log(`IIII: ${i}`)
//     if (notLetter.indexOf(string[i]) === -1 && string[i - 1] === ' ') {
//       for (let j = i + 1; j < string.length && string[j] != undefined; j++) {
//         console.log(`${string[j]},        JOT: ${j}`)
//         if (notLetter.indexOf(string[j]) !== -1) {
//           if (j === 0) {
//             string = string.slice(j + 1)
//             console.log(`${string[j]}at ${j}`)
//             console.log(`found not letter and new string: ${string}`)
//             i = -1
//             break
//           } else {
//             string = string.slice(j + 1)
//             console.log(`NEW STRING ${string}`)
//             countWords++
//             i = -1
//             break
//           }
//         }
//         k = j
//       }
//       console.log(`${string} je ${string.length == 1}`)
//       if (string.length === 1) {
//         console.log(countWords)
//         return countWords
//       } else if (k === string.length) {
//         countWords++
//         console.log(countWords)
//         return countWords
//       }
//     } else {
//       string = string.slice(i + 1)
//     }
//   }
//   console.log(countWords)
//   return countWords
// }
// numberOfWords('fgas?abc!jkl.aa..')











