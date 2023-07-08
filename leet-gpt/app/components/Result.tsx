import { useEffect, useState } from "react";
import runPrompt from "../../utils/openApi";
import Link from "next/link";

type Props = {
  searchText: any;
};

export default function Result({ searchText }: Props) {
  const [search, setSearch] = useState(searchText);
  const [result, setResult] = useState({
    Q: "https://leetcode.com/problems/merge-sorted-array/",
    A: "Start by comparing the last elements of both arrays. Whichever array has the larger element, add it to the end of the merged array. Then, move the pointer of the array with the larger element back one step and repeat the same process.",
  });

  useEffect(() => {
    console.log("component rendered");

    const fetchData = async () => {
      setSearch(searchText);
      // let results = await runPrompt();
      // setResult(results);
      // console.log(result);
    };

    fetchData();
  }, [searchText]);

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md flex flex-col justify-center items-center my-3">
      <div className="font-bold mb-2 text-3xl">Result</div>
      {result ? (
        <Link
          href={result.Q}
          target="_blank"
          className="text-blue-500 underline"
        >
          {search.prompt}
        </Link>
      ) : null}
      <p className="mt-2">{result.A}</p>
    </div>
  );
}
