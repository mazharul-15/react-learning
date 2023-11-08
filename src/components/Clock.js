import React from 'react';

class Clock extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { date : new Date() };
    // }

    state =  { date: new Date() };

    componentDidMount() {
    //    setInterval(() => {
    //         this.setState({date: new Date()})
    //    }, 1000);
          
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {

        return (
            <h1 className="heading">
                <span className='text'>
                    {new Date().toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}   

export default Clock;