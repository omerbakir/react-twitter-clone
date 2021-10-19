import React from "react";
import {
    BarChartOutlined,
    CalendarOutlined,
    FileGifOutlined,
    FileImageOutlined,
    SmileOutlined
} from "@ant-design/icons"

const TweetBox = () => {
    return (
        <div className="flex-1 flex flex-col mt-2 px-2">
            <textarea
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
                placeholder="Neler Oluyor?"
            />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                        <span className="w-6 h-6 text-primary-base"><FileImageOutlined/></span>
                    </div>
                    <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                        <span className="w-6 h-6 text-primary-base"><FileGifOutlined/></span>
                    </div>
                    <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                        <span className="w-6 h-6 text-primary-base"><BarChartOutlined/></span>
                    </div>
                    <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                        <span className="w-6 h-6 text-primary-base"><SmileOutlined/></span>
                    </div>
                    <div className="flex items-center justify-between w-11 h-11 rounded-full ">
                        <span className="w-6 h-6 text-primary-base"><CalendarOutlined/></span>
                    </div>
                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">Tweet</button>
            </div>
        </div>
    )
}
export default TweetBox