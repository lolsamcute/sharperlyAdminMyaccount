export interface ServiceToggle {
  label: string;
  value: string;
  enabled: boolean;
}

export interface BankOption {
  label: string;
  value: string;
}

export interface PaymentOption {
  label: string;
  value: string;
}

export interface ChatOption {
  label: string;
  value: string;
}

export interface Admin {
  name: string;
  email: string;
  role: string;
}

export interface Role {
  role: string;
  type: string;
  admins: string;
  description: string;
}
