DROP TABLE IF EXISTS "article", "comment", "users";

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "role" VARCHAR(255)
);

CREATE TABLE "article" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
    "picture" VARCHAR(255),
    "article_content" TEXT,
    "user_id" INT REFERENCES "users"("id")
);

CREATE TABLE "comment" (
    "id" SERIAL,
    "comment_content" TEXT,
    "user_id" INT REFERENCES "users"("id"),
    "article_id" INT REFERENCES "article"("id")
);

INSERT INTO "users" ("username", "password", "role") VALUES
('Admin', '1234', 'admin'),
('Liam', '0000', 'member');