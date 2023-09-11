import { Category } from "../../types";

export interface MainNavProps {
  data: Category[];
}

export const MainNav = ({ data }: MainNavProps) => {
  return (
    <nav>
      <ul>
        {data.map((category) => (
          <li key={category.id}></li>
        ))}
      </ul>
    </nav>
  );
};
