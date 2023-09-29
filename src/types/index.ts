type Tag = { name: string };

type Point = [number, number] | [];

type Parent = 'Own' | 'Published' | 'Shared';

interface MarkerProps {
  lat: number;
  lng: number;
  title: string;
  description: string;
  parent: Parent;
  tags: Tag[];
}

type Country = {
  label: string;
  latitude: number;
  longitude: number;
};

type ParentCheck = {
  Own: boolean;
  Published: boolean;
  Shared: boolean;
};

type Item = { label: Parent };

export type { Tag, MarkerProps, Point, Parent, Country, ParentCheck, Item };
