import React from "react";
import { FileImageOutlined } from "@ant-design/icons";

const TweetItem = ({ username, name, tweet, likeCount, retweetCount, date, profilePicture }) => {
    return (
        <div className="p-7">
            <div className="flex items-center justify-between">
                <img src={profilePicture}
                     alt="Profile"
                     className="w-11 h-11 rounded-full"/>
                <span className="font-bold text-md text-black">{name}</span>
                <span className="text-sm text-gray-dark">@{username}</span>
            </div>
            <div className="flex-1 flex flex-col mt-2 px-2">
                <div>
                    {tweet}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex -ml-3">
                        <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                            <span className="w-6 h-6 text-primary-base flex"><FileImageOutlined/>{likeCount}</span>
                        </div>
                        <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                            <span className="w-6 h-6 text-primary-base flex"><FileImageOutlined/>{retweetCount}</span>
                        </div>
                    </div>
                    <p className=" px-4 py-2 font-medium">{date}</p>
                </div>
            </div>
        </div>
    )
}
export default TweetItem