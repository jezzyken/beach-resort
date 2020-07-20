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
    maxPrice,
    minPrice,
    maxSize,
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
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> room price $ {price} </label>
          <input
            className="form-control"
            type="range"
            min={minPrice}
            max={maxPrice}
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* End of room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End of size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
}
