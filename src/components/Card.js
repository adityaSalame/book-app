import React,{useState} from 'react';

const Card=({data})=>{
    const [info, setInfo]= useState(["","","","","","","","","","",""]);
    const [showdetails,setshowdetails]= useState(false);
    const [topthree,setTopthree] = useState(true);
    const more=data.slice(0,3);
    console.log(more);
    // let auth="";
    //     let title="";
    //     let desc="";
    //     let lang="";
    //     let avgrating="";
    //     let ratingcount="";
    //     let publisheddate="";
    //     let publisher="";
    //     let imgsrc="";

    function showDetails(e,book){
        setshowdetails(true);
        setTopthree(false);
        //setInfo(book);
       // console.log("this is"+info.volumeInfo.imageLinks.thumbnail);
        // console.log(info.authors[0],info.title,info.description,info.language);
        setInfo([book.title,book.description,book.language,book.averageRating,book.ratingsCount,
            book.publishedDate,book.publisher,book.imageLinks.thumbnail,book.authors,book.previewLink,book.infoLink]);
        //console.log(info[0], info.length);
        // title=info.title;
        // desc=info.description;
        // lang=info.language;
        // avgrating=info.averageRating;
        // ratingcount=info.ratingsCount;
        // publisheddate=info.publishedDate;
        // publisher=info.publisher;
        // imgsrc=info.imageLinks.thumbnail;
    }
    return(
        <div className='container-top'>
            <div className='showDetails' style={{display:showdetails?"flex":"none"}}>
                <div className='details-imgcon'>
                    <img className='img' src={info[7]}/>

                </div>
                <div className='details-con'>
                    <div className='title-pub-con'>
                        <div className='title-con'><h1>{info[0]}</h1></div>
                        <div className='pub-con'>Published On: {info[5]}</div>
                    </div>
                    <div className='auth-con'>{info[8]}</div>
                    <div className='desc-con'>{info[1]}</div>
                    <div className='other-con'>
                        <div>Avg Rating: {info[3]}</div>
                        <div>|</div>
                        <div>Rating Count: {info[4]}</div>
                        <div>|</div>
                        <div>Publisher: {info[6]}</div>
                        <div>|</div>
                        <div>Language: s{info[2]}</div>
                        
                    </div>
                    <div className='buttons' >
                    <a href={info[9]} ><button className='read'>Now Read</button></a>
                    <a href={info[10]}><button className='read'>More Info</button></a>
                    </div>
                </div>
            </div>
            
           <div className='top-container' style={{display:topthree?"flex":"none"}}>
           {
                more.map((book)=>(
                    console.log(typeof book),
                    <div className='card' key={book.id} onClick={(e)=>showDetails(e,book.volumeInfo)}>
                        <div className='imgcontainer'>
                             <img className='img' src={book.volumeInfo.imageLinks.thumbnail}/>
                        </div>
                        <div className='description'>
                            <div className='desc'>
                                <h1>{book.volumeInfo.title}</h1>
                                
                                
                                <div>{book.volumeInfo.description}</div>
                            </div>
                            <div>
                                <a href={book.volumeInfo.previewLink}><button className='read'>Now Read!</button></a>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
           </div>
        </div>
    )
}

export default Card;