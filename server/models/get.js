const db = require('../../database');

module.exports = {
  getOne: async id => {
    let result =  await db.one(`SELECT * FROM customers WHERE id=$1`, [id]);
    return result;
  },

  getInitial: async () => {
    const result = await db.many(`SELECT MIN(id), MAX(id) FROM CUSTOMERS`);
    return result;
  }

}