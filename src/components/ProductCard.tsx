import { motion } from 'motion/react';
import { Product } from '../constants';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  key?: string | number;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
    >
      <div className="aspect-[4/5] overflow-hidden bg-current/5 relative mb-3">
        <motion.img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      
      <div className="space-y-1">
        <p className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">{product.category}</p>
        <h3 className="font-bold text-xs uppercase tracking-wider group-hover:accent-text transition-colors">
          {product.name}
        </h3>
      </div>
    </motion.div>
  );
}
