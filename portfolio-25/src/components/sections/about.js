import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/about.module.scss';
import SectionTitle from '@/components/ui/section-title';

export default function AboutSection({ id }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Who I Am
        </SectionTitle>

        <div className={styles.contents}>
          <div className={styles['layer-area']}>
            <div className={styles.layer} data-depth="-0.05">
              <img src="/images/hero/gold-light.png" alt="" aria-hidden="true" />
            </div>
            <div className={styles.layer} data-depth="-0.12">
              <img src="/images/hero/tree.png" alt="" aria-hidden="true" />
            </div>
          </div>

          <div className={styles['text-area']}>
            <h3 className={styles['about-title']}>
              Building meaningful interfaces,
              <span className={common['text-block']}>one structure at a time.</span>
            </h3>
            <div className={styles['text-wrap']}>
              <p>안녕하세요!</p>
              <p>사용자의 시선에서 생각하고, 개발자의 손끝으로 구현하는 UX 중심 UI 개발자 다콩입니다.</p>
              <p class={common['text-gap-md']}>
                화면의 한 줄 여백, 한 번의 스크롤에도 이유가 있어야 한다고 생각합니다.
              </p>
              <p>
                퍼블리셔로서 ‘어떻게 보여지는지’를 고민해왔다면, 이제는 ‘어떻게 사용되는지’에 더 집중하여 웹 표준과 웹
                접근성을 고려한 사용자 친화적인 UI를 구현합니다.
              </p>
              <p>
                유지보수가 쉬운 구조, 재사용 가능한 마크업, 그리고 작은 인터랙션 하나까지도 의미 있게 설계하고자 합니다.
              </p>
              <p class={common['text-gap-md']}>저는 오늘도 코드로 경험을 설계합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
