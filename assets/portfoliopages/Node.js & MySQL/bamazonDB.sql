DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100)  NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cell Phone', 'Electronics', 800, 5), ('Laptop', 'Electronics', 2000, 7), ('Headphones', 'Electronics', 30, 15), ('T.V.', 'Electronics', 1000, 3), ('Desk', 'Furniture', 150, 10), ('Table', 'Furniture', 100, 3), ('Couch', 'Furniture', 500, 6), ('Sweatshirt', 'Clothing', 50, 12), ('T-Shirt', 'Clothing', 20, 9), ('Jeans', 'Clothing', 60, 4);
