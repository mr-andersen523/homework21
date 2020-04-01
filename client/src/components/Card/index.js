import React from "react";
import "./style.css";
import SearchForm from "../SearchForm"

function Card() {
    return (
<div id="card" className="card mt-4 md-12 text-center">
<div className="card-header">Book Search</div>
<div className="card-body">
    <SearchForm />
</div>
</div>
    );
}

export default Card;