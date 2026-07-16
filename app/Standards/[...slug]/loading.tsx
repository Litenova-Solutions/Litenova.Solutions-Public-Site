export default function StandardsPageLoading() {
  return (
    <div aria-busy="true" aria-label="Loading standards page" className="mx-auto w-full max-w-4xl animate-pulse px-6 py-12">
      <div className="h-4 w-32 rounded bg-fd-muted" />
      <div className="mt-6 h-10 w-3/4 rounded bg-fd-muted" />
      <div className="mt-10 space-y-4">
        <div className="h-4 rounded bg-fd-muted" />
        <div className="h-4 w-11/12 rounded bg-fd-muted" />
        <div className="h-4 w-4/5 rounded bg-fd-muted" />
      </div>
    </div>
  );
}
