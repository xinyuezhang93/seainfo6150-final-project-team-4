import React from 'react';

const ExampleComponent = ({ options, products }) => (
  <div>
    <ul>
      {
        Object.keys(products).map((product) => <li key={product}>{product}</li>)
      }
    </ul>
    <ul>
      {
        Object.keys(options).map((option) => {
          const value = options[option];
          return (
              <li key={option}>{value.name}</li>
          );
        })
      }
    </ul>
  </div>
);

export default ExampleComponent;
