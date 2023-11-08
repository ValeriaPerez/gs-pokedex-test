export interface CardProps {
  name: string;
  onClick?: () => void;
  attack?: string;
  id?: string;
  image?: string;
  defense?: string;
  movements?: string;
  types?: any[];
  skills?: string[];
}