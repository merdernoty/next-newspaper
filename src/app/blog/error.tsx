"use client";
export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>Упс!! {error.message}</div>;
}
