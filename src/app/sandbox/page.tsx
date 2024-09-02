"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { categories } from "@/data/category";
import { trees } from "@/data/tree";

export default function Sandbox() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container">
      <div className="my-8 flex gap-1">
        <Badge
          variant={selectedCategory === 0 ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => handleSelectCategory(0)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={
              selectedCategory === category.id
                ? (category.color as BadgeProps["variant"])
                : "outline"
            }
            className="cursor-pointer"
            onClick={() => handleSelectCategory(category.id)}
          >
            {category.title}
          </Badge>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-12 mb-8">
        <AnimatePresence mode="popLayout">
          {trees
            .filter((tree) =>
              selectedCategory !== 0
                ? selectedCategory === tree.category.id
                : true
            )
            .map((tree) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={tree.title}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <Link href={`/${tree.slug}`}>
                  <div className="h-full group card relative p-8 pt-[52px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-white border-2 border-gray-900 rounded-lg transition-all duration-300 ease-out cursor-pointer">
                    <div className="absolute top-4 right-4 flex gap-2 items-center">
                      <BookmarkIcon
                        width={18}
                        height={18}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                      <Badge
                        variant={tree.category.color as BadgeProps["variant"]}
                      >
                        {tree.category.title}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-6 justify-between h-full">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-oswald font-extrabold">
                          {tree.title}
                        </h3>
                        <div>{tree.description}</div>
                      </div>
                      <div className="card-hover:animate-slide-right">
                        <ArrowRightIcon width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
