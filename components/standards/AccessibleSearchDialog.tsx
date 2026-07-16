'use client';

import { useMemo } from 'react';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { oramaStaticClient } from 'fumadocs-core/search/client/orama-static';
import type { DefaultSearchDialogProps } from 'fumadocs-ui/components/dialog/search-default';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
  SearchDialogOverlay,
} from 'fumadocs-ui/components/dialog/search';

const resultsId = 'standards-search-results';

export function AccessibleSearchDialog(props: DefaultSearchDialogProps) {
  const api = props.api ?? '/Standards/api/search';
  const client = useMemo(() => oramaStaticClient({ from: api }), [api]);
  const { search, setSearch, query } = useDocsSearch({
    client,
    delayMs: props.delayMs,
  });
  const defaultItems = useMemo(() => {
    if (!props.links?.length) return null;

    return props.links.map(([name, url]) => ({
      type: 'page' as const,
      id: name,
      content: name,
      url,
    }));
  }, [props.links]);

  return (
    <SearchDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput
            role="combobox"
            aria-autocomplete="list"
            aria-controls={resultsId}
            aria-expanded="true"
          />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          id={resultsId}
          role="listbox"
          aria-label="Search results"
          items={query.data !== 'empty' ? query.data : defaultItems}
          Item={({ item, onClick }) => (
            <SearchDialogListItem role="option" item={item} onClick={onClick} />
          )}
        />
      </SearchDialogContent>
      <SearchDialogFooter>{props.footer}</SearchDialogFooter>
    </SearchDialog>
  );
}
