import { useEffect, useState } from "react";
import runPrompt from "../../utils/openApi";

type Props = {
  searchText: any;
};

export default function Result({ searchText }: Props) {
  const [search, setSearch] = useState(searchText);

  useEffect(() => {
    console.log(`component rendered`);
    console.log(search);
    runPrompt();
  }, [search]);

  return (
    <div className=" font-mono h1- font-bold flex justify-center py-4 bg-gray-300 my-4 flex-col items-center">
      <div className="">Result</div>
      <br />
      {search.prompt}
    </div>
  );
}
