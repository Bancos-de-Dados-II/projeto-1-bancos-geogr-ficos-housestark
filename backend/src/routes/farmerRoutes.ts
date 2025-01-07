import { Router } from "express";
import { createFarmer, getAllFarmers, getFarmerById } from "../controllers/farmerController";

const router = Router();

router.get("/farmers", getAllFarmers);
router.post("/create-farmer", createFarmer);
router.get("/farmer/:id", getFarmerById);

export default router;