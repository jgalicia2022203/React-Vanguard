/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { listAccounts, searchAccounts } from "../../../services/axios";

const SearchBar = ({ setAccounts }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        if (query) {
          const data = await searchAccounts(query);
          setAccounts(data);
        } else {
          const data = await listAccounts();
          setAccounts(data);
        }
      } catch (error) {
        console.error("Error searching accounts:", error);
      }
    };

    fetchAccounts();
  }, [query, setAccounts]);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by Account No. or ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-2 bg-gray-800 rounded"
      />
    </div>
  );
};

export default SearchBar;
