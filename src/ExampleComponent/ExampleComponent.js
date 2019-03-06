import React from 'react';

const ExampleComponent = ({ options, products, selectedOptions, setProductOption, selectedProduct }) => (
  <div>
    <input type="color" onChange={setProductOption.bind(null, 'color')}/>
    <input type="text" onChange={setProductOption.bind(null, 'numSeats')}/>
    <fieldset>
      <label htmlFor="numCupholders">{options.numCupholders.name}</label>
          <input type="number" max={options.numCupholders.maximaximumNum} onChange={setProductOption.bind(null, 'numCupholders')}/>
    </fieldset>
    <select onChange={setProductOption.bind(null, 'hubcapsMaterial')}>
      {
        options.hubcapsMaterial.values.map(color =>
          <option key={color} value={color}>{color}</option>
        )
      }
    </select>

    <fieldset>
      <label htmlFor="spareTire">{options.spareTire.name}</label>
      <select onChange={setProductOption.bind(null, 'spareTire')}>
        {
          options.spareTire.values.map(size =>
            <option key={size} value={size}>{size}</option>
          )
        }
      </select>

    </fieldset>

    <fieldset>
      <label htmlFor="floormatsColor">{options.floormatsColor.name}</label>
      <select onChange={setProductOption.bind(null, 'floormatsColor')}>
        {
          options.floormatsColor.values.map(color =>
            <option key={color} value={color}>{color}</option>
          )
        }
      </select>
    </fieldset>

    <fieldset>
      <label htmlFor="hoodOrnament">{options.hoodOrnament.name}</label>
      <select onChange={setProductOption.bind(null, 'hoodOrnament')}>
        {
          options.hoodOrnament.values.map(({ name }) =>
            <option key={name} value={name}>{name}</option>
          )
        }
      </select>

    </fieldset>

    <fieldset>
      <label htmlFor="trunkMonkey">{options.trunkMonkey.name}</label>
      <select onChange={setProductOption.bind(null, 'trunkMonkey')}>
        {
          options.trunkMonkey.values.map(({ name }) =>
            <option key={name} value={name}>{name}</option>
          )
        }
      </select>

    </fieldset>

    <fieldset>
      <label htmlFor="engine">{options.engine.name}</label>
      <select onChange={setProductOption.bind(null, 'engine')}>
        {
          options.engine.values.map(engine =>
            <option key={engine} value={engine}>{engine}</option>
          )
        }
      </select>

    </fieldset>


    <fieldset>
      <input id='hasGPS' type="checkbox" onChange={setProductOption.bind(null, 'hasGPS')} />
      <label htmlFor='hasGPS'>{options.hasGPS.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasTintedWindows' type="checkbox" onChange={setProductOption.bind(null, 'hasTintedWindows')} />
      <label htmlFor='hasTintedWindows'>{options.hasTintedWindows.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasAirConditioning' type="checkbox" onChange={setProductOption.bind(null, 'hasAirConditioning')} />
      <label htmlFor='hasAirConditioning'>{options.hasAirConditioning.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasRadio' type="checkbox" onChange={setProductOption.bind(null, 'hasRadio')} />
      <label htmlFor='hasRadio'>{options.hasRadio.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasGloveBox' type="checkbox" onChange={setProductOption.bind(null, 'hasGloveBox')} />
      <label htmlFor='hasGloveBox'>{options.hasGloveBox.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasCupholders' type="checkbox" onChange={setProductOption.bind(null, 'hasCupholders')} />
      <label htmlFor='hasCupholders'>{options.hasCupholders.name}</label>
    </fieldset>
    <fieldset>
      <input id='hasCigaretteLighters' type="checkbox" onChange={setProductOption.bind(null, 'hasCigaretteLighters')} />
      <label htmlFor='hasCigaretteLighters'>{options.hasCigaretteLighters.name}</label>

      <label htmlFor="numCigaretteLighters">{options.numCigaretteLighters.name}</label>
          <input type="number" max={options.numCigaretteLighters.maximaximumNum} onChange={setProductOption.bind(null, 'numCigaretteLighters')}/>
    </fieldset>
    <fieldset>
      <input id='hasMonogrammedSteeringWheelCover' type="checkbox" onChange={setProductOption.bind(null, 'hasMonogrammedSteeringWheelCover')} />
      <label htmlFor='hasMonogrammedSteeringWheelCover'>{options.hasMonogrammedSteeringWheelCover.name}</label>

      <label htmlFor="monogram">{options.monogram.name}</label>
          <input type="text" onChange={setProductOption.bind(null, 'monogram')}/>
    </fieldset>
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
