// 'use client';

// import { useState, useEffect } from "react";

// export default function FetchPostPage(){
//     const [posts, setPosts]= useState ([])
//     const [error, setError]= useState("")
//     const [loading, setLoading] = useState (true)
// }

// useEffect (() => {
//     fetch("/api/external")
//     .then((res) => res.json())
//     .then((data)=> {
//         if(data.success){
//             setPosts(data.data)
//         } else {
//             setError(data.message)
//         }
//     })
//     .catch ((err) => setError("An unexpected Error"))
//     .finally(() => setLoading(false))
// }, []);

// return (
//     <div>
//         <h1>Posts</h1>
//     <ul>
//         {posts.map((post:{id:number; title: string})
//         =>(
//             <li key={post.id}> {post.title}</li>
//         ) )}
//         </ul></div>
// )

"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
}

interface ApiResponse {
  success: boolean;
  data: Post[];
  message?: string;
}

export default function FetchPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message || "Failed to fetch posts");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An unexpected error occurred.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


