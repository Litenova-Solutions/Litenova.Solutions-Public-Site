export interface Project {
  slug: 'entro' | 'fuse' | 'litebus' | 'litepress';
  name: string;
  category: 'Commercial Product' | 'Open Source' | 'Source Available';
  status: string;
  license?: string;
  description: string;
  website?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    slug: 'entro',
    name: 'Entro.to',
    category: 'Commercial Product',
    status: 'In Development',
    description:
      'Event ticketing for organizers that need high throughput and low operational overhead.',
    website: 'https://entro.to',
  },
  {
    slug: 'fuse',
    name: 'Fuse',
    category: 'Open Source',
    status: 'Available',
    license: 'Apache-2.0',
    description:
      'A .NET-native context compiler that prepares structured, token-efficient codebase context for AI coding agents.',
    website: 'https://www.fuse.codes',
    repository: 'https://github.com/Litenova-Solutions/Fuse',
  },
  {
    slug: 'litebus',
    name: 'LiteBus',
    category: 'Open Source',
    status: 'Available',
    license: 'MIT',
    description:
      'An in-process .NET mediator for command and query separation with focused modules and source-generated dispatch.',
    repository: 'https://github.com/litenova/LiteBus',
  },
  {
    slug: 'litepress',
    name: 'LitePress',
    category: 'Source Available',
    status: 'In Development',
    license: 'PolyForm Noncommercial 1.0.0',
    description:
      'A publishing application with a public site, an administrative interface, and an ASP.NET Core API.',
    repository: 'https://github.com/Litenova-Solutions/LitePress',
  },
];
