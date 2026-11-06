import { useFilter } from '../context/FilterContext';

// A list describing the 3 buttons
// I put it outside the component so it isnt recreated on every re render
const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className='filters'>
      {/* Makes on button for each item in filterOption */}
      {filterOptions.map(({ label, value }) => (
        <button
          key={value}
          // The button matching the current filter gets the extra "active" class (it's colored in)
          className={filter === value ? 'filter active' : 'filter'}
          onClick={() => setFilter(value)} // clicking changes the filter
        >
          {label}
        </button>
      ))}
    </div>
  );
}
