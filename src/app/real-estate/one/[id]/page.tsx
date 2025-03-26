"use client";
import React from "react";
import { Property } from "../../../../types/property";
import { PropertyHeader } from "../../../../components/property-details/property-header";
import { PropertyInfo } from "../../../../components/property-details/property-info";
import { PropertyGallery } from "../../../../components/property-details/property-gallery";
import { PropertyFeatures } from "../../../../components/property-details/property-features";
import { PropertyPrice } from "../../../../components/property-details/property-price";
import { PropertyDescription } from "../../../../components/property-details/property-description";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams } from "next/navigation";
import { properties } from "../../../../components/property-grid";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = React.useState<Property | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const supabase = createClientComponentClient();

  React.useEffect(() => {
    async function fetchProperty() {
      try {
        // const { data, error } = await supabase
        //   .from("properties")
        //   .select("*")
        //   .eq("id", id)
        //   .single();

        // if (error) throw error;

        const singleProperty = properties.find(
          (prop) => prop.id == id
        ) as Property;

        const oldprop = {
          id: "string",
          title: "Park Place Villas",
          location: "Ikeja, Lagos",
          price: 900000,
          description: `Finished to an exceptionally high standard, the lavish and well-planned accommodation spans just under 11,000 sq ft across three floors.

Upon entering, you are greeted by an impressive entrance hall that leads to the principal reception rooms, including the drawing room, study, family room, playroom, dining room, and bespoke kitchen/breakfast room. The far end of the ground floor offers superb recreational and leisure facilities, including a games room, gym, and a swimming pool with a sauna.

The main house features four generous bedroom suites. The main bedroom suite boasts a luxurious en suite with dual vanities and dual dressing rooms, along with a private balcony overlooking the gardens. Three additional double bedroom suites, each with stylish en suites and built-in storage, are also located on this floor. An additional two bedrooms and a shower room are found in the guest/staff wing above the triple garage.

The second floor houses a home cinema, perfect for family and friends, a large second study area with built-in cabinetry, and a cloakroom.

The property benefits from a fully integrated state-of-the-art home automation system throughout, with sophisticated technology catering to the needs of any discerning family. There is air conditioning in the ground floor, main bedroom suite, and second bedroom.
          `,
          bedrooms: 3,
          bathrooms: 3,
          square_meters: 6000,
          features: [
            "Swimming pool",
            "Terrace",
            "Radio",
            "Grill",
            "Cable TV",
            "Air conditioning",
            "Coffee pot",
            "Balcony",
            "Computer",
            "Parquet",
            "Internet",
            "Roof Terrace",
            "Oven",
          ],
          images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          is_featured: true,
          is_new: true,
          created_at: "2024-01-01T00:00:00.000Z",
          updated_at: "2025-01-01T00:00:00.000Z",
        } as Property;
        setProperty(singleProperty);
        setProperty;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch property"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-gray-400">{error || "Property not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <PropertyHeader />

        <div className="pt-[80px] grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyInfo property={property} />
            {property.images.some((img) => img.trim() !== "") ? (
              <PropertyGallery images={property.images} />
            ) : (
              <PropertyGallery images={[property.image]} />
            )}
            <PropertyDescription
              description={property.description}
              property={property}
            />
          </div>

          <div className="space-y-8">
            <PropertyPrice buy={property.buy}  price={property.price}/>
            <PropertyFeatures features={property.features} />
          </div>
        </div>
      </div>
    </div>
  );
}
