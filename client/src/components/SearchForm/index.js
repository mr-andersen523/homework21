import React from "react";

function SearchForm() {
    return (
<div className="text-center" style={{textAlign:'center'}}>
    <form className="form-inline my-2 my-0" style={{display:'inline-block'}}>
        <input className="form-control mr-sm-2" type="text" placeholder="Book Name" />
        </form>
    <button className="btn btn-primary my-2 my-sm-0" type="submit" style={{fontFamily: "Futura Std"}}>Search</button>
    
</div>
    );
}

export default SearchForm;