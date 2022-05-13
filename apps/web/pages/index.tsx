import { Button } from "ui";
import type { GetServerSideProps } from "next";
import type { Person } from "types";

export const getServerSideProps: GetServerSideProps<{
  person: Person;
}> = async () => {
  const response = await fetch("http://localhost:3002");
  const data = (await response.json()) as Person;

  return {
    props: {
      person: data,
    },
  };
};

interface Props {
  person: Person;
}

export default function Web({ person }: Props) {
  return (
    <div>
      <h1>Web 2</h1>
      <Button />
      <pre>
        <code>{JSON.stringify(person)}</code>
      </pre>
    </div>
  );
}
