export interface ContributionType {
  id: string;
  amount: number;
  expectAmount: number;
  status: "not paid" | "pending" | "complete";
  updateCount: number;
  user: {
    firstName: string;
    lastName: string;
  };
  notes: any;
  contributionDate: Date;
  lastUpdate: Date;
}
