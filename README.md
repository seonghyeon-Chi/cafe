## 설계 구조

### 폴더 구조
<img src="./img/forder.png" width="200px" height="500px">

### DB SCHEMA
<img src="./img/schema.png" width="600px" height="400px">

### API
* API문서: <https://jiji6027.gitbook.io/torder-test-api/>

### 사용 스택
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

***

## 간단한 코드 설명
node.js와 sequelize ORM을 사용하여 MVC 모델을 구성했습니다.

DB의 경우 MySQL을 사용했습니다. 
Model은 user, item, order, order_detail, payment, payment_detail로 총 6개의 테이블을 구성했습니다. 
user와 order, user와 payment는 일대다 관계, 
order와 order_detail, payment와 payment_detail은 일대다 관계, 
item과 order_detail, item과 payment_detail은 일대다 관계로 설정했습니다.

HTTPS를 사용했고, express를 사용했습니다.
session을 사용했고, session을 만들고 cookie를 통해 주고 받기 위해 express-session과 cookie-parser를 사용했습니다. session을 계속 유지하기 위해 session-file-store를 활용했습니다. 환경변수를 활용하기 위해 dotenv도 사용했습니다.

Controller는 login, logout, item, order, payment로 총 5개로 구성했습니다.

login은 phone_number를 body 값으로 받아 사용자가 이미 가입되어 있는지를 확인한다. 가입되어 있으면 해당 사용자의 id를 세션에 저장하고 쿠키를 통해 식별자를 클라이언트로 보낸다. 가입되어 있지 않으면 body 값으로 user 테이블의 instance를 만들고 마찬가지로 해당 사용자의 id를 세션에 저장하고 쿠키를 통해 식별자를 클라이언트로 보낸다.

logout은 먼저 세션의 식별자의 유무를 확인한다. 식별자가 있으면 세션과 쿠키를 삭제한다.

item은 DB item 테이블의 모든 데이터를 불러온다.

order는 body값으로 장바구니의 데이터, 그 장바구니의 총 가격, 식별자를 받아온다. 식별자 유무를 확인하여 order 테이블에 식별자를 user_id 값으로 보내서 저장하고, 거기에 일대다 관계로 연결되어 있는 order_detail 테이블에 장바구니 데이터를 저장한다.

payment는 body값으로 식별자를 받아온다. 식별자를 통해 order 테이블과 연결된 order_detail 테이블을 조회한다. 조회된 order, order_detail 테이블의 데이터들을 payment, payment_detail에 저장한다. 그리고 해당 order, order_detail의 instance를 삭제한다.

***

## 결과 화면

### 메인 화면
<img src="./img/메인화면.png" width="600px" height="400px">

### 로그인 화면
<img src="./img/로그인화면.png" width="600px" height="400px">

### 로그인된 화면
<img src="./img/로그인된 화면.png" width="600px" height="400px">

### 메뉴선택 화면
<img src="./img/메뉴선택 화면.png" width="600px" height="400px">

### 장바구니 화면
<img src="./img/장바구니 화면.png" width="600px" height="400px">

### 주문 버튼 클릭 화면
<img src="./img/주문버튼클릭 화면.png" width="600px" height="400px">

### 주문 후 order 테이블
<img src="./img/주문후 order.png">

### 주문 후 order_detail 테이블
<img src="./img/주문후 order_detail.png">

### 결제 버튼 클릭 화면
<img src="./img/결제버튼클릭 화면.png" width="600px" height="400px">

### 결제 후 payment 테이블
<img src="./img/결제후 payment.png">

### 결제 후 payment_detail 테이블
<img src="./img/결제후 payment_detail.png">

### 결제 후 order 테이블
<img src="./img/결제후 order.png">

### 결제 후 order_detail 테이블
<img src="./img/결제후 order_detail.png">


