
import Icon from "@/components/ui/icon";

type Category = {
  name: string;
  icon: string;
};

const categories: Category[] = [
  { name: 'Одежда', icon: 'Shirt' },
  { name: 'Подгузники', icon: 'Baby' },
  { name: 'Игрушки', icon: 'Rocket' },
  { name: 'Коляски', icon: 'BabyCarriage' },
  { name: 'Питание', icon: 'Utensils' },
  { name: 'Уход', icon: 'Sparkles' },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center group">
              <div className="w-full aspect-square rounded-full flex items-center justify-center bg-[#C5E8D3]/30 mb-4 group-hover:bg-[#C5E8D3]/60 transition-colors">
                <Icon name={category.icon} className="h-10 w-10 text-[#9b87f5]" />
              </div>
              <span className="text-center font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
