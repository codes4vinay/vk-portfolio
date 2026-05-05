import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HASHNODE_USERNAME } from "../constants";

const HASHNODE_GQL_URL = "https://gql.hashnode.com/";

const fetchHashnodePosts = async ({ host, limit, signal }) => {
  const query = `
    query PublicationPosts($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              title
              brief
              url
              publishedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_GQL_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { host, first: limit },
    }),
    signal,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Hashnode posts.");
  }

  const data = await res.json();
  const edges = data?.data?.publication?.posts?.edges ?? [];

  return edges
    .map((edge) => edge?.node)
    .filter(Boolean)
    .map((node) => ({
      title: node.title,
      link: node.url,
      excerpt: (node.brief ?? "").trim().slice(0, 150),
      date: node.publishedAt ? new Date(node.publishedAt) : null,
    }));
};

const Blogs = ({ limit = 4 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const host = useMemo(() => {
    if (!HASHNODE_USERNAME) return "";
    return `${HASHNODE_USERNAME}.hashnode.dev`;
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        if (!host) {
          throw new Error("Hashnode username is missing.");
        }

        const parsed = await fetchHashnodePosts({
          host,
          limit,
          signal: controller.signal,
        });
        setPosts(parsed);
      } catch (e) {
        if (controller.signal.aborted) return;
        setError("Blogs are unavailable right now.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    load();
    return () => {
      controller.abort();
    };
  }, [host, limit]);

  return (
    <section id="blogs" className="scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="WRITING"
        title="Latest blog posts"
        subtitle="Notes on MERN, DevOps, and GenAI experiments."
      />

      <div className="mx-auto max-w-5xl">
        {loading ? (
          <p className="text-center text-sm text-stone-600 dark:text-stone-400">
            Loading posts...
          </p>
        ) : null}

        {error ? (
          <p className="text-center text-sm text-rose-400">{error}</p>
        ) : null}

        {!loading && !error ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 340, damping: 24 },
                }}
                whileTap={{ scale: 0.99 }}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_55%)]" />
                </div>

                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.18em] text-stone-500 dark:text-stone-400">
                    {post.date
                      ? post.date.toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })
                      : "HASHNODE"}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-stone-950 dark:text-stone-100">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {post.excerpt}
                    {post.excerpt.length >= 150 ? "…" : ""}
                  </p>
                  <p className="mt-5 text-sm font-medium text-stone-900 dark:text-stone-200">
                    Read article →
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <a
            href={`https://${HASHNODE_USERNAME}.hashnode.dev/`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-black/10 dark:border-white/15 dark:bg-black/20 dark:text-stone-100 dark:hover:bg-white/10"
          >
            View all posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
