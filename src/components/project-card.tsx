import Image from "next/image";

import { Link } from "@/components/link";

type ProjectCardProps = {
  slug: string;
  name: string;
  description: string;
  image: {
    url: string;
    blurDataUrl: string;
  };
};

export const ProjectCard = ({
  slug,
  name,
  description,
  image,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative flex w-full max-w-[336px] flex-col rounded bg-shape shadow-lg md:max-w-[296px]">
        <div className="relative flex h-[180px] overflow-hidden">
          <Image
            src={image.url}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
            className="object-cover transition duration-200 group-hover:scale-105 group-hover:brightness-90"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 pt-4">
          <strong className="text-xl font-semibold text-text-base transition group-hover:text-text-contrast">
            {name}
          </strong>

          <p className="mt-1 line-clamp-3 flex-1 text-sm leading-normal text-accent-text">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
