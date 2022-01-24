import React, { Component } from 'react';

class Practice extends Component {

    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: "zahid",
            unreadMessages: [0, 1, 3],
            reducedValue: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this)

        let arr = [1, 1, 2, 2, 1];
        let reducedValue = arr.reduce((sum, num) => {
            console.lo(sum, num)
            return sum + num;
        }, 0)

        this.setState({ reducedValue })
    }

    render() {
        const { unreadMessages, reducedValue } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={reducedValue} />
                </label>
                <input type="submit" value="Submit" />
                <textarea>
                    Hello there, this is some text in a text area
                </textarea>
                <select multiple={true} value={['B', 'C']}>
                    <option>B</option>
                    <option>C</option>
                    <option>Zahi3</option>
                </select>
                <input value={null} />
            </form>
        );
    }
}

export default Practice;

