import { sql } from "./db.js"

sql`
CREATE TABLE videos (
  id text PRIMARY KEY,
  title text,
  description TEXT,
  duration INTEGER
);
` .then(() => {
  console.log('table created!')
}) 