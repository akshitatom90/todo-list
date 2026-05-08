import express from "express";
import { prisma } from "./config/database.ts";
import mainRoute from "./routes/index.route.ts";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/v1", mainRoute);

async function startServer(): Promise<void> {
  try {
    await prisma.$connect();
    console.log("Database connected");

    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

void startServer();
