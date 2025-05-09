
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
