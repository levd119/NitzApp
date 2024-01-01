import Navbar from "@/components/navbar/Navbar"

export default function SomePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h1 className="title" >Some other page layout!</h1>
        {children}
    </div>
  )
}
