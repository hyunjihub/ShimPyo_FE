<div align="center">
  
  ![Image](https://github.com/user-attachments/assets/11680e73-00c3-464e-b61e-ab2e77967999)
  
  2025 관광데이터 활용 공모전 '장려상' 수상
  
  https://www.shimpyo.site/

  ## 🧑🏻‍💼 팀원 👩🏻‍💼
| [장현지](https://github.com/hyunjihub) [<img src="https://velog.velcdn.com/images/hyeongjun/post/5fff0129-f29b-4dfa-b28b-f3af0e11ed4f/image.png" width="20" height="20">](https://velog.io/@syub98774/posts) | [유나영](https://github.com/fjeos) [<img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA1MDNfMTIx/MDAxNjIwMDE2ODUzODY2.GpIC8w2H_pIqAahd_Km5NEsk-3gAr88XK9BNr1Egc9Yg.PJsJNcO2jbk2fpTnEb4kZRA857QRyU4CwYNZk8lYsbwg.PNG.xavisnet/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC.png?type=w800" width="20" height="20">](https://ynyezyo.tistory.com/) | 송은영 |
|--------|--------|--------|
|<img src="https://github.com/user-attachments/assets/91b1accb-350a-48c3-826b-8199a8d96c80" width="100" height="100"> | <img src="https://github.com/user-attachments/assets/0f8d3cf7-3782-4716-80e6-89db575167cf" width="100" height="100"> ||
| FE | BE     |UI/UX|

  ## 🛠️ 개발 환경
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![](https://img.shields.io/badge/FramerMotion-0055FF?style=for-the-badge&logo=framermotion&logoColor=white)
![](https://img.shields.io/badge/Jotai-ffffff?style=for-the-badge&logo=jotai&logoColor=white)
![](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

![](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/ReactHookForm-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![](https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![](https://img.shields.io/badge/AmazonRoute53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white)
![](https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

![](https://img.shields.io/badge/VSCODE-1F8ACB?style=for-the-badge&logo=visualcode&logoColor=white)
![](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## 💬 주 기능
**🔑 인증 및 로그인**

    - 카카오 JS SDK와 react-kakao-login을 활용해, 토큰 기반 인증 후 서버 API 호출로 소셜 로그인 구현.
    - React-Hook-Form 기반 로그인, 회원가입 구현.
    - 회원가입/계정 찾기 시, 이메일로 발송된 인증 번호를 통해 안전하게 검증하고, 유효 시간을 두어 보안성 강화.
    
**🗂 상태 관리 및 데이터 유지**

    - Hydration 기반 전역 상태 관리로 상태 불일치 오류를 방지하고, 로그인하지 않은 사용자의 접근을 제한하여 안정적인 인증 흐름 구현.
    - 테스트 과정에 필요한 전역 변수를 storage에 암호화하여 저장하여 불필요한 노출 방지.
    - 동적 라우팅 페이지 header title을 전역 상태로 관리하도록 atom 설계.
    
**🛠 UI 컴포넌트 및 상호작용**

    - 드래그, 포커스 트랩, 스크롤 락, React Portal 등을 적용한 바텀 시트 구현.
    - 두 핸들을 이용한 Min/Max Range Slide 및 실시간 값 표시 구현.
    - 여러 조건으로 데이터를 필터링할 수 있는 다중 필터링 구현.
    - 재사용 가능한 Alert, Confirm 컴포넌트 구현.
    
**📋 폼 및 입력 검증**

    - React-Hook-Form 기반 실시간 입력 값 검증으로 유효성 체크 및 에러 메시지 표시.
    
**🌐 API 및 데이터 처리**

    - 날씨, 미세먼지, 자외선 등 외부 API 값을 가공하여 웰니스 지수 수치화.
    - 카카오 지도 REST API를 활용해 키워드로 장소 검색 구현.
    - Excel 데이터를 JSON으로 변환하고, 고정되지 않은 위치 코드 매핑 구현.
    - Presigned URL을 이용한 S3 이미지 업로드 구현.
    
**🗺 지도 및 위치 기반 기능**

    - 카카오 지도 API를 통해 geolocation, 관광지 위치 지도 렌더링.
    - 여행 코스 다중 위치를 지도에 표시하고, 위치 간 직선 거리에 따라 지도 중심과 줌 레벨을 동적으로 계산하여 최적화된 뷰 제공.
    - 여행 일정에 맞춰 일자별 경로를 지도 위에 표시.
    
**🔍 검색 및 추천 기능**

    - 검색한 단어를 localStorage에 저장하고, 저장 여부를 선택할 수 있는 최근 검색어 저장 기능 구현.
    - 사용자가 검색어를 입력할 때 마다 서버 API를 호출하여 입력어에 맞는 추천 검색어를 받아 자동완성 리스트로 표시.
    - Debounce를 적용하여 연속 입력 시 불필요한 서버 호출 방지.
    
**🧩 쉼표 유형 테스트 및 코스 추천 기능**

    - 질문과 선택지를 기반으로 한 쉼표 유형 스토리형 테스트 컴포넌트 구현.
    - 사용자의 선택 데이터를 분석해 유형 점수 계산 및 추론 로직 구현.
    - 유형에 맞는 여행 코스를 추천하고 UI에 표시.
    
**📤 공유 기능**

    - 공유 버튼을 통한 URL 클립보드 복사 구현.
    - 코스 공유 페이지 URL query에 token을 추가하여 특정 사용자만 접근 가능하도록 제한.

## 📕 관련 페이지
[Notion](https://tall-bestseller-c51.notion.site/2025-Notion-1d4242ce400e80ea9703fd37477f9b8d?source=copy_link)
[Backend-Github](https://github.com/ShimPyoSo/ShimPyo_BE)
  
</div>
