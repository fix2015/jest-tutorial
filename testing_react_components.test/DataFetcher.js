// Component that fetches and displays data
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';  // Assuming an external API call

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(response => setData(response));
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data}</div>;
}

export default DataFetcher;
