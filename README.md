## 설계 구조

### 폴더 구조
<img src="./img/forder.png" width="200px" height="600px">

### DB SCHEMA
<img src="./img/schema.png" width="700px" height="400px">

### API
* API문서: <https://jiji6027.gitbook.io/cafe-api>

### 사용 스택
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

***

## 간단한 코드 설명

<img src="./img/mvc.png" width="700px" height="600px">
node.js와 sequelize ORM을 사용하여 MVC 모델을 구성했습니다.
<br/><br/>


<img src="./img/model.png" width="800px" height="400px">
DB의 경우 MySQL을 사용했습니다. 
Model은 user, item, order, order_detail, payment, payment_detail로 총 6개의 테이블을 구성했습니다. 
<br/><br/>


<img src="./img/controller.png" width="400px" height="400px">
Controller는 login, logout, item, order, payment로 총 5개로 구성했습니다.
HTTPS를 사용했고, express를 사용했습니다.
session을 사용했고, session을 만들고 cookie를 통해 주고 받기 위해 express-session과 cookie-parser를 사용했습니다. session을 계속 유지하기 위해 session-file-store를 활용했습니다. 환경변수를 활용하기 위해 dotenv도 사용했습니다.
<u>jsonWebToken을 활용해 토큰을 쿠키와 헤더를 통해 주고 받습니다. 미들웨어를 활용하여 토큰의 유효성 체크 역시 logout, order, payment에서 진행합니다.
(session과 token 인증은 함께 사용하지 않는 것이 원칙이라 알고 있지만 token 기반 인증 역시 가능하다는 것을 보이기 위해 이렇게 사용했습니다)</u>
<br/><br/>


### login
<img src="./img/login.png" width="700px" height="700px">

### logout
<img src="./img/logout.png" width="300px" height="800px">

### order
<img src="./img/order.png" width="300px" height="800px">

### payment
<img src="./img/payment.png" width="300px" height="800px">

***

## 결과 화면

### 메인 화면
<img src="./img/메인화면.png" width="700px" height="400px">

### 로그인 화면
<img src="./img/로그인화면.png" width="700px" height="400px">

### 로그인된 화면
<img src="./img/로그인된 화면.png" width="700px" height="400px">

### 메뉴선택 화면
<img src="./img/메뉴선택 화면.png" width="700px" height="400px">

### 장바구니 화면
<img src="./img/장바구니 화면.png" width="700px" height="400px">

### 주문 버튼 클릭 화면
<img src="./img/주문버튼클릭 화면.png" width="700px" height="400px">

### 결제 버튼 클릭 화면
<img src="./img/결제버튼클릭 화면.png" width="700px" height="400px">


