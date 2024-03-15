import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/velmaMode')({
  component: VelmaMode,
})

function VelmaMode() {
  return <div className="p-2">velma</div>
}
