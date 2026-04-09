import express from "express";
import createCrudController from "../controllers/crudController.js";
import createCrudRouter from "./createCrudRouter.js";
import {
  AccessLog,
  AiPrediction,
  AlzheimersAssessment,
  Branch,
  BranchModelUpdate,
  ConsentLog,
  FederatedModelRound,
  MriScan,
  Patient,
  PatientMedicalHistory,
  Treatment,
  User,
} from "../model/index.js";

const router = express.Router();

router.use(
  "/branches",
  createCrudRouter(
    createCrudController(Branch, {
      searchFields: ["branchName", "branchCode", "branchLocation"],
    })
  )
);

router.use(
  "/users",
  createCrudRouter(
    createCrudController(User, {
      populate: ["branchId"],
      searchFields: ["name", "email", "department", "role"],
    })
  )
);

router.use(
  "/patients",
  createCrudRouter(
    createCrudController(Patient, {
      searchFields: [
        "globalPatientId",
        "name",
        "guardianName",
        "guardianContact",
      ],
    })
  )
);

router.use(
  "/patient-medical-histories",
  createCrudRouter(
    createCrudController(PatientMedicalHistory, {
      populate: ["patientId"],
    })
  )
);

router.use(
  "/alzheimers-assessments",
  createCrudRouter(
    createCrudController(AlzheimersAssessment, {
      populate: ["patientId", "doctorId", "branchId"],
      searchFields: ["diagnosisStatus", "diseaseStage"],
    })
  )
);

router.use(
  "/mri-scans",
  createCrudRouter(
    createCrudController(MriScan, {
      populate: ["patientId", "branchId", "uploadedBy"],
      searchFields: ["filePath", "ipfsHash", "scanFormat"],
    })
  )
);

router.use(
  "/ai-predictions",
  createCrudRouter(
    createCrudController(AiPrediction, {
      populate: ["patientId", "scanId", "assessmentId", "reviewedBy"],
      searchFields: ["modelVersion", "predictedClass"],
    })
  )
);

router.use(
  "/treatments",
  createCrudRouter(
    createCrudController(Treatment, {
      populate: ["patientId", "assessmentId", "doctorId"],
    })
  )
);

router.use(
  "/consent-logs",
  createCrudRouter(
    createCrudController(ConsentLog, {
      populate: ["patientId"],
      searchFields: ["guardianName", "consentType", "status", "purpose"],
    })
  )
);

router.use(
  "/access-logs",
  createCrudRouter(
    createCrudController(AccessLog, {
      populate: ["userId", "patientId", "scanId", "assessmentId", "branchId"],
      searchFields: ["actionType", "reason", "accessStatus", "blockchainTxnHash"],
    })
  )
);

router.use(
  "/federated-model-rounds",
  createCrudRouter(
    createCrudController(FederatedModelRound, {
      searchFields: ["modelName", "status"],
    })
  )
);

router.use(
  "/branch-model-updates",
  createCrudRouter(
    createCrudController(BranchModelUpdate, {
      populate: ["roundId", "branchId", "submittedBy"],
      searchFields: ["localModelPath"],
    })
  )
);

export default router;
