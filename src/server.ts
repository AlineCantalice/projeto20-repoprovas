import app from ".";
import dotenv from 'dotenv';
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  });