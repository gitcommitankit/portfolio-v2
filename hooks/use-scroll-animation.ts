import { useEffect, useRef, type RefObject } from 'react';

export interface UseScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
  animationClass?: string;
  once?: boolean;
}

type TargetRef = RefObject<Element | null> | null | undefined;

export function useScrollAnimation<T extends Element = HTMLDivElement>(
  options?: UseScrollAnimationOptions
): RefObject<T | null>;
export function useScrollAnimation(
  target: TargetRef | TargetRef[],
  options?: UseScrollAnimationOptions
): void;
export function useScrollAnimation<T extends Element = HTMLDivElement>(
  targetOrOptions?: TargetRef | TargetRef[] | UseScrollAnimationOptions,
  options?: UseScrollAnimationOptions
): RefObject<T | null> | void {
  const internalRef = useRef<T>(null);
  const animatedElementsRef = useRef<Set<Element>>(new Set());

  const isTarget =
    targetOrOptions &&
    (Array.isArray(targetOrOptions) || 'current' in targetOrOptions);

  const targetRefs: TargetRef[] = isTarget
    ? Array.isArray(targetOrOptions)
      ? targetOrOptions
      : [targetOrOptions]
    : [internalRef];

  const config =
    (isTarget
      ? options
      : (targetOrOptions as UseScrollAnimationOptions | undefined)) ?? {};

  const {
    threshold = 0.3,
    rootMargin = '0px',
    root = null,
    animationClass = 'animate-slide-in',
    once = true,
  } = config;

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          if (once) {
            animatedElementsRef.current.add(entry.target);
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    const observedElements: Element[] = [];

    targetRefs.forEach((ref) => {
      if (ref?.current) {
        if (once && animatedElementsRef.current.has(ref.current)) {
          return;
        }
        observer.observe(ref.current);
        observedElements.push(ref.current);
      }
    });

    return () => {
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, animationClass, once]);

  if (!isTarget) {
    return internalRef;
  }
}
