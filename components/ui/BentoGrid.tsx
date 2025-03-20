import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: " rgb(2,0,36)",
        backgroundColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,30,156,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 p-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">{description}</div>
      </div>
    </div>
  );
};
