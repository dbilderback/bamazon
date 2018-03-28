var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log("Product " + i);
            console.log("Product Name: " + results[i].product);
            console.log("Department: " + results[i].department);
            console.log("Price: $" + results[i].price + " Quanity In Stock: " + results[i].quantity);
            console.log();
        }
        inquirer
        .prompt([
            {
              name: "choice",
              type: "rawlist",
              choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].product);
                }
                return choiceArray;
              },
              message: "What would you like to purchase?"
            }
        ])
        .then(function(answer) {
            product = answer.choice;
            // Ask user for quantity
            inquirer
            .prompt({
                name:"quantity",
                type: "input",
                message: "How many would you like to purchase?"
            })
            .then(function(answer) {
                quantity = answer.quantity;
                console.log("You would like to purchase "+quantity+" of "+product);
            })
            .then(function() {
                
                for (var i =0; i < results.length; i++) {
                    if (results[i].product == product) {
                        var productId = results[i].id;
                        var productPrice = results[i].price;
                        var quantityOnHand = results[i].quantity;
                    }
                }
                if (quantity < quantityOnHand) {
                    console.log("Your Order Total For " + quantity + " " + product);
                    var orderTotal = productPrice * quantity;
                    console.log("Total " + orderTotal);
                    var newQuantity = quantityOnHand - quantity;
                    console.log(newQuantity);
                    console.log(productId);
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                            quantity: newQuantity
                            },
                            {
                            id: productId
                            }
                        ],
                        function(error) {
                            if (error) throw err;
                            console.log("Quantity Updated");
                        }
                    )
                }
                else {
                    console.log("Sorry the quantity you requested is not available");
                }
                start();
            })  
        });
    });
  }
