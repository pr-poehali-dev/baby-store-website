
import Icon from "@/components/ui/icon";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: 'Качественные товары',
    description: 'Мы тщательно отбираем каждый товар в нашем магазине',
    icon: 'Star',
  },
  {
    title: 'Быстрая доставка',
    description: 'Доставим заказ в удобное для вас время',
    icon: 'Truck',
  },
  {
    title: 'Безопасная оплата',
    description: 'Принимаем различные способы оплаты',
    icon: 'ShieldCheck',
  },
  {
    title: 'Поддержка 24/7',
    description: 'Наши консультанты всегда готовы помочь',
    icon: 'HeadphonesIcon',
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                  <Icon name={feature.icon} className="h-8 w-8 text-[#9b87f5]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
