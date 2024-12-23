```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('some-api-endpoint');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Set error message for UI
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (data) {
    return <Text>{JSON.stringify(data)}</Text>;
  }

  return <Text>No data</Text>;
};

export default MyComponent;
```