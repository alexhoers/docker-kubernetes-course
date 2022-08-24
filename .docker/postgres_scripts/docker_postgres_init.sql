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

CREATE TABLE news (
    id serial PRIMARY KEY,
    title VARCHAR ( 100 ) NOT NULL,
    description VARCHAR ( 255 ) NOT NULL,
    date TIMESTAMP NOT NULL
);

INSERT INTO news(title, description, date)
VALUES
    ('Winery site is live', 'Winery is live and ready to use. The site is created using Angular, and is running a expressjs backend. A postgressql database is used for data management, and all of the applications are containerized via docker and run on kubernetes.', '2022-08-20'),
    ('New winery site coming soon', 'Winery is a site for people who enjoy port wine. Here you can browse different types of port wine and read about their characteristics, ratings and notes.', '2022-07-01');
