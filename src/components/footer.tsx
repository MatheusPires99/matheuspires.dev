import { IconButton } from "@/components/icon-button";
import { Icons } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="container flex flex-col items-center py-14 !pt-0 sm:py-26">
      <div className="flex items-center gap-10">
        <strong className="text-lg">© Matheus Pires 2022</strong>
        <div className="flex items-center">
          <IconButton aria-label="LinkedIn" asChild>
            <a
              href="https://www.linkedin.com/in/matheus-pires-521271180/"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Linkedin />
            </a>
          </IconButton>
          <IconButton aria-label="GitHub" asChild>
            <a
              href="https://github.com/MatheusPires99"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Github />
            </a>
          </IconButton>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-accent-text">Designed by</span>{" "}
        <a
          href="https://www.linkedin.com/in/gabriela-rezende-61a7881ba/"
          target="_blank"
          rel="noreferrer"
          className="relative font-semibold text-text-contrast hover:before:absolute hover:before:bottom-0 hover:before:h-px hover:before:w-full hover:before:bg-text-contrast"
        >
          Gabriela Rezende
        </a>
      </div>
    </footer>
  );
};
