import TesiCard from "./TesiCard";
export const TestimonialsHead = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-['Oswald'] text-primary">
          FIVE STAR SERVICE
        </h1>
      </div>
      <p className="my-6 text-lg text-[#082A4F] font-['Montserrat']">
        With more than 1.3 Million 5 Star Reviews, you don't have to take our
        word for it.
      </p>
    </div>
  );
};

const content = [
  {
    equipment: "fridge",
    rating: 4.5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `The guttering, clean out and repair of the downspout that was damaged during the windstorm was done quickly, and they were were very caring considerate of my time.
   `,
    name: "Frank Sutherland, MD",
    date: "July 12, 2023",
  },
  {
    equipment: "cooker",
    rating: 5,
    img: "https://lh3.googleusercontent.com/a-/ALV-UjX77E0I43u60lMEKyPm9VfiHf6DK11Sf1BhrXZJZdpYVEY",
    body: `I cant say enough positives about my experience with vex-appliance. Very professional and  technical and they sent a technician very quicly too.
   `,
    name: "Deanna Smith, MD",
    date: "August 04, 2023",
  },
  {
    equipment: "dryer",
    rating: 5,
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUy9-1ZpqdE8z2oIluKQHVXWo-0N9Sei2gipjjsULF9hg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Kimberly LaFollette, MD",
    date: "September 23, 2023",
  },
  {
    equipment: "dishwasher",
    rating: 5,
    img: "https://lh3.googleusercontent.com/a-/ALV-UjW0U1memLj9elANi8Gphz1l35lg61-ppwwjwqzwhxz91A",
    body: `The scheduler was very responsive to my needs and moved the time of my appointment up to a more convenient spot, and the tech was efficient and knowledgeable and personable.
   `,
    name: "Steve Reece, MD",
    date: "February 10, 2023",
  },
  {
    equipment: "freezer",
    rating: 5,
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXhOxM2L9O4RZDp7RCAVNn0Otws4QouOZCGkP9n-SvhyLZb",
    body: `We've used Mr. Handyman once, but will definitely use them again. The communication was fantastic. The tech showed right on time and was very professional.

   `,
    name: "David Hillier, MD",
    date: "October 17, 2023",
  },
  {
    equipment: "washer",
    rating: 4.5,
    img: "https://lh3.googleusercontent.com/a-/ALV-UjV_AHAkNfkv0hps6KxgZiVmhJnRopgAIFiVhagJeHjDYA",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Jennifer Goodman, MD",
    date: "May 08, 2023",
  },
];

export const TestimonialsBody = () => {
  return (
    <div className="flex overflow-x-scroll py-3 -px-5 md:px-5">
      {content.map(({ name, body, img, equipment, date, rating }) => {
        return (
          <TesiCard
            name={name}
            body={body}
            img={img}
            equipment={equipment}
            date={date}
            rating={rating}
            key={body}
          />
        );
      })}
    </div>
  );
};
