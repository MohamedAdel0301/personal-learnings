export type LinkType = {
  name: string;
  path: string;
};

export type EventoEvent = {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  organizerName: string;
  imageUrl: string;
  description: string;
  date: Date;
};
