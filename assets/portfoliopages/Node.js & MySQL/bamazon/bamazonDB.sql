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
VALUES ('iPhone', 'Electronics', 800, 5), ('Macbook', 'Electronics', 2000, 7), ('BeatsByDre', 'Electronics', 99, 20), ('Flat Screen TV', 'Electronics', 1000, 4), ('Rominous', 'Books', 1000, 10), ('Harry Potter', 'Books', 25,3), ('THe Alchemist', 'Books', 15, 6), ('Hoodie', 'Clothes', 50, 13), ('Supreme Shirts', 'Clothes', 69, 9), ('Ripped Jeans', 'Clothes', 500, 100);
