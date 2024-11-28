export interface InputProps {
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  label?: string;
}
