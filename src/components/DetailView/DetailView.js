import { NavLink } from "react-router-dom";
import styles from "./detailView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions, habitSelector } from "../../redux/reducers/habitTrackerReducer";


function DetailView(){
    const {work} = useSelector(habitSelector);
    const dispatch = useDispatch();
    return (
        <div  className={styles.extremeOut}>
            <NavLink to="addHabit" >
               <button className={styles.AddButton}><img alt="wait.." src="https://cdn-icons-png.flaticon.com/128/2816/2816174.png"></img>New Habit</button>
            </NavLink>
            <ul>
           {work.map((ele, key)=> <li>
            <div className={styles.outDetail}>
                <input type="checkbox"></input>
                <div className={styles.topLine}>
                <h2>{ele.name}</h2>
                <p>{ele.time}</p>
                <img alt="wait.." className={styles.deleteButton} onClick={()=>dispatch(actions.deleteHabit(key))} src="https://cdn-icons-png.flaticon.com/128/4041/4041994.png"></img>
                </div>
                <div className={styles.bottomLine}> 
                    <p>{ele.count} Days done</p>
                    <p>{ele.count} Best</p>
                    <div className={styles.starComb}>
                    <img alt="wait.." onClick={()=>dispatch(actions.setStar({toggleStar: ele.toggleStar, key: key}))} src={ele.toggleStar?"https://cdn-icons-png.flaticon.com/128/324/324588.png":"https://cdn-icons-png.flaticon.com/128/1998/1998322.png"}></img>
                      <p>Daily</p>
                    </div>
                    
                </div>

            </div>
           </li>)}

           </ul>
        
        </div>
      
    )
}

export default DetailView;