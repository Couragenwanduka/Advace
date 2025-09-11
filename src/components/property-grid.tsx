import Link from "next/link";
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
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
    buy:false,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  //   {
  //     id: 13,
  //     image: "/images/weston.jpeg",
  //     title: "Weston Manor Home",
  //     location: "Weston Manor, Edmonton, Alberta, T5J",
  //     price: 900000,
  //     description: `Crafted to the highest standards, this exquisite residence spans over 8,500 sq ft across three impeccably designed levels, offering a perfect blend of luxury and comfort.

  // The main floor welcomes you with a grand foyer leading to a spacious open-plan living area, featuring a formal sitting room, a refined dining space, and a gourmet kitchen with custom cabinetry and premium appliances. A private office, a state-of-the-art home theater, a fully equipped fitness center, and a temperature-controlled wine cellar complete this level.

  // The rear of the property opens onto an expansive covered terrace, ideal for outdoor gatherings, with direct access to a beautifully landscaped private garden.

  // The upper level is home to an opulent principal suite, boasting a generous walk-in closet and a spa-inspired en suite bathroom. Three additional well-appointed bedroom suites, each with custom-designed bathrooms and built-in wardrobes, provide exceptional comfort.

  // This home is outfitted with cutting-edge smart home technology, featuring a fully integrated sound system, advanced security, and climate control for seamless modern living.`,
  //     bedrooms: 5,
  //     bathrooms: 3,
  //     square_meters: 8500,
  //     features: [
  //       "Swimming pool",
  //       "Terrace",
  //       "Radio",
  //       "Grill",
  //       "Cable TV",
  //       "Air conditioning",
  //       "Coffee pot",
  //       "Balcony",
  //       "Computer",
  //       "Parquet",
  //       "Internet",
  //       "Roof Terrace",
  //       "Oven",
  //     ],
  //     images: ["", "", ""],
  //     is_featured: true,
  //     is_new: true,
  //     created_at: "2024-01-01T00:00:00.000Z",
  //     updated_at: "2025-01-01T00:00:00.000Z",
  //   },
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
    buy:false,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 15,
    image: "/images/Maplewood.PNG",
    title: "Parkside Estates",
    location: "Pittsburg Pennsylvania",
    price: 320000,
    description: `McCandless 5 bedroom and 3.5 bathrooms. This home has traditional hardwood floors under the main level existing carpets. 
    Living room with cathedral ceilings flows into the dining room. 3 bedrooms and 2 full bathrooms round out this main level. 
    The dining room leads to the rear yard 3 season room that overlooks the flat rear yard with storage shed. The lower level offers a finished family room with gas fireplace and a half bath. 
    2 car garage and plenty of driveway parking.`,
    bedrooms: 5,
    bathrooms: 3,
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
    images: ["/images/Maplewood.PNG", "/images/parkside.PNG", "/images/parkside2.PNG", "/images/parkside3.PNG", "/images/parkside4.PNG"],
    is_featured: true,
    is_new: true,
    buy:true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 16,
    image: "/images/Riverside.PNG",
    title: "Riverside Manor",
    location: "Vancouver, British Columbia, V6J",
    price: 900000,
    description: `Nestled in a prime riverside location, Riverside Manor is a breathtaking 9,000 sq. ft. estate that epitomizes luxury and sophistication. Every inch of this home has been meticulously designed to combine modern comfort with timeless elegance.

Upon entry, guests are welcomed by a grand foyer with soaring ceilings, leading into an expansive open-concept living space. The formal living and dining areas are highlighted by floor-to-ceiling windows, allowing natural light to illuminate the exquisite interior. The chef’s kitchen is equipped with custom cabinetry, a marble island, and top-of-the-line appliances. Additional amenities include a state-of-the-art media room, a temperature-controlled wine cellar, a home gym, and a private study.

Stepping outside, a beautifully landscaped backyard offers a tranquil escape. A spacious outdoor terrace, complete with a firepit, lounge area, and outdoor kitchen, makes for the perfect entertainment space. The backyard extends toward the scenic river, offering breathtaking waterfront views.

The upper level is home to an opulent principal suite featuring a spa-inspired en suite, a walk-in dressing room, and a private balcony overlooking the water. Five additional bedroom suites provide ample space for family and guests.

This smart home is fully automated with a security system, climate control, and integrated sound and lighting, ensuring seamless modern living. A three-car garage and a private driveway complete this exceptional residence.

Riverside Manor is a rare opportunity to own a waterfront estate that blends luxury, comfort, and style in one of Vancouver’s most prestigious locations.`,
    bedrooms: 6,
    bathrooms: 4,
    square_meters: 9000,
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
    buy:false,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 17,
    image: "/images/willowbrook.PNG",
    title: "Willowbrook Residence",
    location: "Montreal, Quebec, H3H",
    price: 900000,
    description: `A perfect blend of modern luxury and timeless elegance, Willowbrook Residence offers 8,400 sq. ft. of exquisite living space across three meticulously designed levels. This stunning home is ideal for those who appreciate craftsmanship, comfort, and sophistication.

As you step inside, a grand entrance welcomes you into an open-concept living area, featuring a spacious lounge with floor-to-ceiling windows, a formal dining room, and a gourmet chef’s kitchen outfitted with bespoke cabinetry and high-end appliances. Additional highlights include a private home office, a state-of-the-art media room, a personal gym, and a fully equipped wine cellar.

At the rear, the home extends onto a beautifully designed outdoor terrace, seamlessly connecting to a landscaped garden, complete with a firepit, a lounge area, and an outdoor dining space—perfect for relaxation and entertaining.

The upper level features a breathtaking principal suite, complete with a walk-in dressing room and a spa-like en suite with a soaking tub, rainfall shower, and dual vanities. Three additional bedroom suites offer en suite bathrooms and custom-built wardrobes, ensuring ultimate comfort.

Smart home technology integrates an advanced security system, climate control, and an automated sound and lighting system, providing effortless convenience. A private double garage and a large driveway provide ample parking space.

Willowbrook Residence is a masterfully designed estate, offering luxury and functionality in one of Montreal’s most sought-after neighborhoods.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 8400,
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
    buy:false,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 18,
    image: "/images/Crestwood.PNG",
    title: "Crestwood Manor",
    location: "London, United Kingdom, W8",
    price: 900000,
    description: `Nestled in the heart of Kensington, Crestwood Manor is an extraordinary 8,700 sq. ft. residence designed to offer unparalleled elegance and sophistication. This stately home is a masterpiece of architectural brilliance, with contemporary touches that enhance its timeless charm.

Upon entering, you are greeted by a grand reception hall leading into a spacious and sunlit living area. The home boasts a formal dining room, an opulent sitting room, and a chef’s kitchen featuring handcrafted cabinetry, marble countertops, and state-of-the-art appliances. Additional amenities include a fully equipped home gym, a private study, a cinema room, and a custom-designed wine cellar.

The beautifully landscaped rear garden features a large outdoor terrace, ideal for entertaining or enjoying serene moments of relaxation. A charming patio, outdoor fireplace, and water feature complete the space.

Upstairs, the master suite is a true retreat, featuring a luxurious en suite bathroom with a soaking tub, rainfall shower, and his-and-hers vanities. The suite also includes a spacious dressing room. Five additional bedrooms, each with en suite bathrooms, ensure ample accommodation for family and guests.

A private elevator, integrated smart home technology, and underfloor heating add to the comfort and convenience of this exceptional home.

Crestwood Manor represents the pinnacle of London luxury, offering an unmatched living experience in one of the city's most prestigious areas.`,
    bedrooms: 6,
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
    buy:false,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 19,
    image: "/images/Stonebridge.PNG",
    title: "Stonebridge Villa",
    location: "Edinburgh, Scotland, EH3",
    price: 900000,
    description: `A distinguished estate set in the heart of Edinburgh’s historic district, Stonebridge Villa spans 7,000 sq. ft. and showcases a flawless blend of traditional grandeur and contemporary refinement.

A magnificent entrance hall sets the tone for the rest of the home, leading into a spacious living area with intricate crown moldings and high ceilings. The grand dining room is perfect for hosting, while the gourmet kitchen features a marble island, premium appliances, and a separate breakfast nook. Additional highlights include a home office, a library, a gym, a cinema room, and a bespoke wine cellar.

The upper level is home to a stunning master suite with a walk-in closet and an en suite spa bathroom. Each of the additional bedrooms offers en suite bathrooms and built-in storage, ensuring luxury and comfort for all occupants.

Equipped with smart home automation, including security cameras, climate control, and an integrated sound system, Stonebridge Villa is a testament to refined living in one of Scotland’s most esteemed neighborhoods.`,
    bedrooms: 5,
    bathrooms: 3,
    square_meters: 7000,
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
    buy:false,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: 20,
    image: "/images/Oakridge.png",
    title: "Oakridge Estate",
    location: "Birmingham, United Kingdom, B15",
    price: 900000,
    description: `Nestled in a prestigious neighborhood, Oakridge Estate is an exquisite 8,500 sq. ft. residence offering timeless elegance and modern comfort. Designed for luxurious living, this home boasts breathtaking architectural details and high-end finishes throughout.

A grand entrance hall welcomes you into an expansive open-concept living space, featuring a formal lounge with floor-to-ceiling windows, a sophisticated dining area, and a chef’s kitchen with custom cabinetry and top-tier appliances. Additional highlights include a state-of-the-art cinema room, a private study, a home gym, and a temperature-controlled wine cellar.

At the rear, a beautifully landscaped garden and a spacious outdoor terrace provide a serene retreat, ideal for relaxation or entertaining guests. The terrace features a covered lounge area, a firepit, and an alfresco dining space.

The upper level is home to a grand principal suite with a walk-in dressing room and a spa-inspired en suite featuring a freestanding soaking tub, rainfall shower, and dual vanities. Four additional bedrooms, all with en suite bathrooms, offer exceptional comfort.

With integrated smart home technology, including advanced security, climate control, and surround sound, Oakridge Estate is the epitome of luxury living in Birmingham’s most sought-after district.`,
    bedrooms: 5,
    bathrooms: 4,
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
    buy:false,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },{
    id:21,
    image:"/images/Hamilton.WEBP",
    title:"McMurray Homes",
    location:"Renton Rd, Pittsburgh Pennsylvania, 15227",
    price:255999,
    description:'Dreamy Open-Concept Living with Modern Upgrades! Step into this beautifully updated home featuring an open-concept floor plan thats perfect for entertaining. The fully kitchen is a chefs dream, complete with stainless steel appliances, beautiful cabinetry, and plenty of counter space for meal prepping + those kitchen dance parties. The spacious primary suite has a large closet, offering ample storage and a private deck for the ultimate relax + unwind type energy we are all seeking! Downstairs, the finished lower level is the ultimate hangout spot, featuring an awesome game room, and an updated full bath-ideal for game or movie nights. Enjoy outdoor living on the covered front porch for morning coffee or evening relaxation, and a level backyard. Parking is a breeze with a one-car integral garage and additional private parking in the back. Prime location, modern updates, and incredible space-this home checks all the boxes! Quick commute to Downtown Pittsburgh is also a major plus!',
    bedrooms:2,
    bathrooms:2,
    square_meters: 1062,
    features:[
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
    images:["/images/Hamilton.WEBP","/McMurryHome/IMG_7683.PNG", "/McMurryHome/IMG_7684.PNG", "/McMurryHome/IMG_7685.PNG","/McMurryHome/IMG_7686.PNG", "/McMurryHome/IMG_7687.PNG", "/McMurryHome/IMG_7688.PNG", "/McMurryHome/IMG_7690.PNG", "/McMurryHome/IMG_7691.PNG", "/McMurryHome/IMG_7692.PNG", "/McMurryHome/IMG_7693.PNG", "/McMurryHome/IMG_7699.PNG", "/McMurryHome/IMG_7700.PNG", "/McMurryHome/IMG_7697.PNG"],
    is_featured: true,
    is_new: true,
    buy:true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },{
    id:22,
    image:"/images/LinwoodAve.WEBP",
    title:"Linwood Avenue",
    location:"Pittsburg, Pennsylvania, Cedarcove St,",
    price:278500,
    description:"Welcome to this beautiful newly renovated home in the heart of Crafton, Linwood boasts 3 bedrooms and 3.5 baths. The kitchen is fully equipped with all new stainless steel appliances, granite counter tops, and a large island with seating. The transition from the kitchen to the dining room makes a great space for entertaining a large crowd. Not only do you have place to unwind in the living room, the lower level has a family room for additional entertainment space. Located on a nice corner lot, there is a two car detached garage and ample parking. Schedule a showing and make this home your own!",
    bedrooms:3,
    bathrooms:3,
    square_meters:2218,
    features:[
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
    images:["/images/LinwoodAve.WEBP","/Linwood/IMG_7641.WEBP", "/Linwood/IMG_7645.PNG", "/Linwood/IMG_7646.PNG", "/Linwood/IMG_7649.PNG", "/Linwood/IMG_7651.PNG", "/Linwood/IMG_7652.PNG", "/Linwood/IMG_7654.PNG", "/Linwood/IMG_7661.PNG","/Linwood/IMG_7719.WEBP", "/Linwood/IMG_7720.WEBP","/Linwood/IMG_7721.WEBP" ],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id:23,
    image:"/images/Delafield.WEBP",
    title:"Delafield Villa ",
    location:"Louisianan Ave, Pittsburgh, PA 1521",
    price:293689,
    description:"This charming home is located in the heart of Fox Chapel. It features beautiful hardwood floors throughout and a bright, airy family room with plenty of natural light. The room's centerpiece is a striking stone fireplace. The elegant dining room, adorned with stained glass light fixtures, flows seamlessly into the kitchen, complete with sleek stainless steel appliances. A convenient first-floor master bedroom is complemented by two additional bedrooms upstairs, along with a versatile bonus roomperfect for a home office. The expansive basement offers ample storage and the potential for a game room or additional living space. Outside, enjoy the peace and privacy of a beautifully landscaped backyard, as well as a charming all-brick front porch. The newly updated stone driveway is lined with large boulders and perennial gardens, adding to the home's curb appeal. Located just minutes from Route 28, shopping and downtown this home offers both comfort and convenience",
    bathrooms:2,
    bedrooms:3,
    square_meters:1334,
    features:[
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
    images:["/images/Delafield.WEBP","/delafield/IMG_7704.WEBP", "/delafield/IMG_7705.WEBP", "/delafield/IMG_7707.WEBP","/delafield/IMG_7708.WEBP", "/delafield/IMG_7711.WEBP", "/delafield/IMG_7712.WEBP", "/delafield/IMG_7713.WEBP", "/delafield/IMG_7714.WEBP", "/delafield/IMG_7715.WEBP", "/delafield/IMG_7716.WEBP", "/delafield/IMG_7717.WEBP"],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id:24,
    image:"/images/Beechwood.WEBP",
    title:"Beechwood Boulevard",
    location:"Pittsburgh, Pennsylvania 15216",
    price:269999,
    description:"With just over 2,700 square feet has a generous great room and kitchen perfect for hosting family meals. A flex room, family entry and powder room complete the 1st floor. The homes 2nd floor hosts 4 generous bedrooms all with walk-in-closets, 3 full baths including a well-appointed owner's bath and laundry room.",
    bedrooms:4,
    bathrooms:4,
    square_meters:2782,
    features:[
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
    images:["/images/Beechwood.WEBP","/beechwood/IMG_7653.PNG", "/beechwood/IMG_7658.PNG", "/beechwood/IMG_7659.PNG", "/beechwood/IMG_7660.PNG", "/beechwood/IMG_7663.PNG", "/beechwood/IMG_7664.PNG", "/beechwood/IMG_7665.PNG", "/beechwood/IMG_7723.WEBP", "/beechwood/IMG_7724.WEBP", "/beechwood/IMG_7726.WEBP"],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },{
    id:25,
    image:"/images/cornflour.WEBP",
    title:"Cornflower Coast Ct",
    location:"Texas City.",
    price:39990,
    description:"An open, two-story layout complete with three bedrooms, two and a half bathrooms, and a two-car garage.. This home greets you with a spacious front porch in which you can relax with your morning coffee. Upon entering the home, you are met with stunning vinyl flooring and a foyer that leads to the combined family room and kitchen. On the way, you will find the convenient downstairs powder room equipped with a white pedestal sink and decorative mirror. The formal dining room is ideal for hosting guests, and the integrated kitchen opens up to the family room, so no one will have to miss out on a conversation! The large kitchen features plenty of counter space, granite countertops with an under-mount stainless steel sink and a ceramic tile backsplash, a kitchen island, flat-panel birch cabinets with 42 uppers, designer light fixtures, and a pantry. If you or the kids like to spend time outdoors, opt to include a covered patio! Completing the first floor is your expansive master suite including a divine master bathroom showcasing cultured marble countertops, LED down lighting, cabinetry that matches the kitchen, a super shower, and a massive walk-in closet. Right up the stairs resides the game room a place the kids can call their own! Also upstairs is the walk-in utility room, a secondary bathroom, and two bedrooms with walk-in closets. This floor plan is uniquely designed for any lifestyle, maximizing every square foot. The vast amount of included features and design elements make this a highly desirable floor plan. You and your family will love living in the floor plan.",
    bedrooms:3,
    bathrooms:3,
    square_meters:1737,
    features:[
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
    images:["/images/cornflour.WEBP","/images/cornflour.PNG", "/images/cornflour2.PNG"],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",
  },{
    id:26,
    image:"/images/rochester.WEBP",
    title:"Rochester Gardens",
    location:"Leeds, West Yorkshire",
    price:319999,
    description:"A well-proportioned three bedroom detached residence in a popular cul-de-sac location, close to local schools, parkland and the nearby amenities of Pudsey, Bramley and Farsley. With two reception rooms, conservatory, three great size bedrooms, well-tended garden, driveway and garage, this is a superb family home.Benefitting from gas central heating and PVCu double glazing, the accommodation comprises in brief, to the ground floor; entrance hallway with guest WC, living room with brass finish real flame gas fire, laminate flooring, ceiling coving and archway through to the dining room and in turn with double doors into the conservatory. The kitchen is fitted with a range of cream shaker-style units, gas cooker point, tiled floor and splash backs and door out to the side elevation.To the first floor are three good size bedrooms, the principal bedroom with fitted wardrobes and bedroom three also with built in wardrobe. The house bathroom has full wall tiling with white suite incorporating WC, wash basin, bath and separate shower enclosure. Externally, the property has an enclosed garden to the rear which enjoys a good degree of privacy with paved patio and raised lawn and to the front of the property, off street parking is available on the driveway which leads in turn to a single garage.The property is situated in a popular area of West Leeds and is compressed between the areas of Pudsey, Farsley, Bramley and Rodley with the nearby Stanningley Road forming an arterial route towards Leeds City Centre and out to Bradford.",
    bedrooms:3,
    bathrooms:3,
    square_meters:1737,
    features:[
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
    images:["/images/rochester.WEBP","/images/rochester4.WEBP", "/images/rochester3.WEBP", "/images/rochester2.WEBP"],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",

  },{
    id:27,
    image:"tower/170c76cf-d60f-4396-b23b-1c345c50b900 2.JPG",
    title:"Central Tower",
    location:"Edmonton, Alberta",
    price:0,
    description:"Central Tower is an 18-storey premium apartment development in South Edmonton, strategically located steps from Century Park LRT, shopping, dining, and urban conveniences. Designed for long term value, the property offers bright, energy efficient suites with panoramic windows, upscale in-suite features such as laundry and smart thermostats, and desirable resident amenities including a fitness centre, community garden, pet friendly spaces with a dog park, and secure heated underground parking. This combination of prime location, modern finishes, and lifestyle driven amenities positions Central Tower as a resilient and high demand rental asset in one of Edmonton’s strongest markets.",
    bedrooms:0,
    bathrooms:0,
    square_meters:174000,
    features:[
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
    images:["/tower/b76cf6aa-28cc-423e-89dc-a6e1cff10adf.JPG","/tower/c12f2655-d933-41cf-afa1-2230cedc7c3a.JPG", "/tower/91524b4f-f99e-42c0-83c9-b89e27c3e2c6 2.JPG", "/tower/91524b4f-f99e-42c0-83c9-b89e27c3e2c6 2.JPG", "/tower/39129260-a66f-4ba5-9215-b3899e65acad 2.JPG", "/tower/8e204651-3fbf-405b-a5e7-6c1d064ec54f 2.JPG"],
    buy:true,
    is_featured: true,
    is_new: true,
    created_at: "2024-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z",

  }
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
