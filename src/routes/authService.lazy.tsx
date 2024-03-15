import { createLazyFileRoute } from '@tanstack/react-router'
import Index from '../pages/authService/Index'

export const Route = createLazyFileRoute('/authService')({
  component: Index,
})
