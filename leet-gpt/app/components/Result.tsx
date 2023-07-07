import React from "react";

type Props = {
  searchText: any;
};

export default function Result({ searchText }: Props) {
  console.log(searchText);
  return <div>Result : {searchText.prompt}</div>;
}
