import React from "react";

export default function SubmitBtn(props) {
  return (
    <button
      className={props.btnClass}
      type={props.typeBtn}
      onClick={props.loadMoreMovies}
    >
      {props.isLoading ? props.submiting : props.submit}
    </button>
  );
}
