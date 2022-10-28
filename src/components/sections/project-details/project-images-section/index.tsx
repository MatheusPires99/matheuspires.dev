import { Heading } from "@/components/heading";
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
        <Heading as="h2">{title}</Heading>
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
              <Heading size={{ "@initial": "md", "@mobile": "sm" }}>
                {image.title}
              </Heading>
              <p>{image.description}</p>
            </ImageContent>
          </ImageItem>
        ))}
      </ImagesList>
    </Section>
  );
};
