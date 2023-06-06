import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/home-screen";
import ExploreScreen from "./explore/explore-screen";
import BookmarksScreen from "./bookmarks/bookmarks-screen";
import ProfileScreen from "./profile/profile-screen";
import WhoToFollowList from "./who-to-follow-list/index";
import TuitSummaryList from "./tuit-summary-list/index";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
         </Routes>
       </div>
       <div className="col-3">
         <WhoToFollowList />
      </div>
     </div>
   </div>
  </Provider>
 );
}
export default Tuiter;