export default function SomePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h2>this is some other page layout!</h2>
        {children}
    </div>
  )
}
