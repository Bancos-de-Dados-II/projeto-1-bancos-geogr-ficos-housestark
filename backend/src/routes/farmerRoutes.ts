import { Router } from "express";
import { getAllFarmers } from "../controllers/farmerController";

const router = Router();

router.get("/farmers", getAllFarmers);

export default router;