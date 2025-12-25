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
    category: 'Personal Project',
    date: '2025',
    roles: ['Frontend Dev', 'UI/UX Design'],
    techStack: ['Next.js', 'Sass', 'JavaScript', 'MongoDB', 'GSAP'],
    summary: '개인 포트폴리오 웹사이트',
    description: '설명',
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
    id: 'recipe-hub',
    title: 'RecipeHub',
    category: 'Web Application',
    date: '2025',
    roles: ['Frontend Dev', 'UI/UX Design'],
    techStack: ['Next.js', 'CSS3', 'JavaScript', 'MongoDB'],
    summary: '나만의 요리법을 공유하는 레시피 커뮤니티',
    description: '설명',
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/recipe-hub',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
  {
    id: 'todo-list',
    title: 'TodoList',
    category: 'Utility App',
    date: '2023',
    roles: ['Frontend Dev'],
    techStack: ['React', 'CSS3', 'JavaScript'],
    summary: '할 일을 간편하게 관리하는 투두 리스트',
    description: '설명',
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
    category: 'Feature Implementation',
    date: '2023',
    roles: ['Frontend Dev'],
    techStack: ['Vue.js', 'CSS3', 'JavaScript', 'Firebase'],
    summary: '회원가입 및 로그인 인증 기능 구현 데모',
    description: '설명',
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
    category: 'Interactive Toy',
    date: '2023',
    roles: ['Scripting', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: '타자 연습 서비스',
    description: '설명',
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
    category: 'Interactive Game',
    date: '2023',
    roles: ['Scripting', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: '테트리스를 모티브로 한 블록 쌓기 게임',
    description: '설명',
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
    category: 'Web Application',
    date: '2023',
    roles: ['UI Implementation', 'Scripting'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: '기본 재생 기능을 갖춘 웹 뮤직 플레이어',
    description: '설명',
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
    category: 'Creative Lab',
    date: '2025',
    roles: ['Motion & Interaction'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: 'CSS 3D 효과를 활용한 인터랙티브',
    description: '설명',
    thumbnail: '/images/works/portfolio/project-thumb-1.png',
    images: [''],
    url: {
      detail: '/project/css-3d-lab',
      site: 'https://demo.com',
      github: 'https://github.com/beencoder/',
    },
  },
];
