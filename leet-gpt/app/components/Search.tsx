"use client";

import React from "react";
import Result from "./Result";
import { useState } from "react";

export default function Search() {
  const [formData, setFormData] = useState({ type: "", prompt: "" });
  const [selectedVal, setSelectedVal] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`change: ${event.target.name}`);
    setSearchVal(event.target.name);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`radio value: ${event.target.value}`);
    setSelectedVal(event.target.name);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      type: selectedVal,
      prompt: searchVal,
    });

    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col justify-center align-middle"
      >
        <input
          type="text"
          placeholder="enter your leet code problem"
          onChange={handleChange}
          className="py-4 mt-2 border border-gray-300 rounded-md px-7 focus:outline-none focus:border-green-500 "
          required
        />

        <div className="flex justify-center row-span-2 pt-4 align-middle gap-7">
          <div>
            <label htmlFor="hint">
              <input
                type="radio"
                id="hint"
                name="type"
                value="hint"
                onChange={handleRadioChange}
                required
              />
              Hint
            </label>
          </div>
          <div>
            <label htmlFor="solution">
              Solution
              <input
                type="radio"
                id="solution"
                name="type"
                value="solution"
                onChange={handleRadioChange}
                required
              />
            </label>
          </div>
        </div>
        <br />
        <button
          className="max-w-sm px-4 py-2 font-bold text-white bg-green-500 border-b-4 border-green-700 rounded w hover:bg-green-400 hover:border-green-500"
          type="submit"
        >
          Search
        </button>
      </form>
      {formData ? <Result searchText={"Hello I am search text"} /> : ""}
    </div>
  );
}
