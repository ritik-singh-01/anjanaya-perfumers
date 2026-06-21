import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "discount" | "new" | "bestseller" | "soldout";
  className?: string;
}

export default function Badge({ children, variant = "discount", className }: BadgeProps) {
  const variants = {
    discount: "bg-primary text-on-primary",
    new: "bg-tertiary text-on-tertiary",
    bestseller: "bg-secondary-container text-on-secondary-container",
    soldout: "bg-error text-on-error",
  };

  return (
    <span
      className={cn(
        "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
