# chinook-api
A simple CRUD api that let's you create, retrieve, update, and delete customers. 

## Setup & Installation

Fork and clone this repo then run:

`npm install` in chinook-api directory

`npm run database` to run the postgresql schema (make sure user is set to postgres and database is postgres)

`npm run start` to run the application

`npm run server-dev` to start server

## API

**Retrieve Customer**
----
  Returns object with customer information.

* **URL**

  /customers/:id

* **Method:**
  
  `GET`
  
*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{"id": 22,
    "first_name": "Heather",
    "last_name": "Leacock",
    "company": null,
    "address": "120 S Orange Ave",
    "city": "Orlando",
    "state": "FL",
    "country": "USA",
    "postal_code": "32801",
    "phone": "+1 (407) 999-7788",
    "fax": null,
    "email": "hleacock@gmail.com",
    "support_rep_id": 4}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "No data returned from the query" }`
    
**Update Customer**
----
  Returns nothing.

* **URL**

  /customers/:id

* **Method:**

  `PUT`
  
*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `
  {
    "first_name": string required,
    "last_name": string required,
    "company": string || null,
    "address": string || null,
    "city": string || null,
    "state": string || null,
    "country": string || null,
    "postal_code": string || null,
    "phone": string || null,
    "fax": string || null,
    "email": string required,
    "support_rep_id": int || null
}
  `

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `''`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "null value in column "first_name"/"last_name"/"email" of relation "customers" violates not-null constraint" }`
    
**Create Customer**
----
  Returns nothing.

* **URL**

  /customers

* **Method:**

  `POST`

* **Data Params**

  `
  {
    "first_name": string required,
    "last_name": string required,
    "company": string || null,
    "address": string || null,
    "city": string || null,
    "state": string || null,
    "country": string || null,
    "postal_code": string || null,
    "phone": string || null,
    "fax": string || null,
    "email": string required,
    "support_rep_id": int || null
}
  `

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `''`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "null value in column "first_name"/"last_name"/"email" of relation "customers" violates not-null constraint" }`
    
**Delete Customer**
----
  Returns nothing.

* **URL**

  /customers/:id

* **Method:**

  `DELETE`

*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `''`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "null value in column "first_name"/"last_name"/"email" of relation "customers" violates not-null constraint" }`

