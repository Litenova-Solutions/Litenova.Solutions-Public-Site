import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody } from 'fumadocs-ui/page';
import SplashBody from '@/standards-splash/body.md';

export function StandardsHomeBody() {
  const MDX = SplashBody;

  return (
    <div
      id="standards-content"
      className="standards-prose mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </div>
  );
}
