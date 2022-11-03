import React, { Component } from 'react'; // allows us to create components 
import DatePicker from 'react-datepicker'; // import datepicker
import "react-datepicker/dist/react-datepicker.css" // import styling for datepicker

export default class CreateExercises extends Component { // all components will start like this

    constructor(props) {
        super(props);

        // helps define the "this" variable for each method 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] // dropdown menu that will allow you to select users
        }
    }

    componentDidMount() { // react lifecycle method - automatically called before anything displays on page
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value // set value of username to value of textbox
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value // set value of description to value of textbox
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value // set value of duration to value of textbox
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date // set value of date to date to create a calendar you can click on 
        });
    }
    onSubmit(e) {
        e.preventDefault(); // prevents default html form submit behavior from taking place

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        window.location = '/'; // takes user back to homepage
    }

    render() { // all components must render something
        return (
        <div> 
            <h3>Create New Exercise Log</h3> {/* heading */}
            <form onSubmit={this.onSubmit}>  {/* call this.onSubmit when button is clicked */}
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input 
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}