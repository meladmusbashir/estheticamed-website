import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function CtaPill({ to, children }: { to: LinkProps["to"]; children: ReactNode }) {
  return (
    <Link to={to} className="em-cta-pill">
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function CtaLine({ to, hash, children }: { to: LinkProps["to"]; hash?: string; children: ReactNode }) {
  return (
    <Link to={to} hash={hash} className="em-cta-line">
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function CtaPhone({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="em-cta-phone">
      {children}
    </a>
  );
}

export function CtaFrame({ to, children }: { to: LinkProps["to"]; children: ReactNode }) {
  return (
    <Link to={to} className="em-cta-frame">
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}
