/* eslint-disable react/prop-types */
// TODO: Look how to type Markdown props
import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";
import rehypeRaw from "rehype-raw";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGfm from "remark-gfm";

import CustomImage from "./CustomImage";
import Iframe from "./Iframe";
import styles from "./SuperMarkdown.module.css";
export type ISuperMarkdown = {
  markdownContent: string;
};

const SuperMarkdown = ({ markdownContent }: ISuperMarkdown) => {
  return (
    <div>
      <div className={styles.markdownContent}>
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

            h3: function ({ ...props }) {
              const title = props.node?.children[0].valueOf()["value"];
              return (
                <h3 id={`anchor_${title}`}>
                  <a href={`#anchor_${title}`}>{title}</a>
                </h3>
              );
            },

            img: function ({ ...props }) {
              if (!props.src || typeof props.src !== "string") return;
              return (
                <CustomImage src={props.src} alt={props.alt ?? "Imagen"} />
              );
            },
            iframe: ({ ...props }) => {
              const { src } = props;
              if (!src) return;

              return <Iframe src={src} {...props} />;
            },
          }}
        >
          {markdownContent}
        </Markdown>
      </div>
    </div>
  );
};

export default SuperMarkdown;
