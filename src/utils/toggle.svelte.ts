export type Toggle = {
  get status(): boolean
  toggle: () => void
  set: (newStatus: boolean) => void
}

export function createToggle(): Toggle {
  let status = $state(false)

  return {
    get status() { return status },
    toggle: () => { status = !status },
    set: (newStatus) => { status = newStatus },
  }
}