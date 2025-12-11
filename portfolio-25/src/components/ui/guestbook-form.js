import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

import styles from '@/styles/pages/guestbook/guestbook-form.module.scss';
import { WavyButton } from '@/components/ui/wavy';
import { hashPassword } from '@/lib/utils';

export default function GuestbookForm({ onSubmit }) {
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0 });
  const [formValues, setFormValues] = useState({
    author: '',
    content: '',
    password: '',
    captcha: '',
    website: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentRef = useRef(null);
  const passwordRef = useRef(null);
  const captchaRef = useRef(null);

  const isAuthorNameFull = formValues.author.length > 20;
  const isContentFull = formValues.content.length > 300;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: name === 'password' ? value.replace(/\D/g, '').slice(0, 4) : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // 랜덤 문제 생성
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptchaQuestion({ num1: n1, num2: n2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validate = () => {
    const newErrors = {};
    const correctAnswer = captchaQuestion.num1 + captchaQuestion.num2;

    if (formValues.author.length > 20) {
      newErrors.author = '닉네임은 20자 이내로 입력해 주세요.';
    }

    if (!formValues.content.trim()) newErrors.content = '내용을 입력해 주세요.';

    if (!formValues.password || formValues.password.length < 4) newErrors.password = '비밀번호 4자리를 입력해 주세요.';

    if (formValues.captcha.trim() !== String(correctAnswer)) {
      newErrors.captcha = '정답이 아닙니다.';
    }

    if (formValues.website.trim()) newErrors.global = '봇 접근이 감지되었습니다.';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // 첫 번째 에러 필드로 포커스 이동
      if (validationErrors.content) contentRef.current?.focus();
      else if (validationErrors.password) passwordRef.current?.focus();
      else if (validationErrors.captcha) captchaRef.current?.focus();

      return;
    }

    setIsSubmitting(true);

    try {
      const hashedPassword = await hashPassword(formValues.password);

      // 부모 컴포넌트로 데이터 전달
      await onSubmit({
        author: formValues.author,
        content: formValues.content,
        password: hashedPassword,
      });

      // 성공 시 폼 초기화
      setFormValues({ author: '', content: '', password: '', captcha: '', website: '' });
      generateCaptcha();
    } catch (error) {
      console.error(error);
      setErrors({ global: '등록 중 오류가 발생했습니다.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="방명록 작성 폼">
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="gb-author" className={styles.label}>
            Name
          </label>
          <input
            id="gb-author"
            name="author"
            type="text"
            className={clsx(styles.input, {
              [styles.invalid]: errors.author || isAuthorNameFull,
            })}
            placeholder="익명"
            maxLength={20}
            value={formValues.author}
            onChange={handleChange}
            autoComplete="nickname"
            aria-invalid={!!errors.author || isAuthorNameFull}
            aria-describedby={errors.author || isAuthorNameFull ? 'gb-author-err' : undefined}
          />
          {(errors.author || isAuthorNameFull) && (
            <p id="gb-author-err" className={styles.error} role="alert">
              {errors.author || '닉네임은 20자 이내로 입력해 주세요.'}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles['label-row']}>
          <label htmlFor="gb-content" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <span className={clsx(styles.count, { [styles.full]: isContentFull })}>
            <em>{formValues.content.length}</em> / 300
          </span>
        </div>
        <textarea
          id="gb-content"
          ref={contentRef}
          name="content"
          maxLength={300}
          className={clsx(styles.textarea, {
            [styles.invalid]: errors.content || isContentFull,
          })}
          placeholder="따뜻한 한마디를 남겨주세요."
          rows={3}
          value={formValues.content}
          onChange={handleChange}
          aria-invalid={!!errors.content}
          aria-describedby={errors.content ? 'gb-content-err' : undefined}
          required
        />
        {(errors.content || isContentFull) && (
          <p id="gb-content-err" className={styles.error} role="alert">
            {errors.content ? errors.content : '최대 글자수에 도달했습니다.'}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="gb-password" className={styles.label}>
            PIN (4 digits) <span className={styles.required}>*</span>
          </label>
          <input
            id="gb-password"
            ref={passwordRef}
            name="password"
            type="password"
            inputMode="numeric"
            maxLength={4}
            className={clsx(styles.input, { [styles.invalid]: errors.password })}
            value={formValues.password}
            onChange={handleChange}
            placeholder="삭제 시 필요한 숫자 4자리 입력"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'gb-pw-err' : undefined}
          />
          {errors.password && (
            <p id="gb-pw-err" className={styles.error} role="alert">
              {errors.password}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="gb-captcha" className={styles.label}>
            Verification <span className={styles.required}>*</span>
          </label>
          <div className={styles['captcha-group']}>
            <span className={styles.problem}>
              {captchaQuestion.num1} + {captchaQuestion.num2} = ?
            </span>
            <input
              id="gb-captcha"
              ref={captchaRef}
              name="captcha"
              type="number"
              className={clsx(styles.input, styles.captcha, { [styles.invalid]: errors.captcha })}
              value={formValues.captcha}
              onChange={handleChange}
              placeholder="정답 입력"
              aria-invalid={!!errors.captcha}
              aria-describedby={errors.captcha ? 'gb-cap-err' : undefined}
            />
            {errors.captcha && (
              <p id="gb-cap-err" className={styles.error} role="alert">
                {errors.captcha}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="gb-website">Website</label>
        <input id="gb-website" name="website" tabIndex={-1} value={formValues.website} onChange={handleChange} />
      </div>

      <div className={styles.actions}>
        <WavyButton type="submit" label={isSubmitting ? 'Marking...' : 'Make Your Mark'} disabled={isSubmitting} />
      </div>
    </form>
  );
}
