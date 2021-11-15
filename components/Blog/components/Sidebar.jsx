import React, { useState, useEffect } from "react";

export default function Sidebar(props) {
  const { categories } = props;

  return (
    <div className="col-lg-4 sidebar">
      <div className="single-widget search-widget">
        <div className="input-group">
          <input
            className="form-control border-secondary py-2"
            placeholder="Search"
            type="search"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="single-widget category-widget">
        <h2>Category</h2>
        <ul>
          { categories.map((category) => (
            <li key={category._id}>
              <a href={"/category/" + category.slug} className="d-flex justify-content-between">
                <span>{ category.name }</span>
                {/* <span>(22)</span> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="single-widget tag-widget">
        <h2>Tag</h2>
        <ul className="tags">
          <li>
            <a href="archive.html">Fashion</a>
          </li>
          <li>
            <a href="archive.html">Styles</a>
          </li>
          <li>
            <a href="archive.html">Marketing</a>
          </li>
          <li>
            <a href="archive.html">Development</a>
          </li>
          <li>
            <a href="archive.html">Design</a>
          </li>
          <li>
            <a href="archive.html">Wordpress</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
