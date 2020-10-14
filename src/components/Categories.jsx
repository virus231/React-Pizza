import React from 'react'


// class Categories extends React.Component {
//     state = {  
//         activeItem: 2
//     };
    
    
//     render() {

//         const {items, onClick} = this.props;

//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {
//                         items.map((name, index) => (
//                             <li
//                                 className={this.state.activeItem === index ? 'active' : ''}
//                                 onClick={() => onClick(name)}
//                                 key={`${name}_${index}`}>
//                                 {name}
//                             </li>

//                         ))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }






function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li 
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>Все</li>
                {
                    items &&
                        items.map((name, index) => (
                            <li
                                onClick={() => onSelectItem(index)} 
                                key={`${name}_${index}`}
                                className={activeItem === index ? 'active' : ''}>
                                {name}
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;
