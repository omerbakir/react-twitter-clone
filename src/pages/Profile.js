import React from "react";
import { CalendarOutlined, UnlockOutlined } from "@ant-design/icons";
import TweetList from "../components/TweetList";
import TweetItem from "../components/TweetItem";

const Profile = () => {
    return (
        <div>
            <header
                className=" sticky top-0 z-10 flex  items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900">Ömer Faruk Bakır  </span>
                <span className=" pl-3"><UnlockOutlined style={{ font: "bold", weight: 24, height: 24, fontSize: 20 }}/></span>
            </header>
            <div>
                <div className="flex justify-between items-center">
                    <img src="https://pbs.twimg.com/profile_images/958796555506651139/4aGm5JCy_400x400.jpg"
                         alt="profile"
                         className="w-32 h-32 rounded-full ml-3 mt-5"
                    />
                    <button className=" px-4 py-2 mr-5 font-bold text-sm border rounded-full hover:bg-gray-200 ">Profili
                        Düzenle
                    </button>
                </div>
                <div className="ml-3">
                    <span className="font-bold text-xl text-gray-900">Ömer Faruk Bakır  </span> <br/>
                    <span className="text-sm text-gray-dark"> @OmerFarukBakr</span> <br/>
                    <div className="flex items-center">
                        <span className=" mb-2">  <CalendarOutlined/> </span>
                        <span className="ml-2">Eylül 2011 tarihinde katıldı</span>
                    </div>
                    <div>
                        <span>84 Takip edilen</span>
                        <span className="ml-5">65 Takipçi</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-sm mb-3 mt-2  ">
                <button className="font-bold hover:bg-gray-200 w-full h-12">Tweetler</button>
                <button className="font-bold hover:bg-gray-200 w-full h-12">Tweetler ve Yanıtlar</button>
                <button className="font-bold hover:bg-gray-200 w-full h-12">Medya</button>
                <button className="font-bold hover:bg-gray-200 w-full h-12">Tepkiler</button>
            </div>
            <div>
                {
                    TweetList.filter(({ username }) => username === "Omerfaruk")
                        .map(({
                                  name,
                                  username,
                                  tweet,
                                  date,
                                  retweetCount,
                                  likeCount,
                                  profilePicture,
                                  replyCount
                              }, index) => (
                            <TweetItem key={index} name={name} tweet={tweet} username={username} date={date}
                                       retweetCount={retweetCount}
                                       likeCount={likeCount} profilePicture={profilePicture} replyCount={replyCount}/>
                        ))
                }

            </div>
        </div>
    )
}
export default Profile