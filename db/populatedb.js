#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message) 
VALUES
  ('Code_Runner', 'My code works on my machine, so technically it''s your machine''s fault.'),
  ('Bug_Lover', 'It’s not a bug, it’s an undocumented feature that adds character to the app.'),
  ('Caffeine_Dev', 'A query walked into a bar, joined two tables, and asked: ''Can I have a drink?'''),
  ('Git_Chaos', 'I don''t always test my code, but when I do, I do it in production.'),
  ('CSS_Master', 'I tried to center a div once. I''m still waiting for my medal from the Olympic committee.'),
  ('Noob_Pro', 'Is it ''Node'' as in ''Know-de'' or ''Node'' as in ''No-de''? Please send help.'),
  ('Stack_Surfer', 'I’m not a programmer, I’m just a professional Google/StackOverflow searcher.'),
  ('Binary_Bob', 'There are 10 types of people in the world: those who understand binary, and those who don''t.'),
  ('Async_Andy', 'I''ll give you a great joke about callback hell... actually, let me get back to you later.'),
  ('The_Janitor', 'I just deleted the node_modules folder. It felt better than a 2-week vacation.');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();
