import React from "react";
import {
    HomeOutlined,
    MessageOutlined,
    NotificationOutlined,
    SearchOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import UserBox from "../components/UserBox";

const menuItems = [
    {
        name: "Ana Sayfa",
        icon: <HomeOutlined/>,
        path: "/homepage",
    },
    {
        name: "Bildirimler",
        icon: <NotificationOutlined/>,
        path: "/notifications",
    },
    {
        name: "Keşfet",
        icon: <SearchOutlined/>,
        path: "/discover",
    },
    {
        name: "Mesajlar",
        icon: <MessageOutlined/>,
        path: "/messages",
    },
];

const Sidebar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between min-h-screen px-2">
            <div className="mb-4">
                <ul className="mb-6">
                    <div
                        className="mt-1 mb-4 ml-1 flex items-center justify-center w-8 h-8 text-primary-base hover:bg-gray-light  rounded-full">
                        <TwitterOutlined style={{ fontSize: 30, }}/>
                    </div>
                    {menuItems.map(({ name, icon, path }, index) => (
                        <li key={index}>
                            <div className="inline-block ">
                                <div
                                    className="flex items-center hover:bg-primary-light hover:text-primary-base rounded-full pl-3 pr-8 py-3 text-xl ">
                                    {icon}
                                    <span className="ml-4 font-bold "><Link to={path}>{name}</Link></span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    className="bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">Tweet
                </button>
            </div>
            <div>
                <UserBox/>
            </div>
        </div>
    )
}
export default Sidebar