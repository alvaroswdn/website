/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker'

const sw = self as unknown as ServiceWorkerGlobalScope

const CACHE = `cache-${version}`

const ASSETS = [...build, ...files]

sw.addEventListener('install', (event) => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE)
    await cache.addAll(ASSETS)
  }

  event.waitUntil(addFilesToCache())
})

sw.addEventListener('activate', (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key)
    }
  }

  event.waitUntil(deleteOldCaches())
})

sw.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  async function respond() {
    const url = new URL(event.request.url)
    const cache = await caches.open(CACHE)

    const cacheMatch = await cache.match(event.request)

    if (ASSETS.includes(url.pathname) && cacheMatch) {
      return cacheMatch
    }

    try {
      const response = await fetch(event.request)

      if (response.status === 200) {
        cache.put(event.request, response.clone())
      }

      return response
    } catch {
      const lastCacheMatchAttempt = await cache.match(event.request)

      if (lastCacheMatchAttempt) {
        return lastCacheMatchAttempt
      }

      return new Response(
        'Something went very wrong. Try force closing and reloading the app.',
        {
          status: 408,
          headers: { 'Content-Type': 'text/html' },
        },
      )
    }
  }

  event.respondWith(respond())
})
