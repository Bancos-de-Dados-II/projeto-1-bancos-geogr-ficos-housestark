import { Router } from "express";
import { createFarmer, getAllFarmers, getFarmerById, updateFarmer } from "../controllers/farmerController";

const router = Router();

router.post("/create-farmer", createFarmer);
router.get("/farmers", getAllFarmers);
router.get("/farmer/:id", getFarmerById);
router.put("/update-farmer/:id", updateFarmer);

export default router;