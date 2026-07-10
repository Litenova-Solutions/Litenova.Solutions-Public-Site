import { docs } from '@/.source/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/Standards',
  source: docs.toFumadocsSource(),
  slugs(file) {
    const filePath = file.path.replace(/\.(md|mdx)$/i, '');
    const parts = filePath.split('/');

    return parts.filter((v, i, arr) => {
      if (v.length === 0) return false;
      if (/^\(.+\)$/.test(v)) return false;
      if (
        i === arr.length - 1 &&
        (v === 'index' || v === 'README' || v === 'readme')
      ) {
        return false;
      }
      return true;
    });
  },
});
