let letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(" ")
let rNum = Math.ceil(Math.random() * 2000)

generateEmail = (number, domain, country) =>{
    let email = []
    for(let i = 0; i < number; i++){
        if( i < (number - 1)){
            email.push(letters[Math.ceil(Math.random() * letters.length - 1)])
        }else{
            email.push(rNum)
        }
    }
    email.push("@" + domain + "." + country.split("").filter(e => country.indexOf(e) < 2).join(''))
    console.log(email.join(''))
}





generateEmail(10, 'gmail', 'usa')
