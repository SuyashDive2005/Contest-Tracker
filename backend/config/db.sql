-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS auth_contesttrack;

-- Step 2: Use the database
USE auth_contesttrack;

-- Step 3: Create the users table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    PRIMARY KEY (id)
);
