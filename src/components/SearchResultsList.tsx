interface SearchResultsListProps {
  results: any[]; // Ideally, you should define a more specific type than 'any'
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>
              <ul>
      {results.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
          <p>${item.price}</p>
        </li>
      ))}
    </ul>
          {result.title}: {result.description}
        </li>
      ))}
    </ul>
  );
};

export default SearchResultsList;
