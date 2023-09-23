import React,{useState} from "react";

const Morebooks=({data})=>{
    const more=data.slice(3);
    return(
        <div className="morebooks">
            {
                more.map((book)=>(
                    <div className="inside-morebooks">
                    <img src={book.volumeInfo.imageLinks.thumbnail} 
                    alt="img"
                    />
                    </div>
                ))
            }
        </div>
    )
}

export default Morebooks;