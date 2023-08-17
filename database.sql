
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


-- CREATE TABLE "exercises" (
-- 	id integer pk increments
-- 	exercises varchar(100)
-- 	muscle_group_id integer
-- 	entry_date datetime
-- 	user_id integer *> Users_Selected_Exercises.id
-- );

-- CREATE TABLE "muscle_groups" (
-- 	id integer pk increments > Exercises.Muscle_Group_ID
-- 	muscle_group varchar(50)
-- );

CREATE TABLE "user_notes" (
    "id" SERIAL PRIMARY KEY,
    user_selected_date date,
    notes varchar(1000),
    user_id INT REFERENCES "user" NOT NULL
);

CREATE TABLE "users_selection" (
    "id" SERIAL PRIMARY KEY,
	exercise_name VARCHAR (1000),
	exercise_equipment VARCHAR (1000),
	repetitions integer NOT NULL,
    user_selected_date date,
    user_id INT REFERENCES "user" NOT NULL);

CREATE TABLE "user_id" (
  "id" SERIAL PRIMARY KEY,
  "notes_id" INT REFERENCES "notes" NOT NULL,
  "users_selection_id" INT REFERENCES "users_selection" NOT NULL
  "user_id" INT REFERENCES "user" NOT NULL,
);

