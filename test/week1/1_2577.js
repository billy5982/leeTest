const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"
? "/dev/stdin"
//filename을 사용하면 현재 파일의 경로르 불러옴 예) /Users/imyeong-gyu/Desktop/공부/SelfCheck/Algorithm/Step1/2577.js 형태 출력
//경로를 split / 을 통해 /를 기준으로 배을 만듬. 그후 현재 파일을 선택하기 위해 pop을 이용하여 마지막 배열인 2577.js를 가져오고, slice(0,-3)을 통해 .js를 잘라내고 .txt로 변경한 것임
: __filename.split("/").pop().slice(0, -3) + ".txt" 
)

 console.log("Hello World")