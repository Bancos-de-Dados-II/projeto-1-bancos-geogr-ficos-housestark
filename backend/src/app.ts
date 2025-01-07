import express from "express";
import dotenv from "dotenv";
import farmerRoutes from "./routes/farmerRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//midlewares
app.use(express.json());

//routes
app.use('/api/', farmerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
}); 