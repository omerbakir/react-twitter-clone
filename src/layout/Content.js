import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Discover from "../pages/Discover";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route path="/homepage" component={Homepage}/>
                <Route path="/discover" component={Discover}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/notifications" component={Notifications}/>
            </Switch>
        </div>
    )
}
export default Content