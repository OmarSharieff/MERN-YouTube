import React from 'react'
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Video/vid.mp4'
const Home = () => {
  const vids = [
    {
      id: 1,
      video_src: vid,
      Channel: "62bafe6752cea35a6c30685f",
      title: "Earth Spinning Clip",
      uploader: "ABC",
      description: "description of video 1"
    },
    {
      id: 2,
      video_src: vid,
      Channel: "cdd",
      title: "video 2",
      uploader: "ABC",
      description: "description of video 2"
    },
    {
      id: 3,
      video_src: vid,
      Channel: "add",
      title: "video 3",
      uploader: "ABC",
      description: "description of video 3"
    },
    {
      id: 4,
      video_src: vid,
      Channel: "add",
      title: "video 4",
      uploader: "ABC",
      description: "description of video 4"
    }
  ];

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Anime",
    "Science",
    "Animation",
    "Gaming",
    "Business",
    "History",
    "Music",
    "Literature",
    "Technology",
    "Cooking",
    "Travel",
    "Fitness",
    "Art",
    "Fashion",
    "DIY"
];

  
  return (
    <div className='container_Pages_App'>
      <LeftSidebar/>
      <div className="container2_Pages_App">
        <div className='navigation_Home'>
          {
            NavList.map((m,index)=> {
              return (
                <p key={index} className='btn_nav_home'>
                  {m}
                </p>
              )
            })
          }
        </div>
        <ShowVideoGrid vids={vids}/>
      </div>
    </div>
  )
}

export default Home
