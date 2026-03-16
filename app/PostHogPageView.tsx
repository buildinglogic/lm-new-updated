'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'

export default function PostHogPageView() : null {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    // Track pageviews on route change
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      console.log('PostHog tracking pageview:', url)
      posthog.capture('$pageview', {
        '$current_url': url,
      })
    }
  }, [pathname, searchParams, posthog])

  return null
}
