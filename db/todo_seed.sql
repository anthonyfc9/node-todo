DROP TABLE IF EXISTS task;

CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  task VARCHAR(50) NOT NULL,
  details TEXT NOT NULL,
  image VARCHAR(250),
  iscompleted BOOLEAN NOT NULL
);

INSERT INTO task (task, details, image, iscompleted) VALUES

(
    'Buy a gallon of whole milk',
    'make sure it has a red top and says whole milk. i dont want none of that 1% or 2% garbage',
    NULL,
    false
),

(
    'Buy a gallon of whole milk',
    'make sure it has a red top and says whole milk. i dont want none of that 1% or 2% garbage',
    NULL,
    false
),

(
    'Buy a gallon of whole milk',
    'make sure it has a red top and says whole milk. i dont want none of that 1% or 2% garbage',
    NULL,
    false
),;