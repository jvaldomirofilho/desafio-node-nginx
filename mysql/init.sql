CREATE DATABASE IF NOT EXISTS app_db;
USE app_db;

CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) VALUES ("João");
INSERT INTO people (name) VALUES ("Lucas");
INSERT INTO people (name) VALUES ("Matheus");
