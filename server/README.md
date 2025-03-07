# HealthApp API Documentation

## Endpoints

### POST /users/signup

#### Description
This endpoint is used to create a new user account. It requires a username, email, and password.

#### Request Body
The request body must be a JSON object containing the following fields:
- `username`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string.

Example:
```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Responses

- **201 Created**
  - **Description**: The user account was successfully created.
  - **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "username": "john_doe",
      "email": "john.doe@example.com"
    }
  }
  ```

- **400 Bad Request**
  - **Description**: The request was invalid. This can happen if the input data is not valid.
  - **Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Username must be of atleast 3 chars long",
        "param": "username",
        "location": "body"
      }
    ]
  }
  ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/signup \
-H "Content-Type: application/json" \
-d '{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user. It requires an email and password.

#### Request Body
The request body must be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with at least 3 characters.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Responses

- **200 OK**
  - **Description**: The user was successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "username": "john_doe",
      "email": "john.doe@example.com"
    }
  }
  ```

- **400 Bad Request**
  - **Description**: The request was invalid. This can happen if the input data is not valid.
  - **Body**: A JSON object containing the validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be of atleast 3 chars long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

- **401 Unauthorized**
  - **Description**: The email or password is incorrect.
  - **Body**: A JSON object containing the error message.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```
