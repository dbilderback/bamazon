-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product VARCHAR(120) NOT NULL,
  department VARCHAR(120) NOT NULL,
  price INTEGER(12),
  quantity INTEGER(6),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product, department, price, quantity)
VALUES ("toothbrush", "Home Goods", 3.29, 150);

INSERT INTO products (product, department, price, quantity)
VALUES ("Mens Crew Socks", "Mens Clothing", 6.99, 350);

INSERT INTO products (product, department, price, quantity)
VALUES ("Bluetooth Speaker", "Electronics", 59.99, 125);

INSERT INTO products (product, department, price, quantity)
VALUES ("2 Liter Coca Cola", "Food", .99, 1500);

INSERT INTO products (product, department, price, quantity)
VALUES ("Auto Polishing Cloth", "Automotive", 7.49, 1000);

INSERT INTO products (product, department, price, quantity)
VALUES ("Goodyear Truck Tire", "Automotive", 239.00, 40);

INSERT INTO products (product, department, price, quantity)
VALUES ("Gibson Les Paul Guitar", "Musical Instruments", 2499.00, 25);

INSERT INTO products (product, department, price, quantity)
VALUES ("Marshall Head", "Musical Instruments", 3199.99, 25);

INSERT INTO products (product, department, price, quantity)
VALUES ("Marshall Speaker Stack", "Musical Instruments", 2950.00, 25);

INSERT INTO products (product, department, price, quantity)
VALUES ("Dell XPS 15", "Computers", 2895.00, 10);