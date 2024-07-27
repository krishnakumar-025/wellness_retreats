import React from "react";

const FilterContent = ({ filterValue, setFilterValue }) => {
  return (
    <div className="filter-view">
      <div className="filter-select">
        <select
          name="filter by Location"
          id="date"
          value={filterValue.location}
          onChange={(e) => {
            setFilterValue((prev) => ({ ...prev, location: e.target.value }));
          }}
        >
          <option value={""}>Filter by Location</option>
          <option value={"Goa"}>Goa</option>
          <option value={"Rishikesh"}>Rishikesh</option>
          <option value={"Kerala"}>Kerala</option>
        </select>
        <select
          name="filter by Type"
          id="filter"
          value={filterValue.filter}
          onChange={(e) => {
            setFilterValue((prev) => ({ ...prev, filter: e.target.value }));
          }}
        >
          <option value={""}>Filter by Type</option>
          <option value={"Yoga"}>Yoga</option>
          <option value={"Meditation"}>Meditation</option>
          <option value={"Detox"}>Detox</option>
          <option value={"Wellness"}>Wellness</option>
        </select>
      </div>
      <input
        id="search"
        type="text"
        placeholder="Search retreats by title"
        value={filterValue.search}
        onChange={(e) => {
          setFilterValue((prev) => ({ ...prev, search: e.target.value }));
        }}
      />
    </div>
  );
};

export default FilterContent;
