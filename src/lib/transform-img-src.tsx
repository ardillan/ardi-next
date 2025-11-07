import { visit } from "unist-util-visit";

interface TransformImgSrcProps {
  id: string;
  imagesDirectory: string;
}

export default function transformImgSrc(options: TransformImgSrcProps) {
  const { id, imagesDirectory } = options;

  return (tree) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => {
        return child.type === "image";
      });

      if (image) {
        const fileName = image.url
          .replace(/^(\.?\/)?content\/memorias\//, "") // elimina "content/memorias/"
          .replace(/^(\.?\/)/, ""); // elimina "./" o "/"
        image.url = `${imagesDirectory}/${id}/${fileName}`;
      }
    });
  };
}
