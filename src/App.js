import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      modalOpen:false,
      time:[["08:00"],["09:00"],["10:00"],["11:00"],["12:00"],["13:00"],["14:00"],["15:00"],["16:00"],["17:00"]],

      message:""

    }
  }


  handleFormSubmit( event ) {
    event.preventDefault();

    if (this.state.name && this.state.email !== "") {
      this.setState({
        message: "Congrulations"
      })
    } else {

      return "";

    }
    setTimeout(()=>this.closeModal(),2000);
  }
  openModal() {
    this.setState({modalOpen: true});
  }


  closeModal() {
    this.setState({modalOpen: false});
  }


  render() {
    return (
        <div className="App">
          <button style={{width:"90px",height:"90px",borderRadius:"5px", cursor:"pointer"}} onClick={()=>this.openModal()}>Button</button>
          <ReactModal
              isOpen={this.state.modalOpen}
              onRequestClose={()=>this.closeModal()}

              ariaHideApp={false}
              style={{ overlay: {}, content: {backgroundColor: "#c9c9c9",margin:"auto",width:"300px",height:"320px"} }}
          >
            <form

                onSubmit={(e)=>this.handleFormSubmit(e)}

                style={{
                  marginTop:"35px",
                  marginLeft:"50px"
                }}>

              <label className={"formInput"} style={{display:"block"}}>


                Time:

                <select id="timeSelect" style={{width:"100px",height:"30px"}}>

                  {
                    this.state.time.map(function(user,i) {
                      return <option key={i}
                                     value={user}>{user}</option>;
                    })
                  }
                </select>


              </label>
              <label style={{display:"block"}} className={"formInput"}>

                Name:

                <input type="text" placeholder={"Name"}
                       value={this.state.name}
                       onChange={e => this.setState({ name: e.target.value })} required/>

              </label>


              <label className={"formInput"} >

                Email:

                <input name={"email"} type="email" placeholder={"Email"} style={{width:"169px"}}
                       value={this.state.email}
                       onChange={e => this.setState({ email: e.target.value })} required/>

              </label>

              <input type="submit" value={"Submit"} style={{
                margin:"30px 0 0 80px"

              }} onClick={e => this.handleFormSubmit(e)}/>

              <div style={{

                margin:"15px",
                marginLeft:"55px"
              }}>
                {this.state.message}

              </div>

            </form>
          </ReactModal>
        </div>
    );
  }
}

export default App;

