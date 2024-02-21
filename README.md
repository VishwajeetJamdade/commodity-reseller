# commodity-reseller
This test measures theoretical knowledge of the Angular framework and practical programming skills in the TypeScript language.

Create a web application in Angular with the following features. 

- The web page must contain 2 routes A and B
- On route A the following problem must be solved

You are a commodity reseller, you receive in advance a list of the prices of the commodities.
This list represents the price per day. You need to calculate the maximum profit selecting the buy price and the sell price and calculate the profit with the formula: price sell - price buy.
You need to return the maximum profit, the index and value for the buy price and the index and value for the sell price. 

Rules:
1) A list of integer numbers as parameter
2) You can't change the order of the list.
3) You can buy from the first position to the penultimate position.
4) You can't buy the last day because you always need a following day to sell.
5) You can sell from the second to the last day. You can't sell the first day because you haven't buy anything yet.
6) You must always sell forward. Meaning that if you select buy price in the position N the sell price can't be in position N-i.
7) Return the maximum profit, the buy price and index and the sell price and index.

8) Only one iteration of the arrangement should be made.


Prices per day [2500, 30, 200, 6, 100, 3], but you can choose any other as well.


- Add a button on route A that runs the algorithm and displays the result on route B
