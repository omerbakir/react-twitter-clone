import React from "react";
import hashtagItems from "../components/Hastags";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import WhoToFollow from "../components/WhoToFollow";


const handleClick = (type, tweet, header) => {
    if (type === "alert") {
        alert(header + " Bu başlık altındaki tweetleri görüntülemek istiyor musunuz?")
    } else {
        console.log(header + tweet)
    }
}

const Widgets = () => {
    return (
        <aside className="w-80 ">
            <div
                className="sticky top-0 z-10 flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchOutlined style={{ width: 20, height: 20 }}/>
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"
                />
            </div>
            <div className="mt-5 space-x-4 p-3 m-3 rounded bg-gray-lightest">
                <div className="flex items-center text-base font-bold ">
                    İlgini Çekebilecek Gündemler <span className="flex ml-7">{<SettingOutlined/>}</span>
                </div>
                <ul className="mt-3 cursor-pointer">
                    {hashtagItems.map(({ id, header, tweet, type }, index) => (
                        <li key={index} onClick={handleClick.bind(this, type, tweet, header)}>
                            <div className="flex items-center justify-between">
                                <div
                                    className="mb-2 hover:bg-gray-200 rounded-full pl-3 pr-8 py-3 transform duration-200">
                                    <span className="font-bold">
                                        {header}
                                    </span> <br/>
                                    <span className="text-sm">
                                        {tweet}
                                  </span>
                                </div>
                                <div className="flex space-x-1 ">
                                    <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                                    <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                                    <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-5 space-x-4 p-3 m-3 rounded bg-gray-lightest">
                <div className="flex items-center text-base font-bold ">
                    Kimi Takip Etmeli
                </div>
                <ul className="mt-3 flex-1 flex flex-col cursor-pointer">
                    {WhoToFollow.map(({ imgsrc, imgalt, title, user }, index) => (
                        <li key={index} className="flex -ml-5 mt-5">
                            <img src={imgsrc} alt={imgalt} className="w-11 h-11 rounded-full"/>
                            <div className=" flex-1 flex items-center justify-between ">
                                <div>
                                    <div className="ml-2">
                                        <span className="text-base font-semibold">{title}</span><br/>
                                        <span className="text-sm">{user}</span>
                                    </div>
                                </div>
                                <button
                                    className="bg-black text-white w-13 h-9 text-sm font-bold rounded-full px-4 py-2 pl-5 font-medium">Takip
                                    Et
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="mt-3  text-primary-base">
                    Daha fazla göster
                </button>
            </div>
        </aside>
    )
}
export default Widgets