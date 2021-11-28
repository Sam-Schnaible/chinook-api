const db = require('../../database');

module.exports = {
  removeCustomer: async id => {
    let result = await db.one(`
      DELETE FROM customers
      WHERE id=${id}
      RETURNING *;
    `);
    return 'Customer successfully deleted!'
  }
}