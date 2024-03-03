import { createSlice } from "@reduxjs/toolkit";


const INITIALSTATE={
    work:[
   
    ],  
    statueToggle:"",
    statTracker:0

}



const HabitSlice = createSlice({
    name:"habitTracker",
    initialState:INITIALSTATE,
    reducers:{
        // function to add habits
        addHabit:(state, action)=>{
            const {habit, desc} = action.payload;
             state.work.push({
                name:habit,
                time:desc,
                days:0,
                best:0,
                week:[
            {day:"Sun",value:0, status:"None", counted:false},
            {day:"Mon",value:1, status:"None", counted:false},
            {day:"Tue",value:2, status:"None", counted:false},
            {day:"Wed",value:3, status:"None", counted:false},
            {day:"Thu",value:4, status:"None", counted:false},
            {day:"Fri",value:5, status:"None", counted:false},
            {day:"Sat",value:6, status:"None", counted:false},
                
                ],
            count:0,
            toggleStar:false,
            })
        },
        // function toggle star
        setStar:(state, action)=>{
            const {toggleStar, key} = action.payload;
            state.work.map((habit, keys) => (
                keys === key ?habit.toggleStar= !toggleStar :null
            ))
            
        },
        //setting days if it is "done", "Not Done" or none of the both
        setDayStatus: (state, action) => {
            const { keyss, weekValue } = action.payload;
        
            const statusMap = {
                None: "Done",
                Done: "NotDone",
                NotDone: "None",
            };
        
            state.work = state.work.map((habit, key) => {
                if (key === keyss) {
                    return {
                        ...habit,
                        week: habit.week.map((day) => {
                            if (day.value === weekValue) {
                                day.status = statusMap[day.status] || "";
                               
                            }
                           
                            return day;
                        }),
                    };
                }
               
                return habit;
            });
            state.work.forEach((habit) => {
                habit.week.forEach((day) => {
                    if (day.status === "Done" && day.counted === false) {
                        console.log(habit.count, "yah")
                        habit.count +=1
                        day.counted = true;
                        return;
                    }  if (day.status === "NotDone") {
                       habit.count -= habit.count
                       day.counted = false;
                       return;
                    }
                });
               
            });
           
        },
        //funtion to delete habit
        deleteHabit:(state, action)=>{
            const keyToDelete = action.payload;
            state.work = state.work.filter((habit,key) => key !== keyToDelete);
        }
      
      
    }
})

export const habitReducer = HabitSlice.reducer;
export const actions = HabitSlice.actions;

export const habitSelector = (state)=>state.habitReducer;