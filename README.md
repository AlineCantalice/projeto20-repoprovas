# <p align = "center"> Projeto 20 - RepoProvas </p>

##  :clipboard: Description

RepoProvas is a system for people to share tests. In this API anyone can look for old tests, disciplines and teachers as well as share your own old tests with the freshmen.

***

## :computer:	 Tecnologies and Concepts

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Prisma

***

## :rocket: Routes

```yml
POST /signup
    - Register new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"
    }
```
    
```yml 
POST /signin
    - Login to registered users
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```

```yml 
POST /tests
    - Create tests
    - headers: {}
    - body: {
        "name": "test",
        "pdfUrl": "https://www.google.com/",
        "category": "Projeto",
        "discipline": "React",
        "teacher": "Diego Pinho"
    }
```
   
***

## 🏁 Running the project

1. Clone the repository:

```bash
    git clone https://github.com/AlineCantalice/projeto20-repoprovas.git
```
2. Navigate to the project directory:
    
```bash
    cd projeto20-repoprovas
```
3. Install the dependencies:
    
```bash
    npm install
```
4. Set your environment variables following the .env.sample file:

   **Notes**: `PORT` must be a number, `DATABASE_URL`, `CRYPTR_SECRET` and `JWT_SECRET` must be strings

```ts
    DATABASE_URL=
    PORT=
    CRYPTR_SECRET=
    JWT_SECRET=
```
5. Generate prisma models that could exist in database:

```
  npx prisma db pull
```
  **Notes**: If there are no models, run the following to generate the models from prisma:
```
  npx prisma migrate dev
```

6. Run the project on dev mode

```bash
   npm run dev
```