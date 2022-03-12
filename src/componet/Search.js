import React, { useState } from "react";
import axios from 'axios';
const Search=()=>{
  


    const [count, setCount] = useState();
    
    const [result, setResult] = useState([]);
    const changephoto=()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${count}&client_id=Fv3Hq1nG5P_6kFqvCHL-g-6M7QSPiYJNeZZYe_Sn-xc
        `).then((r)=>{
            setResult(r.data.results);
        })

    }
    return(
        <>
        <div className='container text-center my-5'>
 
        <input type="text" className='form-control'  value={count} onChange={(e)=>
        {
            setCount(e.target.value)
        }} />
        <button type='submit' className='btn btn-primary my-2'    onClick={changephoto}>Get Photo</button>
    </div>
    <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>

    </>
    )
}

export default Search;