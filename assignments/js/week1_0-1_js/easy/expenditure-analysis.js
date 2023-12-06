/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result =[]
  let totalCategory = new Map()
  transactions.map((item)=>{
    
    const category = item['category']
    
    if(!totalCategory.has(category)){
      
      totalCategory.set(category,{'category': category , 'totalSpent':item['price']})
      
      
    }else {
      
      const updatePrice = totalCategory.get(category)['totalSpent'] +item['price']

      totalCategory.set(category,{'category':category,'totalSpent':updatePrice})
    }
  
  })




  
  totalCategory.forEach((item)=>{
    
    result.push(item)
  })
  return result;

}

module.exports = calculateTotalSpentByCategory;

