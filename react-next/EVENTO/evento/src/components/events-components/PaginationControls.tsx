import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  const paginationButtonStyles = `flex items-center gap-x-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 hover:opacity-100`;

  return (
    <section className="my-auto mt-4 flex min-w-full justify-around lg:min-w-full lg:justify-between">
      {previousPath ? (
        <Link href={previousPath} className={paginationButtonStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={paginationButtonStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
