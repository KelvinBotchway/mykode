// import React, { Component } from 'react';
// class Counter extends React.Component {
// state = {
//     count: 0,
//     //imageUrl : 'https://picsum.photos/200' //generates a random 200px image.
// };

// styles = {
//     fontSize:10, 
//     fontWeight: 'bold'
// };

//     render() {
//         let classes = this.getBadgeClasses();

//         return (
//             <div>  
//                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                 <button className="btn btn-secondary btn-sm">Increment</button>
//             </div>
//             );
//     }//saves you a div by wrapping in a react.fragment

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }

//     formatCount(){
//         const {count} = this.state;//destructuring 
//         return count === 0 ? "Zero" : count;
//     }
// }

// export default Counter;





                                 // CHAPTER 2

                            //rendering lists

// import React, { Component } from 'react';
// class Counter extends React.Component {
// state = {
//     count: 0,
//     tags: ['tag1','tag2','tag3']
// };

// styles = {
//     fontSize:10, 
//     fontWeight: 'bold'
// };

//     render() {
//         return (
//             <div>  
//                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                 <button className="btn btn-secondary btn-sm">Increment</button>
//                 <ul>
//                     {this.state.tags.map(tag => <li key={tag}>{  tag }</li>)}
//                 </ul>
//             </div>
//             );
//     }//saves you a div by wrapping in a react.fragment

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }

//     formatCount(){
//         const {count} = this.state;//destructuring 
//         return count === 0 ? "Zero" : count;
//     }
// }

// export default Counter;











//Conditional JSX


// import React, { Component } from 'react';
// class Counter extends React.Component {
// state = {
//     count: 0,
//     tags: ['tag1','tag2','tag3']
// };

// styles = {
//     fontSize:10, 
//     fontWeight: 'bold'
// };


   
//     renderTags(){
//         if(this.state.tags.length === 0)
//         return "There are no tags";

//         return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> 

//     }


//     render() {
//         return (
//             <div> 
//               { this.state.tags.length == 0 && 'Please create a new Tag'}
// {/*    Javascript reads the above line as true and true and will therefore output
//         the second line which is also true so, will output that. */}
//               {this.renderTags()} 
//             </div>
//             );
//     }//saves you a div by wrapping in a react.fragment

    
// }

// export default Counter;









//------------------------HANDLING EVENTS ---------------------


import React, { Component } from 'react';
class Counter extends React.Component {
state = {
    value: this.props.value
};

// constructor(){
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);//'this' was undefined so had to bind
// }

handleIncrement = () => {
    this.setState({count : this.state.value +1});
}
   
 


    render() {
        return (
            <div> 
                {this.props.children}
                <span className='btn-primary m-2 '>{this.state.value}</span>
                <button onClick={ () => this.handleIncrement()}
                 className='btn btn-secondary btn-sm m-1'>Increment</button>
                 <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            );
    }//saves you a div by wrapping in a react.fragment

    
}

export default Counter;