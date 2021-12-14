import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "example",
  database: "example",
});

export const saveMySuperForm = async ({ town, data, times, tel, name }) => {
  const query =
    "INSERT INTO reg (`town`, `data`, `time`, `tel`, `name`) VALUES (?, ?, ?, ?, ?)";

  return new Promise((resolve, reject) => {
    connection.query(query, [town, data, times, tel, name], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
