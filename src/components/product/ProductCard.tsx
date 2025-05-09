
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 left-2 bg-white/80 hover:bg-white text-gray-600 rounded-full"
          aria-label="Добавить в избранное"
        >
          <Icon name="Heart" className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>
        <div className="flex items-end justify-between">
          <div>
            {product.oldPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{product.price} ₽</span>
                <span className="text-sm text-muted-foreground line-through">{product.oldPrice} ₽</span>
              </div>
            ) : (
              <span className="text-lg font-bold">{product.price} ₽</span>
            )}
          </div>
          <Button size="sm" className="bg-[#9b87f5] hover:bg-[#8470e9]">
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
