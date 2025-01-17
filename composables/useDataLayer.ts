// composables/useDataLayer.ts
export const useDataLayer = () => {
  const push = (data: DataLayerEvent) => {
    if (process.client && window) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(data)
    }
  }

  return {
    push
  }
}