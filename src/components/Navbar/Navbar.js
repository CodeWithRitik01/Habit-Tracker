import { NavLink, Outlet } from "react-router-dom";
import styles from "./navbar.module.css";
import { useState } from "react";
function Navbar(){
    const [weekView, setWeekView] = useState(false);
    const date = new Date()
    return(
        <>
        <div className={styles.outNav}>
           <img alt="wait.." className={styles.barImg} src="https://cdn-icons-png.flaticon.com/128/8637/8637657.png" />
           <NavLink to="/">
           <h2 onClick={()=>setWeekView(false)}>{weekView ? "Week View" :"Detail View"}</h2>

           </NavLink>
           
        {weekView ? <>< span className={styles.dateString}>{date.toDateString()}</span> <img alt="wait.." className={styles.calImg} src="https://cdn-icons-png.flaticon.com/128/668/668278.png"></img></>:null}
           <NavLink onClick={() => setWeekView(!weekView)} to={weekView ? "/" :"weekView"}>
              <img alt="wait.." className={styles.toggle} src="https://cdn-icons-png.flaticon.com/128/3177/3177431.png" />
           </NavLink>
        </div>
        <Outlet />
        </>
        
    )
}

export default Navbar;