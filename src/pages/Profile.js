import React from "react";
import {UnlockOutlined,CalendarOutlined} from "@ant-design/icons";
import { Timeline } from 'react-twitter-widgets';

const Profile=()=>{
    return(
        <div>
                <header
                    className=" sticky top-0 z-10 flex  items-center p-4 border-b border-gray-extraLight bg-white">
                    <span className="font-bold text-xl text-gray-900">Ömer Faruk Bakır  </span>
                    <span className=" pl-3"><UnlockOutlined style={{font:"bold",weight:24,height:24,fontSize:20}} /></span>
                </header>
            <div>
                <img src="https://pbs.twimg.com/profile_images/958796555506651139/4aGm5JCy_400x400.jpg"
                     alt="profile"
                     className="w-32 h-32 rounded-full ml-3 mt-5"
                />
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
            <div>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'OmerFarukBakr'
                    }}
                    options={{
                        height: '800',
                        lang:"tr"
                    }}
                />
            </div>
        </div>
    )
}
export default Profile