# Api Docs

Let's see how we can interact with the RESTful APIs of our express application. To do that, I personally love the platform called `postman`. We will see what endpoints we have:

#### Base URL:
- All endpoints in the app use the following base URL: `http://localhost:3000`
- And I love to follow api version with prefix: `v1`
<br>

## `(POST) /v1/register`
This endpoint is used to register a new user.

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "mobile": "string",
  "password": "string"
}
```


## `(POST) /v1/login`
This endpoint is used to login.

#### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```


## `(POST) /v1/login-2fa`
This endpoint is used to get logged in with OTP.

#### Request Parameters
- OTP (string): 6 digit code with 5 min timer from user mobile.

#### Request Body
```json
{
  "email": "string",
  "otp": "string"
}
```

#### Response Body
```json
{
  "message": "User logged in successfully",
  "type": "Bearer",
  "token": "string",
  "expire": "10h"
}
```


## `(PATCH) /v1/update-profile`
This endpoint is used to user profile like name/email/password.

#### Headers
```bash
Authorization: 'Bearer `token`'
Content-Type: 'application/json'
```

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "newPassword": "string"
}
```
- all params are not mandatory



#### 🍔 Happy Coding!!!

#### 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)

#### tada! 🎉