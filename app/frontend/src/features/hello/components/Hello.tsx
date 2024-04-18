import { useAtomValue } from "jotai";
import type { FC } from "react";
import hello from "../states/hellostate";

const Hello: FC = () => {
  const message = useAtomValue(hello);
  return <div>{message}</div>;
};

export default Hello;
