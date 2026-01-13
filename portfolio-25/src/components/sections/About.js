import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import common from '@/styles/pages/home/common.module.scss';
import styles from '@/styles/pages/home/about.module.scss';
import SectionTitle from '../ui/SectionTitle';
import Modal from '@/components/ui/modal/index';
import { WavyButton, WavyLinkButton } from '../ui/wavy';
import AboutStacks from '@/components/ui/about/AboutStacks';
import { removeScrollLock } from '@/lib/scrollLock';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_LAYERS = [
  { src: '/images/about/bg_1.png', depth: -0.05 },
  { src: '/images/about/bg_2.png', depth: -0.15 },
  { src: '/images/about/bg_3.png', depth: -0.25 },
  { src: '/images/about/bg_4.png', depth: -0.4 },
];

export default function AboutSection({ id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const layersRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray(`.${styles.layer}`, layersRef.current);
      const mouseSetters = layers.map((layer) => {
        const inner = layer.querySelector(`.${styles['img-inner']}`);
        const depth = Number(layer.dataset.depth) || -0.2;
        return {
          x: gsap.quickTo(inner, 'x', { duration: 0.8, ease: 'power3.out' }),
          y: gsap.quickTo(inner, 'y', { duration: 0.8, ease: 'power3.out' }),
          depth,
        };
      });

      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const xRatio = (e.clientX / innerWidth - 0.5) * 2;
        const yRatio = (e.clientY / innerHeight - 0.5) * 2;
        mouseSetters.forEach((s) => {
          s.x(xRatio * 50 * s.depth);
          s.y(yRatio * 50 * s.depth);
        });
      };
      window.addEventListener('mousemove', handleMouseMove);

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth);
        gsap.to(layer, {
          y: depth * 400,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        contentRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="section" aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className="container">
        <SectionTitle id={`${id}-title`} className={common['section-title']}>
          Who I Am
        </SectionTitle>

        <div className={styles.contents}>
          <div ref={layersRef} className={styles['layer-area']} aria-hidden="true">
            {ABOUT_LAYERS.map((layer, idx) => (
              <div key={`layer-${idx}`} className={styles.layer} data-depth={layer.depth}>
                <div className={styles['img-inner']}>
                  <Image
                    src={layer.src}
                    alt=""
                    width="900"
                    height="900"
                    sizes="(max-width: 1080px) 100vw, (max-width: 1440px) 46.875vw, 46.875vw"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles['content-area']} ref={contentRef}>
            <h2 className={styles['about-title']}>
              Designed for <strong>Users, </strong>
              <span className="text-block">
                Structured for <strong>Developers.</strong>
              </span>
            </h2>
            <div className={styles['text-wrap']}>
              <p>안녕하세요!</p>
              <p>
                사용자의 시선에서 생각하고, 코드로 구현하는 <strong>UX 중심 UI 개발자 김다빈입니다.</strong>
              </p>
              <p className="text-gap-md">
                화면의 한 줄 여백과 한 번의 스크롤에도 사용자의 흐름과 목적이 담겨야 한다고 생각합니다.
              </p>
              <p>
                ‘어떻게 보이는지’를 넘어 ‘어떻게 사용되고, 어떻게 유지되는지’를 고민하며 웹 표준과 접근성을 고려한{' '}
                <strong>사용자 친화적인 UI</strong>를 구현합니다.
              </p>
              <p className="text-gap-md">
                유지보수가 쉬운 구조와 재사용 가능한 마크업, 그리고 작은 인터랙션 하나까지도 의미 있게 설계합니다.
              </p>
              <p>
                <strong>저는 코드로 경험을 설계하는 개발자로 성장하고 있습니다.</strong>
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
        <h1 className={styles['about-title']}>
          Designed for <strong>Users, </strong>
          <span className="text-block">
            Structured for <strong>Developers.</strong>
          </span>
        </h1>

        <div className={styles['text-wrap']}>
          <p>
            웹 퍼블리셔로 처음 일을 시작했을 때는 디자인 시안을 얼마나 정확하게 구현할 수 있는지가 가장 중요한
            기준이었습니다.
          </p>
          <p className="text-gap-lg">
            하지만 프로젝트를 반복하며 완성도 높은 웹이란 단순히 ‘보이는 결과’가 아니라{' '}
            <strong>‘어떻게 사용되고, 어떻게 유지되는가’</strong>까지 포함한다는 것을 깨닫게 되었습니다.
          </p>
          <p className="text-gap-lg">
            이후부터는 언제나 <strong>사용자 경험</strong>을 기준으로 마크업을 설계하고, 다른 개발자나 팀원이 코드를
            이어받더라도 <strong>쉽게 이해할 수 있는 구조</strong>를 만드는 것을 가장 중요하게 생각해 왔습니다.
          </p>
          <p className="text-gap-lg">
            퍼블리셔로서의 시작은 Vue기반 웹사이트의 마크업 작업이었고, 이후 React Native 환경에서 <strong>UI</strong>를
            구현하며 플랫폼에 따라 달라지는 사용자 경험을 고려하는 시야를 넓힐 수 있었습니다.
          </p>
          <p className="text-gap-lg">
            제가 작성하는 코드는 단순히 기능을 구현하는 것을 넘어서, <strong>누군가의 경험을 만드는 도구</strong>이자,
            함께 일하는 동료들에게 <strong>쉽게 읽히는 언어</strong>가 되기를 바랍니다.
          </p>
        </div>

        <AboutStacks />

        <div className={common['btn-wrap']}>
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
