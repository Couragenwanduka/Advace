export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          location: string
          bedrooms: number
          bathrooms: number
          size: number
          image_url: string
          features: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          location: string
          bedrooms: number
          bathrooms: number
          size: number
          image_url: string
          features?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          location?: string
          bedrooms?: number
          bathrooms?: number
          size?: number
          image_url?: string
          features?: Json
          created_at?: string
          updated_at?: string
        }
      }
      investments: {
        Row: {
          id: string
          user_id: string
          property_id: string
          amount: number
          shares: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          amount: number
          shares: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          amount?: number
          shares?: number
          created_at?: string
        }
      }
      property_views: {
        Row: {
          id: string
          user_id: string
          property_id: string
          viewed_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          viewed_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          viewed_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          property_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          created_at?: string
        }
      }
    }
  }
}