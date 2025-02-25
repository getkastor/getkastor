// types/global.d.ts
interface DataLayerEvent {
  event: string
  [key: string]: any
}

interface Window {
  dataLayer: DataLayerEvent[]
}

interface PricingEvent extends Record<string, any> {
  event: string
  event_category: string
  event_action: string
  plan_name?: string
  plan_price?: number
  billing_cycle?: 'monthly' | 'yearly'
  feature_name?: string
}