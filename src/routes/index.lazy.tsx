import { createLazyFileRoute } from '@tanstack/react-router'
import Index from '../pages/home/Index'

export const Route = createLazyFileRoute('/')({
  component: Index,
})
