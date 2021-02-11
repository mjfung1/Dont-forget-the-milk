import React from 'react';

class ListShow extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllLists();
    }

    render() {
        console.log(this.props.lists)
        const { lists } = this.props

        const user_list = lists.map(list => {
            return (
                <div key={list.id}>
                    {list.title}
                </div>
            )
        })
        return (
            <div>
                <h2>Lists</h2>
                { user_list }
            </div>
        )
      
    }
};

export default ListShow;