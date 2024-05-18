import React from 'react'
import vid from '../../components/Video/vid.mp4'
// import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import './Library.css'
import { MdOutlineWatchLater } from 'react-icons/md'
import {FaHistory} from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'

const Library = () => {

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

  return (
    <div className='container_Pages_App'>
      <LeftSidebar/>
      <div className="container2_Pages_App">
        <div className='container_libraryPage'>
            <h1 className='title_container_libraryPage'>
              <b>
                <FaHistory/>
              </b>
              <b>History</b>
            </h1>
            <div className='container_videoList_LibraryPage'>
              <WHLVideoList
                page={"History"}
                videoList={vids}
              />
            </div>
        </div>
        <div className='container_libraryPage'>
            <h1 className='title_container_libraryPage'>
              <b>
                <MdOutlineWatchLater/>
              </b>
              <b>Watch Later</b>
            </h1>
            <div className='container_videoList_LibraryPage'>
              <WHLVideoList
                page={"Watch Later"}
                videoList={vids}
              />
            </div>
        </div>
        <div className='container_libraryPage'>
            <h1 className='title_container_libraryPage'>
              <b>
                <AiOutlineLike/>
              </b>
              <b>Liked Videos</b>
            </h1>
            <div className='container_videoList_LibraryPage'>
              <WHLVideoList
                page={"Liked Videos"}
                videoList={vids}
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Library

