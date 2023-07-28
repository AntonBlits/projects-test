export interface Project {
  id: string;
  subject: string;
  description: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  cost: number;
}

export interface Projects {
  Projects: Project[];
}
