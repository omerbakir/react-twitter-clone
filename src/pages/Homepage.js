import React from "react";
import { RiseOutlined } from "@ant-design/icons"
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import TweetItem from "../components/TweetItem";
import TweetList from "../components/TweetList";

const Homepage = () => {
    return (
        <div>
            <header
                className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900">Anasayfa</span>
                <span className="w-6 h-6 text-primary-base"> <RiseOutlined/></span>
            </header>
            <div className="flex px-4 py-3 space-x-4">
                <img src="https://pbs.twimg.com/profile_images/958796555506651139/4aGm5JCy_400x400.jpg"
                     alt="Profile"
                     className="w-11 h-11 rounded-full"
                />
                <TweetBox/>
            </div>
            <Divider/>
            {
                TweetList.map(({ name, username, tweet, date, retweetCount, likeCount, profilePicture,replyCount },index) => (
                    <TweetItem key={index} name={name} tweet={tweet} username={username} date={date} retweetCount={retweetCount}
                               likeCount={likeCount} profilePicture={profilePicture} replyCount={replyCount}/>
                ))
            }
        </div>

    )
}
export default Homepage