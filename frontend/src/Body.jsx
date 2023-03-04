import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import PostCard from "./PostCard";
import Radioo from "./Radio";
import Sliderr from "./Slider";

const Body = ()=>{
    const [post,setPost]=useState([{
        "imageId":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icbFSdo97A4M/v1/800x-1.jpg",
        "title":"Gaand me Chaand ",
        "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
        "category":"urban",
        "location":"Kolkata",
        "area":"Rajarhat",
        "status":"pending"
    },
    {"imageId":"https://assets.telegraphindia.com/telegraph/2020/Nov/1604950397_shutterstock_1436341607.jpg",
    "title":"Gaand me Chaand ",
    "description":"Lorem Ipsumrfberersefsfsfeefsefsebefjerbfbjerfbjebfjreb",
    "category":"urban",
    "location":"Kolkata",
    "area":"Rajarhat",
    "status":"pending"}
]);
    async function getPosts(){
        try {
            const data = await fetch();
            const json = await data.json();
            // setPost(json.?) .... to be continued
        } catch (error) {
            console.error(error);
        }
    }
    /*
        1. image
        2. title
        3. description
        4. category
        5. upvote/downvote 
        6. status  
    */
    return <div className="flex h-[745px]">
    <div className="bg-yellow-100 shadow-inner w-[75%] p-7 ">
    
        <div className="flex-wrap"> 
        {post?.length==0?(<h1>No Post to filter</h1>):( 
          post.map((p) => {
            return(<Link to={"post/"}><PostCard {...p}/></Link>);
          })
        )}
      </div>     
    </div>
    <div className="w-[25%] p-8 bg-white shadow-inner rounded-lg">
        <h1 className="text-center font-serif font-bold text-2xl">Filter Section</h1>
        <div className="bg-white  shadow-2xl rounded-2xl w-80 mt-9 border-4 border-rose-500">
            <h1 className="text-center">Priority</h1>
            <Sliderr/>
        </div>
        <div className="bg-white shadow-2xl rounded-2xl w-80 mt-9 border-4 border-rose-500">
            <Radioo heading="Status"prob="Pending"probT="Completed"/> 
        </div>
        <div className="bg-white  shadow-2xl rounded-2xl  w-80 mt-9 border-4 border-rose-500">
            <Dropdown/>
        </div>
        <div className="bg-white  shadow-2xl rounded-2xl w-80 mt-9 border-4 border-rose-500">
            <Radioo heading="Category" prob="Urban"probT="Rural"/>
        </div>
        <div className="rounded-2xl w-80 mt-9">
            <button className="rounded-full w-32 bg-green-500 ml-20">Apply Filter</button>
        </div>
    </div>
    </div>
}
export default Body;