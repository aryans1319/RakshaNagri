import React from 'react'

const PostCard = (
    {imageId,title,description,status,category,location,area}) => {
  return (
    <div className="w-100% p-5 m-5 rounded-2xl flex flex-wrap shadow-2xl bg-slate-300">
        <div className='h-[255] w-96 rounded-2xl bg-slate-500'>
            <img className='h-[255] rounded-2xl w-max' src={imageId}/>
        </div>
        <div className='p-10 bg-white font-serif rounded-2xl ml-10 shadow-sm'>
            <h1>Title- {title}</h1>
            <h1>Description- {description}</h1>
            <h1> Category-{category}</h1>
            <h1>Status- {status}</h1>
            <h1>Location-{location}</h1>
            <h1>Area-{area}</h1>
        </div>
    </div>
  )
}

export default PostCard