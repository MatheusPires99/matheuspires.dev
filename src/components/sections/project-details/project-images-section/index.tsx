import { Section } from "@/components/section";

import {
  ImagesSectionHeader,
  ImagesList,
  ImageItem,
  CoverImage,
  ImageContent,
} from "./styles";

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
    <Section css={{ paddingTop: 0 }}>
      <ImagesSectionHeader>
        <h2 className="max-w-full text-3xl font-semibold leading-tight sm:max-w-[80%] sm:text-4xl">
          {title}
        </h2>
        <p>{description}</p>
      </ImagesSectionHeader>

      <ImagesList>
        {images.map((image) => (
          <ImageItem key={image.url}>
            <CoverImage
              src={image.url}
              alt={image.description}
              width={936}
              height={525}
              quality={100}
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
            />

            <ImageContent>
              <strong className="text-xl sm:text-2xl">{image.title}</strong>
              <p>{image.description}</p>
            </ImageContent>
          </ImageItem>
        ))}
      </ImagesList>
    </Section>
  );
};
