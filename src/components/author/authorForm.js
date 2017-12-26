"use strict"

var React = require('react');

var AuthorForm = React.createClass({
    render: function(){
        return (
            <div>
                <form>
                    <h1>Author</h1>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        ref="firstName"
                        onChange={this.props.onChange}
                        value={this.props.author.firstName}
                        />
                    <br/>

                    <label htmlFor="lastName">First Name</label>
                    <input type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        ref="lastName"
                        onChange={this.props.onChange}
                        value={this.props.author.lastName}
                        />
                     <br/>


                    <input type="submit" value="Save" classname="btn btn-default"/>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;