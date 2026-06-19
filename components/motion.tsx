"use client";

import Link from "next/link";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function MotionGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.62, ease } },
      }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.24, ease } }}
    >
      {children}
    </motion.article>
  );
}

export function MotionLink({
  href,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  const reduce = useReducedMotion();
  const motionProps: HTMLMotionProps<"span"> = {
    className: "motion-action",
    whileHover: reduce ? undefined : { scale: 1.03 },
    whileTap: reduce ? undefined : { scale: 0.98 },
    transition: { duration: 0.22, ease },
  };

  if (href.startsWith("/")) {
    return (
      <motion.span {...motionProps}>
        <Link className={className} href={href}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span {...motionProps}>
      <a className={className} href={href} target={target} rel={rel}>
        {children}
      </a>
    </motion.span>
  );
}
