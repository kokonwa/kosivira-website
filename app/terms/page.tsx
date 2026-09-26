import Link from "next/link"

export const metadata = { title: "Terms of Service" }

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <article className="mx-auto max-w-3xl space-y-7 text-muted-foreground">
        <Link href="/" className="text-foreground hover:text-primary">← Back to Kosivira</Link>
        <h1 className="text-4xl font-bold text-foreground md:text-6xl">Terms of Service</h1>
        <p>Last updated: 26 September 2026</p>
        <p>This website provides general information about Kosivira, Kosivira DetectAid and our developing vision. Content may change as research and product development progress.</p>
        <h2 className="text-2xl font-semibold text-foreground">Development-stage information</h2>
        <p>Product concepts, specifications, timelines and future ecosystem areas are informational and do not constitute guarantees, offers for sale or claims that every described venture is currently operating.</p>
        <h2 className="text-2xl font-semibold text-foreground">Intellectual property</h2>
        <p>Kosivira names, branding, original concepts, text and visual materials belong to their respective owners and may not be reproduced without permission.</p>
        <h2 className="text-2xl font-semibold text-foreground">External links</h2>
        <p>We are not responsible for the content or practices of third-party websites linked from this site.</p>
        <p>Questions may be sent to <a className="text-foreground underline" href="mailto:Kosivira.future@gmail.com">Kosivira.future@gmail.com</a>.</p>
      </article>
    </main>
  )
}
