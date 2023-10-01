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
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
  },
  {
    equipment: "cooker",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
  },
  {
    equipment: "fridge",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
  },
  {
    equipment: "fridge",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
  },
  {
    equipment: "fridge",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
  },
  {
    equipment: "fridge",
    rating: 4.5,
    img: "https://cdn.pixabay.com/photo/2014/03/27/13/36/man-299488_960_720.jpg",
    body: `He was very pleasant, Knowledgeable and courteous. I would most
          definitely recommend him
   `,
    name: "Joan L, Maple Shade, NJ",
    date: "September 23, 2023",
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
