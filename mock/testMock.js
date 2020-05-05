module.exports={
  "GET /api/testMock":(req,res)=>{
    console.log(1,req,res)
    res.send({
      name:"登陆成功"
    })
  }
}
