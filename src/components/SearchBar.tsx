<<<<<<< HEAD
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <input
      type="text"
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Encontrar produtos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
=======
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Encontrar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 
>>>>>>> 6ae9463449f4961cc2d1b58f602c4cea584717be
