const db = require('../../database');

// note: documentation is good practice!!!
// vscode supports jsdoc out of the box so it's probably a good choice
// TODO: add documentation for all the methods using jsdoc:
// https://jsdoc.app/about-getting-started.html
// TODO: consider maintaining typedefs in separate files to avoid clutter: https://stackoverflow.com/questions/43183450/jsdoc-typedef-in-a-separate-file
// TODO: consider splitting this model across multiple files inside a `customer` directory.

/**
 * Model for a customer
 * this object groups together all the operatiosn that are possible on the logical unit "customer"
 * this layer should not know or care about get/post/put/delete, because these are operations at the http layer
 * instead this is an abstraction of your database schema that defines the "allowed" ways to interact with it.
 * this is what an ORM library would help us with, but these are a bit too magic so I recomend you stay away from them for now.
 * importantly, often model map to multiple tables, for example if you had a table "customer_details",
 * that table could possibly be only accesible through this model. models can also link to other models.
 * 
 * @typedef {Object} Customer
 * @property {string} first_name - Customer's first name
 * @property {string} last_name - Customer's last name
 * @property {string} company - Customer's company
 * @property {string} address - Customer's address
 * @property {string} city - Customer's city
 * @property {string} state - Customer's state
 * @property {string} country - Customer's country
 * @property {string} postal_code - Customer's postal code
 * @property {string} phone - Customer's phone
 * @property {string} fax - Customer's fax
 * @property {string} email - Customer's email
 * @property {number} support_rep_id - Customer's support repid
 */

module.exports = {
  /**
   * Get One Customer by id
   * TODO: what happens if a user with that id does not exist?
   * if this function can fail/return a result that is not a Customer (error result) it should be documented
   * @param {number} id integer id of a customer
   * @returns {Customer} Customer object
   */
  getOne: async id => {
    let result =  await db.one(`SELECT * FROM customers WHERE id=$1`, [id]);
    return result;
  },
  // todo: add getMultiple method, preferably with sorting, limit, offset, and filtering.
  // think of it as a challenge :)

  // TODO: this function name is somewhat ambiguous?
  getInitial: async () => {
    const result = await db.many(`SELECT MIN(id), MAX(id) FROM CUSTOMERS`);
    return result;
  },

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


  // TODO: currently this method fails if we don't provide all customer properties to update. Change that.
  /**
   * Updates a customer. All properties optional
   *
   * @param {number} id - id of the customer to update
   * @param {CustomerUpdateInput} customer
   * @returns {Customer}
   * 
   * typedef here is very cluttered, perhaps improve?
   * @typedef {Object} CustomerUpdateInput - input for customer update, all properties optional.
   * @property {string} [first_name] - Customer's first name
   * @property {string} [last_name] - Customer's last name
   * @property {string} [company] - Customer's company
   * @property {string} [address] - Customer's address
   * @property {string} [city] - Customer's city
   * @property {string} [state] - Customer's state
   * @property {string} [country] - Customer's country
   * @property {string} [postal_code] - Customer's postal code
   * @property {string} [phone] - Customer's phone
   * @property {string} [fax] - Customer's fax
   * @property {string} [email] - Customer's email
   * @property {number} [support_rep_id] - Customer's support repid
   */
  updateCustomer: async (id, { first_name, last_name, company, address, city, state, country, postal_code, phone, fax, email, support_rep_id }) => {
    // TODO: remove SQL injection vulnerability
    // yes you are validating that id is a number elsewhere, but what if that other part of the code were to change?
    // better not have that issue in the first place
    await db.none(`
      UPDATE customers
      SET
        first_name=$1,
        last_name=$2,
        company=$3,
        address=$4,
        city=$5,
        state=$6,
        country=$7,
        postal_code=$8,
        phone=$9,
        fax=$10,
        email=$11,
        support_rep_id=$12
      WHERE id=${id}
    `, [first_name, last_name, company, address, city, state, country, postal_code, phone, fax, email, support_rep_id]);
    return "Customer successfully updated!";
  },

  removeCustomer: async id => {
    // impressed with your delete here, where you are deleting all related records when deleting a customer
    // however, this should automatically be handled on the database side, with foreing keys and cascade deletes.
    // line 291 of schema.sql should specify a cascade delete so that invoice lines are deleted when the invoice is deleted
    // google "postgres on delete cascade" to learn more :)
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

}