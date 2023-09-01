"use client";

import React from "react";
import Result from "./Result";
import { useState } from "react";

export default function Search() {
  const [formData, setFormData] = useState({ type: "", prompt: "" });
  const [selectedVal, setSelectedVal] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVal(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      type: selectedVal,
      prompt: searchVal,
    });
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your problem"
          onChange={handleChange}
          className="py-2 mt-2 border border-gray-300 rounded-md px-7 focus:outline-none focus:border-green-500"
          required
        />

        <div className="flex justify-center items-center mt-4 space-x-7">
          <div>
            <label htmlFor="hint" className="flex items-center">
              <input
                type="radio"
                id="hint"
                name="type"
                value="hint"
                onChange={handleRadioChange}
                required
                className="mr-2"
              />
              Hint
            </label>
          </div>
          <div>
            <label htmlFor="solution" className="flex items-center">
              <input
                type="radio"
                id="solution"
                name="type"
                value="solution"
                onChange={handleRadioChange}
                required
                className="mr-2"
              />
              Solution
            </label>
          </div>
        </div>

        <button
          className="max-w-sm px-4 py-2 mt-4 font-bold text-white bg-green-500 border-b-4 border-green-700 rounded w hover:bg-green-400 hover:border-green-500"
          type="submit"
        >
          Search
        </button>
      </form>

      {formData.prompt !== "" && <Result searchText={formData} />}
    </div>
  );
}
