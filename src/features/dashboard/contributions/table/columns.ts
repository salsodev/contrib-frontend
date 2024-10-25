type contribution = {
  id: string;
  amount: number;
  expectAmount: number;
  status: "not paid" | "pending" | "complete";
  updateCount: number;
  user: any;
  notes: any;
  contributionDate: Date;
  lastUpdate: Date;
};

export const columns: contribution[] = [];
