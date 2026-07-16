import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { LitenovaDocsFooter } from '@/components/standards/LitenovaDocsFooter';
import { JsonLd } from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { absoluteUrl, siteConfig } from '@/lib/site';
import {
  standardsSourcePath,
  standardsTag,
  standardsVersion,
} from '@/lib/standards';

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const description =
    page.data.description ??
    `${page.data.title} in Litenova Engineering Standards ${standardsTag}.`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: page.data.title,
          description,
          url: absoluteUrl(page.url),
          version: standardsVersion,
          isPartOf: {
            '@type': 'CollectionPage',
            name: 'Litenova Engineering Standards',
            url: absoluteUrl('/Standards'),
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        editOnGithub={{
          owner: 'Litenova-Solutions',
          repo: 'Engineering-Standards',
          sha: standardsTag,
          path: standardsSourcePath(page.path),
        }}
        footer={{ component: <LitenovaDocsFooter /> }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{description}</DocsDescription>
        <DocsBody>
          <MDX components={{ ...defaultMdxComponents }} />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return {};

  return createPageMetadata({
    title: `${page.data.title} | Engineering Standards`,
    description:
      page.data.description ??
      `${page.data.title} in Litenova Engineering Standards ${standardsTag}.`,
    path: page.url,
    type: 'article',
  });
}
