const people = ['Joker', 'Jay-z', 'Ghandi', 'Robert Downey Junior']
const quotes = ['The only sensible way to live in this world is without rules.', 'Happiness is when what you think, what you say, and what you do are in harmony.', 'The weak can never forgive. Forgiveness is the attribute of the strong.']
let date = Math.ceil(Math.random() * 2000)


function randomize(argument){
    return argument[Math.floor(Math.random() * (argument.length))]
}

function generateRandomMessage(){
    return randomize(quotes) + '" - ' + randomize(people) + ", " + date
}

console.log(generateRandomMessage())

