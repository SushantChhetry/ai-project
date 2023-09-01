import { useEffect, useState } from "react";
import runPrompt from "../../utils/openApi";
import Link from "next/link";

type Props = {
  searchText: any;
};

export default function Result({ searchText }: Props) {
  const [search, setSearch] = useState(searchText);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean | undefined>(false);

  const [result, setResult] = useState<{ Q: string; A: string } | undefined>({
    Q: "",
    A: "",
  });

  useEffect(() => {
    console.log("component rendered");

    const fetchData = async () => {
      setIsLoading(true);
      try {
        setSearch(searchText);
        let results = await runPrompt(searchText);
        if (typeof results === "string") {
          setResult({ Q: "", A: results });
        } else {
          setResult(results);
          console.log(result);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <div className="bg-gray-200 p-14 rounded shadow-md flex flex-col justify-center items-center my-3">
      <div className="font-bold mb-2 text-3xl">
        {searchText.type === "hint" ? "Hint" : "Solution"}
      </div>
      {result ? (
        <Link
          href={result.Q}
          target="_blank"
          className="text-blue-500 underline"
        >
          {search.prompt}
        </Link>
      ) : null}
      {isLoading ? (
        "Loading . . ."
      ) : isError ? (
        "Oops something went wrong . . ."
      ) : (
        <p className="mt-2">
          {result && searchText.type === "hint" ? (
            result.A
          ) : (
            <Link
              href={result?.A ?? "Click to see solution"}
              className="hover:text-green-400 transition-colors duration-300"
              target="_blank"
            >
              Click to see solution
            </Link>
          )}
        </p>
      )}
    </div>
  );
}
