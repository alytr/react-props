import React from 'react';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Data from parent'
        }
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <Child dataParentToChild = {data}/>
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.dataParentToChild
        }
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <form>
  <label>
    fullName:
    <input type="text" name="fullName" />
  </label><br/><br/>
  <label>
Bio :
<input type="text" name="Bio"/>
  </label><br/><br/>
  <img src={"./src.png"} alt="src" />
     <br/>
     <label>
profession :
<input type="text" name="profession"/>
  </label><br/><br/>
  <input type="submit" name="envoyer"/>                      
</form>

            </div>
        )
    }
}
class MyReactClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: this.props.initialCount
    };
  }
  
  upCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    return (
      <div>
        Hello, {this.props.name}!<br />
        You clicked the button {this.state.count} times.<br />
        <button onClick={this.upCount}>Click here!</button>
      </div>
    );
  }
}

MyReactClass.defaultProps = {
  name: 'aly',
  initialCount: 0
};

export default Parent;
