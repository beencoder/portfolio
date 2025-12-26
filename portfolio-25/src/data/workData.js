export const workData = [
  {
    id: 'travelover',
    title: ['트래블로버'],
    category: 'Commerce Platform',
    date: '2025',
    roles: ['UI Implementation', 'Interactive Scripting'],
    techStack: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'Swiper'],
    summary: '여행자 보험 예약 및 커머스 기능을 갖춘 반응형 웹 플랫폼 구축',
    detail: {
      overview:
        '여행자 보험 가입부터 결제까지 이어지는 신규 커머스 플랫폼 구축 프로젝트입니다. 사용자(User) 사이드의 UI/UX 구축을 전담했습니다.',
      userRole: [
        'Lead Publishing: 프로젝트 중반부터 단독 퍼블리셔로서 신규 페이지 및 고도화 작업을 100% 전담',
        'UX Proposal: 기획 단계에서 주소 찾기 프로세스(우편번호-기본-상세)의 UX 흐름을 역제안하여 사용성 개선',
        'Scripting: 프론트엔드 개발자 부재 환경에서 핵심 비즈니스 로직(상품 선택, 담보 변경 등)에 필요한 UI 스크립트 전담 구현',
      ],
      features: [
        {
          title: 'Hybrid Comparison Table',
          desc: '1열 고정 및 가로 스크롤이 가능한 테이블 구현. PC(Click)와 Mobile(Scroll) 이벤트를 분기 처리하여 디바이스별 최적화된 UX 제공.',
        },
        {
          title: 'Interactive Range Slider',
          desc: 'Swiper를 커스터마이징하여 1~10단계 수치를 조절하는 슬라이더 구현. 단계별 금액 라벨이 동적으로 매핑되는 로직 작성.',
        },
      ],
      troubleshooting: {
        issue: '복잡한 테이블 UI 구현 시, 뷰포트 변경에 따른 스크롤 동기화 오차 및 클릭 이벤트 충돌 발생.',
        resolution:
          'window.matchMedia로 실행 환경을 감지하여 이벤트 리스너를 분기하고, JS로 셀 너비를 동적으로 재계산하여 레이아웃 무너짐 방지.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [
      {
        type: 'preview',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing-mo',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing-mo',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
    ],
    url: {
      detail: '/work/travelover',
      site: null,
    },
  },
  {
    id: 'jss-corporation',
    title: ['JSS Corporation'],
    category: 'Corporate Site',
    date: '2024',
    roles: ['UI Implementation', 'Motion & Interaction'],
    techStack: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    summary: '외부 라이브러리 없이 순수 JavaScript로 구현한 반응형 기업 브랜딩 사이트',
    detail: {
      overview:
        '기업 브랜딩 강화를 위한 반응형 웹사이트 구축 프로젝트입니다. 외부 라이브러리 의존도를 낮추고 순수 JavaScript로 인터랙션을 구현했습니다.',
      userRole: [
        'Page Implementation: 메인 및 회사 소개 등 핵심 페이지의 마크업과 인터랙션 50% 전담',
        'Adaptive Design: 모바일 디자인 시안이 부재한 상황에서, PC 디자인 시스템을 분석하여 모바일 환경에 맞는 UI/UX를 주도적으로 설계 및 구현',
      ],
      features: [
        {
          title: 'Scroll Interaction (Vanilla JS)',
          desc: '스크롤 위치에 따라 백그라운드 이미지가 확장되는 시각적 효과를 무거운 라이브러리(GSAP) 없이 순수 자바스크립트로 구현하여 로딩 속도 최적화.',
        },
        {
          title: 'Responsive Layout',
          desc: '미디어 쿼리를 활용하여 데스크탑부터 모바일 기기까지 매끄럽게 이어지는 반응형 레이아웃 구축.',
        },
      ],
      troubleshooting: {
        issue:
          'scroll 이벤트 리스너 직접 사용 시, 과도한 이벤트 발생으로 인한 메인 페이지 렌더링 성능 저하(Jank) 우려.',
        resolution:
          'requestAnimationFrame을 활용한 스로틀링(Throttling) 기법을 적용하여, 스크롤 이벤트 실행 빈도를 모니터 주사율에 맞춰 최적화.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/work/jss-corporation',
      site: 'https://jsscorporation.kr/',
    },
  },
  {
    id: 'busan-bank',
    title: ['BNK부산은행', "'모락'"],
    category: 'Mobile Web',
    date: '2024',
    roles: ['Mobile UI Dev', 'Data Visualization'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    summary: '은행 앱 내 결합 커뮤니티(모바일 웹) 구축 및 복잡한 게시판 UI 컴포넌트화',
    detail: {
      overview:
        '은행 앱 내 결합 커뮤니티 서비스(모바일 웹) 구축 프로젝트입니다. 게시판 중심의 복잡한 UI 로직을 컴포넌트화하여 구현했습니다.',
      userRole: [
        'Component System: 게시판 목록, 상세, 작성 등 반복되는 UI 패턴을 분석하여 재사용 가능한 컴포넌트 단위로 모듈화',
        'Environment Adaptation: 내부망 보안 정책에 따라 Sass/Git 환경에서 CSS/SVN 환경으로 신속하게 마이그레이션 및 형상 관리 적응',
      ],
      features: [
        {
          title: 'Dynamic Image Grid',
          desc: '첨부 이미지 개수(1~5개)에 따라 레이아웃(Full, 2-Column, Mosaic)이 자동으로 변경되는 CSS Grid 로직 구현.',
        },
        {
          title: 'User Mention System',
          desc: '댓글 작성 시 "@" 입력을 감지하여 닉네임 리스트를 호출하고, 선택 시 Input 값으로 자동 완성되는 UI 스크립트 작성.',
        },
      ],
      troubleshooting: {
        issue:
          '댓글 멘션 기능 구현 시, 텍스트 내 정확한 위치(Caret Position) 추적 및 동적 리스트 렌더링의 기술적 난이도.',
        resolution:
          'Input 이벤트 내 정규식(RegEx)을 활용해 트리거 문자를 감지하고, 선택된 데이터를 기존 문자열 사이에 정확히 삽입(Insert)하는 로직을 직접 구현.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/work/busan-bank',
      site: null,
    },
  },
  {
    id: 'nh-bank',
    title: ['NH농협은행', 'UMS'],
    category: 'Admin System',
    date: '2024',
    roles: ['Admin UI Dev', 'Dashboard Implementation'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    summary: '대용량 메시지 발송 시스템의 관리자 대시보드 구축 및 데이터 시각화',
    detail: {
      overview:
        '대용량 메시지 발송 시스템의 관리자(Admin) 및 대시보드 구축 프로젝트입니다. 데이터 시각화와 에디터 시스템 고도화를 수행했습니다.',
      userRole: [
        'UI Standardization: 탭, 아코디언, 버튼 등 공통 UI 가이드라인 수립 참여 및 코드 일관성 확보',
        'Security Compliance: 금융권 보안 정책 및 라이브러리 의존성 최소화를 위해 jQuery 없이 Vanilla JS(ES6+)로 DOM 조작 구현',
      ],
      features: [
        {
          title: 'Data Visualization',
          desc: 'Chart.js를 활용하여 Bar, Doughnut, Pie 등 다양한 통계 차트 구현 및 대시보드 디자인에 맞춘 옵션 커스터마이징.',
        },
        {
          title: 'Admin Layout',
          desc: '방대한 데이터를 효율적으로 관리할 수 있는 직관적인 대시보드 그리드 및 테이블 레이아웃 설계.',
        },
      ],
      troubleshooting: {
        issue: '초기 도입한 WYSIWYG 에디터의 불필요한 태그 생성으로 인한 HTML 파편화 및 메일 클라이언트 호환성 이슈.',
        resolution:
          'Markdown 기반의 Toast UI Editor로 교체 및 스타일 재정의. 서버 단에서 정제된 HTML을 생성하는 구조를 확립하여 안정성 확보.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/work/nh-bank',
      site: null,
    },
  },
  {
    id: 'doazoom',
    title: ['DoazoomT'],
    category: 'EdTech Platform',
    date: '2021 - 2022',
    roles: ['Frontend Dev', 'Hybrid App UI'],
    techStack: ['Vue.js', 'Nuxt', 'React Native', 'TypeScript', 'JavaScript'],
    summary: '에듀테크 플랫폼의 웹(Vue.js) 리뉴얼 및 앱(React Native) 신규 구축 전담',
    detail: {
      overview:
        '에듀테크 플랫폼의 웹(Vue.js) 리뉴얼 및 앱(React Native) 신규 구축 프로젝트입니다. UI 스타일링부터 프론트엔드 API 연동까지 수행했습니다.',
      userRole: [
        'Hybrid App Styling: React Native 환경에서 iOS/Android 크로스 플랫폼 UI 스타일링 100% 전담',
        'Frontend Extension: 프론트엔드 영역으로 확장하여 자유게시판 CRUD 및 REST API 연동 로직 직접 구현',
      ],
      features: [
        {
          title: 'Custom Calendar UI',
          desc: 'react-calendar 라이브러리를 심층 분석하고 커스터마이징하여, 디자인 시안과 일치하는 학습 플래너 UI 구현.',
        },
        {
          title: 'Main UI Renewal',
          desc: '텍스트 위주의 메인 화면을 캘린더, 포스팅, 게시판 등 섹션별로 시각화하여 정보 전달력 강화.',
        },
      ],
      troubleshooting: {
        issue:
          '기기별 상이한 Notch 및 Home Indicator 영역으로 인해 앱 콘텐츠가 가려지는 레이아웃 침범(Safe Area) 이슈.',
        resolution:
          'SafeAreaView 컴포넌트와 react-native-safe-area-context를 활용하여 유동적인 안전 영역을 확보하고, OS별 동적 Padding을 적용하여 해결.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/work/doazoom',
      site: null,
    },
  },
];

export const projectData = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: '개인 포트폴리오 웹사이트',
    category: 'Personal Portfolio',
    date: '2025',
    roles: ['Frontend Dev', 'UI/UX Design'],
    techStack: ['Next.js 16', 'React 19', 'Sass', 'MongoDB', 'GSAP'],
    summary: 'Next.js 16(Pages Router), MongoDB를 활용한 인터랙티브 포트폴리오',
    detail: {
      overview:
        '단순한 정보 전달을 넘어, UX 중심의 UI 설계 철학과 기술 역량을 보여주기 위해 제작했습니다. 최신 기술 스택인 Next.js 16과 React 19 환경에서 기획부터 배포까지 전 과정을 100% 수행했습니다.',
      userRole: [
        'Tech Adoption: Next.js 16, React 19 등 최신 프론트엔드 생태계를 선제적으로 도입하여 성능과 개발 생산성을 고려한 아키텍처 설계',
        'Interaction Design: GSAP를 활용하여 마우스 움직임에 반응하는 심도(Depth) 효과를 구현하고, 정적인 웹사이트에 생동감 부여',
      ],
      features: [
        {
          title: 'Mouse Parallax Effect',
          desc: 'GSAP와 Mousemove 이벤트를 결합하여, 커서 위치(clientX/Y)에 따라 레이어별로 다른 속도(Depth)로 움직이는 시차(Parallax) 애니메이션 로직 구현.',
        },
        {
          title: 'Full-Stack Guestbook',
          desc: 'MongoDB와 Mongoose를 연동하여 CRUD 기능을 구현하고, 로딩 상태(Skeleton/Loader) 및 예외 처리를 통해 완성도 높은 사용자 경험 제공.',
        },
      ],
      troubleshooting: {
        issue:
          'GSAP 애니메이션과 React 생명주기 간의 충돌로 인해, 페이지 이동 후 돌아왔을 때 애니메이션이 중복 실행되거나 메모리 누수 발생.',
        resolution:
          'useEffect 내에서 GSAP Context를 사용하거나 Cleanup 함수(return)에서 이벤트 리스너를 명확히 제거하여 메모리 누수를 방지하고 성능 최적화.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [
      {
        type: 'preview',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing-mo',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
      {
        type: 'landing-mo',
        src: '/images/works/portfolio/project-thumb-1.png',
        alt: 'alt',
        figcaption: '',
      },
    ],
    url: {
      detail: '/project/portfolio',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'foodie-hub',
    title: 'FoodieHub',
    subtitle: '나만의 요리법을 공유하는 레시피 커뮤니티',
    category: 'Community Platform',
    date: '2025',
    roles: ['Frontend Dev', 'UI/UX Design'],
    techStack: ['Next.js 15', 'React 19', 'Supabase', 'Better-SQLite3'],
    summary: 'Next.js 15(App Router), Supabase를 활용한 풀스택 레시피 공유 커뮤니티',
    detail: {
      overview:
        '나만의 레시피를 기록하고 공유하는 커뮤니티입니다. Next.js 15의 App Router와 최신 React 19 기능을 실험적으로 도입하여 풀스택 개발 역량을 키웠습니다.',
      userRole: [
        'Full-Stack Logic: Supabase Auth와 Storage를 연동하여 회원 관리 및 레시피 이미지 업로드/삭제 프로세스 구현',
        'Modern Stack: Next.js App Router의 Server Component와 Server Action을 적극 활용하여 클라이언트 번들 사이즈 최소화',
      ],
      features: [
        {
          title: 'Recipe Management',
          desc: '레시피 작성(Create), 목록 조회(Read), 삭제(Delete) 기능을 구현하고, 각 레시피별 썸네일 이미지를 클라우드 스토리지에 저장.',
        },
        {
          title: 'Image Handling',
          desc: '게시글 삭제 시 연동된 이미지 파일까지 스토리지에서 깔끔하게 정리되는 데이터 무결성 로직 작성.',
        },
      ],
      troubleshooting: {
        issue:
          '게시글 삭제 시 DB 데이터는 삭제되지만, 스토리지의 이미지 파일은 남아있는 "고아 파일(Orphan File)" 문제 발생.',
        resolution:
          '이미지의 전체 URL 문자열을 파싱(new URL)하여 스토리지 내 실제 객체 경로(Object Path)만 추출하는 로직을 구현, Supabase Admin API로 파일까지 완벽하게 삭제하도록 처리.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/foodie-hub',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'todo-list',
    title: 'TodoList',
    subtitle: '할 일을 간편하게 관리하는 투두 리스트',
    category: 'Utility App',
    date: '2023',
    roles: ['Frontend Dev'],
    techStack: ['React', 'CSS3', 'JavaScript'],
    summary: 'React의 State 관리 흐름과 LocalStorage를 활용한 데이터 영속성 구현',
    detail: {
      overview:
        '할 일을 간편하게 관리하는 웹 애플리케이션입니다. React의 핵심 개념인 State와 Lifecycle, 그리고 컴포넌트 간 데이터 흐름을 체득하기 위해 제작했습니다.',
      userRole: [
        'State Management: useState와 Props를 활용하여 할 일의 추가/수정/삭제/완료 상태를 관리하는 CRUD 로직 완성',
        'Data Persistence: 브라우저를 새로고침해도 데이터가 유지되도록 Web Storage API(LocalStorage) 연동',
      ],
      features: [
        {
          title: 'CRUD Implementation',
          desc: '할 일 목록을 배열(Array) 상태로 관리하며 불변성을 지키는 방식으로 아이템 추가, 수정, 삭제 기능 구현.',
        },
        {
          title: 'Dynamic UI',
          desc: '완료 여부(isDone)에 따라 텍스트 취소선 스타일을 동적으로 적용하고, 조건부 렌더링을 통해 UI 상태 제어.',
        },
      ],
      troubleshooting: {
        issue: '앱을 새로고침하면 React State가 초기화되어 작성한 할 일 목록이 모두 사라지는 휘발성 문제.',
        resolution:
          'useEffect를 활용하여 컴포넌트 마운트 시 LocalStorage의 데이터를 불러오고, 상태 변경 시마다 스토리지를 업데이트하여 데이터 영속성을 확보.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/todo-list',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'auth-flow',
    title: 'AuthFlow',
    subtitle: '회원가입 및 로그인 인증 기능 구현 데모',
    category: 'Auth System Demo',
    date: '2023',
    roles: ['Frontend Dev'],
    techStack: ['Vue.js', 'Firebase', 'CSS3', 'JavaScript'],
    summary: 'Vue.js와 Firebase Auth를 연동하여 안전한 회원가입/로그인 프로세스 구현',
    detail: {
      overview:
        '사용자 인증 프로세스를 깊이 있게 이해하기 위한 데모 프로젝트입니다. Vue.js 환경에서 Firebase Authentication을 연동하여 실제 서비스 수준의 로그인을 구현했습니다.',
      userRole: [
        'Auth Integration: Firebase SDK를 활용하여 이메일/비밀번호 기반의 회원가입, 로그인, 비밀번호 변경 기능 구현',
        'State Observer: 로그인 상태 변화를 실시간으로 감지하여 UI를 업데이트하는 옵저버 패턴 적용',
      ],
      features: [
        {
          title: 'User Management',
          desc: '회원가입 시 유효성 검사(Validation)를 거쳐 Firebase에 유저를 생성하고, 로그인 성공 시 메인 화면으로 라우팅 처리.',
        },
        {
          title: 'Conditional Rendering',
          desc: '인증 상태(User Object) 유무에 따라 로그인 전/후의 헤더 UI와 접근 가능한 페이지를 다르게 보여주는 로직 구현.',
        },
      ],
      troubleshooting: {
        issue:
          '페이지 새로고침 시 Firebase의 인증 체크(비동기)보다 Vue 앱 렌더링이 먼저 일어나 로그인이 풀린 것처럼 보이는 현상.',
        resolution:
          'Firebase의 onAuthStateChanged 리스너가 인증 상태를 확정지을 때까지 앱 초기화를 지연시키거나, 로딩 인디케이터를 적용하여 사용자 경험 개선.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/auth-flow',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'type-master',
    title: 'TypeMaster',
    subtitle: '타자 연습 서비스',
    category: 'Interactive Game',
    date: '2023',
    roles: ['Scripting', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Axios'],
    summary: 'Random Word API 연동 및 Axios를 활용한 실시간 타자 연습 게임',
    detail: {
      overview:
        '제한 시간 내에 주어진 영단어를 빠르게 입력하는 타자 연습 게임입니다. 고정된 데이터가 아닌 외부 API를 연동하여 매번 새로운 단어로 연습할 수 있도록 구현했습니다.',
      userRole: [
        'API Integration: Axios 라이브러리를 사용하여 Random Word API로부터 무작위 단어 데이터를 비동기로 호출(Fetch) 및 관리',
        'State Management: 게임 진행 여부(isPlaying), 점수, 시간 등 게임의 상태를 전역 변수로 관리하고 DOM에 실시간 반영',
      ],
      features: [
        {
          title: 'Async Data Fetching',
          desc: '게임 초기화 시 비동기 통신으로 단어 리스트를 미리 받아오고, 데이터 수신 전까지 "로딩 중" 상태를 UI에 표시하여 UX 개선.',
        },
        {
          title: 'Real-time Validation',
          desc: 'Input 이벤트를 감지하여 사용자가 입력한 값과 제시어를 실시간으로 비교하고, 일치 시 점수 획득 및 다음 단어로 즉시 전환.',
        },
      ],
      troubleshooting: {
        issue:
          'API 응답 속도에 따라 데이터가 오기 전에 게임이 시작되거나, 단어 목록이 비어있는 상태에서 로직이 실행되는 문제.',
        resolution:
          'Axios의 Promise 패턴(.then)을 활용하여 데이터 수신이 확실히 완료된 시점에만 게임 시작 버튼을 활성화(Callback)하도록 비동기 흐름을 제어.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/type-master',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'mini-blocks',
    title: 'Mini Blocks',
    subtitle: '테트리스를 모티브로 한 블록 쌓기 게임',
    category: 'Puzzle Game',
    date: '2023',
    roles: ['Scripting', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: '2차원 배열 그리드 시스템과 충돌 감지 알고리즘을 활용한 블록 게임',
    detail: {
      overview:
        '테트리스를 모티브로 한 블록 쌓기 게임입니다. Canvas API 없이 순수 DOM 조작과 자바스크립트 로직만으로 게임 엔진을 구현했습니다.',
      userRole: [
        'Grid System: 2차원 배열과 DOM 요소를 매핑하여 게임 보드를 렌더링하고, 블록의 좌표(x, y)를 계산하여 이동 로직 구현',
        'Algorithm: 블록의 회전, 이동 시 벽이나 다른 블록과의 충돌을 감지하는 충돌 처리(Collision Detection) 알고리즘 작성',
      ],
      features: [
        {
          title: 'Block Rendering',
          desc: '블록의 모양(Shape)과 회전 상태(Direction) 데이터를 객체로 관리하고, 좌표 변경 시마다 Class를 업데이트하여 렌더링.',
        },
        {
          title: 'Game Loop',
          desc: '일정 시간마다 블록을 한 칸씩 내리는 인터벌 로직과 라인이 꽉 찼을 때 삭제하고 점수를 올리는 클리어 로직 구현.',
        },
      ],
      troubleshooting: {
        issue: '블록이 이동할 때마다 전체 그리드를 다시 그리면 발생하는 리플로우(Reflow) 성능 저하.',
        resolution:
          '초기에 생성된 DOM 노드를 재사용하고, 좌표에 해당하는 셀(Cell)의 CSS 클래스만 토글(Toggle)하는 방식으로 렌더링 비용을 최소화.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/mini-blocks',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'play-tune',
    title: 'PlayTune',
    subtitle: '기본 재생 기능을 갖춘 웹 뮤직 플레이어',
    category: 'Web Application',
    date: '2023',
    roles: ['UI Implementation', 'Scripting'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: 'HTML5 Audio API 활용 및 커스텀 컨트롤러 UI 구현',
    detail: {
      overview:
        '좋아하는 밴드의 음악을 나만의 플레이리스트로 듣기 위해 제작한 웹 뮤직 플레이어입니다. 브라우저 기본 컨트롤러 대신 커스텀 UI를 입혔습니다.',
      userRole: [
        'Audio API Control: HTML5 Audio 객체의 메서드(play, pause, load)와 속성(currentTime, duration)을 활용하여 재생 로직 제어',
        'UI Customization: 진행 바(Progress Bar) 드래그 이동, 셔플/반복 재생 등 사용자 친화적인 커스텀 컨트롤러 구현',
      ],
      features: [
        {
          title: 'Progress Sync',
          desc: 'timeupdate 이벤트를 통해 현재 재생 시간을 계산하고, 진행 바의 너비를 실시간으로 동기화하여 시각적 피드백 제공.',
        },
        {
          title: 'Playlist Management',
          desc: '자바스크립트 배열로 관리되는 음악 리스트를 순회하며 이전 곡/다음 곡 재생 및 랜덤 재생 기능 구현.',
        },
      ],
      troubleshooting: {
        issue: '음원 파일이 완전히 로드되기 전에 재생 정보를 읽으려 할 때 발생하는 NaN(Not a Number) 에러.',
        resolution:
          'loadeddata 이벤트를 리스닝하여 메타데이터가 확보된 시점에 전체 시간(Duration)을 계산하고 UI를 업데이트하도록 비동기 처리.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/play-tune',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'css-3d-lab',
    title: 'CSS 3D Lab',
    subtitle: 'CSS 3D 효과를 활용한 인터랙티브',
    category: 'Creative Experiment',
    date: '2025',
    roles: ['Motion & Interaction'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: 'CSS3 transform-style: preserve-3d 속성을 활용한 입체적 인터랙티브 구현',
    detail: {
      overview:
        '웹에서의 3D 공간감과 인터랙션 가능성을 실험하기 위해 제작했습니다. 자바스크립트 라이브러리 없이 순수 CSS 속성만으로 입체 회전을 구현했습니다.',
      userRole: [
        '3D Space Styling: perspective와 transform-style: preserve-3d 속성을 이해하고 사용하여 깊이감 있는 3D 공간(Stage) 구축',
        'Interaction Control: 마우스 호버(Hover) 시 애니메이션을 일시 정지(paused)시키는 등 사용자와 상호작용하는 UX 디테일 추가',
      ],
      features: [
        {
          title: 'Hardware Acceleration',
          desc: 'transform 속성(rotateY, translateZ)을 적극 활용하여 GPU 가속을 유도, 부드러운 60fps 애니메이션 구현.',
        },
        {
          title: 'Carousel Logic',
          desc: '각 패널(Article)을 원형으로 배치하기 위해 각도(deg)를 계산하여 회전시키고, JS로 제어하여 입체적인 캐러셀 동작.',
        },
      ],
      troubleshooting: {
        issue: '3D 회전 시 요소의 뒷면이 비쳐 보이거나 텍스트 가독성이 떨어지는 문제.',
        resolution:
          'backface-visibility: hidden 속성을 사용하여 요소의 뒷면 렌더링을 막고, 3D 공간에서의 레이어 겹침 현상을 깔끔하게 정리.',
      },
    },
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/css-3d-lab',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
];
