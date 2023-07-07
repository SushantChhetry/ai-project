import React from "react";

type Props = {
  searchText: any;
};

export default function Result({ searchText }: Props) {
  console.log(searchText);
  return (
    <div className=" font-mono h1- font-bold flex justify-center py-4 bg-gray-300 my-4">
      <div className="">Result</div>
      {searchText.prompt}
    </div>
  );
}
