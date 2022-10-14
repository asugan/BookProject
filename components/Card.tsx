import React from "react";

interface ListData {
  id: number;
  name: string;
  username: string;
}

interface ChildComponentProps {
  data: [];
}

const Card = ({ data }: ChildComponentProps) => {
  return (
    <div className="">
      {data.map((items: ListData) => {
        return (
          <div key={items.id} className="">
            <p>{items.id}</p>
            <p>{items.name}</p>
            <p>{items.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
