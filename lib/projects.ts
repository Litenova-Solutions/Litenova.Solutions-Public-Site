export interface Project {
  name: string;
  category: 'Product' | 'Open Source';
  status: string;
  description: string;
  website?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    name: 'Entro.to',
    category: 'Product',
    status: 'In Development',
    description:
      'Event ticketing for organizers that need high throughput and low operational overhead.',
    website: 'https://entro.to',
  },
  {
    name: 'Fuse',
    category: 'Open Source',
    status: 'Available',
    description:
      'A .NET-native context compiler that prepares structured, token-efficient codebase context for AI coding agents.',
    website: 'https://www.fuse.codes',
    repository: 'https://github.com/Litenova-Solutions/Fuse',
  },
  {
    name: 'LiteBus',
    category: 'Open Source',
    status: 'Available',
    description:
      'An in-process .NET mediator for command and query separation with focused modules and source-generated dispatch.',
    repository: 'https://github.com/litenova/LiteBus',
  },
  {
    name: 'LitePress',
    category: 'Open Source',
    status: 'In Development',
    description:
      'A publishing application with a public site, an administrative interface, and an ASP.NET Core API.',
    repository: 'https://github.com/Litenova-Solutions/LitePress',
  },
];
