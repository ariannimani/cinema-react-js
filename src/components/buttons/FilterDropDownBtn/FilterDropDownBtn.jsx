import React from "react";

export default function FilterDropDownBtn(props) {
  return (
    <div className="filter-dropdowns">
      <select
        name="genre"
        className="genre"
        onChange={props.handleDropdownChange}
      >
        <option value="0">All genres</option>
        {props.genres.map((genre, i) => (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
