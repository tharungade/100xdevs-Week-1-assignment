/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var totalSpentByCategory = {};
  for(let transaction of transactions)
  {
    totalSpentByCategory[transaction["category"]] = transaction["price"] + (transaction["category"] in totalSpentByCategory ? totalSpentByCategory[transaction["category"]] : 0);
  }

  var result = []
  for(let i in totalSpentByCategory)
  {
    result.push({category : i , totalSpent : totalSpentByCategory[i]});
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
