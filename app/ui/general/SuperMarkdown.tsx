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

import Iframe from "./Iframe";
import {
  anchor,
  blockquote,
  figCaption,
  heading,
  hr,
  image,
  list,
  paragraph,
  superMarkdown,
} from "./SuperMarkdown.css";
import styles from "./SuperMarkdown.module.css";

export type ISuperMarkdown = {
  markdownContent: string;
};

const SuperMarkdown = ({ markdownContent }: ISuperMarkdown) => {
  return (
    <div className={superMarkdown}>
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
            a: function ({ ...props }) {
              const { children, href } = props;
              return (
                <a href={href} className={anchor}>
                  {children}
                </a>
              );
            },

            h3: ({ ...props }) => {
              const title = props.node?.children[0].valueOf()["value"];
              return <h3 className={heading}>{title}</h3>;
            },
            h2: function ({ ...props }) {
              const title = props.node?.children[0].valueOf()["value"];
              return (
                <h2 className={heading} id={`anchor_${title}`}>
                  <a href={`#anchor_${title}`}>{title}</a>
                </h2>
              );
            },

            p: function ({ ...props }) {
              const { children } = props;

              return <p className={paragraph}>{children}</p>;
            },

            hr: function () {
              return <hr className={hr} />;
            },
            ul: function ({ ...props }) {
              const { children } = props;

              return <ul className={list}>{children}</ul>;
            },
            blockquote: function ({ ...props }) {
              const { children } = props;

              return <blockquote className={blockquote}>{children}</blockquote>;
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
                    className={image}
                    sizes="(max-width: 768px) 100vw"
                  />
                  {props.alt !== null ? (
                    <figcaption className={figCaption}>{props.alt}</figcaption>
                  ) : null}
                </figure>
              );
            },
            iframe: ({ ...props }) => {
              return <Iframe {...props} />;
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
