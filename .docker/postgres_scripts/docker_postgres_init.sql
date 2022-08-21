CREATE DATABASE development
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE wines (
    id serial PRIMARY KEY,
    wine_name VARCHAR ( 50 ) UNIQUE NOT NULL,
    wine_description VARCHAR ( 255 ) NOT NULL,
    vintage_year TIMESTAMP NOT NULL
);

INSERT INTO wines(wine_name, wine_description, vintage_year)
VALUES
    ('Wine 1', 'Lorem ipsum', '2013-06-01'),
    ('Wine 2', 'Test', '2017-07-02');

