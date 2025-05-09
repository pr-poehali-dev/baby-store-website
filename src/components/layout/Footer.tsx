
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
