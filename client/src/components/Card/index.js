import React from "react";
import "./style.css";
import SearchForm from "../SearchForm"

function Card() {
    return (
<div id="card" className="card mt-4 md-12">
<div className="card-header">Header</div>
<div className="card-body">
    <h4 id="card" className="card-title">Light card title</h4>
    <SearchForm />
</div>
</div>
    );
}

export default Card;