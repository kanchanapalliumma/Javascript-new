//1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//     firstName: 'Kanchanapalli',
//     lastName: 'Anusha',
//     incomes: [],
//     expenses: [],

//     addIncome({ description, amount }) {
//         if (typeof amount !== "number" || amount <= 0) {
//             console.log("This is an invalid amount");
//             return;
//         }
//         this.incomes.push({ description, amount });
//     },

//     addExpense({ description, amount }) {
//         if (typeof amount !== "number" || amount <= 0) {
//             console.log("This is an invalid amount");
//             return;
//         }
//         this.expenses.push({ description, amount });
//     },

//     totalIncome() {
//         let total = 0;
//         for (let income of this.incomes) {
//             total += income.amount; // Access 'amount' property
//         }
//         return total;
//     },

//     totalExpenses() {
//         let total = 0;
//         for (let expense of this.expenses) {
//             total += expense.amount; // Access 'amount' property
//         }
//         return total;
//     },

//     accountInfo() {
//         return `I am ${this.firstName} ${this.lastName}. My total incomes are ${this.totalIncome()} and my total expenses are ${this.totalExpenses()}`;
//     },

//     accountBalance() {
//         let total = this.totalIncome() - this.totalExpenses();
//         return total;
//     }
// };

// personAccount.addIncome({ description: 'salary', amount: 6000 });
// personAccount.addExpense({ description: 'vegetables', amount: 200 });

// console.log(personAccount.accountInfo());
// console.log(personAccount.accountBalance());


// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ]

    // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
    // function signUp(Newuser){
    //     let userExit=0
    //     for(user of users){
    //         if (user.email===Newuser.email){
    //             userExit=true
    //         }
    //     }
    //     if (userExit){
    //         console.log("User is already exitst")
    //     }
    //     else{
    //         users.push(Newuser)
    //         console.log("Newuser is added to users")
    //     }
    // }
    // const NewUser={
    //     _id:'12kdjnj',
    //     username:"kanchana-21",
    //     email:'umasherma23@navgurukul.org',
    //     password:'umasherma',
    //     createdAt:'20/11/2023 09:00 Am',
    //     isLoggedIn:true
    // }
    // signUp(NewUser)

    //b.Create a function called signIn which allows user to sign in to the application
    // function signIn(Newuser){
    //     let userExit=0
    //     for(user of users){
    //         if (user.email===NewUser.email && user.password === NewUser.password){
    //             userExit=true
    //             break;
    //         }
    //     }
    //     if(userExit){
    //         user.isLoggedIn=true
    //         console.log("you are already sign into the application")
    //     }else{
    //         console.log('You are password or email wrong')
    //     }
    // }
    // const NewUser={
    //     _id:'12kdjnj',
    //     username:"kanchana-21",
    //     email:'umasherma23@navgurukul.org',
    //     password:'umasherma',
    //     createdAt:'20/11/2023 09:00 Am',
    //     isLoggedIn:true
    // }
    // signIn(NewUser)
      

    //II-1.The products array has three elements and each of them has six properties.
    //a. Create a function called rateProduct which rates the product 
    
    // const products = [
    //     {
    //       _id: 'eedfcf',
    //       name: 'mobile phone',
    //       description: 'Huawei Honor',
    //       price: 200,
    //       ratings: [
    //         { userId: 'fg12cy', rate: 5 },
    //         { userId: 'zwf8md', rate: 4.5 }
    //       ],
    //       likes: []
    //     },
    //     {
    //       _id: 'aegfal',
    //       name: 'Laptop',
    //       description: 'MacPro: System Darwin',
    //       price: 2500,
    //       ratings: [],
    //       likes: ['fg12cy']
    //     },
    //     {
    //       _id: 'hedfcg',
    //       name: 'TV',
    //       description: 'Smart TV:Procaster',
    //       price: 400,
    //       ratings: [{ userId: 'fg12cy', rate: 5 }],
    //       likes: ['fg12cy']
    //     }
    //   ]
    // function rateProduct(productId,Produtusername,productrate){
    //     let productcheck=false
    //     for(product of products){
    //         if(product._id===productId){
    //             productfound=true
    //             let userrated=false
    //             for(const rating of product.ratings){
    //                 if(rating.userId===Produtusername){
    //                     rating.rate=productrate
    //                     break;
    //                 }
    //             }
    //             if (!userrated){
    //                 product.ratings.push({userId:Produtusername,rate:productrate})
    //             }
    //             console.log(`${productrate}is the rate for the product ${product.name}`)

    //         }   
    //     }
    //     if (!productcheck){
    //         console.log('product not found')
    //     }
       
    // }
    // rateProduct('123kffff','computer',4)


    //II-b.Create a function called averageRating which calculate the average rating of a product
// function averageRating(productId) {
//     let ratingTotal = 0;
//     let numberOfRatings = 0;

//     for (let product of products) {
//         if (product._id === productId && product.ratings.length > 0) {
//             numberOfRatings = product.ratings.length;
//             for(const rating of product.ratings) {
//                 ratingTotal += rating.rate;
//             }
//             break; // Breaks after calculating ratings for the specified product
//         }
//     }

//     if (numberOfRatings > 0) {
//         return ratingTotal / numberOfRatings;
//     } else {
//         return 0;
//     }
// }
// const productId = 'eedfcf';
// const productAverageRating = averageRating(productId);
// console.log(`The average rating for product with ID ${productId} is: ${productAverageRating}`)

//2.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked
// function  likeProduct(likedproduct,liked){
//     for (let product of products){
//         if(product._id===likedproduct){
//             const uma=product.likes.length
//             const index=product.likes.indexOf(liked)
//             if(uma > 0){
//                 product.likes.splice(index,1)
//                 // product.likes.remove(liked)
//                 console.log('Already existed')
//             }
//             else{
//                 product.likes.push(liked)
//             }
//         }else{
//             console.log("not a product")
//         }
//     }
//     return products
// }
// console.log(likeProduct('hedfcg','vhbhbhe'))

