import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default Card;