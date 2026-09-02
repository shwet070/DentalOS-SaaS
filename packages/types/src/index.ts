export type ID = string;
export type TenantId = ID;
export type BranchId = ID;
export type UserId = ID;
export type PatientId = ID;
export type AppointmentId = string;

export type UserRole =
  | "SUPER_ADMIN"
  | "CLINIC_ADMIN"
  | "DOCTOR"
  | "STAFF"
  | "PATIENT";
