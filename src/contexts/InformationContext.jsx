import React, { createContext, useState } from "react";
export const InformationContext = createContext();

const InformationContextProvider = (props) => {
    const [tasks_data, setTaskData] = useState([
        {
            title: 'Complete Machine Learning Lectures',
            id: 1,
            description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
            priority: '1',
            deadline: '',
            is_completed: false
        },
        {
            title: 'Attend Conference',
            id: 2,
            description: 'Ecommerce Conference will be held in Lahore, Need to attend remotely',
            priority: '2',
            deadline: '',
            is_completed: false
        },
        {
            title: 'Go to Friends House',
            id: 3,
            description: 'Need to visit Friends after EID',
            priority: '4',
            deadline: '',
            is_completed: true
        },
        {
            title: 'Wish Birthday to Father',
            id: 4,
            description: 'Need to wish Birthday to Father, Also need to Buy Gifts',
            priority: '1',
            deadline: '',
            is_completed: true

        },
        {
            title: 'Buy Books',
            id: 5,
            description: 'Need to Buy Books related to DATA MINING, MACHINE LEARNING, DATA SCIENCE, MATH',
            priority: '5',
            deadline: '',
            is_completed: false
        }
    ]);
    const editData = (data, method) => {
        if (method === 'remove') {
            let tempArray = [];
            tasks_data.forEach((obj) => {
                if (data !== obj.id) {
                    tempArray.push(obj);
                }
            });
            setTaskData(tempArray);

        }else if(method === 'add'){
            setTaskData([...tasks_data , data]);
        }
        else if (method === 'mark_complete') {
            let tempArray = [];
            tasks_data.forEach((obj, index) => {
                if (obj.id === data) {
                    obj.is_completed = true;
                }
                tempArray.push(obj);
            });
            setTaskData(tempArray);
        }
    }
    return (
        <InformationContext.Provider value={{ tasks_data, editData }} >
            {props.children}
        </InformationContext.Provider>
    )
}
export default InformationContextProvider;
