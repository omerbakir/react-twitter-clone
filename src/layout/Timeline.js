import React from "react";
import hashtagItems from "../components/Hastags";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";


const handleClick = (type, tweet, header) => {
    if (type === "alert") {
        alert(header + tweet)
    } else {
        console.log(header + tweet)
    }
}

const Widgets = () => {
    return (
        <aside className="w-80 ">
            <div
                className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
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
                <ul className="mt-3">
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

        </aside>
    )
}
export default Widgets