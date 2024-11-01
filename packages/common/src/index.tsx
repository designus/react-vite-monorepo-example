import { FC } from "react";

interface Props {
  a: number;
  b: string;
}

export const someObject: Props = {
  a: 1,
  b: "penki di",
};

export const SomeComponent: FC<Props> = ({ a, b }) => {
  return (
    <div>
      <h1>This is react component</h1>
      <div>Property a = {a}</div>
      <div>Property b = {b}</div>
    </div>
  );
};
