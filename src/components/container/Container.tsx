import { IChildren } from "@/app/lib/definitions";

export default function Container({children}: IChildren) {
  return (
    <div className="container mx-auto px-6">
        {children}
    </div>
  )
}
