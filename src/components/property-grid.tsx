import Link from "next/link";
import React from "react";
import { Property } from "../types/property";

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/parkplace.jpeg",
    title: "Park Place Villas",
    location: "Park Place Villas, little Venice, London,W2",
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    image: "/images/horizon.jpeg",
    title: "Horizon Heights Villas",
    location: "Horizon Heights, Chelsea, London, SW3",
    price: 900000,
    description: `Finished to an impeccable standard, this opulent residence spans just over 1,500 sq ft across two floors, offering unparalleled luxury and a perfect blend of sophistication and comfort.

Upon entering, you are welcomed by a grand entrance hall, leading to a series of stunning reception rooms, including a spacious drawing room, private study, informal family room, formal dining room, and an exquisite bespoke kitchen with an adjoining breakfast area. At the rear of the ground floor, a dedicated entertainment zone features a private home cinema, a fully equipped gym, and a dedicated wellness area with a heated swimming pool, jacuzzi, and sauna.

The first floor accommodates a magnificent master bedroom suite, complete with a luxurious en suite bathroom with dual vanities, two walk-in dressing rooms, and a private terrace overlooking the meticulously landscaped gardens. Three additional well-sized bedroom suites, each with bespoke en suite bathrooms and integrated storage, offer comfort and privacy. The guest wing above the garage includes two further bedrooms and a stylish bathroom.

The top floor is dedicated to entertainment and leisure, featuring a second study, a full bar area, and a spacious outdoor terrace offering panoramic views of the London skyline.
The property is equipped with the latest smart home technology, allowing full integration of climate control, security systems, and audio-visual equipment to create the ultimate in convenience and luxury. Air conditioning is installed throughout, including in the master bedroom and the main reception areas.`,
    bedrooms: 4,
    bathrooms: 2,
    square_meters: 1200,
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
      "Internet",
      "Roof Terrace",
      "Oven",
    ],
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    image: "/images/hampstead.jpeg",
    title: "Hampstead Villas",
    location: "The Stables, Hampstead, London, NW3",
    price: 900000,
    description: `Meticulously crafted to the highest standards, this exceptional family residence offers approximately 8,200 sq ft of refined living space across three expansive floors.

The impressive entrance hall sets the tone for the property, guiding you into a collection of elegantly designed reception rooms, including a sophisticated drawing room, a well-appointed study, an open-plan family room, formal dining room, and a bespoke kitchen with an expansive breakfast area. The ground floor also features a spectacular games room, perfect for entertaining, and a state-of-the-art home gym.

On the first floor, the spacious master bedroom suite is a true sanctuary, with a lavish en suite bathroom featuring a freestanding bathtub, separate walk-in showers, and dual vanities. The suite also includes two vast dressing rooms and a private balcony offering serene views of the surrounding gardens. Three additional double bedroom suites are found on this level, each with stylish en suite bathrooms and ample built-in storage.

The lower ground floor is a dedicated entertainment space, including a fully equipped cinema room and a temperature-controlled wine cellar. There's also direct access to the beautifully landscaped garden with an outdoor kitchen and dining area, perfect for summer entertaining.
The property is fully integrated with the latest home automation technology, offering a seamless experience of lighting, climate control, and security at the touch of a button. The residence is further enhanced with underfloor heating throughout, along with air conditioning in key areas such as the master bedroom and main living spaces.`,
    bedrooms: 8,
    bathrooms: 3,
    square_meters: 8200,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    image: "/images/clifton.png",
    title: "Clifton Manor Villa",
    location: "Clifton Manor, Clifton, Bristol, BS8",
    price: 900000,
    description: `Finished to an exceptionally high standard, the lavish and well-planned accommodation spans just under 5,000 sq ft across three floors.

Upon entering, you are greeted by an impressive entrance hall that leads to the principal reception rooms, including the drawing room, study, family room, playroom, dining room, and bespoke kitchen/breakfast room. The far end of the ground floor offers superb recreational and leisure facilities, including a games room, gym, and a swimming pool with a sauna.

The main house features four generous bedroom suites. The main bedroom suite boasts a luxurious en suite with dual vanities and dual dressing rooms, along with a private balcony overlooking the gardens. Three additional double bedroom suites, each with stylish en suites and built-in storage, are also located on this floor. An additional two bedrooms and a shower room are found in the guest/staff wing above the triple garage.

The second floor houses a home cinema, perfect for family and friends, a large second study area with built-in cabinetry, and a cloakroom.

The property benefits from a fully integrated state-of-the-art home automation system throughout, with sophisticated technology catering to the needs of any discerning family. There is air conditioning in the ground floor, main bedroom suite, and second bedroom.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 5000,
    features: [
      "Swimming pool",
      "Terrace",
      "Radio",
      "Cable TV",
      "Air conditioning",
      "Coffee pot",
      "Balcony",
      "Parquet",
      "Internet",
      "Roof Terrace",
      "Oven",
    ],
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 5,
    image: "/images/linden.jpeg",
    title: "Linden House",
    location: "Linden House, Notting Hill, London, W11",
    price: 900000,
    description: `This striking property offers approximately 6,500 sq ft of luxurious living space, finished to the highest standards and spread across four floors.

On the ground floor, a grand entrance hall leads to formal and informal reception rooms, including a beautiful drawing room with a feature fireplace, a bespoke study, a spacious family room, and a fully integrated kitchen with an open dining area.

 The lower ground floor offers a stunning home cinema and a fully equipped gym with a dedicated yoga space.

The master bedroom suite is a true retreat, featuring a spa-inspired en suite bathroom, large walk-in wardrobes, and a private balcony overlooking tranquil gardens. Three additional bedroom suites, each with bespoke en suites and ample closet space, provide ample accommodation.

A cutting-edge home automation system is incorporated throughout, while air conditioning is available in key areas.`,
    bedrooms: 8,
    bathrooms: 5,
    square_meters: 6500,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 6,
    image: "/images/riverside.jpeg",
    title: "Riverside Lodge Villa",
    location: "Riverside Lodge, Henley-on-Thames, Oxfordshire, RG9",
    price: 900000,
    description: `Overlooking the Thames, this magnificent riverside residence offers just under 9,500 sq ft of living space spread across three levels.

The ground floor features a grand reception area with a drawing room, a formal dining room, and a bespoke kitchen with an adjoining family room. 

The lower ground floor offers a private cinema, gym, games room, and a wine cellar.

 The landscaped gardens include a heated outdoor pool and a riverfront terrace.

The master suite features a private balcony overlooking the water, a luxurious en suite bathroom, and a walk-in closet. Three additional bedroom suites with en suite bathrooms offer ample space for family or guests.

Smart home technology is integrated throughout the property, offering ease and convenience for modern living.`,
    bedrooms: 10,
    bathrooms: 7,
    square_meters: 9500,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 7,
    image: "/images/glade.png",
    title: "The Glade Villas",
    location: "The Glade, Salisbury, Wiltshire, SP1",
    price: 900000,
    description: `This truly exceptional home combines modern sophistication with the beauty of the countryside, offering over 8,000 sq ft of living space.

The ground floor features an expansive open-plan living area, including a formal drawing room, a bespoke kitchen with an island breakfast bar, a study, and a dining room.

 The lower ground floor offers a fully equipped cinema room, gym, and a spacious wine cellar.

The master suite includes a luxurious en suite bathroom, two walk-in wardrobes, and private access to a beautifully landscaped garden.

 Four further bedroom suites offer ample accommodation with stylish en suites and built-in storage.
This home benefits from the latest smart home systems and air conditioning in key areas.`,
    bedrooms: 4,
    bathrooms: 2,
    square_meters: 2500,
    features: [
      "Terrace",
      "Grill",
      "Air conditioning",
      "Coffee pot",
      "Balcony",
      "Computer",
      "Parquet",
      "Internet",
      "Roof Terrace",
      "Oven",
    ],
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 8,
    image: "/images/holcombe.png",
    title: "Holcombe House",
    location: "Holcombe House, Harrogate, North Yorkshire, HG1",
    price: 900000,
    description: `Finished to the highest specification, this beautifully presented home offers just over 8,000 sq ft of elegant living space spread across three levels.

The ground floor boasts an open-plan reception with a sitting room, formal dining area, and a stunning kitchen with bespoke cabinetry. There’s also a private study, as well as a cinema room, gym, and wine cellar. 

The rear of the property opens to an expansive terrace that leads to a private garden.

The first floor features the principal bedroom suite with a spacious walk-in wardrobe and a luxurious en suite bathroom. Three further well-sized bedroom suites with bespoke bathrooms and built-in wardrobes are found on this floor.

This home is equipped with the latest smart home technology, including an integrated sound system and climate control throughout.`,
    bedrooms: 8,
    bathrooms: 4,
    square_meters: 8000,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 9,
    image: "/images/haven.png",
    title: "Haven Court Villas",
    location: "Haven Court, Hampstead Heath, London, NW3",
    price: 900000,
    description: `Designed with meticulous attention to detail, this breathtaking home offers over 5,000 sq ft of luxurious living space, spread across four beautifully finished floors.

Upon entering, you are greeted by a spacious reception hall, which leads to the grand drawing room, an elegant formal dining room, a private study, and a fully equipped kitchen with a central island and adjoining breakfast area.

The lower ground floor features an impressive entertainment suite, complete with a cinema room, a gym, and a games room, as well as a temperature-controlled wine cellar.

The master bedroom suite is a stunning retreat, featuring a private balcony overlooking the gardens, dual walk-in closets, and a luxurious en suite bathroom with both a soaking tub and walk-in shower.

 Three additional bedroom suites, each with custom-built wardrobes and en suite bathrooms, provide ample accommodation for family and guests.

State-of-the-art smart home technology is integrated throughout, allowing full control over lighting, security, and climate systems. Air conditioning is installed in all key living areas for added comfort.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 5000,
    features: [
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 10,
    image: "/images/bennetts.png",
    title: "Bennetts Court Villa",
    location: "Bennetts Court, Cambridge,  CB2",
    price: 900000,
    description: `Nestled in one of Cambridge's most sought-after areas, this newly built property spans 6,000 sq ft across three sophisticated levels, offering both modern style and practicality.

The impressive entrance hall leads to an expansive open-plan living area, featuring a spacious drawing room, a formal dining room, and a sleek kitchen with a central island and top-of-the-line appliances.

 Adjacent to the kitchen is a comfortable family room with bi-fold doors that open to a landscaped garden.
The first floor is dedicated to the private living spaces, including a master bedroom suite with a luxurious en suite bathroom, dual walk-in closets, and a private balcony overlooking the gardens.

Three additional bedrooms, each with its own en suite bathroom and ample storage, offer the perfect balance of comfort and privacy.

The home is equipped with an integrated sound system, climate control, and security systems for the ultimate in modern convenience. The lower ground floor features a gym, home cinema, and a wine cellar.`,
    bedrooms: 4,
    bathrooms: 2,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 11,
    image: "/images/alberta.jpeg",
    title: "Alberta Homes",
    location: "Alberta House, Calgary, Alberta, T2P",
    price: 900000,
    description: `This Newly Built, On A Pool Sized Lot Is Bright And Airy. Offering Larg Windows Throughout, Open Concept, 10Ft Ceilings On Ma Floor, 9Ft Ceilings On Upper Floor. Beautiful Hardwood Staircase Leading To The Spacious Upper Level Offering Three Generously Sized Bedrooms With Beautiful Ensuite 8 Walk-In Closet In Master Bedroom. In Close Proximity To A Vast Selection Of Amenities And The Water. Freshly Painte Basement floors coated & sealed.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 600,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 12,
    image: "/images/holburn.jpeg",
    title: "Holburn House",
    location: "Holburn House, Halifax, Nova Scotia, B3J",
    price: 900000,
    description: `This modern farmhouse is located on an estate lot that is the embodiment of country living!
Perfect family home with finished basement, kitchen, family room, full bathroom and den.
Surrounded by 1.5 acres of lush green conservation.
A second dwelling appx 1500 sf located at back of property is a fully restored barn with 3 br, kitchen and laundry for extended family.`,
    bedrooms: 4,
    bathrooms: 5,
    square_meters: 1500,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 13,
    image: "/images/weston.jpeg",
    title: "Weston Manor Home",
    location: "Weston Manor, Edmonton, Alberta, T5J",
    price: 900000,
    description: `Crafted to the highest standards, this exquisite residence spans over 8,500 sq ft across three impeccably designed levels, offering a perfect blend of luxury and comfort.

The main floor welcomes you with a grand foyer leading to a spacious open-plan living area, featuring a formal sitting room, a refined dining space, and a gourmet kitchen with custom cabinetry and premium appliances. A private office, a state-of-the-art home theater, a fully equipped fitness center, and a temperature-controlled wine cellar complete this level.

The rear of the property opens onto an expansive covered terrace, ideal for outdoor gatherings, with direct access to a beautifully landscaped private garden.

The upper level is home to an opulent principal suite, boasting a generous walk-in closet and a spa-inspired en suite bathroom. Three additional well-appointed bedroom suites, each with custom-designed bathrooms and built-in wardrobes, provide exceptional comfort.

This home is outfitted with cutting-edge smart home technology, featuring a fully integrated sound system, advanced security, and climate control for seamless modern living.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 8500,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 14,
    image: "/images/ashford.jpeg",
    title: "Ashford House",
    location: "Ashford House, Calgary, Alberta, T3C",
    price: 900000,
    description: `Designed with elegance and modern luxury in mind, this stunning home offers over 8,200 sq ft of meticulously crafted living space across three levels.

The main floor boasts a grand entrance leading to an open-concept living area, featuring a formal lounge, a sophisticated dining room, and a chef’s kitchen with bespoke cabinetry and high-end appliances. Additional highlights include a private study, a state-of-the-art media room, a fully equipped gym, and a custom wine cellar.

At the rear, the home extends onto a spacious outdoor terrace, seamlessly connecting to a beautifully landscaped private garden, ideal for relaxation and entertaining.

The upper floor showcases a lavish principal suite, complete with a walk-in dressing room and a spa-inspired en suite. Three additional bedroom suites, each with elegant en suite bathrooms and built-in wardrobes, provide exceptional comfort for family and guests.

This home is equipped with the latest in smart home technology, including an integrated audio system, advanced security, and climate control, ensuring effortless modern living.`,
    bedrooms: 4,
    bathrooms: 2,
    square_meters: 8200,
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
    images: ["", "", ""],
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
];

export function PropertyGrid({ count }: any) {
  count = count >= 0 ? count : 30;
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Recent properties</h2>
        <p className="text-gray-400">Architects design houses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-12">
        {properties.slice(0, count).map((property) => (
          <div key={property.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 flex flex-col gap-[10px]">
              <h3 className="text-lg font-semibold text-white">
                {property.title}
              </h3>
              <p className="text-gray-400">{property.location}</p>
              <Link
                href={`/real-estate/one/${property.id}`}
                className="mt-2 w-2/3 text-center py-[10px] border rounded-xl border-[#4FD1C5] text-[#00ffcc] hover:text-[#00ffaa] transition-colors uppercase text-sm"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
