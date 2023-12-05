/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result =[]
  transactions.map((item)=>{
    let totalCategory = new Map()
    if(!totalCategory.get(item['category'])){
      totalCategory.set(category,item['category'])
      totalCategory.set(totalSpent,item['price'])
      
    }else if(totalCategory.has(item['category'])){
      totalCategory.set(totalSpent,totalCategory.get(totalSpent)+item['price'])
    }
  })


  return [];

}

// module.exports = calculateTotalSpentByCategory;

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];
transactions.map((item)=>{
  
  console.log(item["category"]);
})

// console.log(transactions.[0].);
let k = new Map();

k.set('1', 'str1');   // a string key
k.set(1, 'num1');     // a numeric key
k.set(true, 'bool1');

// console.log(k.get(1));
if(!k.get(4)){
  k.set(4,"four")
  console.log(k);
}
if(k.has(4)){
  k.set(4,"FOUR")
}
console.log(k);