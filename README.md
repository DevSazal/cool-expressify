# Cool Express API

### Requirements:

* Node.js (16.x)
* NPM
* TypeScript, Express.js
* Git
* MongoDB


Let's clone the repository on your machine.

The application includes the following files and folders.

- `src` - code for the application written in TypeScript, Express.js.
- `__tests__` - to test all the features.
- `.env.example` - a sample of .env which can be helpful for configuration.

```bash
# architecture
# deep drive in src directory

src/
├── controllers/
│   └── auth.controller.ts
├── routes/
│   └── auth.ts
├── models/
│   └── user.model.ts
├── middlewares/
│   ├── authMiddleware.ts
│   └── vonageMiddleware.ts
├── database/
│   └── mongo.ts
├── services/
├── types/
│   └── index.ts
├── lib/
│   ├── helpers.ts
│   └── HttpException.ts
├── app.ts
└── index.ts

```


## Installation and Configuration

Let's move to the cloned directory with your terminal.

To install, build, and start the application for the first time, run the following commands in your shell using `makefile` (only for macOS and Linux):

```bash
make install
```

Let's rename from `.env.example` to `.env` and make sure all the necessary information is correct:

```bash
PORT=3000

JWT_SECRET_KEY=''
MONGODB_URI=''

# SMS
VONAGE_API_KEY=''
VONAGE_API_SECRET=''

```

Already done? Cool! You are almost ready to enjoy the app. ⛳️


### Build:
```
make build
```

### Run:
```bash
make start
```

### API Endpoint:

```bash
POST /v1/register
POST /v1/login
POST /v1/login-2fa

PATCH /v1/update-profile
# try the api with postman
# port 3000
```

### Test:
Oh! You wanna trigger unit testing for the application from terminal
<br>
```bash
make test
make test-unit
```


### lint:
```
make lint
```
### lintfix:
```
make lintfix
```

#### 🎯 I know, you liked it.
To learn more, you can use the following commands: 
```
make help
```

#### At the same time, you can use the default `npm` commands like:
```bash
npm i
npm run build
npm run start
npm run test
```

#### 🥇 Congrats!! You are good to go

#### 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)

#### tada! 🎉





