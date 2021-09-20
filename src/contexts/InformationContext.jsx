import React, { createContext, Component } from "react";
export const InformationContext = createContext();

class InformationContextProvider extends Component {
    state = {
        tasks_data: [
            {
                title: '1 Complete Machine Learning Lectures',
                id: 1,
                description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
                priority: '1',
                deadline: '',
                is_completed: false
            },
            {
                title: '2 Complete Machine Learning Lectures',
                id: 2,
                description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
                priority: '2',
                deadline: '',
                is_completed: false
            },
            {
                title: '3 Complete Machine Learning Lectures',
                id: 3,
                description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
                priority: '4',
                deadline: '',
                is_completed: true
            },
            {
                title: '4 Complete Machine Learning Lectures',
                id: 4,
                description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
                priority: '5',
                deadline: '',
                is_completed: false

            },
            {
                title: '5 Complete Machine Learning Lectures',
                id: 5,
                description: 'Machine Learning Chapter needs to be completed before Saturday, Test is on Monday.',
                priority: '1',
                deadline: '',
                is_completed: true
            }
        ]
    }
    editData = (data, method) => {
        if (method === 'remove') {
            let tempArray = [];
            this.state.tasks_data.forEach((obj) => {
                if (obj.id !== data) {
                    tempArray.push(obj)
                }
            });
            this.setState({ tasks_data: tempArray });
        } else if (method === 'add') {
            this.state.tasks_data.push(data);
            this.setState({ tasks_data: this.state.tasks_data });
        }
        else if (method === 'mark_complete') {
            this.state.tasks_data.forEach((obj) => {
                if (obj.id === data) {
                    obj.is_completed = true;
                }
            });
            this.setState({ tasks_data: this.state.tasks_data });
        }
        // this.setState({tasks_data:this.state.tasks_data.slice(0,this.state.tasks_data.length-1)});
    }
    render() {
        return (
            <InformationContext.Provider value={{ tasks_data: this.state.tasks_data, editData: this.editData }} >
                {this.props.children}
            </InformationContext.Provider>
        )
    }
}
export default InformationContextProvider;