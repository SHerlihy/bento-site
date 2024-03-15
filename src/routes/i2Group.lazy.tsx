import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/i2Group')({
  component: I2Group,
})

function I2Group() {
  return <div className="p-2">i2</div>
}
