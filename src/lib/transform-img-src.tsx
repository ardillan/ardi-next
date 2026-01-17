import { visit } from "unist-util-visit";

interface TransformImgSrcProps {
  id: string;
  imagesDirectory: string; // should be a path inside 'public', e.g., '/memorias'
}

export default function transformImgSrc(options: TransformImgSrcProps) {
  const { id, imagesDirectory } = options;

  return (tree) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");

      if (image) {
        const fileName = image.url
          .replace(/^(\.?\/)?content\/memorias\//, "")
          .replace(/^(\.?\/)/, "");
        image.url = `${imagesDirectory}/${id}/${fileName}`;
      }
    });
  };
}
