CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(50)NOT NULL,
    lastname VARCHAR(50) NOT NULL
)

DELETE FROM users
WHERE user_id = $1

CREATE TABLE insult (
    insult_id SERIAL PRIMARY KEY,
    username VARCHAR(100) REFERENCES users(username),
    insult VARCHAR(100)
)
CREATE TABLE compliment (
    compliment_id SERIAL PRIMARY KEY,
    username VARCHAR(100) REFERENCES users(username),
    compliment VARCHAR(100)
)