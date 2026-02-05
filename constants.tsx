
import { ProjectInfo, CostCategory, ChartDataPoint, VariationItem, ReportLogEntry } from './types';

export const PROJECT_DETAILS: ProjectInfo = {
  name: "CONSTRUCTION OF SEA LA VIE – PLOT C46, YAS ISLAND, ABU DHABI",
  code: "C2407",
  location: "YAS BAY, ABU DHABI, UAE",
  scope: "SUPPLY, INSTALLATION, TESTING AND COMMISSIONING OF MEP WORKS",
  client: "NINE YARDS REAL ESTATE DEVELOPMENT LLC",
  pmc: "OMNIUM INTERNATIONAL",
  mep: "MZ ARCHITECTS",
  contractor: "ZUBLIN CONSTRUCTION LLC",
  dates: {
    commencement: "7-Oct-24",
    completion: "20-May-27",
    totalDays: 956,
    remainingDays: 471
  }
};

export const REPORT_LOG_DATA: ReportLogEntry[] = [
  {
    sn: 1,
    description: "Commercial Report No.01",
    monthEnding: "December/25",
    finalPlannedDate: "07/Jan/26",
    finalActualDate: "",
    requirements: [
      { actionBy: "Projects Director", name: "Sulaiman Naser", requirement: "Project Budget", plannedDate: "28/Nov/25", isSubmitted: true, remarks: "Applicable on Report No. 01 only; any update on Budget should be notified and discussed." },
      { actionBy: "Project Manager", name: "Wessam Noshy", requirement: "Planned Cash In and Out Flow", plannedDate: "28/Nov/25", isSubmitted: false, remarks: "Applicable on Report No. 01 only." },
      { actionBy: "Project Manager", name: "Wessam Noshy", requirement: "Petty Cash Expenses", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "Project Manager", name: "Wessam Noshy", requirement: "Logistics Costs", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Variations", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Cost Savings", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Deductions", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Payment Applications / Certifications", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "Planning Manager / Planning Engineer", name: "", requirement: "Planned Cash In and Out Flow", plannedDate: "28/Nov/25", isSubmitted: true, remarks: "Applicable on Report No. 01 only." },
      { actionBy: "Planning Manager / Planning Engineer", name: "", requirement: "EOT Submissions / Prolongation Costs", plannedDate: "31/Dec/25", isSubmitted: true, remarks: "No EOT Submitted as of date." },
      { actionBy: "Project Controller", name: "Dawn Margareth Chica", requirement: "All Data Inputs on this Report", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "Head Office QS", name: "Kristine Dizon", requirement: "Supplier and Subcontractor Payment Log", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "" },
      { actionBy: "Procurement Engineer", name: "", requirement: "LPO update on the Project Control Sheet", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "To be updated on regular basis." },
      { actionBy: "Accounts", name: "Hafiz Omair Fayyaz", requirement: "Released payments to Suppliers/Subcontractors", plannedDate: "31/Dec/25", isSubmitted: false, remarks: "To be updated on regular basis." },
      { actionBy: "HR", name: "Riazudeen Basheer", requirement: "Monthly Payroll (Staffs, Labors, Overtime)", plannedDate: "05/Jan/26", isSubmitted: false, remarks: "" },
    ]
  },
  {
    sn: 2,
    description: "Commercial Report No.02",
    monthEnding: "January/26",
    finalPlannedDate: "07/Feb/26",
    finalActualDate: "",
    requirements: [
      { actionBy: "Project Manager", name: "Wessam Noshy", requirement: "Petty Cash Expenses", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "Project Manager", name: "Wessam Noshy", requirement: "Logistics Costs", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Variations", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Cost Savings", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Deductions", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "QS Manager / Site QS", name: "Mostafa El Rouby / Supun Perera", requirement: "Payment Applications / Certifications", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "Planning Manager / Planning Engineer", name: "", requirement: "EOT Submissions / Prolongation Costs", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "Project Controller", name: "Dawn Margareth Chica", requirement: "All Data Inputs on this Report", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "Head Office QS", name: "Kristine Dizon", requirement: "Supplier and Subcontractor Payment Log", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "" },
      { actionBy: "Procurement Engineer", name: "", requirement: "LPO update on the Project Control Sheet", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "To be updated on regular basis." },
      { actionBy: "Accounts", name: "Hafiz Omair Fayyaz", requirement: "Released payments to Suppliers/Subcontractors", plannedDate: "31/Jan/26", isSubmitted: false, remarks: "To be updated on regular basis." },
      { actionBy: "HR", name: "Riazudeen Basheer", requirement: "Monthly Payroll (Staffs, Labors, Overtime)", plannedDate: "05/Feb/26", isSubmitted: false, remarks: "" },
    ]
  }
];

export const VARIATION_LOG: VariationItem[] = [
  { sn: 1, variationNo: "", description: "REDUCE BASEMENT DOMESTIC AND IRRIGATION WATER TANK AREAS TO CREATE TWO ADDITIONAL STORAGE ROOMS", reference: "SLV-ZUC-LTR-ARCO-00018", submissionRef: "", submissionDate: "", submittedAmount: 24870.97, approvedAmount: 24870.97, underReviewAmount: 0, status: "Approved", remarks: "" },
  { sn: 2, variationNo: "", description: "NEW ALTERNATIVE KITCHEN APPLIANCES REPLACEMENT OF DP 13A SOCKET FOR REFRIGERATORS", reference: "SLV-ZUC-LTR-ARCO-00046", submissionRef: "", submissionDate: "", submittedAmount: 3948.00, approvedAmount: 3948.00, underReviewAmount: 0, status: "Approved", remarks: "" },
  { sn: 3, variationNo: "", description: "ADDITIONAL SUB-DRAINAGE POINT AT GROUND FLOOR PARKING AREA", reference: "EMAIL", submissionRef: "", submissionDate: "", submittedAmount: 5390.00, approvedAmount: 5390.00, underReviewAmount: 0, status: "Approved", remarks: "" },
  { sn: 4, variationNo: "", description: "ADDITIONAL REQUIREMENTS FOR THE WIFI SYSTEM", reference: "EMAIL", submissionRef: "", submissionDate: "", submittedAmount: 67531.50, approvedAmount: 67531.50, underReviewAmount: 0, status: "Approved", remarks: "" },
  { sn: 5, variationNo: "", description: "SUPPLY AND INSTALLATION OF ADDITIONAL WALL PARTITION WITH ISOLATION VALVE IN FIRE FIGHTING TANK", reference: "SLV-ZUC-LTR-ARCO-00014", submissionRef: "", submissionDate: "", submittedAmount: 28571.16, approvedAmount: 0, underReviewAmount: 28571.16, status: "Under Review", remarks: "" },
  { sn: 6, variationNo: "", description: "POSITIVE COST IMPACT BETWEEN IFT AND IFC DRAWINGS", reference: "SLV-ARCO-LTR-C2407-00012 R1", submissionRef: "", submissionDate: "", submittedAmount: 119565.12, approvedAmount: 0, underReviewAmount: 119565.12, status: "Under Review", remarks: "" },
  { sn: 7, variationNo: "", description: "ADDITION OF A CLEAN AGENT FIRE SUPPRESSION SYSTEM IN UPS AND GSM ROOMS", reference: "SLV-ARCO-LTR-C2407-00074", submissionRef: "", submissionDate: "", submittedAmount: 53333.33, approvedAmount: 0, underReviewAmount: 53333.33, status: "Under Review", remarks: "" },
  { sn: 8, variationNo: "", description: "ADDITIONAL POWER PROVISION FOR DISHWASHER UNITS IN APARTMENTS", reference: "SLV-ZUC-ES-RFI-00021", submissionRef: "", submissionDate: "", submittedAmount: 233284.80, approvedAmount: 0, underReviewAmount: 233284.80, status: "Under Review", remarks: "" },
  { sn: 9, variationNo: "", description: "TOWNHOUSES PARAPET CANCELLATION", reference: "SLV-ZUC-LTR-ARCO-00040", submissionRef: "", submissionDate: "", submittedAmount: 4576.15, approvedAmount: 0, underReviewAmount: 4576.15, status: "Under Review", remarks: "" },
  { sn: 10, variationNo: "", description: "PROVISION OF ADDITIONAL MIRROR LIGHT IN ALL TYPE OF BATHROOMS", reference: "SLV-ZUC-ES-RFI-00022", submissionRef: "", submissionDate: "", submittedAmount: 348364.80, approvedAmount: 0, underReviewAmount: 348364.80, status: "Under Review", remarks: "" },
  { sn: 11, variationNo: "", description: "COST PROPOSAL FOR UPDATED ISSUE FOR CONSTRUCTION DRAWINGS", reference: "N/A", submissionRef: "", submissionDate: "", submittedAmount: 103715.87, approvedAmount: 0, underReviewAmount: 103715.87, status: "Under Review", remarks: "" },
];

export const COST_DATA: CostCategory[] = [
  {
    id: 'A',
    description: 'MATERIAL & SUBCONTRACTOR COST',
    budget: 100835500.00,
    budgetPercentage: 66.57,
    actualCost: 69825269.60,
    consumedPercentage: 69.25,
    remainingBudget: 31010230.41,
    status: 'Within Budget',
    certifiedAmount: 13772728.44,
    certifiedPercentage: 19.72,
    balanceToCertify: 56052541.16,
    subCategories: [
      { id: 'A.1', description: 'ELECTRICAL WORKS', budget: 34231500.00, budgetPercentage: 22.60, actualCost: 16928125.12, consumedPercentage: 49.45, remainingBudget: 17303374.89, status: 'Within Budget', certifiedAmount: 4375938.72, certifiedPercentage: 25.85, balanceToCertify: 12552186.39 },
      { id: 'A.2', description: 'ELV WORKS', budget: 9820000.00, budgetPercentage: 6.48, actualCost: 9320342.22, consumedPercentage: 94.91, remainingBudget: 499657.78, status: 'Within Budget', certifiedAmount: 179036.19, certifiedPercentage: 1.92, balanceToCertify: 9141306.03 },
      { id: 'A.3', description: 'BMS WORKS', budget: 1300000.00, budgetPercentage: 0.86, actualCost: 1050000.00, consumedPercentage: 80.77, remainingBudget: 250000.00, status: 'Within Budget', certifiedAmount: 0.00, certifiedPercentage: 0.00, balanceToCertify: 1050000.00 },
      { id: 'A.4', description: 'HVAC WORKS', budget: 20768000.00, budgetPercentage: 13.71, actualCost: 15071937.53, consumedPercentage: 72.57, remainingBudget: 5696062.47, status: 'Within Budget', certifiedAmount: 3694446.30, certifiedPercentage: 24.51, balanceToCertify: 11377491.23 },
      { id: 'A.5', description: 'PLUMBING WORKS', budget: 10876000.00, budgetPercentage: 7.18, actualCost: 7740579.27, consumedPercentage: 71.17, remainingBudget: 3135420.73, status: 'Within Budget', certifiedAmount: 2735538.70, certifiedPercentage: 35.34, balanceToCertify: 5005040.57 },
      { id: 'A.6', description: 'FLS WORKS', budget: 12550000.00, budgetPercentage: 8.29, actualCost: 12028317.00, consumedPercentage: 95.84, remainingBudget: 521683.00, status: 'Within Budget', certifiedAmount: 411968.20, certifiedPercentage: 3.42, balanceToCertify: 11616348.80 },
      { id: 'A.7', description: 'NATURAL GAS WORKS', budget: 1590000.00, budgetPercentage: 1.05, actualCost: 1490000.00, consumedPercentage: 93.71, remainingBudget: 100000.00, status: 'Within Budget', certifiedAmount: 0.00, certifiedPercentage: 0.00, balanceToCertify: 1490000.00 },
      { id: 'A.8', description: 'MISCELLANEOUS', budget: 8500000.00, budgetPercentage: 5.61, actualCost: 5924968.46, consumedPercentage: 69.71, remainingBudget: 2575031.54, status: 'Within Budget', certifiedAmount: 2309800.31, certifiedPercentage: 38.98, balanceToCertify: 3615168.15 },
      { id: 'A.9', description: 'TESTING AND COMMISSIONING', budget: 1200000.00, budgetPercentage: 0.79, actualCost: 271000.00, consumedPercentage: 22.58, remainingBudget: 929000.00, status: 'Within Budget', certifiedAmount: 66000.00, certifiedPercentage: 24.35, balanceToCertify: 205000.00 }
    ]
  },
  {
    id: 'B',
    description: 'TOTAL LABOR COST',
    budget: 28737000.00,
    budgetPercentage: 18.97,
    actualCost: 4842138.10,
    consumedPercentage: 16.85,
    remainingBudget: 23894861.90,
    status: 'Within Budget',
    certifiedAmount: 3218672.59,
    certifiedPercentage: 66.47,
    balanceToCertify: 1623465.50,
    subCategories: [
        { id: 'B.1', description: 'LABOR SALARY (ARCO LABORS)', budget: 20115900.00, budgetPercentage: 13.28, actualCost: 2470967.10, consumedPercentage: 12.28, remainingBudget: 17644932.90, status: 'Within Budget', certifiedAmount: 2470967.10, certifiedPercentage: 100.00, balanceToCertify: 0.00 },
        { id: 'B.2', description: 'LABOR SALARY (ARCO) - OVERTIME', budget: 5747400.00, budgetPercentage: 3.79, actualCost: 584511.00, consumedPercentage: 10.17, remainingBudget: 5162889.00, status: 'Within Budget', certifiedAmount: 584511.00, certifiedPercentage: 100.00, balanceToCertify: 0.00 },
        { id: 'B.3', description: 'SUBCONTRACTOR COST', budget: 2873700.00, budgetPercentage: 1.90, actualCost: 1786660.00, consumedPercentage: 62.17, remainingBudget: 1087040.00, status: 'Within Budget', certifiedAmount: 163194.50, certifiedPercentage: 9.13, balanceToCertify: 1623465.50 }
    ]
  },
  {
    id: 'C',
    description: 'TOTAL STAFF SALARIES / ENGINEERING COST',
    budget: 16586000.00,
    budgetPercentage: 10.95,
    actualCost: 4229936.09,
    consumedPercentage: 25.50,
    remainingBudget: 12356063.91,
    status: 'Within Budget',
    certifiedAmount: 4229936.09,
    certifiedPercentage: 100.0,
    balanceToCertify: 0.0,
    subCategories: [
        { id: 'C.1', description: 'STAFF SALARIES', budget: 16586000.00, budgetPercentage: 10.95, actualCost: 4229936.09, consumedPercentage: 25.50, remainingBudget: 12356063.91, status: 'Within Budget', certifiedAmount: 4229936.09, certifiedPercentage: 100.00, balanceToCertify: 0.00 }
    ]
  },
  {
    id: 'D',
    description: 'TOTAL OTHER COSTS',
    budget: 5217000.00,
    budgetPercentage: 3.44,
    actualCost: 757846.41,
    consumedPercentage: 14.53,
    remainingBudget: 4459153.59,
    status: 'Within Budget',
    certifiedAmount: 598187.47,
    certifiedPercentage: 78.93,
    balanceToCertify: 159658.94,
    subCategories: [
        { id: 'D.1', description: 'PETTY CASH EXPENSES', budget: 540000.00, budgetPercentage: 0.36, actualCost: 122220.63, consumedPercentage: 22.63, remainingBudget: 417779.37, status: 'Within Budget', certifiedAmount: 122220.63, certifiedPercentage: 100.00, balanceToCertify: 0.00 },
        { id: 'D.2', description: 'LOGISTICS EXPENSES', budget: 3677000.00, budgetPercentage: 2.43, actualCost: 298879.69, consumedPercentage: 8.13, remainingBudget: 3378120.31, status: 'Within Budget', certifiedAmount: 139220.75, certifiedPercentage: 46.58, balanceToCertify: 159658.94 },
        { id: 'D.3', description: 'BANK CHARGES', budget: 500000.00, budgetPercentage: 0.33, actualCost: 320414.17, consumedPercentage: 64.08, remainingBudget: 179585.83, status: 'Within Budget', certifiedAmount: 320414.17, certifiedPercentage: 100.00, balanceToCertify: 0.00 },
        { id: 'D.4', description: 'PROVISION FOR BACK CHARGES', budget: 500000.00, budgetPercentage: 0.33, actualCost: 16331.92, consumedPercentage: 3.27, remainingBudget: 483668.09, status: 'Within Budget', certifiedAmount: 16331.92, certifiedPercentage: 100.00, balanceToCertify: 0.00 }
    ]
  },
  {
    id: 'E',
    description: 'DLP PROVISION (1 YEAR)',
    budget: 100000.00,
    budgetPercentage: 0.07,
    actualCost: 0.00,
    consumedPercentage: 0.00,
    remainingBudget: 100000.00,
    status: 'Within Budget',
    certifiedAmount: 0.00,
    certifiedPercentage: 0.00,
    balanceToCertify: 0.00
  }
];

export const S_CURVE_DATA: ChartDataPoint[] = [
  { date: 'Oct-24', planned: 2, actual: 1.8, cumulativePlanned: 2, cumulativeActual: 1.8 },
  { date: 'Jan-25', planned: 5, actual: 4.2, cumulativePlanned: 7, cumulativeActual: 6.0 },
  { date: 'Apr-25', planned: 8, actual: 7.5, cumulativePlanned: 15, cumulativeActual: 13.5 },
  { date: 'Jul-25', planned: 12, actual: 11, cumulativePlanned: 27, cumulativeActual: 24.5 },
  { date: 'Oct-25', planned: 15, actual: 14.2, cumulativePlanned: 42, cumulativeActual: 38.7 },
  { date: 'Jan-26', planned: 18, actual: 0, cumulativePlanned: 60, cumulativeActual: 38.7 },
  { date: 'May-26', planned: 20, actual: 0, cumulativePlanned: 80, cumulativeActual: 38.7 },
  { date: 'Oct-26', planned: 15, actual: 0, cumulativePlanned: 95, cumulativeActual: 38.7 },
  { date: 'May-27', planned: 5, actual: 0, cumulativePlanned: 100, cumulativeActual: 38.7 },
];
