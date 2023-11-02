// //1.Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.//
// const _sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let pattern= /love/gi
// const string_ = _sentence.match(pattern)
// const lengthofstring = string_.length
// console.log(lengthofstring)
// //2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction//'
// const pattern_ ='You cannot end a sentence with because because because is a conjunction'
// let pattern1=/because/gi
// const pattern2= pattern_.match(pattern1)
// const stringlength = pattern2.length
// console.log(stringlength)
// //3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).//
// const words ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// const sentence = words.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 
// 'I am a teacher, and I love teaching;. There is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30 Days Of JavaScript is also the result of love of teaching')
// console.log(sentence)
// //4.Calculate the total annual income of the person by extracting the numbers from the following text.//
// const salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// const monthlySalary = salary.substr(8,5)
// const bonus = salary.substr(42,5)
// const onlinecourse = salary.substr(66,6)

// console.log((parseInt(monthlySalary)*12)+parseInt(bonus)+(parseInt(onlinecourse)*12))

// const word1= 'dragon';
// const word2= 'python';
// let word3 = word1.includes('on') && word2.includes('on')
// let isword3 =true
// isword3
//     ? console.log('There is no "on" in both '+word1+ " and "+word2)
//     : console.log('There is  "on" in both '+word1+ " and "+word2);
// //isword3 = false
//     //? console.log('There is no "on" in both'+word1+ "and"+word2)
//     //: console.log('There is on "on" in both'+word1+ "and"+word2);  
// prompt('required text')

// const num=parseInt(prompt('what is the base'));
// const num1=parseInt(prompt('what is the height'));
// const area=(0.5*num*num1)

// console.log(area)