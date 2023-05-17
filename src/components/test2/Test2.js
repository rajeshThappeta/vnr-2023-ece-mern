import {useEffect,useState} from 'react'
import './Test2.css';

function Test2(){

    let [posts,setPosts]=useState([])

    useEffect(()=>{
        //API call
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(postsData=>setPosts(postsData))
        .catch(err=>console.log(err))
    },[])


    console.log("posts",posts)

    return(
        <div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(postObj=><tr key={postObj.id}>
                            <td>{postObj.userId}</td>
                            <td>{postObj.id}</td>
                            <td>{postObj.title}</td>
                            <td>{postObj.body}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
           
    )
}


export default Test2;