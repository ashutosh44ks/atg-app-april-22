import React from "react";
import Post from "./Post";

const PostsContainer = () => {
  const posts = [
    {
      id: 1,
      type: "Article",
      svg: "✍️",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarthak Kamra",
      views: "1.4k views",
    },
    {
      id: 2,
      type: "Education",
      svg: "🔬️",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      content:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarah West",
      views: "1.4k views",
    },
    {
      id: 3,
      type: "Meetup",
      svg: "🗓️",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      info: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      btnContent: "Visit Website",
      author: "Ronal Jones",
      views: "1.4k views",
    },
    {
      id: 4,
      type: "Job",
      svg: "💼️",
      title: "Software Developer",
      info: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      btnContent: "Apply on Timesjobs",
      author: "Joseph Gray",
      views: "1.4k views",
    },
  ];
  return (
    <div className="py-4">
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default PostsContainer;
