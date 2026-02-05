
export interface ProjectInfo {
  name: string;
  code: string;
  location: string;
  scope: string;
  client: string;
  pmc: string;
  mep: string;
  contractor: string;
  dates: {
    commencement: string;
    completion: string;
    totalDays: number;
    remainingDays: number;
  };
}

export interface MetricItem {
  label: string;
  value: number;
  isCurrency?: boolean;
  isPercentage?: boolean;
  color?: 'blue' | 'green' | 'amber' | 'red' | 'indigo' | 'slate';
}

export interface CostCategory {
  id: string;
  description: string;
  budget: number;
  budgetPercentage: number;
  actualCost: number;
  consumedPercentage: number;
  remainingBudget: number;
  status: 'Within Budget' | 'Over Budget' | 'Critical';
  certifiedAmount: number;
  certifiedPercentage: number;
  balanceToCertify: number;
  subCategories?: CostCategory[];
}

export interface VariationItem {
  sn: number;
  variationNo: string;
  description: string;
  reference: string;
  submissionRef: string;
  submissionDate: string;
  submittedAmount: number;
  approvedAmount: number;
  underReviewAmount: number;
  status: 'Approved' | 'Under Review' | 'Cancelled' | 'Rejected';
  remarks: string;
}

export interface ReportRequirement {
  actionBy: string;
  name: string;
  requirement: string;
  plannedDate: string;
  isSubmitted: boolean;
  remarks: string;
}

export interface ReportLogEntry {
  sn: number;
  description: string;
  monthEnding: string;
  requirements: ReportRequirement[];
  finalPlannedDate: string;
  finalActualDate: string;
}

export interface ChartDataPoint {
  date: string;
  planned: number;
  actual: number;
  cumulativePlanned: number;
  cumulativeActual: number;
}
