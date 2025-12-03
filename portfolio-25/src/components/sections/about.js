import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';

import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/about.module.scss';
import SectionTitle from '@/components/ui/section-title';
import Modal from '@/components/ui/modal';
import { WavyButton, WavyLinkButton } from '../ui/wavy';
import AboutStacks from '@/components/ui/about-stacks';
import { removeScrollLock } from '@/lib/scroll-lock';

export default function AboutSection({ id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const layersRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const layersEl = layersRef.current;
    if (!layersEl) return;

    const layers = gsap.utils.toArray(`.${styles.layer}`, layersEl);
    gsap.set(layers, {});

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / innerHeight - 0.5) * 2;

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth) || -0.2;

        gsap.to(layer, {
          x: xRatio * 70 * depth,
          y: yRatio * 70 * depth,
          duration: 0.35,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Who I Am
        </SectionTitle>

        <div className={styles.contents}>
          <div className={styles['layer-area']} aria-hidden="true" ref={layersRef}>
            <div className={styles.layer} data-depth="-0.05">
              <img src="/images/hero/gold-light.png" alt="" aria-hidden="true" />
            </div>
            <div className={styles.layer} data-depth="-0.18">
              <img src="/images/hero/tree.png" alt="" aria-hidden="true" />
            </div>
          </div>

          <div className={styles['content-area']}>
            <h3 className={styles['about-title']}>
              Building meaningful interfaces,
              <span className={'text-block'}>one structure at a time.</span>
            </h3>
            <div className={styles['text-wrap']}>
              <p>안녕하세요!</p>
              <p>
                사용자의 시선에서 생각하고, 개발자의 손끝으로 구현하는 <strong>UX 중심 UI 개발자 다콩입니다.</strong>
              </p>
              <p className={'text-gap-md'}>화면의 한 줄 여백, 한 번의 스크롤에도 이유가 있어야 한다고 생각합니다.</p>
              <p>
                퍼블리셔로서 ‘어떻게 보여지는지’를 고민해왔다면, 이제는 ‘어떻게 사용되는지’에 더 집중하여 웹 표준과 웹
                접근성을 고려한 <strong>사용자 친화적인 UI</strong>를 구현합니다.
              </p>
              <p className={'text-gap-md'}>
                유지보수가 쉬운 구조, 재사용 가능한 마크업, 그리고 작은 인터랙션 하나까지도 의미 있게 설계하고자 합니다.
              </p>
              <p>
                <strong>저는 앞으로도 코드로 경험을 설계해 나갈 것입니다.</strong>
              </p>
            </div>

            <div className={common['btn-wrap']}>
              <WavyButton label="Read My Story" onClick={() => setModalIsOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        type="side"
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        ariaLabel="자기소개 상세"
        size="md"
        bodyClassName={styles['about-body']}>
        <h3 className={styles['about-title']}>
          Building meaningful interfaces,
          <span className={'text-block'}>one structure at a time.</span>
        </h3>

        <div className={styles['text-wrap']}>
          <p>처음 웹 퍼블리셔로 일했을 때는, 디자인 시안을 얼마나 정확하게 구현할 수 있을지에 집중했습니다.</p>
          <p>
            하지만 프로젝트를 반복하면서 점점 느낀 것은, 완성도 높은 웹은 단순히 ‘보이는 결과’에 그치지 않고, ‘어떻게
            사용되고 유지되는가’까지 고민해야 한다는 점이었습니다.
          </p>
          <p className={'text-gap-lg'}>
            이후부터는 언제나 <strong>사용자 경험을 우선</strong>으로 생각하며 마크업을 설계하고 있습니다.
          </p>
          <p>
            특히, 다른 개발자나 팀원이 코드를 이어받더라도 쉽게 이해할 수 있도록, 유지보수가 편리한 구조와 재사용 가능한
            컴포넌트 단위의 마크업을 구성하는 것을 중요하게 여깁니다.
          </p>
          <p className={'text-gap-lg'}>
            퍼블리셔로서의 시작은 Vue 기반 웹사이트의 마크업 작업이었고, 이후에는 React Native 환경에서 특정 기능의 UI를
            구현하며 화면 구성에 대한 이해를 넓힐 수 있었습니다.
          </p>
          <p>
            그 경험을 바탕으로, UX 개발팀에 소속되어 다양한 금융 서비스 프로젝트에 참여하게 되었고,
            디자이너·기획자·백엔드 개발자와의 협업 속에서 <strong>‘어떻게 보여질까’보다 ‘어떻게 사용될까’</strong>를
            고민하는 시선을 갖게 되었습니다.
          </p>
          <p className={'text-gap-lg'}>
            현재는 React와 Next.js 환경에서 동적인 UI를 구현하며, 퍼블리셔로서 강점인{' '}
            <strong>정확하고 세밀한 구조 설계</strong>에 인터랙션 요소를 더해 나가고 있습니다.
          </p>
          <p>
            제가 작성하는 코드는 단순히 기능을 구현하는 것을 넘어서, <strong>누군가의 경험을 만드는 도구</strong>이자,
            함께 일하는 동료들에게 <strong>쉽게 읽히는 언어</strong>가 되기를 바랍니다.
          </p>
          <p className={'text-gap-lg'}>
            앞으로도 UX 기반 퍼블리싱 역량을 바탕으로, 더 깊이 있는 인터랙티브 웹 경험을 설계할 수 있는 개발자로
            성장하고자 합니다.
          </p>
        </div>

        <AboutStacks />

        <div className={clsx(common['btn-wrap'])}>
          <WavyLinkButton
            href="#contact"
            label="Let’s Talk"
            onClick={() => {
              setModalIsOpen(false);
              // 스크롤락 해제하되, 이전 y로 되돌아가지 않게
              removeScrollLock({ restore: false });
            }}
          />
        </div>
      </Modal>
    </section>
  );
}
