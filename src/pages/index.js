import * as React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../layout/default";
import {
  postsListCss,
  postListItemCss,
  postTeaserCss,
  postTeaserTitleCss,
  postTeaserDescriptionCss,
  postTeaserLinkCss,
} from "./index.module.css";

export default function Home({ data }) {
  return (
    <Layout>
      <ul className={postsListCss}>
        {data.allMarkdownRemark.nodes.map((node) => {
          return (
            <li className={postListItemCss}>
              <div className={postTeaserCss}>
                <h2 className={postTeaserTitleCss}>
                  <Link
                    to={`/blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    {node.frontmatter.title}
                  </Link>{" "}
                  (
                  <Link
                    to={`/dsr-blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    DSR
                  </Link>
                  )
                </h2>
                <p className={postTeaserDescriptionCss}>
                  <Link
                    to={`/blog/${node.slug}/`}
                    className={postTeaserLinkCss}
                  >
                    {node.frontmatter.description}
                  </Link>
                </p>
              </div>
            </li>
          );
        })}

        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <Link to={`/products/`} className={postTeaserLinkCss}>
                Products (SSR)
              </Link>
            </h2>
          </div>
        </li>

        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <Link to={`/api/hello-world`} className={postTeaserLinkCss}>
                API route
              </Link>
            </h2>
          </div>
        </li>
        <li className={postListItemCss}>
          <div className={postTeaserCss}>
            <h2 className={postTeaserTitleCss}>
              <Link to={`/___graphql`} className={postTeaserLinkCss}>
                GraphiQL
              </Link>
            </h2>
          </div>
        </li>
      </ul>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        slug
      }
    }
  }
`;
