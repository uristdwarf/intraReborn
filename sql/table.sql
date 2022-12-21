CREATE TABLE IF NOT EXISTS users (
	id SERIAL UNIQUE,
	username VARCHAR(50),
	level INTEGER,
	xp INTEGER,
	points INTEGER
);

INSERT INTO users(level, points, username, xp) VALUES (30, 5, 'Urist', 20000);
