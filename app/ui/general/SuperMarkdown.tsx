/* eslint-disable react/prop-types */
// TODO: Look how to type Markdown props
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";
import rehypeRaw from "rehype-raw";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGfm from "remark-gfm";

export type ISuperMarkdown = {
  markdownContent: string;
};

const SuperMarkdown = ({ markdownContent }: ISuperMarkdown) => {
  return (
    <Markdown
      rehypePlugins={[rehypeUnwrapImages, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        code: function ({ ...props }) {
          const { children, className, ...rest } = props;

          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={theme}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest}>{children}</code>
          );
        },
        h2: function ({ ...props }) {
          const title = props.node?.children[0].valueOf()["value"];
          return (
            <h2 id={`anchor_${title}`}>
              <a href={`#anchor_${title}`}>{title}</a>
            </h2>
          );
        },
        img: function ({ ...props }) {
          if (!props.src || typeof props.src !== "string") return;

          return (
            <figure>
              <Image
                src={props.src}
                alt={props.alt ?? ""}
                title={props.alt}
                width={900}
                height={900}
                sizes="(max-width: 768px) 100vw"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  position: "relative",
                }}
              />
              {props.alt !== null ? <figcaption>{props.alt}</figcaption> : null}
            </figure>
          );
        },
      }}
    >
      {markdownContent}
    </Markdown>
  );
};

export default SuperMarkdown;
