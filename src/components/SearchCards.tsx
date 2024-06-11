import  { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../CSS/SearchCards.css";

interface User {
  id: number;
  name: string;
}

const SearchCards: React.FC<{ setResults: (results: User[]) => void }> = ({
  setResults,
}) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json() as Promise<User[]>)
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="wrapper">
      <FaSearch id="icon" />
      <input
        type="text"
        placeholder="Search for electronics"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchCards;
