# ☁️ 2025 김다빈 Portfolio

> **"Designed for Users, Structured for Developers."** 사용자의 경험을 설계하고, 개발자가 읽기 좋은 구조로 구현하는 김다
> 빈의 포트폴리오입니다.

---

## 💡 프로젝트 개요

단순한 정보 전달을 넘어, 제가 가진 **UI 설계 철학과 기술적 역량**을 가장 생생하게 보여드리고 싶어 제작한 풀스택 웹사이트
입니다. 퍼블리셔로서 다져온 세밀한 마크업 감각에 Next.js 16, React 19라는 최신 스택을 더해, 정적인 웹을 생동감 넘치는 역
동적인 공간으로 만드는 데 집중했습니다.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (Pages Router), React 19
- **Styling**: Sass (SCSS) Modules, clsx
- **Animation**: GSAP (ScrollTrigger, quickTo), Framer Motion
- **Database**: MongoDB (Mongoose)
- **Deployment**: Vercel

## ✨ 주요 구현 포인트

### 1. UX 중심의 인터랙티브 UI (GSAP)

- **Hero & About Parallax**: 마우스 움직임에 따라 입체적으로 반응하는 레이어 애니메이션과 ScrollTrigger를 활용해 눈이 즐
  거운 패럴랙스 효과를 구현했습니다.
- **Project Preview**: 프로젝트 리스트에 마우스를 올리면 실시간으로 미리보기가 따라다니도록 설계하여, 더 즐겁고 편리하게
  프로젝트를 둘러보실 수 있도록 만들었습니다.

### 2. Full-Stack 기능 구현 (Guestbook)

- **MongoDB 연동**: 별도의 가입 없이도 누구나 편하게 흔적을 남길 수 있는 방명록 시스템을 직접 구축했습니다.
- **CRUD 로직**: 메시지 등록, 조회는 물론 비밀번호를 통한 삭제 기능까지 꼼꼼히 구현했으며, 안내 메시지에 `aria-live`를
  적용해 웹 접근성까지 놓치지 않았습니다.

### 3. 컴포넌트 기반 아키텍처 및 최적화

- **SEO & SSG**: Next.js의 정적 페이지 생성 기능을 활용해 검색 결과에 잘 노출되도록 신경 쓰고, 첫 로딩 속도도 최대한 빠
  르게 최적화했습니다.
- **재사용성**: 모달, 버튼, 타이틀 등 반복되는 UI 요소들을 독립된 컴포넌트로 분리하여, 유지보수가 쉽고 깔끔한 코드를 작
  성하려 노력했습니다.

## 🔍 Troubleshooting: 애니메이션 메모리 관리

- **Issue**: GSAP 애니메이션이 리액트의 컴포넌트 생명주기와 어긋나면서, 페이지를 이동할 때 애니메이션이 겹쳐서 나오거나
  메모리가 낭비되는 문제가 있었습니다.
- **Resolution**: `gsap.context()`를 도입해 컴포넌트가 사라질 때 모든 애니메이션과 리스너를 한꺼번에 깨끗이 정리(revert)
  해주도록 고쳤습니다. 덕분에 리소스 낭비 없이 애니메이션이 매끄럽게 동작하는 안정적인 환경을 만들 수 있었습니다.

---

## 📂 프로젝트 구성 (Structure)

- **`/pages`**: Next.js 기반의 전체적인 페이지 컴포넌트 (Works, Guestbook 등)
- **`/components/ui`**: 여기저기서 공통으로 쓰이는 UI 컴포넌트들
- **`/styles`**: Scss Module을 활용한 스타일 아키텍처
- **`/data`**: 프로젝트 상세 설명 및 커리어 데이터를 관리하는 공간

## 🐧 "코드로 경험을 설계합니다."

저는 화면의 한 줄 여백, 한 번의 스크롤에도 이유가 있어야 한다고 믿습니다. 이 포트폴리오는 그 고민의 흔적들을 담은 결과물
입니다.

---

**[🔗 Live Demo 보기](https://been-portfolio-2025.vercel.app)** | **[📄 Resume 확인하기](/files/resume_2025_v1.pdf)**
