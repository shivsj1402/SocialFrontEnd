import React, { Component } from 'react';
import Navigation from './Navigation'
import './../css/Profile.css';

class Profile extends Component{
   constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jsondata:[],
<<<<<<< HEAD
            disable:true,
            user_name: ""
=======
            disable:true
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
        };
    }
    handleClick(e){

    this.setState({disable:!this.state.disable})
    }

handleChange(e){
    this.setState({user_name: e.target.elements.user.value})
}

    handleSubmit = (event) => {
<<<<<<< HEAD
		//event.preventDefault();
=======
		event.preventDefault()
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
		
		fetch('http://localhost:3001/profile/edit', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: event.target.elements.user.value,
				birth_date: event.target.elements.BirthDate.value,
				Location: event.target.elements.Location.value,
				Interests: event.target.elements.interests.value,
				email: event.target.elements.email.value,
				contact: event.target.elements.number.value,
                password: event.target.elements.password.value,
<<<<<<< HEAD
            }),
            })
=======
                image: event.target.elements.image.value,
            }),
        })
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
            .then(response => response.json())
            .then(jsondata => console.log(jsondata))
            .catch((error) => {
                console.error(error);
            });
	}
	 componentDidMount(){
		fetch('http://localhost:3001/profile/view')
			.then(response => response.json())
			.then(jsondata => {
				this.setState({jsondata});
				console.log(this.state.jsondata);
			})
			.catch((error) => {
				console.error(error);
			})
	 }
   
    render(){
        return(
            <div id="profilePage">
                <Navigation />
                <div id ="profile" className="container">
                    <div className="row">
                     <div className="col">
                
                     <h1> Profile Page</h1>
                     <div className="row">
                            <div className="col" align="center">

                            <img id="avatar" name = "image" className="img-responsive" src={require('../images/profile.jpg')} alt="profile img" />

                            </div>
                        </div>
                        <hr>
                        </hr>
                       
<<<<<<< HEAD
                            <form align="center" action ="Profile.js" onSubmit={(e) => {this.handleSubmit(e)}}>
=======
                            <form align="center" onSubmit={this.handleSubmit}>
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Name:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="user" id="user_name" 
<<<<<<< HEAD
                                    disabled={this.state.disable}
                                    className="form-control" placeholder={datas.user_name} 
                                    required/>)}
=======
                                    className="form-control" placeholder="Dummy Name" 
                                     value={datas.user_name} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Birth Date:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="BirthDate" id="Birthdate" 
<<<<<<< HEAD
                                    className="form-control" placeholder={datas.user_birthdate}
                                     disabled={this.state.disable} required/>)}
=======
                                    className="form-control" placeholder="Dummy Date"
                                     disabled={this.state.disable} value={datas.user_birthdate} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Location:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                    {this.state.jsondata.map(datas => 
                                    <input type="text" name="Location" id="Location"
<<<<<<< HEAD
                                     className="form-control" placeholder={datas.user_address}
                                      disabled={this.state.disable} required/>)}
=======
                                     className="form-control" placeholder="Dummy Location" 
                                      disabled={this.state.disable} value={datas.user_address} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="fosrm-group" id="text-al">
                                        <label>Interests:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="interests" id="interests" 
<<<<<<< HEAD
                                    className="form-control" placeholder={datas.user_interests} 
                                     disabled={this.state.disable} required/>)}
=======
                                    className="form-control" placeholder="Dummy Data" 
                                     disabled={this.state.disable} value={datas.user_interests} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Email:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="email" id="email" 
<<<<<<< HEAD
                                    className="form-control" placeholder={datas.user_email}
                                     disabled={this.state.disable} required/>)}
=======
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_email} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                 <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Contact:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="number" id="number" 
<<<<<<< HEAD
                                    className="form-control" placeholder={datas.user_number}
                                     disabled={this.state.disable} required/>)}
=======
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_number} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                        <label>Password:</label>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group" id="text-al">
                                     {this.state.jsondata.map(datas => 
                                    <input type="text" name="password" id="password" 
<<<<<<< HEAD
                                    className="form-control" placeholder={datas.user_password} 
                                     disabled={this.state.disable} required/>)}
=======
                                    className="form-control" placeholder="Dummy Data"
                                     disabled={this.state.disable} value={datas.user_password} />)}
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group"id="text-al">
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
                                    <button type="button" onClick={this.handleClick.bind(this)} 
                                    class="btn btn-block btn-lg btn_primary">Edit</button>


                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3">
                                    <div className="form-group" id="text-al">
<<<<<<< HEAD
                                    <input type="submit" class="btn btn-block btn-lg btn_primary" value="Submit"/>
=======
                                    <input type="button" class="btn btn-block btn-lg btn_primary" value="Submit"/>
>>>>>>> b13694088c627ac3e575a189c7ebf8933f4d37ae
                                    
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile
