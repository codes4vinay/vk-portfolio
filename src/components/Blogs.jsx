import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HASHNODE_USERNAME } from "../constants";
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const POSTS_URL = "/hashnode-posts.json";

const fetchHashnodePosts = async ({ limit, signal }) => {
  const res = await fetch(POSTS_URL, { signal });
  if (!res.ok) {
    throw new Error("Failed to load Hashnode posts.");
  }

  const data = await res.json();
  const posts = Array.isArray(data?.posts) ? data.posts : [];

  return posts
    .slice(0, limit)
    .map((node) => ({
      title: node.title,
      link: node.link,
      excerpt: (node.excerpt ?? "").trim().slice(0, 150),
      date: node.publishedAt ? new Date(node.publishedAt) : null,
    }));
};

const Blogs = ({ limit = 4 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        if (!HASHNODE_USERNAME) {
          throw new Error("Hashnode username is missing.");
        }

        const parsed = await fetchHashnodePosts({ limit, signal: controller.signal });
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
  }, [limit]);

  return (
    <section id="blogs" className="relative scroll-mt-28 pb-24">
      <SectionHeading
        eyebrow="TECHNICAL ARTICLES"
        title="Blog Posts & Engineering Notes"
        subtitle="Insights on full stack architecture, DevOps automation, and GenAI applications."
      />

      <div className="mx-auto max-w-5xl">
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="text-sm font-bold font-code text-violet-500 animate-pulse">
              &gt; Syncing latest Hashnode publications...
            </span>
          </div>
        ) : null}

        {error ? (
          <p className="text-center text-xs font-code text-rose-500">{error}</p>
        ) : null}

        {!loading && !error ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group glass-surface glass-card-hover relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 border border-slate-900/10 dark:border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 font-code">
                      <SiHashnode className="text-xs" />
                      {post.date
                        ? post.date.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })
                        : "HASHNODE"}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 font-code">
                      Article
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {post.excerpt}
                    {post.excerpt.length >= 150 ? "…" : ""}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-cyan-400 font-code pt-4 border-t border-slate-900/10 dark:border-white/10">
                  <FaBookOpen className="text-xs" />
                  <span>Read Article</span>
                  <FaExternalLinkAlt className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
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
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/15 bg-white/80 px-6 py-3 text-xs font-bold text-slate-900 backdrop-blur-md transition-all hover:bg-violet-600 hover:text-white dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-cyan-500 dark:hover:text-slate-950 font-code"
          >
            <SiHashnode className="text-sm" />
            <span>Visit Hashnode Blog</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

