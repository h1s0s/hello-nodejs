const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

//cors 이슈
//npm으로 cors 모듈 설치
app.use(cors({
    oritin: '*'
}))

//app.get[HTTP메소드]('/'[라우팅], ()={}[콜백함수])
//콜백함수 : 함수(끝나고 실행할 함수)
app.get('/', function (req, res){
    res.send('Hello World')
})
app.get('/dog', function (req, res){
    res.json({'sound': '멍멍'})
})
app.get('/cat', function (req, res){
    res.send({'sound': '냐옹'})
})
app.get('/sound/dog', function (req, res){
    res.send({'sound': '멍멍'})
})
//변수로 응답하기
app.get('/user/:id', function (req, res){
    const id = req.params.id
    console.log(id)
    res.json({'id': id})
})
//post방식
app.post('/user/:id', function (req, res){
    const id = req.params.id
    console.log(id)
    const b = req.body
    console.log(b)
    res.json({'id': id})
})



//listen은 서버 포트가 열려 있다, 상시 실행중인 부분
app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})