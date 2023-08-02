
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "exercises" (
	id integer pk increments
	exercises varchar(100)
	muscle_group_id integer
	entry_date datetime
	user_id integer *> Users_Selected_Exercises.id
);

CREATE TABLE "muscle_groups" (
	id integer pk increments > Exercises.Muscle_Group_ID
	muscle_group varchar(50)
);

CREATE TABLE "notes" (
	id integer pk increments
	user_id integer *> User.id
	entry_date datetime *> Exercises.id
	notes varchar(1000)
);

CREATE TABLE "users_selection" (
	id integer pk increments
	selected_exercises string
	user_id integer *> User.id
);
