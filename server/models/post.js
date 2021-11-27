const db = require('../../database');

module.exports = {
  addCustomer: async ({ first_name, last_name, company, address, city, state, country, postal_code, phone, fax, email, support_rep_id }) => {
      await db.none(`
        INSERT INTO customers(
          first_name,
          last_name,
          company,
          address,
          city,
          state,
          country,
          postal_code,
          phone,
          fax,
          email,
          support_rep_id)
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
        )`, [first_name, last_name, company, address, city, state, country, postal_code, phone, fax, email, support_rep_id]);
      return "Customer successfully added!";
    },

}