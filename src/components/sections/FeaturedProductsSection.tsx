
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: 'Комбинезон детский "Мишутка" (0-3 мес)',
    category: 'Одежда',
    price: 1990,
    oldPrice: 2490,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1619784299133-57ce85a7c5ad?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Развивающий коврик "Джунгли"',
    category: 'Игрушки',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1584879787525-62933ddd198b?q=80&w=2036&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Подгузники Premium (3-6 кг), 96 шт',
    category: 'Гигиена',
    price: 1690,
    oldPrice: 1990,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1597525321409-23e2a402a7f0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Платье для беременных "Комфорт"',
    category: 'Для беременных',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=1935&auto=format&fit=crop',
  }
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Button variant="link" className="font-medium text-[#9b87f5]">
            Смотреть все
            <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
