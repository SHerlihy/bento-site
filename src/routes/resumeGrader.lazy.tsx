import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/resumeGrader')({
  component: ResumeGrader,
})

function ResumeGrader() {
  return <div className="p-2">resumeGrader</div>
}
