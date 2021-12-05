const db = require('../../database');

module.exports = {
  removeCustomer: async id => {
    // let result = await db.one(`SELECT * FROM customers WHERE id=${id}`)
    let result = await db.none(`
      DO $$
      DECLARE c_id integer[]= (SELECT ARRAY (SELECT id FROM invoices WHERE customer_id=${id} ));
      BEGIN
      DELETE FROM invoice_lines WHERE invoice_id=ANY (c_id);
      DELETE FROM invoices WHERE customer_id=${id};
      DELETE FROM customers WHERE id=${id};
      END $$;
      `);
      return result;
    },

  }
