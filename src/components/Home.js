import React, {useState, useEffect} from 'react';
import axios from 'axios';
import bell from "../icons/Vector.png"
import homename from "../icons/KeazoNBOOKS.png"
import diamond from "../icons/Group (1).png"
import homelogo from "../icons/Group.png"
import heart from "../icons/bx_bx-book-heart.png"
import profile from "../icons/IMG20210528181544.png"

const Home=({setData})=>{
    let arr=[];
    const [searchTerm, setSearchTerm] = useState("");
    const [previousSearchTerm, setPreviousSearchTerm] = useState("");

    useEffect(()=>{
        searchBook() 
    },[]
    )

    const searchBook = () =>{
       
        if(searchTerm === "" ){

            axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyB5GCISnoXixfYrEzEzrGepDm8WnRvbJq8"
            
        )
        .then((response)=> {
        console.log(response);
        console.log(response.data.items);
        arr.push(...response.data.items);
        setPreviousSearchTerm(searchTerm);
        })
        .catch((error)=>{console.log(error)})

        axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&key=AIzaSyB5GCISnoXixfYrEzEzrGepDm8WnRvbJq8"
            
        )
        .then((response)=> {
        console.log(response);
        console.log(response.data.items);
        arr.push(...response.data.items);
        setPreviousSearchTerm(searchTerm);
        setData(arr);
        console.log(arr);
        })
        .catch((error)=>{console.log(error)})
        }

        else{
            let str=searchTerm.replace(" ","+");
            axios.get("https://www.googleapis.com/books/v1/volumes?q="+str+"&key=AIzaSyB5GCISnoXixfYrEzEzrGepDm8WnRvbJq8"
            
        )
        .then((response)=> {
        console.log("here is searched response",response);
        console.log(response.data.items);
       
        setData(response.data.items);
        
        setPreviousSearchTerm(searchTerm);
        })
        .catch((error)=>{console.log(error)})
        }

            
    }  

        return(
            <div className='Navbar'>
                
                <div className='logos'>
                <div><img className='logo' src={homelogo}></img></div>
                <div><img className='logo'src={homename}></img></div>
                </div>

                <div className='searchbar'>
                    <div>
                    <input type='text' placeholder='Search for book'
                    value ={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
                    />
                    </div>
                    <div className='search-btn'>
                    <button onClick={searchBook}>Search</button>
                    </div>
                </div>
                <div><img className='logo'src={heart}></img></div>
                <div><img className='logo'src={bell}></img></div>
                <div><img className='logo'src={diamond}></img></div>
                <div><img className='logo'src={profile}></img></div>
        </div>
    )
}

export default Home;