import { Router } from "express";
import { createFarmer, getAllFarmers } from "../controllers/farmerController";

const router = Router();

router.get("/farmers", getAllFarmers);
router.post("/create-farmer", createFarmer);

export default router;