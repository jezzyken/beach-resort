import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxSize,
    maxPrice,
    minPrice,
    minSize,
    breakfast,
    pets,
  } = context;

  //get unique types
  let types = getUnique(rooms, "type");
  let people = getUnique(rooms, "capacity");

  //add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Room Type */}
        <div className="form-group">
          <label htmlFor="type"> Room Type </label>
          <select
            className="form-control"
            name="type"
            id="type"
            onChange={handleChange}
            value={type}>
            {types}
          </select>
        </div>
        {/* End of Room Type */}

        {/* Guess Capacity */}
        <div className="form-group">
          <label htmlFor="capacity"> Guess </label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            onChange={handleChange}
            value={capacity}>
            {people}
          </select>
        </div>
        {/* End of Guess Capacity */}
      </form>
    </section>
  );
}
