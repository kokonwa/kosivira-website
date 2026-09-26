import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 text-5xl font-bold">This page is still beyond the horizon.</h1>
        <p className="mt-5 text-muted-foreground">The page you requested could not be found.</p>
        <Link href="/" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-primary-foreground">Return home</Link>
      </div>
    </main>
  )
}
