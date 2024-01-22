import moment from 'moment';

export interface Writing {
  id: number;
  identifier: string;
  title: string;
  description: string;
  content: string;
  author?: string; // Optional property
  createdAt: moment.Moment; // Assuming ISO date string format
  updatedAt: moment.Moment; // Assuming ISO date string format
  published: boolean;
  tags?: string[]; // Optional property
}
