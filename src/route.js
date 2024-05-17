import { Route, Switch } from "react-router-dom";
import React from "react";
// i will add home in my route as done here because is where am needing it
import Home from "./component/Pages/Home"; 
import Users from "./component/Pages/Users";
import Userprofile from "./component/Pages/Userprofile";
import Aboutus from "./component/Pages/Aboutus"


// and add what part am linking here 
function OurRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
{/* 
here is where the external page am linking will be  */}
        <Route exact path="/Users">
          <Users />
        </Route>

        <Route exact path="/Userprofile">
          <Userprofile />
        </Route>

{/* to link a user when you navigate to show same user as its clicked  */}
        {/* <Route path="/User/:userId">
          <Userfollow />
        </Route> */}

        <Route path="/Aboutus">
          <Aboutus />
        </Route>


{/* to link a user when you navigate to show same user as its clicked   */}
        <Route exact path="/Userprofile/:id">
          <Userprofile />
        </Route>
      </Switch>
    </div>
  );
}

export default  OurRouter;