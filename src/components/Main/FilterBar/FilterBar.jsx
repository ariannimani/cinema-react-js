import React from "react";
import "./FilterBar.styles.css";
import FilterDropDownBtn from "../../buttons/FilterDropDownBtn/FilterDropDownBtn";
import FilterRadioBtn from "../../buttons/FilterRadioBtn/FilterRadioBtn";

export default function FavoriteBtn(props) {
  return (
    <div className="filter-bar">
      <FilterDropDownBtn
        handleDropdownChange={props.handleDropdownChange}
        genres={props.genres}
      ></FilterDropDownBtn>
      <div className="filter-radios">
        <FilterRadioBtn
          changePopularAPI={props.changePopularAPI}
          valueTrend="3/movie/now_playing?"
          valueTrendName="Now Playing"
          valueTrendId="featured"
        ></FilterRadioBtn>
        <FilterRadioBtn
          changePopularAPI={props.changePopularAPI}
          valueTrend="3/movie/popular?"
          valueTrendName="Popular"
          valueTrendId="popular"
        ></FilterRadioBtn>
        <FilterRadioBtn
          changePopularAPI={props.changePopularAPI}
          valueTrend="3/movie/top_rated?"
          valueTrendName="Top Rated"
          valueTrendId="newest"
        ></FilterRadioBtn>
        <div className="checked-radio-bg"></div>
      </div>
    </div>
  );
}
