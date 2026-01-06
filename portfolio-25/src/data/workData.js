export const workData = [
  {
    id: 'travelover',
    title: ['트래블로버'],
    category: 'Commerce Platform',
    date: '2025',
    roles: ['UI Implementation', 'Interactive Scripting'],
    techStack: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'Swiper'],
    summary: '보험 가입부터 결제까지의 전 과정을 아우르는 반응형 보험 커머스 플랫폼 구축',
    detail: {
      overview:
        '여행자 보험 가입부터 결제까지 이어지는 신규 커머스 플랫폼 구축 프로젝트입니다. 사용자(User) 사이드의 UI/UX 구축을 전담했습니다.',
      userRole: [
        '퍼블리싱 리딩: 프로젝트 중반부터 단독 퍼블리셔로서 신규 페이지 구축 및 고도화 작업을 100% 전담하여 성공적으로 완수',
        'UX 최적화 제안: 복잡한 주소 검색 프로세스를 분석하여 사용자 이탈을 줄이는 UX 흐름을 역제안하고 실제 UI에 반영',
        '스크립트 자체 구현: 개발 부재 상황에서 상품 선택, 담보 변경 등 핵심 비즈니스 로직에 필요한 UI 인터랙션을 자바스크립트로 직접 구현',
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
          'matchMedia를 활용해 디바이스 환경별로 이벤트 리스너를 분기 처리하고, 뷰포트 변화에 따라 셀 너비를 동적으로 계산하는 로직을 작성해 레이아웃 안정성 확보.',
      },
    },
    thumbnail: '/images/works/travelover/thumb.webp',
    images: [
      {
        type: 'overview',
        src: '/images/works/travelover/main.webp',
        alt: '트래블로버 메인 화면',
      },
      {
        type: 'overview',
        src: '/images/works/travelover/plan_univ.webp',
        alt: '트래블로버 플랜안내표 화면',
      },
      {
        type: 'overview',
        src: '/images/works/travelover/direct_step_3.webp',
        alt: '트래블로버 단계별 보험가입 화면',
      },
      {
        type: 'overview',
        src: '/images/works/travelover/direct_univ.webp',
        alt: '트래블로버 다이렉트 보험가입 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/travelover/main_mo.webp',
        alt: '트래블로버 메인 모바일 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/travelover/plan_univ_mo.webp',
        alt: '트래블로버 플랜안내표 모바일 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/travelover/direct_step_3_mo.webp',
        alt: '트래블로버 단계별 보험가입 모바일 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/travelover/direct_univ_mo.webp',
        alt: '트래블로버 다이렉트 보험가입 모바일 화면',
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
        '자기주도적 UI 설계: 모바일 시안이 없는 상황에서 PC 디자인 시스템을 분석하여 일관성 있는 모바일 UI/UX를 주도적으로 설계 및 구현',
        '성능 중심 인터랙션: 스크롤 위치에 따른 이미지 확장 효과 등 고난도 모션을 외부 라이브러리 없이 구현하여 사이트 로딩 속도 최적화',
      ],
      features: [
        {
          title: 'Scroll Interaction (Vanilla JS)',
          desc: '스크롤 위치에 따라 백그라운드 이미지가 확장되는 시각적 효과를 무거운 라이브러리 없이 순수 자바스크립트로 구현하여 로딩 속도 최적화.',
        },
        {
          title: 'Responsive Layout',
          desc: '미디어 쿼리를 활용하여 데스크탑부터 모바일 기기까지 매끄럽게 이어지는 반응형 레이아웃 구축.',
        },
      ],
      troubleshooting: {
        issue: '다량의 스크롤 이벤트 발생 시 브라우저 연산 부하로 인해 화면 끊김 현상 우려.',
        resolution:
          'requestAnimationFrame을 활용한 스로틀링(Throttling) 기법을 도입하여, 모니터 주사율에 최적화된 매끄러운 애니메이션 구현 및 최적화.',
      },
    },
    thumbnail: '/images/works/jss/thumb.webp',
    images: [
      {
        type: 'overview',
        src: '/images/works/jss/main.webp',
        alt: 'jss 메인 화면',
      },
      {
        type: 'overview',
        src: '/images/works/jss/company.webp',
        alt: 'jss 회사소개 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/jss/main_mo.webp',
        alt: 'jss 메인 모바일 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/jss/company_mo.webp',
        alt: 'jss 회사소개 모바일 화면',
      },
    ],
    url: {
      detail: '/work/jss-corporation',
      site: 'https://jsscorporation.kr',
    },
  },
  {
    id: 'busan-bank',
    title: ['BNK부산은행', "'모락'"],
    category: 'Mobile Web',
    date: '2024',
    roles: ['Mobile UI Dev', 'Data Visualization'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    summary: '은행 앱 내 결합 커뮤니티(모바일 웹) 구축 및 반복되는 게시판 UI 모듈화',
    detail: {
      overview:
        '은행 앱 내 결합 커뮤니티 서비스(모바일 웹) 구축 프로젝트입니다. 게시판 중심의 복잡한 UI 로직을 컴포넌트화하여 구현했습니다.',
      userRole: [
        '컴포넌트 시스템 구축: 게시판 목록, 상세, 작성 폼 등 반복되는 UI 패턴을 분석하여 재사용 가능한 컴포넌트 단위로 모듈화해 개발 효율 증대',
        '유연한 환경 적응: 금융권 내부망의 특수한 보안 정책과 형상 관리 환경(Sass/Git → CSS/SVN)에 신속히 대응하여 프로젝트 일정 준수',
      ],
      features: [
        {
          title: 'Dynamic Image Grid',
          desc: '첨부 이미지 개수(1~5개)에 따라 레이아웃이 자동으로 변경되는 CSS Grid 로직 구현.',
        },
        {
          title: 'User Mention System',
          desc: '댓글 작성 시 "@" 입력을 감지하여 닉네임 리스트를 호출하고, 선택 시 Input 값으로 자동 완성되는 UI 스크립트 작성.',
        },
      ],
      troubleshooting: {
        issue:
          '댓글 내 멘션("@") 기능 구현 시, 텍스트 입력 위치(Caret)를 정확히 추적하고 동적 리스트를 렌더링해야 하는 기술적 난이도 직면.',
        resolution:
          '정규표현식(RegEx)으로 트리거 문자를 감지하고, 선택된 데이터를 문자열 사이에 정교하게 삽입하는 커스텀 스크립트를 직접 작성하여 기능 구현.',
      },
    },
    thumbnail: '/images/works/bnk/thumb.webp',
    images: [
      {
        type: 'overview',
        src: '/images/works/bnk/board_pc.webp',
        alt: '부산은행 모락 PC 설문/투표 화면',
      },
      {
        type: 'overview',
        src: '/images/works/bnk/schedule.webp',
        alt: '부산은행 모락 PC 일정 설정 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/bnk/home.webp',
        alt: '부산은행 모락 홈 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/bnk/board.webp',
        alt: '부산은행 모락 게시물 상세 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/bnk/create.webp',
        alt: '부산은행 모락 클래스 개설 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/bnk/main.webp',
        alt: '부산은행 모락 클래스 메인 화면',
      },
    ],
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
    summary: '대용량 메시지 발송 시스템의 관리자 대시보드 구축 및 효율적인 데이터 시각화 구현',
    detail: {
      overview:
        '대용량 메시지 발송 시스템의 관리자(Admin) 및 대시보드 구축 프로젝트입니다. 데이터 시각화와 에디터 시스템 고도화를 수행했습니다.',
      userRole: [
        'UI 가이드라인 수립: 탭, 아코디언, 버튼 등 공통 UI 요소를 표준화하여 대규모 시스템 내 코드 일관성 및 유지보수성 확보',
        '금융 보안 준수: 외부 라이브러리 의존성을 최소화해야 하는 보안 정책에 맞춰 jQuery 없이 순수 ES6+ 문법만으로 관리자 UI 로직 구현',
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
        issue:
          '기존 WYSIWYG 에디터 사용 시 불필요한 태그 생성으로 인해 메일 클라이언트와의 호환성 문제 및 레이아웃 깨짐 발생.',
        resolution:
          '호환성이 뛰어난 Toast UI Editor로 전면 교체하고 스타일을 재정의. 서버 데이터와 일치하는 정제된 HTML 생성 구조를 확립하여 안정성 확보.',
      },
    },
    thumbnail: '/images/works/nh/thumb.webp',
    images: [
      {
        type: 'overview',
        src: '/images/works/nh/user_rcs.webp',
        alt: '농협 UMS 테스트 전송 사용자 화면',
      },
      {
        type: 'overview',
        src: '/images/works/nh/menu_setting.webp',
        alt: '농협 UMS 메뉴 권한 관리 관리자 화면',
      },
      {
        type: 'overview',
        src: '/images/works/nh/sms_send.webp',
        alt: '농협 UMS 업무지원 SMS 화면',
      },
    ],
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
    summary: '에듀테크 서비스의 웹(Vue.js) 리뉴얼 및 하이브리드 앱(React Native) 신규 구축',
    detail: {
      overview:
        '에듀테크 플랫폼의 웹(Vue.js) 리뉴얼 및 앱(React Native) 신규 구축 프로젝트입니다. UI 스타일링부터 프론트엔드 API 연동까지 수행했습니다.',
      userRole: [
        '크로스 플랫폼 스타일링: React Native 환경에서 iOS와 Android 기기별 특성을 고려한 앱 UI 스타일링 100% 전담',
        '프론트엔드 역량 확장: 퍼블리싱을 넘어 프론트엔드 개발 영역으로 확장하여, 게시판 CRUD 로직 및 REST API 연동 업무 직접 수행',
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
          '기기별로 상이한 노치(Notch) 및 홈 인디케이터 영역으로 인해 앱 콘텐츠가 가려지는 레이아웃 침범 현상 발생.',
        resolution:
          'react-native-safe-area-context를 활용해 유동적인 안전 영역을 계산하고, OS별 동적 패딩(Padding) 로직을 적용하여 사용자 경험(UX) 개선.',
      },
    },
    thumbnail: '/images/works/doazoom/thumb.webp',
    images: [
      {
        type: 'preview',
        src: '/images/works/doazoom/app_preview.webp',
        alt: '도아줌T 앱스토어 프리뷰',
      },
      {
        type: 'overview-mo',
        src: '/images/works/doazoom/app_1.webp',
        alt: '도아줌T 플래너 상세 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/doazoom/app_2.webp',
        alt: '도아줌T 플래너 피드백 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/doazoom/app_3.webp',
        alt: '도아줌T 질문하기 화면',
      },
      {
        type: 'overview-mo',
        src: '/images/works/doazoom/app_4.webp',
        alt: '도아줌T 플래너 등록 화면',
      },
    ],
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
    summary: 'Next.js 16과 MongoDB를 활용해 설계한 사용자 중심의 인터랙티브 포트폴리오',
    detail: {
      overview:
        '단순한 정보 전달을 넘어, UX 중심의 UI 설계 철학과 기술 역량을 보여주기 위해 제작했습니다. 최신 기술 스택인 Next.js 16과 React 19 환경에서 기획부터 배포까지 전 과정을 100% 수행했습니다.',
      userRole: [
        '최신 스택 도입: Next.js 16, React 19 등 최신 환경을 적극 활용하여, 성능 최적화와 개발 효율성을 동시에 고려한 아키텍처 설계',
        '인터랙션 설계: GSAP를 활용해 마우스 움직임에 따라 깊이감이 느껴지는 시각 효과를 구현, 사용자에게 생동감 있는 인터랙션 경험 제공',
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
        issue: '페이지 전환 시 애니메이션이 중복 실행되거나 메모리 자원을 계속 점유하는 현상 발생.',
        resolution:
          'useEffect 내에서 GSAP Context를 활용해 애니메이션 로직을 분리하고, 클린업 함수(Cleanup)로 이벤트 리스너를 확실히 제거하여 성능 저하 문제 해결.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_portfolio.webp',
    images: [''],
    url: {
      detail: '/project/portfolio',
      site: 'https://been-portfolio-2025.vercel.app',
      github: 'https://github.com/beencoder/portfolio',
    },
  },
  {
    id: 'foodie-hub',
    title: 'FoodieHub',
    subtitle: '나만의 요리법을 기록하고 공유하는 레시피 플랫폼',
    category: 'Community Platform',
    date: '2025',
    roles: ['Frontend Dev', 'Backend Logic', 'DB Architecture'],
    techStack: ['Next.js 16', 'React 19', 'Supabase (DB/Storage)', 'Server Actions'],
    summary:
      '데이터 소실 문제를 해결하기 위해 로컬 DB에서 클라우드 인프라(Supabase)로 아키텍처를 전면 전환한 리팩토링 프로젝트',
    detail: {
      overview:
        'Next.js 16의 최신 기능을 활용하여 개발된 레시피 공유 플랫폼입니다. 초기 SQLite 기반의 로컬 환경에서 발생할 수 있는 데이터 휘발성 문제를 해결하기 위해, Supabase를 활용한 데이터베이스 및 스토리지 통합 클라우드 아키텍처로 전면 리팩토링을 수행하며 실무적인 풀스택 역량을 강화했습니다.',
      userRole: [
        '인프라 고도화: Vercel 배포 환경의 데이터 휘발성 문제를 해결하고자 SQLite를 Supabase(PostgreSQL)로 교체하여 데이터 영속성 확보',
        '안전한 로직 설계: Server Actions를 적극 도입하여 클라이언트 노출 없이 보안이 강화된 서버 사이드 데이터 처리 로직 구축',
        '사용자 친화적 URL: 한글 제목의 인코딩 이슈와 중복 슬러그 문제를 해결하기 위해 고유 ID 조합형 Slug 생성 로직 구현',
      ],
      features: [
        {
          title: 'Cloud-Based Recipe Management',
          desc: 'Supabase Database와 연결된 비동기 CRUD를 통해 전 세계 어디서든 접근 가능한 레시피 작성, 조회, 삭제 기능 구현.',
        },
        {
          title: 'Hybrid Image Storage',
          desc: '이미지는 Supabase Storage에, 메타데이터는 Database에 저장하는 이원화 구조를 설계하고, 삭제 시 두 데이터가 동시에 제거되는 트랜잭션급 로직 구현.',
        },
        {
          title: 'Security & Validation',
          desc: 'bcrypt를 활용한 게시글 보호 비밀번호 해싱 저장 및 클라이언트-서버 이중 유효성 검사로 데이터 무결성 강화.',
        },
      ],
      troubleshooting: {
        issue:
          '서버리스 환경(Vercel)의 특징으로 인해 사용자가 등록한 레시피와 이미지가 주기적으로 초기화되는 문제 발생.',
        resolution:
          '데데이터베이스와 스토리지를 모두 클라우드(Supabase)로 이전하고, 기존의 동기식 코드를 비동기(Async/Await) 기반 API 통신 구조로 리팩토링하여 운영 안정성 확보.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_foodie.webp',
    images: [''],
    url: {
      detail: '/project/foodie-hub',
      site: 'https://foodiehub-rho.vercel.app',
      github: 'https://github.com/beencoder/next-project/tree/master/next-community-app',
    },
  },
  {
    id: 'todo-list',
    title: 'To do List',
    subtitle: '할 일을 간편하게 관리하는 투두 리스트 앱',
    category: 'Utility App',
    date: '2023 (Refactored 2025)',
    roles: ['Frontend Dev'],
    techStack: ['React 18', 'Sass', 'Axios', 'Moment.js', 'LocalStorage'],
    summary: 'React의 데이터 흐름을 깊이 있게 이해하고, 브라우저 저장소를 활용해 실용성을 더한 유틸리티 앱',
    detail: {
      overview:
        '단순한 ToDo 기능을 넘어, 컴포넌트의 재사용성과 사용자 경험(UX)을 고려하여 리팩토링된 프로젝트입니다. React의 핵심 훅(useState, useEffect, useCallback)을 적재적소에 배치하여 최적화된 렌더링 구조를 설계했으며, 브라우저 종료 후에도 데이터가 유지되는 영속성을 구현했습니다.',
      userRole: [
        '컴포넌트 설계: 컴포넌트 간 명확한 계층 구조를 설계하고, Props와 Callback을 통해 효율적인 단방향 데이터 흐름 제어',
        '데이터 유지: Web Storage API(LocalStorage)를 연동한 커스텀 Hook을 제작하여, 새로고침 후에도 사용자의 데이터가 보존되도록 구현',
        '외부 데이터 연동: 날씨 API 및 위치 정보를 연동하여 단순한 리스트를 넘어 일상에 유용한 부가 기능 제공',
      ],
      features: [
        {
          title: 'Full CRUD with Modal UI',
          desc: '단순 인라인 수정을 넘어 전용 모달(Modal) UI를 통해 할 일 내용을 정교하게 수정할 수 있는 기능을 구현하고, UX 향상을 위해 Auto-focus 로직 적용.',
        },
        {
          title: 'Real-time Time & Weather',
          desc: 'Moment.js와 setInterval을 활용하여 1초 단위로 갱신되는 실시간 시계를 구현하고, 비동기 통신(Axios)으로 실시간 기상 상태 데이터 바인딩.',
        },
        {
          title: 'Advanced Word-break Styling',
          desc: '긴 영문 텍스트나 URL 입력 시 레이아웃이 무너지는 현상을 방지하기 위해 CSS의 overflow-wrap 및 word-break 속성을 활용한 유연한 텍스트 렌더링 처리.',
        },
      ],
      troubleshooting: {
        issue: '할 일 목록의 ID 중복으로 인해 체크박스 선택이 꼬이거나 접근성 오류가 발생하는 현상 확인.',
        resolution:
          '생성 로직을 Date.now() 기반의 고유값으로 변경하고, Label과 Input의 관계를 유동적으로 매핑하여 웹 접근성 및 기능적 결함 해결.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_todo.webp',
    images: [''],
    url: {
      detail: '/project/todo-list',
      site: 'https://beencoder.github.io/to-do-list',
      github: 'https://github.com/beencoder/to-do-list',
    },
  },
  {
    id: 'auth-flow',
    title: 'Auth Flow',
    subtitle: 'Firebase & Pinia 기반의 인증 시스템',
    category: 'Auth System',
    date: '2023 (Refactored 2026)',
    roles: ['Frontend Dev', 'State Architecture'],
    techStack: ['Vue 3', 'Pinia', 'Firebase Auth', 'Vue Router'],
    summary: '파편화된 인증 로직을 Pinia와 Firebase로 통합하여 구축한 중앙 집중형 인증 아키텍처',
    detail: {
      overview:
        '기존 컴포넌트 단위로 파편화되어 있던 인증 로직을 전역 상태 관리 라이브러리인 Pinia와 Firebase Authentication을 결합하여 중앙 집중형 구조로 전면 리팩토링했습니다. 단순 로그인 구현을 넘어, 새로고침 시 인증 영속성 유지와 라우터 가드(Router Guard)를 통한 보안 고도화에 초점을 맞췄습니다.',
      userRole: [
        '상태 관리 최적화: Pinia 스토어를 통해 유저 정보와 로그인 상태를 전역에서 관리, 컴포넌트 간 의존성을 줄여 유지보수 효율 증대',
        '보안 라우팅: Navigation Guard를 설계하여 인증되지 않은 사용자의 접근을 차단하고, 권한에 따른 페이지 접근 제어 고도화',
        '세션 동기화: Firebase의 인증 리스너를 앱 초기화 단계에 배치하여, 페이지를 새로고침해도 로그인 상태가 매끄럽게 유지되도록 최적화',
      ],
      features: [
        {
          title: 'Centralized Auth Store',
          desc: '유저 프로필 정보(UID, DisplayName, Email 등)를 Reactive 객체로 관리하고, Computed 속성을 활용하여 로그인 여부를 실시간으로 반영하는 스토어 로직 구현.',
        },
        {
          title: 'Profile Update Logic',
          desc: 'Firebase updateProfile API 연동을 통해 가입 및 수정 시 닉네임을 동적으로 반영하고, 변경된 정보를 스토어에 즉시 동기화하여 UI 피드백 속도 개선.',
        },
        {
          title: 'Reliable Session Management',
          desc: '새로고침 시 Firebase SDK의 비동기 인증 세션을 기다린 후 Vue 앱이 마운트되도록 초기화 순서를 설계하여 로그인이 풀리는 사용자 경험 저하 문제 해결.',
        },
      ],
      troubleshooting: {
        issue:
          '컴포넌트마다 인증 체크 로직이 산재하여 코드 중복이 발생하고, 닉네임 변경 후 헤더 등 다른 컴포넌트의 정보가 즉시 갱신되지 않는 데이터 불일치 현상.',
        resolution:
          '기존의 파편화된 로직을 전역 Store의 Action으로 통합하고, Firebase 감시자(Observer)가 상태 변화를 감지할 때마다 새로운 유저 객체를 Store에 할당하는 방식으로 반응형(Reactivity) 이슈를 완벽히 해결.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_auth.webp',
    images: [''],
    url: {
      detail: '/project/auth-flow',
      site: 'https://auth-flow-blond.vercel.app',
      github: 'https://github.com/beencoder/vue-auth-flow',
    },
  },
  {
    id: 'typing-master',
    title: 'Typing Master',
    subtitle: '타자 연습 서비스',
    category: 'Interactive Game',
    date: '2023 (Refactored 2026)',
    roles: ['Frontend Dev', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Axios'],
    summary: 'Random Word API 연동 및 Axios를 활용한 실시간 타자 연습 게임',
    detail: {
      overview:
        '제한 시간 내에 주어진 영단어를 빠르게 입력하는 타자 연습 게임입니다. 고정된 데이터가 아닌 외부 API를 연동하여 매번 새로운 단어로 연습할 수 있도록 구현했습니다.',
      userRole: [
        '상태 관리 최적화: 전역 변수로 흩어져 있던 게임 데이터(점수, 시간, 단어 등)를 gameState 단일 객체로 통합하여 데이터 흐름을 한눈에 파악할 수 있도록 구조화',
        '비동기 흐름 제어: 기존의 복잡한 .then() 구조를 async/await로 리팩토링하여, 단어 수신과 게임 시작 사이의 동기적 흐름을 안전하게 보장',
        '코드 품질 향상: 중첩된 if문을 제거하는 Early Return 패턴을 적용하고, 선언적인 배열 메서드(filter, map)를 활용해 로직의 가독성과 유지보수성 확보',
      ],
      features: [
        {
          title: 'Centralized Game Engine',
          desc: '게임의 시작, 진행, 종료 상태를 단일 상태 객체 기반으로 제어하여 예측 가능한 데이터 플로우 구현.',
        },
        {
          title: 'Reliable API Interaction',
          desc: 'Random Word API 수신 완료 전까지 UI를 로딩 상태로 제어하고, try-catch를 통해 견고한 네트워크 통신 구현.',
        },
        {
          title: 'Adaptive Game Logic',
          desc: '클래스 제어와 DOM 조작을 분리하여 상태 변화에 따른 UI 피드백(버튼 상태, 카운트다운)을 직관적으로 제공.',
        },
      ],
      troubleshooting: {
        issue:
          '비즈니스 로직과 UI 업데이트 코드가 뒤섞여 있어, 작은 기능을 수정해도 예상치 못한 곳에서 버그가 발생하는 현상 확인.',
        resolution:
          'UI 렌더링 함수와 데이터 처리 함수를 분리하고, 데이터가 변하면 UI가 다시 그려지는 상태 기반 구조로 개편하여 해결.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_typing.webp',
    images: [''],
    url: {
      detail: '/project/typing-master',
      site: 'https://beencoder.github.io/javascript-project/typing-game2',
      github: 'https://github.com/beencoder/javascript-project/tree/main/typing-game2',
    },
  },
  {
    id: 'mini-blocks',
    title: 'Mini Blocks',
    subtitle: '테트리스를 모티브로 한 블록 쌓기 게임',
    category: 'Puzzle Game',
    date: '2023 (Refactored 2026)',
    roles: ['Frontend Dev', 'Game Logic'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: 'Canvas API 도움 없이 오직 순수 DOM 조작과 2차원 배열 알고리즘만으로 구축한 블록 쌓기 퍼즐 게임',
    detail: {
      overview:
        'Canvas API 없이 오직 순수 DOM 조작과 자바스크립트 로직만으로 구현한 테트리스 게임입니다. 초기 개발 버전의 복잡한 스파게티 코드를 상태 기반의 객체 지향적 구조로 리팩토링하여 유지보수성을 높였습니다.',
      userRole: [
        '그리드 엔진 설계: 2차원 좌표(x, y) 시스템을 구축하고 이를 실제 DOM 요소와 매핑하여 블록의 이동, 회전, 충돌을 정밀하게 제어하는 게임 엔진 설계',
        '알고리즘 최적화: every, some 등 고차 함수를 활용해 라인 삭제 및 충돌 감지 로직의 연산 효율을 높이고 가독성 있는 코드로 구현',
        '확장성 있는 입력 로직: 중첩된 switch-case문을 Actions Object 매핑 방식으로 전환하여 새로운 키보드 인터랙션 추가가 용이한 구조로 리팩토링',
      ],
      features: [
        {
          title: 'Collision Detection',
          desc: '블록 이동 시 벽이나 기배치된 블록과의 충돌을 실시간으로 감지하고 위치를 보정하는 안정적인 엔진 로직 구현.',
        },
        {
          title: 'Line Clear & Score System',
          desc: '특정 행이 가득 찼을 때 해당 행을 제거하고 상단 블록들을 하강시키는 복합적인 DOM 조작 및 점수 가중치 시스템 구축.',
        },
        {
          title: 'Modular Direction Control',
          desc: '나머지 연산자를 이용해 4개 방향의 회전 상태를 순환시키는 로직으로 복잡한 분기 조건문 제거.',
        },
      ],
      troubleshooting: {
        issue:
          '블록을 빠르게 조작하거나 연타할 때, 이전 렌더링 잔상이 남거나 실제 데이터와 화면상의 블록 위치가 어긋나는 동기화 오류 발생.',
        resolution:
          '렌더링 주기마다 클래스를 일괄 초기화하는 로직을 강화하고, 실제 좌표 데이터(gameState)를 뷰 렌더링의 절대적인 기준으로 삼아 데이터-뷰 일치성 확보.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_blocks.webp',
    images: [''],
    url: {
      detail: '/project/mini-blocks',
      site: 'https://beencoder.github.io/javascript-project/tetris-game',
      github: 'https://github.com/beencoder/javascript-project/tree/main/tetris-game',
    },
  },
  {
    id: 'play-tune',
    title: 'PlayTune',
    subtitle: '기본 재생 기능을 갖춘 웹 뮤직 플레이어',
    category: 'Web Application',
    date: '2023 (Refactored 2026)',
    roles: ['Frontend Dev', 'UI Implementation'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary:
      'HTML5 Audio API를 기반으로 재생 로직을 모듈화하고, 대규모 리스트에서도 성능 저하가 없는 효율적인 이벤트 구조를 적용한 음악 앱',
    detail: {
      overview:
        '단순한 음악 재생을 넘어, 실제 스트리밍 서비스와 유사한 사용자 경험을 제공하기 위해 제작된 뮤직 플레이어입니다. 오디오 객체의 복잡한 상태 변화를 효율적으로 관리하고, 대규모 플레이리스트에서도 성능 저하가 없는 구조로 리팩토링을 진행했습니다.',
      userRole: [
        '메모리 최적화: 수많은 곡 아이템에 각각 리스너를 다는 대신, 부모 요소에 이벤트를 위임하여 메모리 자원 소모 최소화',
        '오디오 로직 모듈화: 재생(Play), 일시정지(Pause), 탐색(Seek) 등 핵심 기능을 별도 모듈로 분리하여 브라우저 독립적인 일관된 조작 환경 구축',
        '상태 매핑 설계: 반복 재생, 셔플 등 복잡한 재생 모드를 객체 리터럴로 관리하여 조건문의 복잡도를 낮추고 기능 확장성 확보',
      ],
      features: [
        {
          title: 'Custom Audio Controller',
          desc: 'HTML5 Audio API의 play, pause, seek 로직을 커스텀 UI와 바인딩하여 브라우저 독립적인 일관된 조작 환경 구현.',
        },
        {
          title: 'Smart Playlist & Sync',
          desc: '플레이리스트 렌더링 시 각 곡의 메타데이터를 비동기로 병렬 로드하고, 현재 재생 곡 상태를 실시간으로 동기화.',
        },
        {
          title: 'Advanced Playback Modes',
          desc: '셔플 알고리즘과 플레이리스트 자동 전환 기능을 구현하여 실제 스트리밍 서비스와 유사한 사용자 경험 제공.',
        },
      ],
      troubleshooting: {
        issue:
          '음원 데이터가 완전히 로드되기 전에 UI에 접근하여 시간 표시가 NaN으로 뜨거나, 재생 바 이동 시 끊김 현상이 발생하는 UX 저하 문제.',
        resolution:
          'loadeddata 이벤트를 통해 데이터 바인딩 시점을 안전하게 제어하고, 연산 비용을 줄인 시간 포맷팅 유틸리티 함수를 제작하여 부드러운 UI 업데이트 구현.',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_tune.webp',
    images: [''],
    url: {
      detail: '/project/play-tune',
      site: 'https://beencoder.github.io/javascript-project/music-player',
      github: 'https://github.com/beencoder/javascript-project/tree/main/music-player',
    },
  },
  {
    id: 'css-3d-lab',
    title: 'CSS 3D Lab',
    subtitle: 'CSS 3D 효과를 활용한 인터랙티브',
    category: 'Creative Experiment',
    date: '2025',
    roles: ['Motion & Interaction Design'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    summary: '라이브러리 도움 없이 순수 CSS 속성만으로 구현한 입체감 있는 3D 인터랙션 UI',
    detail: {
      overview:
        '웹에서의 3D 공간감과 인터랙션 가능성을 실험하기 위해 제작했습니다. 자바스크립트 라이브러리 없이 순수 CSS 속성만으로 입체 회전을 구현했습니다.',
      userRole: [
        '3D 공간 구현: perspective와 preserve-3d 속성에 대한 깊은 이해를 바탕으로 웹 페이지 내 입체적인 가상 공간 구축',
        '디테일한 UX: 마우스 호버 시 애니메이션 제어, 비디오 레이어 배치 등을 통해 사용자 인터랙션에 반응하는 몰입감 있는 UI 구현',
      ],
      features: [
        {
          title: 'Preserve-3D Interaction',
          desc: '부모-자식 간의 3D 계층 구조를 유지하여, 전체 공간이 회전하는 중에도 개별 패널이 마우스 호버에 독립적으로 반응하도록 구현.',
        },
        {
          title: 'Multi-Media Integration',
          desc: '배경 및 개별 페이스에 루프 비디오를 배치하고, CSS filter와 opacity 조절을 통해 미래지향적인 사이버펑크 스타일의 UI 톤앤매너 구축.',
        },
        {
          title: 'Reflection & Visual Effects',
          desc: '가상 그림자 및 반사 효과(Reflection)를 CSS로 모사하여 평면적인 웹 페이지에 실제 오브젝트와 같은 입체감 부여.',
        },
      ],
      troubleshooting: {
        issue: '3D 회전 중 요소들이 겹치거나 뒷면이 투과되어 시각적인 노이즈가 발생하는 현상.',
        resolution:
          'backface-visibility: hidden으로 불필요한 렌더링을 차단하고, z-index와 transform 속성을 정교하게 조정하여 시각적 완성도 향상',
      },
    },
    thumbnail: '/images/works/projects/project_thumb_3d.webp',
    images: [''],
    url: {
      detail: '/project/css-3d-lab',
      site: 'https://beencoder.github.io/javascript-project/panorama-interactive',
      github: 'https://github.com/beencoder/javascript-project/tree/main/panorama-interactive',
    },
  },
];
