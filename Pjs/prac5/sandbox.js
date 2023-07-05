// const scores = [10, 20, 30, 40, 50, 60];
                                            // filter method in an  array

// const filteredScores = scores.filter((score) => {
//     return score > 30;
// });
// console.log(filteredScores);

// const users = [
//     {name: 'sumit', premium: true},
//     {name: 'Debs', premium: true},
//     {name: 'Arnab', premium: false},
//     {name: 'Bips', premium: true}
// ];

// const filterdArry = users.filter(user => user.premium);
// console.log(filterdArry);



                                            //map method in an array

// const products = [
//     {name:'abc', price: 100},
//     {name:'def', price: 120},
//     {name:'ghi', price: 85},
//     {name:'jkl', price: 160},
//     {name:'nmo', price: 70}
// ];
// const filterproducts = products.map( (product) => {
//     // console.log(product.price);
//     if(product.price > 100){
//         return {name: product.name, price: product.price/2};
//     } else {
//         return product;
//     }
    
//     // if(product.price > 100){
//     //     return product.price / 2;
//     //     console.log(filterproducts);
//     // }
// });
// console.log(filterproducts);

                                            //Reduce method


// const products = [
//     {name:'abc', price: 100},
//     {name:'def', price: 120},
//     {name:'abc', price: 85},
//     {name:'jkl', price: 160},
//     {name:'abc', price: 70}
// ];

// const RM = products.reduce((acc, curr) => {
//     if(curr.name === 'abc'){
//         acc += curr.price;
//     }
//     return acc;
// }, 0);
// console.log(RM);

                        // Find method
                        //After the first condition is satisfied it doesnt iterate the rest of the array

const scores =[10, 50, 47, 67, 89];
const FM = scores.find((score) => {
    return score > 50; 
})
console.log(FM);