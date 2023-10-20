# 📌 지역기반 공동구매 프로젝트  [Modeul]


# 목차
  - [1. 프로젝트 소개](#1-프로젝트-소개)
  - [2. 제작 기간 & 참여 인원](#2-제작-기간-및-참여-인원)
  - [3. 사용기술](#3-사용-기술)
  - [4. ERD 설계](#4-ERD-설계)
  - [5. 실행 화면](#5-핵심-기능-및-실행-화면)
  - [6. 이슈](#6-핵심-트러블-슈팅)
  - [7. 개발 후기](#7-개발-후기)

<br>

## 1. 프로젝트 소개

- 지역 주민들이 함께 상품을 구매하여 대량으로 판매하는 물품을 소분함으로써, 1인 가구들을 비롯한 사람들에게 도움을 주고 배달비의 부담으로 인해 혼자서 배달음식을 시키기 어려운 경우에도 함께 시켜 배달비를 나눌 수 있는 협력적인 해결책을 제공하고자 합니다.

<br>

## 2. 제작 기간 및 참여 인원

- 팀 프로젝트
- 2023.02.06 ~ 2023.05.24(3개월)
- 9명(재헌, 선균, 민경, 성민, 충렬, 대현, 지은, 지혜, 석현)

<br>

## 3. 사용 기술

#### `Back-end`
  - Java(JDK 17)
  - Spring Boot 3.0.4
  - Mybatis 3.0.1

#### `Front-end`
  - Vue.js 3.2.47
  - Vite 4.1.4
  - JavaScript
  - HTML5
  - CSS3

#### `Build Tool`
  - Maven 3.9.0

#### `DataBase`
  - MariaDB 10.6.12

#### `IDE & Collaboration`
  - VSCode, EClipse
  - MySQL Workbench
  - Git, GitHub
  - Postman, Notion, Google Drive, Figma, Discord

<br>

## 4. ERD 설계

<img width="110%" src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/e793326d-4abe-40d9-a06d-22cbdf9b29f2"/>

<br>

## 5. 핵심 기능 및 실행 화면

- 공동구매 서비스는 사용자가 게시글을 작성하여 다른 사용자와 함께 [공동구매, 배달, 대형마트]를 공유할 수 있는 서비스입니다.
서비스를 이용하기 위해서는 로그인이 필수이며, 로그인 없이 회원가입, 로그인 서비스에 한해서만 이용할 수 있습니다.

<br>

### 5.1. 공구상품 글 전체 목록 페이지 및 반응형 페이지

- 모바일 화면과 PC 화면으로 반응형 웹페이지를 구현하고 카테고리를 선택해서 공구상품 목록을 확인하며 간편하게 검색도 가능합니다.

- GPS 버튼을 선택하여 우리 동네 글을 필터링해서 지역별 공구상품 목록도 확인할 수 있습니다.

|공구상품 글 전체 목록 페이지|반응형 : 공구상품 글 전체 목록 페이지|
|:---:|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/54afc6d9-10eb-4e44-9930-3959727cdf32"/> | <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/d0b4bd3e-08a9-41c5-8a78-05572ca88315" /> |

<br>

### 5.2. 공구상품 글 상세 페이지 및 반응형 페이지

- 모바일 화면과 데스크탑 화면으로 반응형 웹페이지를 구현하고 인증된 사용자의 권한에 따라 해당 게시글의 수정/삭제 혹은 신고가 가능합니다.

- 이미지가 여러 장 일 경우 넘기면서 확인이 가능하고 글쓴이가 등록한 위치가 지도로 확인 가능합니다. 또한, 관심있는 목록에 추가하고 채팅이 가능한 채팅방에 참여가 가능합니다.

|공구상품 글 상세 페이지|반응형 : 공구상품 글 상세 페이지|
|:---:|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/33a81804-bb6d-4cec-94aa-dc3860b2d47b " width="80%" heigth="80%"/> | <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/9bf06a1a-866c-4dba-a454-0b98a120fac9" width="120%" heigth="120%"/> |

<br>

### 5.3. 추천 공구상품 페이지 및 공구상품 글 등록 페이지

- 대형 온라인 쇼핑몰의 상품 데이터를 수집하여 추천 목록을 구현하였고 작성하기 버튼을 통해 해당 데이터를 기반으로 게시글 작성이 가능합니다.

- 또한, 추천 상품이 아닌 일반 상품에 대해서도 공동구매 상품 게시글 등록을 통해 공동구매 인원 모집 서비스 이용이 가능합니다.

|추천 공구상품 페이지|공구상품 글 등록 페이지|
|:---:|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/3196fd39-e294-44c1-9faf-e02e27274ce4"  width="500%" heigth="500%"/> | <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/2d245b61-a009-4a2d-92ca-4e62bb1166ea" width="80%" heigth="80%"/> |


<br>

### 5.4. 채팅 시스템 및 채팅방 내 정산 시스템

- 채팅을 통해 참여자들 간 소통이 가능하며 공동구매 글 작성자는 사용자 추방, 정산기능을 사용할 수 있습니다.

- 작성자가 정산 방법을 선택하고, 금액을 입력하여 정산이 완료되면 정산 결과가 채팅방과 참여자에게 공지됩니다.

|채팅 시스템|정산 시스템|
|:---:|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/4ba9d1d9-0ecf-40dd-8bfb-c4668a9b2a52"/> | <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/a2273800-e950-456b-9fa0-71a0c581d5c9" /> |

<br>

### 5.5. 관심 목록 시스템, 마이페이지

- 물품 상세 페이지에서 즐겨찾기 표시를 하면 관심 목록에서 확인이 가능하고 관심 페이지에서도 등록/삭제가 가능합니다.

- 본인이 작성한 글 목록, 참여한 공동구매 목록, 관심목록, 정산 목록 조회가 가능하며 프로필사진, 닉네임, 비밀번호, 주소 변경, 로그아웃, 회원 탈퇴가 가능합니다.

|관심 목록 시스템|마이페이지|
|:---:|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/407035f0-4a19-4169-a9f6-1836ceb4117f" width="80%" heigth="80%"/> | <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/09af7146-57e5-4043-b809-4c7f46dac129" width="120%" heigth="120%"/> |

<br>

### 5.6. 신고 페이지 및 관리자 페이지

- 사용자는 부적절한 게시글에 관하여 신고를 할 수 있으며, 관리자 권한을 가진 사용자는 관리자 페이지에 접근하여 Modeul의 회원관리, 게시글 관리, 카테고리 관리, 신고 관리 기능을 사용할 수 있습니다.

|신고 페이지 및 관리자 페이지|
|:---:|
| <img src="https://github.com/Modeul/Final_Modeul/assets/37978853/3bdbb436-eeb3-49ec-b53f-9b287f773192" width="80%" height="80%"/> |


---


<br><br>

## 6. 핵심 트러블 슈팅

<br>

### 6.1. 채팅방 내부의 채팅 메시지를 어떻게 저장해서 채팅방에 다시 불러올 것인가?

<br>

- 문제점 :
  - 채팅방 내부의 채팅 메시지를 어떻게 저장해서 채팅방에 다시 불러올 것인지?
  - 채팅방을 나갔다가 들어오면 채팅 메시지를 불러오는 과정이 필요하다고 판단되어서 채팅방 내부의 메시지를 저장하려고 했다. 초기의 구현 방법은 메시지를 1번 입력할 때마다 DB에 메시지를 저장하고 불러오는 방식으로 구현하고자 했다.

<br>

- 원인 :
  - 하지만, 구현하고보니 서버와 DB에 과부하를 주는 모습을 확인할 수 있어서 성능이 급격히 나빠진 것으로 판단되었다. 이를 수정하기위해 다양한 방식으로 수정하려고 했다.

<br>

- 해결 방법 :
  - 채팅 메시지를 한 번 입력할 때마다 DB에 저장하는 방법과 파일에 저장하는 방법이 있었지만, 팀원들이 모두 채팅 메시지를 공유할 수 있고 DB에서 바로 확인할 수 있기 때문에 DB에 채팅 메시지를 저장하기로 했다.
  - 또한, 채팅 메시지를 한번 입력할 때마다 DB에 바로 저장하기보다는 [페이지를 이동하거나 브라우저에서 벗어날 때, DB에 메시지를 저장](https://github.com/Modeul/Final_Modeul/blob/4e44a112174be8f3cf7948384fe8ed9f4a6f0233/BackEnd_Modeul/src/main/java/com/modeul/web/service/MessageServiceImpl.java#L30)하기로 했다.
  - 이렇게 구현하면, 서버 요청의 빈번도와 DB의 IO 빈번도를 줄일 수 있어서 성능을 높일 수 있는 결과를 만들었다.

<br>

- 배운점 : 
  - 메시지를 저장하기 위해서는 매번 IO가 일어날 필요도 없었고 서버나 DB의 부하를 최대한 줄이는 방향으로 개발해야한다는 점을 알게 되었다. 

<br>

---

<br><br>

### 6.2. 정산 내역을 DB에 저장하기 위해 @RequestBody를 여러 개 사용할 수 없다는 에러가 발생

<br>

- 문제점 :
  - 정산 시스템 구현에서 dutch, account 칼럼을 포함하는 기존의 구현 방식으로는 정규화가 위반되어 이를 개선하기 위해 DB 테이블 구조 변경
  - 기존 1개의 DB 테이블이 2개의 DB 테이블로 DB 테이블 구조가 변경됨에 따라 DB에 정산 내역을 저장하기 위해서 JSON 데이터 구조도 같이 변경되었다.
  - POST 요청으로 정산 내역을 DB에 저장하기 위해 Spring Boot에서는 JSON 데이터 타입을 @RequestBody에 각각의 객체를 담아서 DB 테이블에 저장하려고 했지만 @RequestBody를 여러 개 사용할 수 없다는 에러가 발생했다. 


<br>

- 원인 :
  - @RequestBody는 JSON 데이터를 HTTP 요청 Body로 받아 자바 객체로 변환하여 Request Stream으로 받기 때문에 단일 객체만을 처리할수 있도록 처리되어 있다.
  - 따라서, @RequestBody를 사용하기 위해서는 다른 방법을 이용해야 한다. 


<br>

- 해결 방법 : 
  - DTO를 추가로 생성하여 처리하거나 JSON 데이터를 여러 객체로 나누어서 처리한다. 
  - DTO를 사용하는 경우는 최초 개발 시점에서만 처리 가능하기 때문에 [JSON 데이터를 여러 객체로 나누어서 처리하는 방향](https://github.com/Modeul/Final_Modeul/blob/4e44a112174be8f3cf7948384fe8ed9f4a6f0233/BackEnd_Modeul/src/main/java/com/modeul/web/service/DutchServiceImpl.java#L45)으로 진행하였다.

<br>

- 배운점 : 
  - 데이터 구조를 설계하고 이용하는 과정이 중요하다는 것을 알게 되었다. 서버에서 다양한 데이터 구조를 처리하기 위해 Map 객체, List 객체 등의 다양한 콜렉션 클래스를 이용하여 데이터 구조를 설계하고 이용하는 방법을 알게 되었다.  

<br>

---

<br><br>

## 7. 개발 후기

- 프로젝트 개발 회고 및 후기:
  

|[재헌](https://github.com/wogjs0911)|[민경](https://github.com/minkyungkimm)|[지혜](https://github.com/icedpodo)|                              [선균](https://github.com/ksg0000)|[대현](https://github.com/dh-song)|
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/57828f80-b031-45b1-943e-c06bc7dedb1c" width="80%" height="80%"/> |<div style="display:flex;"> <div><img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/a8298fdf-1cf1-4f98-801a-e4e77f8af974" width="100%" height="100%"/></div> <div><img src=https://github.com/wogjs0911/Modeul_Backup/assets/37978853/48277488-d713-4af9-93be-ce0989d7861b width="100%" height="100%"/></div> </div>| <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/00ff126b-e785-4f60-92e1-9f0c11c13741" width="80%" height="80%"/> | <img src = "https://github.com/wogjs0911/Modeul_Backup/assets/37978853/fbfaed1e-570d-4ccd-97ef-28e4a5e78099" width="100%" height="100%"/>| <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/b94f4033-84d6-4abd-b9d4-a067cbca274a" width="80%" height="80%" />|
|...|.. |힝입니다..|거북이 진화 완.|불완전한 코드의 오류는 <br>즐거웠고, 함께해 준 팀원들에게 감사합니다.|
|[충렬](https://github.com/SONCHUNG)|[석현](https://github.com/Mistercandoit)|[성민](https://github.com/psm901)|[지은](https://github.com/hanjieun94)|
| <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/b7b5525d-11fe-456c-a312-3d6e2f36a7b4" width="80%" height="80%" /> | <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/54c990f8-9299-4659-8633-d41cc60b5b45" width="100%" height="100%"/> | <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/b8e27ccd-10e2-45d3-a0db-d3f7b425bf08" width="100%" height="100%"/> | <img src="https://github.com/wogjs0911/Modeul_Backup/assets/37978853/3ef27e99-a92b-40fd-9c0e-8e8a37b7ae49" width="100%" height="100%" /> |
|노는게 제일 좋아~|모두 고생많았습니다!<br>체력 길러서 코딩 gogo|디버깅…<br>드디어 끝났다..|행ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ복ㅋㅋㅋㅋㅋㅋㅋㅋㅋ|
