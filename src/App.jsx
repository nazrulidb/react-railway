import React, { useState } from 'react';

const BD_CITIES = [
  { id: 1, name: "Dhaka", division: "Dhaka", population: "22.4M", status: "Capital" },
  { id: 2, name: "Chittagong", division: "Chittagong", population: "5.2M", status: "Port City" },
  { id: 3, name: "Sylhet", division: "Sylhet", population: "0.9M", status: "Tea Capital" },
  { id: 4, name: "Khulna", division: "Khulna", population: "1.0M", status: "Industrial" },
  { id: 5, name: "Rajshahi", division: "Rajshahi", population: "0.8M", status: "Education Hub" },
  { id: 6, name: "Barisal", division: "Barisal", population: "0.5M", status: "River Port" },
  { id: 7, name: "Rangpur", division: "Rangpur", population: "0.4M", status: "Agricultural" },
  { id: 8, name: "Mymensingh", division: "Mymensingh", population: "0.5M", status: "Historical" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = BD_CITIES.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#006a4e', margin: 0 }}>Bangladesh City Dashboard</h1>
        <p style={{ color: '#666' }}>Infrastructure and Population Overview</p>
      </header>

      <input
        type="text"
        placeholder="Search city..."
        style={{
          padding: '12px', width: '100%', maxWidth: '300px', borderRadius: '8px',
          border: '1px solid #ddd', marginBottom: '30px', outline: 'none'
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {filteredCities.map(city => (
          <div key={city.id} style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderTop: '4px solid #f42a41'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>{city.name}</h2>
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
                <p><strong>Division:</strong> {city.division}</p>
                <p><strong>Population:</strong> {city.population}</p>
            </div>
            <span style={{
              fontSize: '11px', backgroundColor: '#006a4e', color: 'white',
              padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase'
            }}>
              {city.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
