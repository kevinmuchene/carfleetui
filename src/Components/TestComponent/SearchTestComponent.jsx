import React, { useState } from "react";

export function SearchTestComponent() {
  const [searchCriteria, setSearchCriteria] = useState({
    model: false,
    make: false,
  });
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSearchCriteria((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    // Dummy data and search logic for illustration
    const cars = [
      { id: 1, model: "Model S", make: "Tesla" },
      { id: 2, model: "Mustang", make: "Ford" },
      // ... more cars
    ];

    const filteredCars = cars.filter((car) => {
      if (!searchCriteria.model && !searchCriteria.make) {
        return (
          car.model.includes(localSearchQuery) ||
          car.make.includes(localSearchQuery)
        );
      }
      if (searchCriteria.model && !car.model.includes(localSearchQuery)) {
        return false;
      }
      if (searchCriteria.make && !car.make.includes(localSearchQuery)) {
        return false;
      }
      return true;
    });

    setResults(filteredCars);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="model"
          checked={searchCriteria.model}
          onChange={handleCheckboxChange}
        />
        <label>Model</label>

        <input
          type="checkbox"
          name="make"
          checked={searchCriteria.make}
          onChange={handleCheckboxChange}
        />
        <label>Make</label>
      </div>
      <div>
        <input
          type="text"
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <h2>Results:</h2>
        <ul>
          {results.map((car) => (
            <li key={car.id}>
              {car.make} - {car.model}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchTestComponent;
