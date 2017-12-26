"use strict"

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object,
    },
    
    render: function(){
        return (
            <div>
                <form>
                    <h1>Author</h1>
                    <Input
                        name="firstName"
                        label="First Name"
                        value={this.props.author.firstName}
                        onChange = {this.props.onChange}
                        error={this.props.errors.firstName}/>

                    <Input
                        name="lastName"
                        label="Last Name"
                        value={this.props.author.lastName}
                        onChange = {this.props.onChange}
                        error={this.props.errors.lastName}/>

                    <input type="submit" value="Save" classname="btn btn-default" onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;