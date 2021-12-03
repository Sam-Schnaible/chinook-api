# chinook-api
An app that lets employees and managers create, retrieve, update, and delete customer profiles. 

## Setup & Installation

Fork and clone this repo then run:

`npm install` in chinook-api directory

`npm run database` to run the postgresql schema (make sure user is set to postgres and database is postgres)

`npm run start` to run the application locally

`npm run build` to run application for deployement

`npm run server-dev` to start server

## API

**Retrieve Customer**
----
  Returns object with customer information.

* **URL**

  /customers/:id (range of id's is 1-59)

* **Method:**
  
  `GET`
  
*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
 `{ `<br />`
    "id": 22, `<br />`
    "first_name": "Heather", `<br />`
    "last_name": "Leacock", `<br />`
    "company": null, `<br />`
    "address": "120 S Orange Ave", `<br />`
    "city": "Orlando", `<br />`
    "state": "FL", `<br />`
    "country": "USA", `<br />`
    "postal_code": "32801", `<br />`
    "phone": "+1 (407) 999-7788", `<br />`
    "fax": null, `<br />`
    "email": "hleacock@gmail.com", `<br />`
    "support_rep_id": 4 `<br />`
   }` 
 
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
  { `<br />`
    "first_name": string required, `<br />`
    "last_name": string required, `<br />`
    "company": string || null, `<br />`
    "address": string || null, `<br />`
    "city": string || null, `<br />`
    "state": string || null, `<br />`
    "country": string || null, `<br />`
    "postal_code": string || null, `<br />`
    "phone": string || null, `<br />`
    "fax": string || null, `<br />`
    "email": string required, `<br />`
    "support_rep_id": int || null `<br />`
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

  
  `{ `<br />`
    "first_name": string required, `<br />`
    "last_name": string required, `<br />`
    "company": string || null, `<br />`
    "address": string || null, `<br />`
    "city": string || null, `<br />`
    "state": string || null, `<br />`
    "country": string || null, `<br />`
    "postal_code": string || null, `<br />`
    "phone": string || null, `<br />`
    "fax": string || null, `<br />`
    "email": string required, `<br />`
    "support_rep_id": int || null `<br />`
   }`
  

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
    
 ## If deployed in production
 
 - require user profiles to access database with different authorizations
   - salesperson authorization to create, retrieve, and update customers
   - manager authorization to create, retrieve, update, and delete customers
   
 - add Authentication for a layer of security

 - allow any field to be searchable and return a customer profile

 - include an initial GET request upon loading which display the range of customer ids for retrieving, updating, and deleting

 - validate data for required fields of customer profile in models before running any query

 - Add mock data with at least 100,000 profiles and run stress tests to locate any bottlenecks

 - refactor CSS to make the app more visually appealing and display better on mobile devices

