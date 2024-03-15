import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sherlihyDotCom')({
  component: SherlihyDotCom,
})

function SherlihyDotCom() {
  return <div className="p-2">sherlihyDotCom</div>
}
