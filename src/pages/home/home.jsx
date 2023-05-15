import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/topbar";
import './home.css'
export default function home() {
  return (
    <>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    </>
  );
}
