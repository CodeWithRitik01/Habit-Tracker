import { useEffect, useState } from "react";
import styles from "./addHaibit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions, habitSelector } from "../../redux/reducers/habitTrackerReducer";

function AddHabit(){
    const [habit, setHabit] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();
    const {work} = useSelector(habitSelector);


    const handleAddForm = (e)=>{
        e.preventDefault();
        dispatch(actions.addHabit({habit, desc}))
        setHabit("");
        setDesc("");
    }
    useEffect(()=>{
       work.map((ele)=> console.log(ele.week, "u"));
    })
    return(
        <>
           <div className={styles.outAdd}>
           <h1>Add Habit</h1>
           <form className={styles.addForm} onSubmit={handleAddForm}>
              <input placeholder="Enter Habit" value={habit} onChange={(e) =>setHabit(e.target.value)}></input>
              <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
              <button type="submit">Submit</button>
           </form>
           </div>
    

        </>
     
    )
}

export default AddHabit;