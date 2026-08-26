import { describe, expect, it } from 'vitest';
import standardsManifest from '@/standards/standards.manifest.json';
import { projects } from '@/lib/projects';
import { absoluteUrl, marketingRoutes, siteConfig } from '@/lib/site';
import { standardsTag, standardsVersion } from '@/lib/standards';

describe('site configuration', () => {
  it('uses the canonical www origin', () => {
    expect(siteConfig.url).toBe('https://www.litenova.solutions');
    expect(absoluteUrl('/Standards')).toBe(
      'https://www.litenova.solutions/Standards',
    );
  });

  it('publishes one company page and two reference pages', () => {
    expect(marketingRoutes).toEqual(['/', '/privacy', '/accessibility']);
  });

  it('pins the released standards baseline', () => {
    // The manifest inside the submodule is the authority. Asserting against it
    // proves the site reads the pinned release rather than a hardcoded string,
    // and the assertion survives the next standards bump.
    expect(standardsVersion).toBe(standardsManifest.version);
    expect(standardsVersion).toMatch(/^\d+\.\d+\.\d+$/);
    expect(standardsTag).toBe(`v${standardsManifest.version}`);
  });

  it('uses secure public project URLs', () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);
    for (const project of projects) {
      const urls = [project.website, project.repository].filter(
        (url): url is string => typeof url === 'string',
      );
      for (const url of urls) {
        expect(new URL(url).protocol).toBe('https:');
      }
    }
  });

  it('publishes verified software license labels', () => {
    expect(
      projects.map(({ name, category, license }) => ({
        name,
        category,
        license,
      })),
    ).toEqual([
      {
        name: 'Entro.to',
        category: 'Commercial Product',
        license: undefined,
      },
      { name: 'Fuse', category: 'Open Source', license: 'Apache-2.0' },
      { name: 'LiteBus', category: 'Open Source', license: 'MIT' },
      {
        name: 'LitePress',
        category: 'Source Available',
        license: 'PolyForm Noncommercial 1.0.0',
      },
    ]);
  });
});
