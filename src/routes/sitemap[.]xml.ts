import { createFileRoute } from '@tanstack/react-router'
import { TREATMENTS } from '../lib/treatments'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin
        const today = new Date().toISOString().split('T')[0]
        const paths = [
          '/',
          '/praxis-und-expertise',
          '/aesthetische-medizin',
          '/apparative-aesthetische-medizin',
          '/alternative-medizin',
          '/individuelle-infusionstherapien',
          '/preisliste',
          '/kontakt',
          ...TREATMENTS.map((t) => '/' + t.slug),
        ]
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...paths.map((p) =>
            [
              '  <url>',
              '    <loc>' + origin + p + '</loc>',
              '    <lastmod>' + today + '</lastmod>',
              '    <changefreq>monthly</changefreq>',
              '    <priority>' + (p === '/' ? '1.0' : '0.7') + '</priority>',
              '  </url>',
            ].join('\n'),
          ),
          '</urlset>',
        ].join('\n')
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
