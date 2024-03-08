import { setupWorker } from 'msw/browser'
import { env } from 'process'

export const worker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
