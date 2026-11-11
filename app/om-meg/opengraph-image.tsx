import { OG_SIZE, renderDefaultShareImage } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderDefaultShareImage();
}
