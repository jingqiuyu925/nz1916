import React from 'react';
import { connect } from 'dva';
import {mockData} from "../services/example"
class IndexPage extends React.Component{

  clickhand=()=>{
    this.props.dispatch({
      type:"IndexPage/setName",
      data:{
        name:"小雨"
      }
    })
  }
  asyncclickhand=()=>{
    this.props.dispatch({
      type:"IndexPage/setnameAsync",
    })
  }
  componentDidMount(){
    mockData().then(res=>{
      console.log(res)
    })
  }

  render(){
    return (
      <div>
        <div>{this.props.msg}</div>
        <div>{this.props.name}</div>
        <button onClick={this.clickhand}>点击事件</button>
        <button onClick={this.asyncclickhand}>异步点击事件</button>
      </div>
    );
  }

}

IndexPage.propTypes = {
};
const mapStateToProps=state=>{
  return {
    msg:"111111111111",
    name:state.IndexPage.name
  }
}
export default connect(mapStateToProps)(IndexPage);
