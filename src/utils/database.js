/* eslint-disable import/prefer-default-export */
import mysql from 'mysql2/promise';

export const database = async () => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  (await connection).connect((err) => {
    if (err) {
      console.log(`Error connecting to the database: ${err.stack}`);
    }

    console.log(`Connected to the database as id: ${connection.threadId}`);
  });
};
