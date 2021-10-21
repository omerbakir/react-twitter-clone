import React from "react";
import { HeartOutlined, MessageOutlined, RetweetOutlined, UploadOutlined } from "@ant-design/icons";

const TweetItem = ({ username, name, tweet, likeCount, retweetCount, replyCount, date, profilePicture }) => {
    return (
        <div className="flex space-x-3 border border-gray-extraLight px-4 py-3 cursor-pointer hover:bg-gray-lightest">
            <img src={profilePicture} alt="Profile" className="w-11 h-11 rounded-full"/>
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold ">{name}</h4>
                    <span className="ml-2 text-gray-dark">{username}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"> </div>
                    <span className="text-gray-dark">{date}</span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">{tweet}</p>
                <ul className="-ml-1 mt-3 flex justify-between max-w-md">
                    <li className="flex items-center space-x-1  text-gray-dark text-sm group">
                        <div
                            className="flex items-center justify-between pl-2 w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <MessageOutlined style={{ weight: 16, height: 16, hover: "text-primary-base" }}/>
                        </div>
                        <span className="group-hover:text-primary-base">{replyCount}</span>
                    </li>

                    <li className="flex items-center space-x-1  text-gray-dark text-sm group">
                        <div
                            className="flex items-center justify-between pl-2 w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <RetweetOutlined style={{ weight: 16, height: 16, hover: "text-primary-base" }}/>
                        </div>
                        <span className="group-hover:text-primary-base">{retweetCount}</span>
                    </li>

                    <li className="flex items-center space-x-1  text-gray-dark text-sm group">
                        <div
                            className="flex items-center justify-between pl-2 w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <HeartOutlined style={{ weight: 16, height: 16, hover: "text-primary-base" }}/>
                        </div>
                        <span className="group-hover:text-primary-base">{likeCount}</span>
                    </li>

                    <li className="flex items-center space-x-1  text-gray-dark text-sm group">
                        <div
                            className="flex items-center justify-between pl-2 w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <UploadOutlined style={{ weight: 16, height: 16, hover: "text-primary-base" }}/>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default TweetItem