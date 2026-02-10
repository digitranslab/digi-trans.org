import React from "react";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "./lazy-image";
import { motion } from "framer-motion";

// Define the ContentItem type for the component
export type ContentItemType = string;

export interface ContentItem {
  title: string;
  description: string;
  image: string;
  url: string;
  type: ContentItemType;
}

interface RelatedContentProps {
  items: ContentItem[];
  title?: string;
  description?: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({
  items,
  title = "Related Content",
  description = "You might also be interested in these related topics and services.",
}) => {
  return (
    <div className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={item.url}>
                <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-[0_5px_30px_rgba(124,58,237,0.15)] hover:translate-y-[-5px]">
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{item.description}</p>
                    <div className="flex items-center text-purple-500 font-medium mt-auto">
                      <span>Read more</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
