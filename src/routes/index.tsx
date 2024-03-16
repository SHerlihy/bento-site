import { createFileRoute } from "@tanstack/react-router"

type HomeQueryOptions = "highlight" | "velma"

type ProductSearch = {
    highlight: HomeQueryOptions
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    // validate and parse the search params into a typed state
    return {
      highlight: (search.highlight as HomeQueryOptions) || "hightlight",
    }
  },
})
