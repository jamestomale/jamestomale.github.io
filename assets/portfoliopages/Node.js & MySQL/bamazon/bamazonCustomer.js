var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "BamazonDB"
})

var showProducts = function () {
        connection.query('SELECT * FROM products', function(err, res) {
            var table = new Table({
                head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
            });

        console.log(table.toString());
        inquirer.prompt([{
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                }else {
                    return false;
                }    
              }
            }, {
            name: "stock_quantity",
            type: "input",
            message: "How many of the units of the product would you like to buy?",
            valudate: function(value) {
                if (isNan(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }    
        }]).then(function(answer) {
            var boughtId = answer.itemId - 1
            var boughtProduct = res[boughtID]
            var boughtQuantity = answer.Quantity
            if (boughtQuantity = res[boughtID].StockQuantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[boughtID].ProductName + " is: " + res[boughtID].Price.toFixed(2) * boughtQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    StockQuantity: res[boughtID].StockQuantity - boughtQuantity
                }, {
                    id: res[boughtID].id
                }], function(err, res) {
                    showProducts();
                });
            
            } else {
                console.log("Insufficient quantity!");
                showProducts();
            }
        })
    })
}

                
showProducts();