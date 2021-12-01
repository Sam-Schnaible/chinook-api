const db = require('../../database');

module.exports = {
  removeCustomer: async id => {
    let result = await db.none(`
    DO $$
<<<<<<< HEAD
    DECLARE
      c_id integer[]=(SELECT ARRAY (SELECT id FROM invoices WHERE customer_id=${id}));
    BEGIN
    DELETE FROM invoice_lines WHERE invoice_id=ANY(c_id);
=======
    DECLARE c_id integer[]= (SELECT ARRAY (SELECT id FROM invoices WHERE customer_id=${id} ));
    BEGIN
    DELETE FROM invoice_lines WHERE invoice_id=ANY (c_id);
>>>>>>> 25a69f0e650a303783eaf7e4ec75379e84281d32
    DELETE FROM invoices WHERE customer_id=${id};
    DELETE FROM customers WHERE id=${id};
    END $$;
    `);
    return 'Customer successfully deleted!'
  }
}