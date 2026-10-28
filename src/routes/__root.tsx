import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import appMetaJson from "../app-meta.json";
import { SiteHeader } from "../components/site/header";
import { SiteFooter } from "../components/site/footer";

const DEFAULT_TITLE = "EstheticaMed Amirzada | Ästhetische & Alternative Medizin Hamburg";
const DEFAULT_DESCRIPTION =
  "Privatpraxis für Ästhetische und Alternative Medizin in Hamburg Niendorf. Natürliche Ergebnisse, ganzheitliche Konzepte, Termine nach Vereinbarung.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES: string[] = [];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith("." + zone),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "EstheticaMed Amirzada" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
    ],
  };
}

function NotFoundComponent() {
  return (
    <main className="em-body flex min-h-dvh flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="em-eyebrow">404</p>
      <h1 className="em-serif mt-4 text-4xl md:text-5xl">Diese Seite gibt es nicht.</h1>
      <p className="mt-4 max-w-md text-[var(--em-grey)]">
        Der Inhalt wurde verschoben oder existiert nicht mehr. Über die Startseite finden Sie
        alle Behandlungen und Kontaktdaten.
      </p>
      <Link to="/" className="em-cta-line mt-8">
        <span>Zur Startseite</span>
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <main className="em-body flex min-h-dvh flex-col items-center justify-center px-6 pt-24 text-center">
      <h1 className="em-serif text-4xl md:text-5xl">Diese Seite konnte nicht geladen werden.</h1>
      <p className="mt-4 max-w-md text-[var(--em-grey)]">
        Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="em-cta-pill"
        >
          <span>Erneut versuchen</span>
        </button>
        <a href="/" className="em-cta-line">
          <span>Zur Startseite</span>
        </a>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de" style={{ colorScheme: "light" }}>
      <head>
        <HeadContent />
      </head>
      <body className="em-body">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}
