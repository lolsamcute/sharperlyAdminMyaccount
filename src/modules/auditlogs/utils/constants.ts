import type { AuditLog, AuditTrail, AuditLogDetail } from "./types";

export const auditLogs: AuditLog[] = [
  {
    sn: 1,
    admin: "Elizabeth / Product Manager",
    detail: "Approved KYC for user Jennifer",
    module: "KYC",
    ipAddress: "192.168.45.217",
    timestamp: "2025-03-01 17:50:36",
  },
  {
    sn: 2,
    admin: "Michael / Engineer",
    detail: "Processed bill payment for user John",
    module: "Bill Payment",
    ipAddress: "192.168.45.218",
    timestamp: "2025-03-02 09:15:12",
  },
  {
    sn: 3,
    admin: "Sarah / QA",
    detail: "Reviewed wallet transaction for user Alice",
    module: "Wallet",
    ipAddress: "192.168.45.219",
    timestamp: "2025-03-02 10:20:45",
  },
  // ...more rows as in image
];

export const auditTrails: AuditTrail[] = [
  {
    sn: 1,
    admin: "Amina Yusuf – Compliance",
    detail: "Logged into admin dashboard",
    timestamp: "2025-03-01 17:50:36",
    ipAddress: "102.89.176.241",
    deviceInfo: "Chrome / Windows 10",
  },
  {
    sn: 2,
    admin: "Chuka Obi – Super Admin",
    detail: "Changed USD → NGN rate from 1021 to 1040",
    timestamp: "2025-03-01 17:50:36",
    ipAddress: "102.89.176.241",
    deviceInfo: "Safari / macOS",
  },
  // ...more rows as in image
];

export const auditLogDetail: AuditLogDetail = {
  title: "Activity Log Entry",
  detail: "KYC Approval",
  status: "Successful",
  timestamp: "2025-03-01 17:50:36",
  adminName: "Elizabeth Nana",
  role: "Product Manager",
  ipAddress: "102.89.176.241",
  deviceInfo: "Chrome / Windows 10",
  affectedUser: "Jennifer Roland",
  country: "Australia",
  module: "KYC Verification",
  kycStatus: "Rejected",
};

export const auditTrailDetail: AuditLogDetail = {
  title: "Audit Trail",
  adminName: "Elizabeth Nana",
  role: "Product Manager",
  ipAddress: "102.89.176.241",
  deviceInfo: "Chrome / Windows 10",
  location: "Lagos, Nigeria",
  loginSource: "Web Admin Portal",
  timestamp: "2025-03-01 17:50:36",
  detail: "Changed USD → NGN rate from 1000 to 1021",
  module: "Exchange Rates",
  status: "Successful",
};
