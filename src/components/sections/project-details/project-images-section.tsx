import Image from "next/image";

type ProjectImagesSectionProps = {
  title: string;
  description: string;
  images: {
    url: string;
    blurDataUrl: string;
    title: string;
    description: string;
  }[];
};

export const ProjectImagesSection = ({
  title,
  description,
  images,
}: ProjectImagesSectionProps) => {
  return (
    <section className="py-14 !pt-0 sm:py-26">
      <div>
        <h2 className="max-w-full text-3xl font-semibold leading-tight sm:max-w-[80%] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-normal text-accent-text">{description}</p>
      </div>

      <ul className="mt-14 flex flex-col gap-14">
        {images.map((image) => (
          <li key={image.url} className="relative flex flex-col gap-4 sm:gap-6">
            <Image
              src={image.url}
              alt={image.description}
              width={936}
              height={525}
              quality={100}
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              className="rounded-lg shadow-lg"
            />

            <div className="flex flex-col gap-2">
              <strong className="text-xl sm:text-2xl">{image.title}</strong>
              <p className="text-sm leading-normal text-accent-text sm:text-base">
                {image.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
