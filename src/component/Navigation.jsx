import React from "react";

const Navigation = ({ setFilterValue }) => {
  return (
    <div className="navigation-content">
      <button
        onClick={() => {
          setFilterValue((prev) => ({
            ...prev,
            page: prev.page === 1 ? 1 : prev.page - 1,
          }));
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setFilterValue((prev) => ({
            ...prev,
            page: prev.page + 1,
          }));
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
