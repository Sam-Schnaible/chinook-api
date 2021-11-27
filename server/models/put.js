const db = require('../../database');

module.exports = {
  updateCustomer: async (id, { first_name, last_name, company, address, city, state, country, postal_code, phone, fax, email, support_rep_id }) => {
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
  }
}