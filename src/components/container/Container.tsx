import { IContainer } from "@/app/lib/definitions";

export default function Container({children}: IContainer) {
  return (
    <div className="container mx-auto px-6">
        {children}
    </div>
  )
}
