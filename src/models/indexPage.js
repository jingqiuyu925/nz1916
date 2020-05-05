export default {
  namespace:"IndexPage",
  state:{
    name:"jingguori",
  },
  reducers:{
    setName(state,payload){
      console.log("Run")
      let _state=JSON.parse(JSON.stringify(state))
      _state.name=payload.data.name
      console.log(_state)
      return _state
    },
    haha(state,payload){
      console.log("haha")
      let _state=JSON.parse(JSON.stringify(state))
      console.log(_state)
      return _state
    }
  },
  effects:{
    /*
    * put用来发送同步，
    * call发送同步
    * */
    *setnameAsync({payload},{put,call}){
      // let rel=yield call(query)括号里面的内容是请求的数据，数据返回给rel，然后调用同步的方法
      yield put({
        type:"setName",
        data:{
          name:"异步小雨"
        }
      })
      yield console.log("run")
    }
  },
  subscriptions:{//一開始就會執行的方法
    haha({dispatch,history}){
      console.log("haha")
      history.listen((pathname)=>{
        if(pathname==="/"){
          dispatch({
            type:"haha"
          })
        }
      })
    }
  }
}
