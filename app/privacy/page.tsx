import Link from "next/link"

export const metadata = { title: "Privacy Policy" }

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <article className="mx-auto max-w-3xl space-y-7 text-muted-foreground">
        <Link href="/" className="text-foreground hover:text-primary">← Back to Kosivira</Link>
        <h1 className="text-4xl font-bold text-foreground md:text-6xl">Privacy Policy</h1>
        <p>Last updated: 26 September 2026</p>
        <p>Kosivira collects information you voluntarily submit through our contact form, such as your name, email address and message, solely to respond to your enquiry.</p>
        <h2 className="text-2xl font-semibold text-foreground">How we use information</h2>
        <p>We use submitted information to communicate with you, understand partnership or product enquiries and improve our services. We do not sell your personal information.</p>
        <h2 className="text-2xl font-semibold text-foreground">Third-party services</h2>
        <p>Our website may use trusted services for message delivery, analytics and hosting. Those providers process limited information according to their own privacy terms.</p>
        <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
        <p>You may request access to, correction of or deletion of information you submitted by emailing <a className="text-foreground underline" href="mailto:Kosivira.future@gmail.com">Kosivira.future@gmail.com</a>.</p>
      </article>
    </main>
  )
}
