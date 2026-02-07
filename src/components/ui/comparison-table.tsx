/**
 * ComparisonTable Component
 * 
 * Renders competitor comparison data in a table format.
 * Highlights Allama advantages with visual indicators.
 * Applies consistent styling with the design system.
 * 
 * Requirements: 9.7
 */

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonAspect {
  aspect: string;
  allama: string;
  competitor: string;
  advantage: boolean;
}

interface ComparisonTableProps {
  competitor: string;
  aspects: ComparisonAspect[];
  className?: string;
}

export function ComparisonTable({ competitor, aspects, className }: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm h-full min-h-[320px]",
        className
      )}
    >
      {/* Header */}
      <div className="grid grid-cols-3 bg-gray-800/50 border-b border-gray-700">
        <div className="p-4 text-sm font-medium text-gray-400">Aspect</div>
        <div className="p-4 text-sm font-medium text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
            Allama
          </span>
        </div>
        <div className="p-4 text-sm font-medium text-center text-gray-400">
          {competitor}
        </div>
      </div>

      {/* Rows */}
      {aspects.map((item, index) => (
        <div
          key={item.aspect}
          className={cn(
            "grid grid-cols-3 border-b border-gray-800 last:border-b-0",
            index % 2 === 0 ? "bg-gray-900/30" : "bg-transparent"
          )}
        >
          <div className="p-4 text-sm text-gray-300 flex items-center">
            {item.aspect}
          </div>
          <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
            {item.advantage ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : null}
            <span className={cn(
              "font-medium",
              item.advantage ? "text-green-400" : "text-gray-300"
            )}>
              {item.allama}
            </span>
          </div>
          <div className="p-4 text-sm text-center flex items-center justify-center gap-2">
            {!item.advantage ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : null}
            <span className={cn(
              !item.advantage ? "text-green-400" : "text-gray-400"
            )}>
              {item.competitor}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default ComparisonTable;
