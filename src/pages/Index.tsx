
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <span className="text-primary">КрохаШоп</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Для новорожденных</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/clothing" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Одежда
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Бодики, человечки, комбинезоны и другая одежда
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/diapers" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Подгузники
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Подгузники, влажные салфетки и средства гигиены
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/feeding" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Кормление
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Бутылочки, соски, стерилизаторы и аксессуары
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/toys" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Игрушки
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Погремушки, мобили, развивающие игрушки
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Для беременных</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/maternity-clothes" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Одежда
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Комфортная одежда для будущих мам
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/maternity-care" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Уход
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Средства для ухода за кожей во время беременности
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Для детей</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/kids-clothing" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Одежда
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Одежда для детей от 1 года и старше
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/category/kids-toys" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Игрушки
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Развивающие игрушки, конструкторы, куклы
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/sale" className="text-sm font-medium hover:underline text-rose-500">
              Акции
            </a>
            <a href="/delivery" className="text-sm font-medium hover:underline">
              Доставка
            </a>
            <a href="/contacts" className="text-sm font-medium hover:underline">
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Поиск">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Избранное">
              <Icon name="Heart" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <Icon name="ShoppingBag" className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Icon name="UserRound" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="relative py-12 lg:py-24 bg-gradient-to-r from-[#FDE1D3] to-[#E5DEFF]">
          <div className="container flex flex-col lg:flex-row items-center gap-8">
            <div className="max-w-2xl space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Всё для счастливого детства <br />и комфортного материнства
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80">
                Товары премиум качества для ваших малышей и будущих мам.<br />
                Бесплатная доставка по Москве от 3000₽.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-[#9b87f5] hover:bg-[#8470e9] text-white">
                  Смотреть каталог
                </Button>
                <Button variant="outline">
                  Специальные предложения
                </Button>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=2825&auto=format&fit=crop"
                alt="Счастливая семья с ребенком"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
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

        {/* Featured products */}
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

        {/* Features section */}
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

        {/* CTA section */}
        <section className="py-10 bg-[#9b87f5] text-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold mb-2">Подпишитесь на наши новости</h3>
                <p>Получайте первыми информацию о скидках и новых товарах</p>
              </div>
              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Введите ваш Email"
                  className="flex-1 rounded-md px-4 py-2 text-black"
                />
                <Button className="bg-white text-[#9b87f5] hover:bg-gray-100">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">КрохаШоп</h4>
              <p className="mb-4">Лучшие товары для ваших малышей с доставкой на дом</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Telegram">
                  <Icon name="Send" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Каталог</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Для новорожденных</a></li>
                <li><a href="#" className="hover:text-white">Для беременных</a></li>
                <li><a href="#" className="hover:text-white">Для детей</a></li>
                <li><a href="#" className="hover:text-white">Игрушки</a></li>
                <li><a href="#" className="hover:text-white">Акции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 mr-2" />
                  г. Москва, ул. Пушкина, д. 10
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  info@krohashop.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 mr-2" />
                  9:00 – 21:00, без выходных
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} КрохаШоп. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper components
const ProductCard = ({ product }: { product: Product }) => {
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

// Sample data
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

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
};

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

export default Index;
