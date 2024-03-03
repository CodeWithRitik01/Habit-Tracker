import styles from "./weekView.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector, actions } from "../../redux/reducers/habitTrackerReducer";

function WeekView(){
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayss = date.getDay();
    const {work} = useSelector(habitSelector);
    const dispatch = useDispatch();
    let monthName;

    switch (month) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "April";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "October";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;
      default:
        monthName = "Invalid month";
    }

    const handleDays =(keyss, weekValue)=>{
      console.log(keyss, weekValue)
      dispatch(actions.setDayStatus({ keyss, weekValue }));
      console.log(work)
    }

   

    return(
        <div className={styles.outWeek}>
          <div className={styles.topDate}>
            <img alt="wait.." src="https://cdn-icons-png.flaticon.com/128/8213/8213500.png"></img>
            <h2>{monthName} {year}</h2>
            <img alt="wait.." src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png"></img>
          </div>
          {work.map((ele, keyss)=>(
            <div className={styles.detailOut}>
            <div className={styles.detailLeft}>
                <h3>{ele.name}</h3>
                <p>{ele.time}</p>
            </div>

          <div className={styles.detailRight}>
               { ele.week.map((current, key)=>(
                  <div className={styles.daysDiv}>
                    <h4 className={dayss===current.value?styles.currentDay:styles.otherDays}>{dayss === current.value?"Today":current.day}</h4>
                    <img alt="wait.." onClick={()=>handleDays(keyss, current.value)} src={current.status==="None"?"https://cdn-icons-png.flaticon.com/128/10995/10995687.png": current.status==="Done"?"https://cdn-icons-png.flaticon.com/128/845/845646.png":current.status === "NotDone"?"https://cdn-icons-png.flaticon.com/128/3389/3389152.png":""} />
                  </div>

                ))}
                <img alt="wait.." onClick={()=>dispatch(actions.setStar({toggleStar: ele.toggleStar, key: keyss}))} src={ele.toggleStar?"https://cdn-icons-png.flaticon.com/128/324/324588.png":"https://cdn-icons-png.flaticon.com/128/1998/1998322.png"}></img>

            </div>
          </div>
          ))}
        
          
        </div>
    )
}

export default WeekView;