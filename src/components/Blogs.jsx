import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { HASHNODE_USERNAME } from "../constants";
import { FiBookOpen, FiArrowUpRight, FiClock, FiChevronDown } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";

const POSTS_URL = "/hashnode-posts.json";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(POSTS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data?.posts) {
          setPosts(data.posts);
        }
      })
      .catch((err) => {
        console.error("Failed to load blog posts:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blogs" className="relative scroll-mt-24 pb-20">
      <SectionHeading
        eyebrow="PUBLICATIONS & WRITING"
        title="Engineering Articles"
        subtitle="Deep dives on backend architecture, request lifecycles, and applied generative AI systems."
      />

      <div className="mx-auto max-w-4xl">
        {loading ? (
          <div className="text-center text-sm text-slate-500 py-12">
            Loading articles...
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              {posts.map((post, index) => {
                const isHiddenOnMobile = !expanded && index > 0;
                return (
                  <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`group glass-panel interactive-card flex-col justify-between rounded-2xl p-6 transition-all ${
                      isHiddenOnMobile ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                        <span className="flex items-center gap-1.5 font-code">
                          <FiClock className="text-slate-500 dark:text-slate-400" />
                          5 min read
                        </span>
                        <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400">
                          <SiHashnode className="text-xs" />
                          Hashnode
                        </span>
                      </div>

                      <h3 className="mt-3.5 text-base sm:text-lg font-extrabold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
                      <span>Read Article</span>
                      <FiArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile Progressive Disclosure Toggle */}
            {posts.length > 1 && (
              <div className="sm:hidden mt-5 text-center">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <span>
                    {expanded
                      ? "Show Latest Article Only"
                      : `Show All Articles (${posts.length - 1} more)`}
                  </span>
                  <FiChevronDown
                    className={`text-sm text-indigo-600 dark:text-indigo-400 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://${HASHNODE_USERNAME}.hashnode.dev`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 shadow-2xs transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            <SiHashnode className="text-blue-500" />
            <span>Read all posts on Hashnode</span>
            <FiArrowUpRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
