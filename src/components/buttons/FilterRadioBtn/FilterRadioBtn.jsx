import React from "react";

export default function FilterRadioBtn(props) {
  return (
    <>
      <input
        type="radio"
        name="grade"
        id={props.valueTrendId}
        onChange={props.changePopularAPI}
        value={props.valueTrend}
      />
      <label htmlFor={props.valueTrendId}>{props.valueTrendName}</label>
    </>
  );
}
