-- SETUP A BLUE PRINT FOR DATABASE

DROP DATABASE IF EXISTS pbs;

-- CREATING THE DATABASE
CREATE DATABASE pbs; 

-- CONNECTING TO THE DATABASE
\c pbs; 


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
    item_type TEXT NOT NULL
);
