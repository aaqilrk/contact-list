# Contact List Web App
A reactive Single-Page contact list!!

## Requirements
1. Node.js
2. SQL Server

# Usage
1. Fork the repo and then clone it or download it.

2. First install all dependencies:
    ```bash
    # with npm
    npm install
    ```

3. Create a SQL database 

4. Create a `.env` file and insert the following code. Replace values with yours!!

    ```javascript
    SQL_DIALECT = 'mysql'
    SQL_DATABASE = 'db'
    SQL_USER='user'
    SQL_PASSWORD='password'
    ```
5. Start the server
    ```javascript
    npm start
    ```

6. Now run the app
    ```javascript
    localhost:[PORT] (PORT=defined in .env)
    ```