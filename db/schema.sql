-- SETUP A BLUE PRINT FOR DATABASE

DROP DATABASE IF EXISTS oss;

-- CREATING THE DATABASE
CREATE DATABASE oss; 

-- CONNECTING TO THE DATABASE
\c oss; 

-- Future table elm (ignore for now)
    -- addedDate TIMESTAMP DEFAULT NOW(),
    -- supplier TEXT NOT NULL,
    -- onSale TEXT NOT NULL

DROP TABLE IF EXISTS gear;
-- CREATING THE GEAR TABLE
CREATE TABLE gear (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    rating INT,
    is_user_submitted BOOLEAN,
    is_expensive BOOLEAN,
    image TEXT NOT NULL,
    link TEXT NOT NULL,
    property_type TEXT NOT NULL,
    description TEXT NOT NULL,
    materials TEXT NOT NULL,
    color TEXT NOT NULL,
    detail1 TEXT NOT NULL,
    detail2 TEXT NOT NULL,
    manufactured TEXT NOT NULL,
    wear TEXT NOT NULL,
    designed_by TEXT NOT NULL
);

--CREATING USERS TABLE
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    profileImg TEXT,
    address TEXT,
    zipcode INT,
    rating INT,
    admin BOOLEAN DEFAULT false,
    joinedDate TIMESTAMP DEFAULT NOW()
);

--CREATING DESIGNERS TABLE
DROP TABLE IF EXISTS designer;
CREATE TABLE designer (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    bio TEXT NOT NULL
);