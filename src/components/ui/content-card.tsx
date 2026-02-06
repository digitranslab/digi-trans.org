/**
 * ContentCard Component
 * 
 * Displays content items for the University learning hub.
 * Shows thumbnail, title, duration, category tag, and description.
 * 
 * Requirements: 13.3
 */

import React from "react";
import { Clock, ExternalLink } from "lucide-react";
import { GlassCard } from "./glass-card";
import type { ContentItem } from "@/data/university";

interface ContentCardProps {
  content: ContentItem;
  className?: string;
}

export function ContentCard({ content, className }: ContentCardProps) {
  const categoryColors: Record<string, string> = {
    tutorials: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "live-demos": "bg-green-500/20 text-green-400 border-green-500/30",
    "tech-talks": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    webinars: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  const categoryLabels: Record<string, string> = {
    tutorials: "Tutorial",
    "live-demos": "Live Demo",
    "tech-talks": "Tech Talk",
    webinars: "Webinar",
  };

  return (
    <a
      href={content.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <GlassCard variant="hover" className="h-full p-0 overflow-hidden">
        {/* Thumbnail placeholder */}
        <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center relative">
          <div className="text-4xl text-purple-400/50">▶</div>
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 rounded text-xs text-white">
            <Clock className="w-3 h-3" />
            {content.duration}
          </div>
        </div>
        
        <div className="p-4">
          {/* Category tag */}
          <span
            className={`inline-block px-2 py-0.5 text-xs rounded-full border mb-2 ${
              categoryColors[content.category]
            }`}
          >
            {categoryLabels[content.category]}
          </span>
          
          {/* Title */}
          <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
            {content.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">
            {content.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </a>
  );
}

export default ContentCard;
