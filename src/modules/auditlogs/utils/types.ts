export interface AuditLog {
  sn: number;
  admin: string;
  detail: string;
  module: string;
  ipAddress: string;
  timestamp: string;
  deviceInfo?: string;
}

export interface AuditTrail {
  sn: number;
  admin: string;
  detail: string;
  timestamp: string;
  ipAddress: string;
  deviceInfo: string;
}

export interface AuditLogDetail {
  title: string;
  detail: string;
  status: string;
  timestamp: string;
  adminName: string;
  role: string;
  ipAddress: string;
  deviceInfo: string;
  affectedUser?: string;
  country?: string;
  module?: string;
  kycStatus?: string;
  location?: string;
  loginSource?: string;
}
