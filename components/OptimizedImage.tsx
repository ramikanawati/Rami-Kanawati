import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "loading"> {
  loading?: "lazy" | "eager";
}

export function OptimizedImage({
  loading = "lazy",
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      loading={loading}
      {...props}
    />
  );
}
