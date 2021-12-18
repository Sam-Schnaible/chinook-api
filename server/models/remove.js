const db = require('../../database');

module.exports = {
  removeCustomer: async id => {
    let result = await db.none(`
    DO $$
    DECLARE c_id integer[]= (SELECT ARRAY (SELECT id FROM invoices WHERE customer_id=$1 ));
    BEGIN
    DELETE FROM invoice_lines WHERE invoice_id=ANY (c_id);
    DELETE FROM invoices WHERE customer_id=$1;
    DELETE FROM customers WHERE id=$1;
    END $$;
    `, [id]);
    return 'Customer successfully deleted!'
  }
